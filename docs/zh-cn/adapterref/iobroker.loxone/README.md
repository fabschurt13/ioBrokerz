---
translatedFrom: en
translatedWarning: 如果您想编辑此文档，请删除“translatedFrom”字段，否则此文档将再次自动翻译
editLink: https://github.com/ioBroker/ioBroker.docs/edit/master/docs/zh-cn/adapterref/iobroker.loxone/README.md
title: ioBroker.loxone
hash: 8fE4m8tPLb1oVSWM01sOObUj31hSSnV2f20hSlYJKg8=
---
![商标](../../../en/adapterref/iobroker.loxone/admin/loxone.png)

![NPM版本](http://img.shields.io/npm/v/iobroker.loxone.svg)
![资料下载](https://img.shields.io/npm/dm/iobroker.loxone.svg)
![安装数量（最新）](http://iobroker.live/badges/loxone-installed.svg)
![安装数量（稳定）](http://iobroker.live/badges/loxone-stable.svg)
![依赖状态](https://img.shields.io/david/UncleSamSwiss/iobroker.loxone.svg)
![NPM](https://nodei.co/npm/iobroker.loxone.png?downloads=true)

＃ioBroker.loxone
[![翻译状态]（https://weblate.iobroker.net/widgets/adapters/-/loxone/svg-badge.svg）](https://weblate.iobroker.net/engage/adapters/?utm_source=widget)

**测试：**![测试与发布](https://github.com/UncleSamSwiss/ioBroker.loxone/workflows/Test%20and%20Release/badge.svg)

## IoBroker的loxone适配器
** _此适配器至少需要nodejs 10.x！_ **

获取Loxone Miniserver（和Loxone Miniserver Go）中的所有可用信息，并提供实时更改。

**此适配器使用Sentry库自动向开发人员报告异常和代码错误。**有关更多详细信息以及如何禁用错误报告的信息，请参见[哨兵插件文档](https://github.com/ioBroker/plugin-sentry#plugin-sentry)！ Sentry报告从js-controller 3.0开始使用。

＃＃ 安装
通过ioBroker Admin安装此适配器：

1.打开实例配置对话框
2.输入您的Loxone Miniserver的IP地址或主机名和HTTP端口（默认为80）
3.在Loxone小型服务器（使用Loxone Config应用程序）中创建一个新用户，您仅对该用户授予所有必需变量的读写权限。
4.在配置对话框中输入该用户的名称及其密码
5.保存配置
6.启动适配器

＃＃ 配置
###小型服务器主机名/ IP
这是您的Loxone Miniserver或Miniserver Go的IP地址或主机名。

### Miniserver端口
这是您的Loxone Miniserver的HTTP端口。

默认情况下，Miniserver配置为侦听端口80，但是您可能已对其进行了更改。

### Miniserver用户名
提供有效的用户名以访问Loxone Miniserver。

出于安全原因，强烈建议使用不同于“ admin”的用户。

用户只需要对要从ioBroker使用的变量进行读取访问。

### Miniserver密码
提供给定用户名的密码（请参见上文）。

###同步名称
每当Loxone配置中的名称更改时，这都会更新ioBroker中的名称。
如果禁用此功能，则仅在第一次检测到控件时才同步名称。

###同步房间
这将用Loxone Miniserver提供的所有房间填充enum.rooms枚举，并将链接所有控件。

###同步功能
这将使用Loxone Miniserver提供的所有类别填充enum.functions枚举，并将链接所有控件。

###天气服务器
选择您要同步的天气数据：

-“不同步天气数据”将不同步与Weather Server相关的任何内容
-“仅同步当前天气”将同步“实际”下的数据
-“同步24小时天气预报”将同步当前天气和24小时天气预报
-“同步整个天气预报”将同步当前天气和整个天气预报（96小时）

＃＃ 状态
适配器自动连接到已配置的Loxone Miniserver，并为其找到的每个控制状态创建状态。

状态的ID格式如下：`loxone.<instance>.<control>.<state>`

-`<instance>`是ioBroker适配器实例索引（通常为“ 0”）
-`<control>`是控件的UUID
-<state>是控件中的状态（有关更多信息，请参见[Supported Control Types]（＃supported-control-types））。

在Loxone Config中配置控件时提供的名称仅在ioBroker中用作其显示名称。
这是因为用户可以为多个控件选择相同的名称。

有关控件及其状态的更多信息，请查看Loxone API（尤其是结构文件）：https://www.loxone.com/enen/kb/api/

##控制可见性
默认情况下，Loxone Miniserver从Web界面隐藏了许多控件（因此也隐藏了它们的状态）。

这意味着它们也从此ioBroker适配器中隐藏。

###在用户界面中使用
为确保将所有状态正确报告给ioBroker，请确认已选中“用户界面”部分中的“使用”：

![在用户界面设置中使用](../../../en/adapterref/iobroker.loxone/doc/loxone-config-use-in-visualization.png)

###显示诊断输入
要查看诊断输入（例如Air设备的电池状态），请确认设备已选中“显示诊断输入”：

![显示诊断输入设置](../../../en/adapterref/iobroker.loxone/doc/loxone-config-display-diagnostics.png)

##全球国家
此适配器当前提供以下全局状态：

-`operatingMode`：Loxone Miniserver的当前操作模式号
-`operatingMode-text`：Loxone Miniserver的当前操作模式为文本
-`sunrise`：今天午夜之后的分钟数，即今天的太阳升起
-`sunset`：今天午夜十二点后的分钟数
-`notifications`：通知数
-`modifications'：修改次数
-所有其他全球州仅以文本形式报告

##支持的控件类型
该适配器当前支持以下控件类型。

在状态名称的后面，您可以看到状态的类型：

-`（rw）`：可读可写：可以从ioBroker更改此状态
-`（ro）`：只读：无法从ioBroker更改此状态
-`（wo）`：仅写：此适配器未报告此状态的值，但可以更改此值，从而触发Loxone小型服务器上的某些操作

### AalSmartAlarm
由AAL智能警报控件提供。

-`alarmLevel`（ro）当前警报级别的ID
    -0 =无警报
    -1 =立即报警
    -2 =延迟警报
-`alarmCause`（ro）一个字符串，代表引起警报的最后原因
-`isLocked`（ro）复位有效，输入将被忽略，因此不会执行任何警报
-`isLeaveActive`（ro）设置离开输入，不执行任何警报
-`disableEndTime`（ro）禁用控件的结束时间
-`confirm`（wo）确认挂起的警报
-`disable`（wo）在一段时间内禁用控制，将不会执行任何警报。将其设置为0将重新启用智能警报
-`startDrill`（wo）执行测试警报

### AalEmergency
由AAL智能紧急按钮控件提供。

-`status`（ro）当前状态的ID
    -0 =运行，正常运行，等待紧急按钮按下
    -1 =触发警报
    -2 =确认配置中的复位输入，控制已关闭
    -3 =应用已暂时禁用控制
-`disableEndTime`（ro）禁用控件的结束时间
-具有有效的复位输入的`resetActive`（ro）文本状态（如果控件处于复位状态）
-`trigger`（wo）从应用触发警报
-`quit`（wo）退出活动警报
-`disable`（wo）禁用给定时间（以秒为单位）的控件。设置为0可以再次启动控制（如果已禁用）

＃＃＃ 警报
由防盗报警器提供。

-警报的“布防”（rw）布尔状态（真/假）；将“ true”写入该值将立即打开警报（没有预定义的延迟）
-`nextLevel`（ro）下一个警报级别的ID
    -1 =静音
    -2 = Acustic
    -3 =光学
    -4 =内部
    -5 =外部
    -6 =远程
-`nextLevelDelay`（ro）下一级别的延迟，以秒为单位
-`nextLevelDelayTotal`（ro）以秒为单位的下一级别的总延迟
-`level`（ro）当前警报级别的ID
    -1 =静音
    -2 = Acustic
    -3 =光学
    -4 =内部
    -5 =外部
    -6 =远程
-`startTime`（ro）警报开始时的时间戳
-`armedDelay`（ro）警报控件被设防的延迟
-`armedDelayTotal`（ro）警报控件被设防的总延迟
-`sensors`（ro）传感器列表
-`disabledMove`（rw）运动被禁用（true）或不是（false）
-`delayedOn`（wo）向此状态写入任何值将使警报具有已配置的延迟
-`quit`（wo）向该状态写入任何值可确认警报

###中央警报
由中央汉堡包警报控制提供。

-警报的“布防”（rw）布尔状态（真/假）；将“ true”写入该值将立即打开警报（没有预定义的延迟）
-`delayedOn`（wo）向此状态写入任何值将使警报具有已配置的延迟
-`quit`（wo）向该状态写入任何值可确认警报

### AlarmClock
由闹钟提供。

-`isEnabled`（rw）闹钟的布尔状态（真/假）
-`isAlarmActive`（ro）布尔值（true / false）警报当前是否响起
-`confirmationNeeded`（ro）布尔值（true / false）用户是否需要确认警报
-`ringingTime`（ro）倒数秒，以秒为单位，闹钟将一直响起，直到再次小睡
-`ringDuration`（rw）持续时间（以秒为单位）
-`prepareDuration`（rw）准备时间，以秒为单位
-`snoozeTime`（ro）秒，直到小睡结束
-`snoozeDuration`（rw）持续时间，以秒为单位
-`snooze`（wo）向此状态写入任何值都会延缓当前警报
-`dismiss`（wo）向该状态写入任何值均会关闭当前警报

### AudioZone
由“音乐服务器区域”提供。

-音乐服务器的`serverState`（ro）状态：
    --3 =未知/无效区域
    --2 =无法到达
    --1 =未知
    -0 =离线
    -1 =初始化（正在启动，尝试访问它）
    -2 =在线
-`playState`（rw）播放状态：
    --1 =未知（无法设置此值）
    -0 =停止（设置此值将暂停播放）
    -1 =暂停（设置此值将暂停播放）
    -2 =播放（设置此值将开始/继续播放）
-客户端的`clientState`（ro）状态：
    -0 =离线
    -1 =初始化（正在启动，尝试访问它）
    -2 =在线
-`power`（rw）客户端电源是否处于活动状态
-`volume`（rw）当前音量
-可以为`maxVolume`（ro）区域分配最大音量
-`shuffle`（rw）是否启用播放列表随机播放
-`sourceList`（ro）包含所有区域收藏夹的列表
-`repeat`（rw）重复模式：
    --1 =未知
    -0 =关闭
    -1 =全部重复
    -2 =-未使用-
    -3 =重复当前项目
-`songName`（ro）歌曲名称
-`duration`（ro）整首曲目的长度，如果未知，则为-1（流）
-`progress`（rw）当前曲目位置
-`album`（ro）专辑名称
-`artist`（ro）艺术家名称
-`station`（ro）站名
-`genre`（ro）流派名称
-`cover`（ro）歌曲/专辑封面图片网址
-`source`（rw）当前选择的源标识符（请参见上面的`sourceList`）
-`prev`（wo）向此状态写入任何值将移至上一个音轨
-`next`（wo）向该状态写入任何值将移至下一个音轨

###中央音响
由中央音乐服务器提供。

-`control`（wo）设置所有玩家的比赛状态（“ true” =比赛，“ false” =暂停）

＃＃＃ 颜色选择器
该设备仅出现在LightController内部。

-颜色选择器的`red`（rw）红色值
-`color`（rw）颜色选择器的绿色值
-拾色器的`blue`（rw）蓝色值

从ioBroker设置上述状态中的一个或多个只会在大约100毫秒后将命令发送到Miniserver。
这是为了防止单个用户输入的颜色多次更改。

### Colorpicker V2
此设备仅出现在Loxone软件版本9和更高版本的Light Controller V2内部。

-颜色选择器的`red`（rw）红色值
-`color`（rw）颜色选择器的绿色值
-拾色器的`blue`（rw）蓝色值

从ioBroker设置上述状态中的一个或多个只会在大约100毫秒后将命令发送到Miniserver。
这是为了防止单个用户输入的颜色多次更改。

###调光器
由调光器提供。

-调光器的“位置”（rw）当前位置
-`min`（ro）当前最小值
-`max`（ro）当前最大值
-`step`（ro）当前步进值
-`on`（wo）将任何值写入此状态会将调光器设置为最后一个已知位置
-`off`（wo）将任何值写入此状态将禁用调光器，将位置设置为0，但会记住最后一个位置

### EIBDimmer
由EIB / KNX调光器提供。

-调光器的“位置”（rw）当前位置
-`on`（wo）将任何值写入此状态会将调光器设置为最后一个已知位置
-`off`（wo）将任何值写入此状态将禁用调光器，将位置设置为0，但会记住最后一个位置

＃＃＃ 门
由门控提供。

-`position`（ro）位置从1 =向上0 =向下
-`active`（rw）闸门运动的当前方向
    --1 =关闭
    -0 =不移动
    -1 =打开
-`preventOpen`（ro）是否阻止门打开
-`preventClose`（ro）是否防止门关闭

###中央门
由中央门控提供。

-`open`（wo）打开所有大门
-`close`（wo）关闭所有门
-`stop`（wo）停止所有门电机

### InfoOnlyDigital
由虚拟状态以及Loxone Touch开关提供。

-控件的`active`（ro）布尔状态（true / false）
-`active-text`（ro）（如果已配置），相当于状态的文本
-`active-image`（ro），如果已配置，则相当于状态的图像
-`active-color`（ro）（如果已配置），则该颜色等于状态

![InfoOnlyDigital设置](../../../en/adapterref/iobroker.loxone/doc/loxone-config-info-only-digital.png)

### InfoOnlyAnalog
由虚拟状态以及Loxone Touch开关提供。

-`value`（ro）控件的状态值（数字）
-`value-formatted`（ro）（如果已配置），状态的格式化值（使用Loxone Config中的“ Unit”格式）

###对讲机
由门控制器提供。

-`bell`（ro）响铃是否在响
-`lastBellEvents`（ro）数组，其中包含未应答的每个响铃活动的时间戳
-`version`（ro）仅Loxone对讲机-包含当前已安装固件的文本

    版本

-`answer`（wo）向该状态写入任何值将使响铃停止

这种类型的频道可能包含其他设备。有关更多信息，请参见相应的章节。

###智能房间控制器V2
自Miniserver 10.0起由智能房间控制器V2提供。

待办事项：当前缺少文档

###百叶窗帘
由不同种类的百叶窗提供（自动和手动）。

-`up`（rw）百叶窗是否向上移动
-`down`（rw）百叶窗是否向下移动
-百叶窗的“位置”（ro）位置，从0到1的数字
    -百叶窗较高位置= 0
    -百叶窗下限= 1
-百叶窗（百叶窗）的`shadePosition`（ro）阴影位置，从0到1的数字
    -百叶窗没有阴影= 0
    -遮光帘= 1
-`safetyActive`（ro）仅由具有自动驾驶仪的人使用，表示安全关闭
-`autoAllowed`（ro）仅由具有自动驾驶仪的人使用
-`autoActive`（rw）仅由具有自动驾驶仪的人使用
-只有通过自动驾驶仪被锁定的（ro）（ro），这代表Loxone Config中的输出QI
-`infoText`（ro）通知例如导致锁定状态的原因，或者导致安全性起作用的原因。
-`fullUp`（wo）将任何值写入此状态都会触发完整运动
-`fullDown`（wo）向该状态写入任何值会触发完全向下运动
-`shade`（wo）在此状态下写入任何值会将百叶窗阴影调整到最佳位置

###中央百叶窗帘
由中央百叶窗提供控制。

-`autoActive`（rw）仅由具有自动驾驶仪的人使用
-`fullUp`（wo）将任何值写入此状态都会触发完整运动
-`fullDown`（wo）向该状态写入任何值会触发完全向下运动
-`shade`（wo）将此状态的所有值写入所有百叶窗的阴影至完美位置

###灯光控制器
由（酒店）照明控制器提供。
只能在Loxone应用程序中修改场景，但可以在ioBroker中选择场景。

-`activeScene`（rw）当前活动场景号
    -0：全部关闭
    -1..8：用户定义的场景（场景的定义/学习必须使用Loxone工具进行）
    -9：全部
-`sceneList`（ro）所有场景的列表
-加号（wo）切换到下一个场景
-`减号（wo）更改为上一个场景

这种类型的频道可能包含其他设备。有关更多信息，请参见相应的章节。

###灯光控制器V2
由Loxone软件版本9和更高版本中的（酒店）照明控制器提供。
情绪只能在Loxone应用程序中进行修改，但可以在ioBroker中进行选择和组合。

-`moodList`（ro）所有已配置心情名称的列表
-`activeMoods`（rw）当前活动状态名称列表
-`favoriteMoods`（ro）最喜欢的心情名称列表
-`additionalMoods`（ro）不喜欢的心情名称列表
-加号（wo）更改为下一个心情
-“减号”（wo）更改为以前的心情

这种类型的频道可能包含其他设备。有关更多信息，请参见相应的章节。

###中央照明控制器
由中央照明控制器提供。

-`control`（wo）打开或关闭所有灯

###邮箱
由Paketsafe Air / Tree提供。

-`notificationsDisabledInput`（ro）通知禁用输入的状态
-`packetReceived`（ro）表示是否接收到一个包
-`mailReceived`（ro）表示是否收到邮件
-`disableEndTime`（ro）时间戳，直到禁用通知
-`confirmPacket`（wo）确认收到数据包
-`confirmMail`（wo）确认收到邮件
-`disableNotifications`（wo）禁用x秒钟的通知； 0秒取消计时器

＃＃＃ 仪表
由公用事业仪表提供。

-`actual`（ro）实际值（数字）
-`actual-formatted`（ro）（如果已配置），则是状态的格式化后的实际值（使用Loxone Config中的“ Unit”格式）
-`total`（ro）总值（数字）
-`total-formatted`（ro）（如果已配置），是状态的格式化总值（使用Loxone Config中的“ Unit”格式）
-`reset`（wo）将任何值写入此状态将重置总值

###存在检测器
由存在检测器提供。

-活动（ro）存在状态
-`locked（ro）锁定状态
-`events`（ro）事件数
-`infoText`（ro）存在检测器被锁定的原因

###按钮
由虚拟按钮输入提供。

-`active`（rw）按钮的当前状态
-`pulse`（wo）将任何值写入此状态将模拟仅在很短时间内按下按钮

###滑块
由模拟虚拟输入提供。

-`value`（rw）滑块的当前值
-`value-formatted`（ro）（如果已配置），状态的格式化值（使用Loxone Config中的“ Unit”格式）
-`error`（ro）表示滑块的值无效

### SmokeAlarm
由公用事业仪表提供。

-`nextLevel`（ro）下一个警报级别的ID
    -1 =静音
    -2 = Acustic
    -3 =光学
    -4 =内部
    -5 =外部
    -6 =远程
-`nextLevelDelay`（ro）下一级别的延迟，以秒为单位
-`nextLevelDelayTotal`（ro）下一级别的总延迟，以秒为单位
-`level`（ro）当前警报级别的ID
    -1 =静音
    -2 = Acustic
    -3 =光学
    -4 =内部
    -5 =外部
    -6 =远程
-`sensors`（ro）传感器列表
-声音警报的“ acousticAlarm”（ro）状态为false（表示未激活）和true（激活）
-`testAlarm`（ro）testalarm是否处于活动状态
-`alarmCause`（ro）警报原因：
    -1 =仅烟雾探测器
    -2 =仅水
    -3 =烟和水
    -4 =仅温度
    -5 =火和温度
    -6 =温度和水
    -7 =火，温度和水
-警报启动时的`startTime`（RO）时间戳
-`timeServiceMode`（rw）延迟直到禁用服务模式
-`mute`（wo）向该状态写入任何值会使警笛静音
-`quit`（wo）向该状态写入任何值可确认烟雾警报

＃＃＃ 转变
由虚拟输入开关提供。

-`active`（rw）开关的当前状态

###文字状态
由“状态”提供。

-`textAndIcon`（ro）状态的当前值

### TimedSwitch
由楼梯间和多功能开关提供。

-`deactivationDelayTotal`（ro）秒，如果使用计时器，输出将被激活多长时间
-`deactivationDelay`（ro）倒计时直到输出被停用
    -0 =输出关闭
    --1 =输出永久打开
    -否则它将从deactivationDelayTotal倒数
-“ on”（输入）将任何值写入此状态将使开关永久不中断激活
-`off`（wo）将任何值写入此状态将禁用该开关
-`pulse`（wo）脉冲开关：
    -deactivationDelay = 0
        -将开始倒计时，从deactivationDelayTotal到0
    -如果这是楼梯间开关：
        -deactivationDelay = -1
            -无效，将永久保留。
        -停用延迟> 0
            -重新开始倒计时
    -如果是多功能开关
        -将其关闭（从倒计时或永久开启状态开始）

###追踪器
由楼梯间和多功能开关提供。

-小型服务器返回的条目的条目列表（ro）

### UpDownAnalog
由虚拟输入提供（上下按钮）。

-`value`（rw）输入的当前值
-`value-formatted`（ro）（如果已配置），状态的格式化值（使用Loxone Config中的“ Unit”格式）
-`error`（ro）表示滑块的值无效

### ValueSelector
值选择。

-`value`（rw）当前值
-`min`（ro）当前最小值
-`max`（ro）当前最大值
-`step`（ro）当前步进值

### WindowMonitor
由公用事业仪表提供。

-`numOpen`（ro）打开的门和窗的数量
-`numClosed`（ro）关闭的门窗数量
-`numTilted`（ro）倾斜的门窗数量
-`numOffline`（ro）不可用的门窗数量
-`numLocked`（ro）锁定的门窗数量
-`numUnlocked`（ro）解锁门窗的数量

来自所有这些状态的值的总和等于监视的门窗的数量。具有两种状态的窗户/门将始终计为“最差”状态。

对于每个监视的门窗，将有一个带有索引的设备作为其ID和给定名称。它们具有以下状态：

-`closed`（ro）窗户/门是关闭的
-倾斜的（ro）窗户/门是倾斜的
-`open`（ro）窗户/门是打开的
-`locked`（ro）窗户/门被锁定
-`unlocked`（ro）窗户/门未锁定

##天气服务器
天气服务器信息作为具有多个通道的设备提供。
该设备称为`WeatherServer`。
它包含：

-具有当前天气值的频道“实际”
-每个预测小时的一个频道称为“ HourXX”，其中“ XX”是从现在开始的小时数

每个通道包含以下状态：

-`barometricPressure`：数字大气压值
-`barometricPressure-formatted`：格式化的气压值，单位为
-`dewPoint`：数字露点值
-`dewPoint-formatted`：格式化的露点值，单位
-`perceivedTemperature`：数字感知温度值
-`perceivedTemperature-formatted`：格式化的感知温度值，单位为
-`precipitation`：数值降水值
-`precipitation-formatted`：格式化后的降水值，单位为
-`relativeHumidity`：相对湿度数值
-`relativeHumidity-formatted`：格式化的相对湿度值，单位为
-`solarRadiation`：太阳辐射值
-`temperature`：数字温度值
-`temperature-formatted`：格式化的温度值，单位
-`timestamp`：数据的时间戳记为`value.time`（JavaScript时间）
-`weatherType`：天气类型数值枚举值
-`weatherType-text`：天气类型的文本表示
-`windDirection`：风向值
-`windSpeed`：风速值
-`windSpeed-formatted`：格式化的风速值，单位

##不支持的控件类型
当Loxone添加新的控件类型时，此适配器通常不立即支持它们。

在这种情况下，控件的名称前将带有“ Unknown：”。例如。 `Unknown: Wallbox`

这些控件将包含Miniserver报告的所有状态，但它们都是只读字符串。

如果您需要对新控件类型的更好支持，请按照下一节中的步骤重新设置新功能。

**哨兵：**不支持的控件类型将使用Sentry报告给开发人员。这样，您可能会在下一个版本中获得新的控件，而不必自己提出要求。

##错误报告和功能请求
请使用GitHub存储库报告任何错误或请求新功能。

如果需要不受支持的控件类型，请提供ioBroker错误日志中报告的名称以及ioBroker对象树中设备的全部原始内容：

“ LightController”的日志文件示例：

![缺少LightController控件的日志](../../../en/adapterref/iobroker.loxone/doc/log-missing-control-type.png)

来自ioBroker的本机值＆gt;对象

![缺少LightController控件的详细信息](../../../en/adapterref/iobroker.loxone/doc/details-missing-control-type.png)

＃＃ 合法的
该项目与Loxone Electronics GmbH公司没有直接或间接的联系。

Loxone和Miniserver是Loxone Electronics GmbH的注册商标。

## Changelog

<!--
    Placeholder for the next version (at the beginning of the line):
    ### **WORK IN PROGRESS**
-->

### 2.2.1 (2021-05-18)

-   (UncleSamSwiss) Fixed typo causing "Cannot read property 'off' of undefined" (IOBROKER-LOXONE-2R, #72)
-   (UncleSamSwiss) Improved Sentry reporting for structure file

### 2.2.0 (2021-05-17)

-   (UncleSamSwiss) Unknown/unsupported controls are now shown with their states as read-only strings
-   (raintonr) Fixes for auto-position based on percentage (#76)
-   (raintonr) Added support for IRoomControllerV2 (#22)
-   (UncleSamSwiss) Added experimental support for EIBDimmer (#15)
-   (UncleSamSwiss) Added support for ValueSelector (#36)
-   (UncleSamSwiss) Added support for TextState (#73)
-   (UncleSamSwiss) Added support for UpDownAnalog (#57)
-   (UncleSamSwiss) Fixed some "State has wrong type" warnings (#99, #128)
-   (UncleSamSwiss) Added support for Lumitech color picker (#44)
-   (UncleSamSwiss) Weather server data can now be filtered (#131)
-   (UncleSamSwiss) Added support for PresenceDetector (IOBROKER-LOXONE-1R)
-   (UncleSamSwiss) Added support for AAL Smart Alarm (IOBROKER-LOXONE-1X)
-   (UncleSamSwiss) Added support for AAL Emergency Button (IOBROKER-LOXONE-1W)
-   (UncleSamSwiss) Added support for Paketsafe (IOBROKER-LOXONE-1P)

### 2.1.0 (2020-12-21)

-   (raintonr) Fixed: activeMoods can get stuck/not sync properly; all events is now handled with a queue (#58, #61, #62)
-   (raintonr) Added open/close buttons to Garage/Gate Control (#59, #60)
-   (pinkit) Added support for virtual text inputs (#48)
-   (UncleSamSwiss) Updated to the latest adapter template
-   (UncleSamSwiss) Changed log level of "Currently unsupported control type" message to "info" (#65)

### 2.0.2 (2020-10-26)

-   (UncleSamSwiss) Fixed color picker updates (#52)
-   (UncleSamSwiss) TimedSwitch to have `on`/`off` instead of `active` (#53)
-   (UncleSamSwiss) Cleaning illegal characters for room and function names (#54)

### 2.0.1 (2020-09-24)

-   (UncleSamSwiss) Fixed percentage states always showing 0% (#49)
-   (UncleSamSwiss) Fixed analog virtual inputs wouldn't set the value 0 from ioBroker (#47)
-   (UncleSamSwiss) Added translations to package information.

### 2.0.0

-   **BREAKING:** Since the password is now encrypted, you will need to enter the password again after an update to this version!
-   (UncleSamSwiss) Updated to the latest development tools and changed to the TypeScript language

### 1.1.0

-   (UncleSamSwiss) Added support for Miniserver Gen 2
-   (sstroot) RGB for LightControllerV2
-   (Apollon77) Updated CI Testing

### 1.0.0

-   (UncleSamSwiss) Fixed issue that was resetting the custom settings and cloud smartName
-   (alladdin) Fixed connection issues with Loxone Miniserver 10
-   (UncleSamSwiss) Changed all write-only "switch"es to "button"s
-   (UncleSamSwiss) Added support for AlarmClock control
-   (Apollon77) Updated CI Testing

### 0.4.0

-   (UncleSamSwiss) Improved support for Loxone Config 9
-   (UncleSamSwiss) Changed all color choosers (i.e. color lights) to use RGB (previously HSV/HSL was completely wrong)

### 0.3.0

-   (UncleSamSwiss) Control names only synchronized on the first time by default (configurable); users can change control names the way they want

### 0.2.1

-   (UncleSamSwiss) Added support for Slider control

### 0.2.0

-   (UncleSamSwiss) Added proper support for Alexa for the following controls: Alarm, AudioZone, Gate, Jalousie and LightController

### 0.1.1

-   (UncleSamSwiss) Added support for synchronizing rooms and functions (categories) from Loxone Miniserver

### 0.1.0

-   (UncleSamSwiss) Added support for many more controls including commands from ioBroker to Loxone Miniserver

### 0.0.3

-   (Bluefox) Formatting, refactoring and Russian translations

### 0.0.2

-   (UncleSamSwiss) Added creation of an empty device for all unsupported controls (helps figure out its configuration)

### 0.0.1

-   (UncleSamSwiss) Initial version

## License

Copyright 2021 UncleSamSwiss

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.