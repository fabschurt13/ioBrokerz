---
translatedFrom: en
translatedWarning: 如果您想编辑此文档，请删除“translatedFrom”字段，否则此文档将再次自动翻译
editLink: https://github.com/ioBroker/ioBroker.docs/edit/master/docs/zh-cn/adapterref/iobroker.sbfspot/README.md
title: ioBroker.sbfspot
hash: AmUOKGNs+9jMar8oo7NBMt5/OVdBe1LIQxXvFOe4zOs=
---
![商标](../../../en/adapterref/iobroker.sbfspot/admin/sbfspot.png)

![安装数量](http://iobroker.live/badges/sbfspot-stable.svg)
![资料下载](https://img.shields.io/npm/dm/iobroker.sbfspot.svg)
![NPM版本](http://img.shields.io/npm/v/iobroker.sbfspot.svg)
![已知漏洞](https://snyk.io/test/github/rg-engineering/ioBroker.sbfspot/badge.svg)
![NPM](https://nodei.co/npm/iobroker.sbfspot.png?downloads=true)

＃ioBroker.sbfspot
![GitHub动作](https://github.com/rg-engineering/ioBroker.sbfspot/workflows/Test%20and%20Release/badge.svg)

**此适配器使用Sentry库自动向开发人员报告异常和代码错误。**有关更多详细信息以及如何禁用错误报告的信息，请参见[哨兵插件文档](https://github.com/ioBroker/plugin-sentry#plugin-sentry)！ Sentry报告从js-controller 3.0开始使用。

**如果您愿意，请考虑捐赠：**

[![贝宝（https://www.paypalobjects.com/zh_CN/DK/i/btn/btn_donateCC_LG.gif）](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YBAZTEBT9SYC2&source=url)

该适配器使用sbfspot从SMA电源逆变器读取数据。
现在，两种数据库类型（mySQL和sqlite）都受支持。
从0.2.3版开始，有一个基于flo的vis窗口小部件可用于显示历史数据。

＃＃ 安装
请按照https://github.com/SBFspot/SBFspot/wiki下的sbfspot安装说明进行操作

[在基于手臂的系统上的详细安装](docs/en/install_arm.md)

##提示
*使用来自https://github.com/SBFspot/SBFspot的sbfspot的最新版本
*适配器，sbfspot和数据库（mySQL或sqlite）必须在同一系统上运行，例如树莓派
*可以在https://github.com/SBFspot/SBFspot/wiki/Installation-Linux-SQLite或https://www.rg-engineering.eu/index下找到Raspberry Pi（或类似版本）上sbfspot的安装手册。 php / produkte / software / plugin-fuer-iobroker-sbfspot
*对于Raspberry Pi，在https://github.com/SBFspot/sbfspot-config下提供了一个半自动配置工具

＃＃ 已知的问题
*有时npm软件包sqlite3的安装失败。

在这种情况下，请重新安装所有npm软件包

> cd /opt/iobroker/node_modules/iobroker.sbfspot> sudo npm安装

有时必须多次调用npm intall才能成功安装所有必需的软件包

*如果发现错误或有新功能，请在[github]（https://github.com/rg-engineering/ioBroker.sbfspot/issues）上创建问题

## 4.0.4（2021-02-14）
*（René）依赖关系已更新

## 4.0.3（2021-01-15）
*（René）基于CI测试的错误修复

## 4.0.2（2020-10-09）
*（René）基于CI测试的错误修复

## 4.0.0（2020-07-28）
*（René）重做以使用异步/等待
*（René）使用mysql2

## 3.0.0（2020-04-25）
*（René）sqlite3程序包被Better-sqlite3取代
* DP的（René）角色工作过度
*（René）问题19：仅当添加日光时才获取数据
*（René）参见问题＃29：小部件轴标签的默认颜色已更改
*（René）小部件：如果添加的小部件太小，则记录日志

## 2.4.3（2020-04-02）
*（René）DB_CalcHistory_Today中的错误修复程序，用于小部件

## 2.4.2（2020-02-01）
*（René）错误修正小工具

## 2.4.0（2019-12-28）
*（René）更新到我自己的flot 3.0

## 2.3.4（2019-10-31）
*（René）将flot更新到3.0版

### 2.3.3（2019-02-03）
*（René）由于安装问题而将sqlite3软件包降级

### 2.3.1（2019-02-02）
*（René）错误修复：使用sqlite的“今天”数据未显示

### 2.3.0（2019-01-20）
*（René）支持紧凑模式
*（René）在日志中添加其他错误信息

### 2.2.5（2018-11-26）
*（René）升级包

### 2.2.5（2018-11-04）
*（René）如果今天没有新值，可重置收益率

### 2.2.4（2018-08-19）
*（René）错误修正X

### 2.2.3
*（René）与2.2.2相同

### 2.2.2
*（René）添加上次更新的时间戳

### 2.2.1
*（René）在获得最后一个查询结果后关闭数据库连接（例如，支持多个逆变器）

### 2.2.0
*（Nis）背景颜色和边框
* admin3中的（René）错误修复

### 2.1.0
*（René）支持MariaDB

### 2.0.1
*（René）支持admin3

### 2.0.0
*（René），因为我们每个小部件始终使用一个图形，所以现在仅支持一个图形

注意：小部件与1.x.x版本不兼容；只需在安装后检查小部件中的设置即可！

### 1.1.0
*（René）y轴自动缩放
* y轴的（René）颜色
*（René）可调日期格式

### 1.0.1
*（René）修复了sqlite的错误

### 1.0.0
*（René）首次稳定发行

### 0.2.6
*（René）bug修复android app> 1.0.6

### 0.2.5
*（René）使用安装日期来计算历史值

### 0.2.4
*（René）徽标已更改

### 0.2.3
*（René）添加历史数据作为数据点（JSON）
*（René）新的vis小部件可显示历史数据

### 0.2.2
*（René）重命名为sbfspot

### 0.2.1
*（René）index.html更新

### 0.2.0
*（René）对sqlite和许可证的支持已更改为MIT

### 0.1.1
*（René）UTF8编码

### 0.1.0
*（René）第一版

### 0.0.1
*（René）初始版本

## Changelog

### 4.0.5 (2021-03-21)
* (René) dependencies updated

## License
Copyright (C) <2017-2021>  <info@rg-engineering.eu>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.