---
translatedFrom: en
translatedWarning: Если вы хотите отредактировать этот документ, удалите поле «translationFrom», в противном случае этот документ будет снова автоматически переведен
editLink: https://github.com/ioBroker/ioBroker.docs/edit/master/docs/ru/adapterref/iobroker.vw-connect/README.md
title: ioBroker.vw-подключения
hash: zTdvT6mbej9fNrWgnnf94fSDFipKZC3lkMuxhjJ5Yy4=
---
![логотип](../../../en/adapterref/iobroker.vw-connect/admin/vw-connect.png)

![Версия NPM](http://img.shields.io/npm/v/iobroker.vw-connect.svg)
![Загрузки](https://img.shields.io/npm/dm/iobroker.vw-connect.svg)
![Статус зависимости](https://img.shields.io/david/ta2k/iobroker.vw-connect.svg)
![Известные уязвимости](https://snyk.io/test/github/ta2k/ioBroker.vw-connect/badge.svg)
![NPM](https://nodei.co/npm/iobroker.vw-connect.png?downloads=true)
![Трэвис-CI](http://img.shields.io/travis/ta2k/ioBroker.vw-connect/master.svg)

# IoBroker.vw-connect
## Адаптер vw-connect для ioBroker
Адаптер для VW We Connect, myAudi, Skoda Connect и We Connect Go

Пожалуйста, обновите вашу систему на узле 10.
<Https://forum.iobroker.net/topic/22867/how-to-node-js-f%C3%BCr-iobroker-richtig-updaten>

## Использование
Используйте состояние под дистанционным управлением, чтобы управлять своим автомобилем дистанционно.

## Поля статуса Пояснение
'0x0101010002.0x0101010002': // distanceCovered

'0x0204FFFFFF.0x02040C0001': // adBlueInspectionData_km

'0x0203FFFFFF.0x0203010001': // oilInspectionData_km

'0x0203FFFFFF.0x0203010002': // oilInspectionData_days

'0x0203FFFFFF.0x0203010003': // serviceInspectionData_km

'0x0203FFFFFF.0x0203010004': // serviceInspectionData_days

'0x030101FFFF.0x0301010001': // status_parking_light_off

'0x030103FFFF.0x0301030001': // стояночный тормоз

'0x030103FFFF.0x0301030007': // тип топлива

'0x030103FFFF.0x030103000A': // уровень топлива

'0x030103FFFF.0x0301030006': // диапазон топлива

'0x030103FFFF.0x0301030009': // вторичный_тип - самое раннее из Modelljahr 2018

'0x030103FFFF.0x0301030002': // soc_ok

'0x030103FFFF.0x0301030008': // вторичный_рандж - самый последний из Modelljahr 2018

'0x030103FFFF.0x0301030005': // hybrid_range - первый случай на Modelljahr 2018

1 = открыто 2 = заблокировано 3 = закрыто // дверь1 - спереди / слева

'0x030104FFFF.0x0301040001': // door2 - сзади / слева

'0x030104FFFF.0x0301040004': // door3 - передний / правый

'0x030104FFFF.0x0301040007': // door4 - задний / правый

'0x030104FFFF.0x030104000A': // door5 - задняя часть

'0x030104FFFF.0x030104000D': // door6 - капот

'0x030104FFFF.0x0301040010': // window1 - передний / левый

'0x030105FFFF.0x0301050001': // window2 - сзади / слева

'0x030105FFFF.0x0301050003': // window3 - передний / правый

'0x030105FFFF.0x0301050005': // window4 - задний / правый

'0x030105FFFF.0x0301050007': // window4 - мансардное окно

'0x030105FFFF.0x030105000B':

1MAINTENANCE_INTERVAL_DISTANCE_TO_OIL_CHANGE ", 0," 0x0203010001 ");

2MAINTENANCE_INTERVAL_TIME_TO_OIL_CHANGE ", 1," 0x0203010002 ");

3MAINTENANCE_INTERVAL_DISTANCE_TO_INSPECTION ", 2," 0x0203010003 ");

4MAINTENANCE_INTERVAL_TIME_TO_INSPECTION ", 3," 0x0203010004 ");

5WARNING_OIL_CHANGE ", 4," 0x0203010005 ");

6MAINTENANCE_INTERVAL_ALARM_INSPECTION ", 5," 0x0203010006 ");

7MAINTENANCE_INTERVAL_MONTHLY_MILEAGE ", 6," 0x0203010007 ");

8MAINTENANCE_INTERVAL_AD_BLUE_RANGE ", 7," 0x02040C0001 ");

9OIL_LEVEL_AMOUNT_IN_LITERS ", 8," 0x0204040001 ");

10OIL_LEVEL_MINIMUM_WARNING ", 9," 0x0204040002 ");

11OIL_LEVEL_DIPSTICK_PERCENTAGE ", 10," 0x0204040003 ");

12LIGHT_STATUS ", 11," 0x0301010001 ");

13TOTAL_RANGE ", 12," 0x0301030005 ");

14FUEL_LEVEL_IN_PERCENTAGE ", 13," 0x030103000A ");

15CNG_LEVEL_IN_PERCENTAGE ", 14," 0x030103000D ");

16LOCK_STATE_LEFT_FRONT_DOOR ", 15," 0x0301040001 ");

17OPEN_STATE_LEFT_FRONT_DOOR ", 16," 0x0301040002 ");

18SAFETY_STATE_LEFT_FRONT_DOOR ", 17," 0x0301040003 ");

19LOCK_STATE_LEFT_REAR_DOOR ", 18," 0x0301040004 ");

20OPEN_STATE_LEFT_REAR_DOOR ", 19," 0x0301040005 ");

21SAFETY_STATE_LEFT_REAR_DOOR ", 20," 0x0301040006 ");

22LOCK_STATE_RIGHT_FRONT_DOOR ", 21," 0x0301040007 ");

23OPEN_STATE_RIGHT_FRONT_DOOR ", 22," 0x0301040008 ");

24SAFETY_STATE_RIGHT_FRONT_DOOR ", 23," 0x0301040009 ");

25LOCK_STATE_RIGHT_REAR_DOOR ", 24," 0x030104000A ");

26OPEN_STATE_RIGHT_REAR_DOOR ", 25," 0x030104000B ");

27SAFETY_STATE_RIGHT_REAR_DOOR ", 26," 0x030104000C ");

28LOCK_STATE_TRUNK_LID ", 27," 0x030104000D ");

29OPEN_STATE_TRUNK_LID ", 28," 0x030104000E ");

30SAFETY_STATE_TRUNK_LID ", 29," 0x030104000F ");

31LOCK_STATE_HOOD ", 30," 0x0301040010 ");

32OPEN_STATE_HOOD ", 31," 0x0301040011 ");

33SAFETY_STATE_HOOD ", 32," 0x0301040012 ");

34STATE_LEFT_FRONT_WINDOW ", 33," 0x0301050001 ");

35POSITION_LEFT_FRONT_WINDOW ", 34," 0x0301050002 ");

36STATE_LEFT_REAR_WINDOW ", 35," 0x0301050003 ");

37POSITION_LEFT_REAR_WINDOW ", 36," 0x0301050004 ");

38STATE_RIGHT_FRONT_WINDOW ", 37," 0x0301050005 ");

39POSITION_RIGHT_FRONT_WINDOW ", 38," 0x0301050006 ");

40STATE_RIGHT_REAR_WINDOW ", 39," 0x0301050007 ");

41POSITION_RIGHT_REAR_WINDOW ", 40," 0x0301050008 ");

42STATE_CONVERTIBLE_TOP ", 41," 0x0301050009 ");

43POSITION_CONVERTIBLE_TOP ", 42," 0x030105000A ");

44STATE_SUN_ROOF_MOTOR_COVER ", 43," 0x030105000B ");

45POSITION_SUN_ROOF_MOTOR_COVER ", 44," 0x030105000C ");

46STATE_SUN_ROOF_REAR_MOTOR_COVER_3 ", 45," 0x030105000D ");

47POSITION_SUN_ROOF_REAR_MOTOR_COVER_3 ", 46," 0x030105000E ");

48STATE_SERVICE_FLAP ", 47," 0x030105000F ");

49POSITION_SERVICE_FLAP ", 48," 0x0301050010 ");

50STATE_SPOILER ", 49," 0x0301050011 ");

51POSITION_SPOILER ", 50," 0x0301050012 ");

52UTC_TIME_STATUS ", 51," 0x0101010001 ");

53KILOMETER_STATUS ", 52," 0x0101010002 ");

54PRIMARY_RANGE ", 53," 0x0301030006 ");

55PRIMARY_DRIVE ", 54," 0x0301030007 ");

56SECONDARY_RANGE ", 55," 0x0301030008 ");

57SECONDARY_DRIVE ", 56," 0x0301030009 ");

58STATE_OF_CHARGE ", 57," 0x0301030002 ");

59TEMPERATURE_OUTSIDE ", 58," 0x0301020001 ");

60PARKING_BRAKE ", 59," 0x0301030001 ");

61TYRE_PRESSURE_LEFT_FRONT_CURRENT_VALUE ", 60," 0x0301060001 ");

62TYRE_PRESSURE_LEFT_FRONT_DESIRED_VALUE ", 61," 0x0301060002 ");

63TYRE_PRESSURE_LEFT_REAR_CURRENT_VALUE ", 62," 0x0301060003 ");

64TYRE_PRESSURE_LEFT_REAR_DESIRED_VALUE ", 63," 0x0301060004 ");

65TYRE_PRESSURE_RIGHT_FRONT_CURRENT_VALUE ", 64," 0x0301060005 ");

66TYRE_PRESSURE_RIGHT_FRONT_DESIRED_VALUE ", 65," 0x0301060006 ");

67TYRE_PRESSURE_RIGHT_REAR_CURRENT_VALUE ", 66," 0x0301060007 ");

68TYRE_PRESSURE_RIGHT_REAR_DESIRED_VALUE ", 67," 0x0301060008 ");

69TYRE_PRESSURE_SPARE_TYRE_CURRENT_VALUE ", 68," 0x0301060009 ");

70TYRE_PRESSURE_SPARE_TYRE_DESIRED_VALUE ", 69," 0x030106000A ");

71TYRE_PRESSURE_LEFT_FRONT_TYRE_DIFFERENCE ", 70," 0x030106000B ");

72TYRE_PRESSURE_LEFT_REAR_TYRE_DIFFERENCE ", 71," 0x030106000C ");

73TYRE_PRESSURE_RIGHT_FRONT_TYRE_DIFFERENCE ", 72," 0x030106000D ");

74TYRE_PRESSURE_RIGHT_REAR_TYRE_DIFFERENCE ", 73," 0x030106000E ");

75TYRE_PRESSURE_SPARE_TYRE_DIFFERENCE ", 74," 0x030106000F ");

## Changelog

### 0.0.7

* add we connect go and remote standheizung and lock/unlock
  
### 0.0.6

* add audi

### 0.0.5

* add honk and flash, fix address format

### 0.0.4

* add Skoda support

### 0.0.3

* (ta2k) add more information
* (ta2k) add remote controls
  
### 0.0.2

* (ta2k) add car status capturing

### 0.0.1

* (ta2k) initial release

## License

MIT License

Copyright (c) 2019 ta2k <tombox2020@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.