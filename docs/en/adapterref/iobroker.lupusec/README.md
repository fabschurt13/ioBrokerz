![Logo](admin/lupusec.png)

# ioBroker.lupusec

[![Travis Build Status](https://travis-ci.org/schmupu/ioBroker.lupusec.svg?branch=master)](https://travis-ci.org/schmupu/ioBroker.lupusec)
[![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/schmupu/ioBroker.lupusec?branch=master&svg=true)](https://ci.appveyor.com/project/schmupu/ioBroker-lupusec/)
![Stable Version](http://iobroker.live/badges/lupusec-stable.svg) 
![Number of Installations](http://iobroker.live/badges/lupusec-installed.svg) 
[![NPM version](http://img.shields.io/npm/v/iobroker.lupusec.svg)](https://www.npmjs.com/package/iobroker.lupusec) 
[![Downloads](https://img.shields.io/npm/dm/iobroker.lupusec.svg)](https://www.npmjs.com/package/iobroker.lupusec) 
[![NPM](https://nodei.co/npm/iobroker.lupusec.png?downloads=true)](https://nodei.co/npm/iobroker.lupusec/)

**Requires node.js 10.0 or higher and Admin v3!**

This adapter connects the Lupusec alarm system XT1 Plus, XT2, XT2 Plus and XT3 with ioBroker.
The XT1 (without Plus) will not be supported. You can read the status of the Lupusec sensors
like door, windows, water, smoke sensors and the status of the alarm system.
For example, you can turn on switches, control your shutter and arm/disarm the alarm system.

You can find detailed information here: [Lupus](https://www.lupus-electronics.de/en)

## Installation
1. Install the adapter
The easiest way is to configure the lupusec.iobroker adapter via the discovery adapter in ioBroker. The discovery adapter search for the right IP-address of the Lupusec alarm system. The other way is it, to configure it manually

2. Manually configuration of the adapter
Choose the IP-Address or hostname from the Lupusec alarm system. Choose https (recommended) if possible.
For only reading the status, select a user without write access. If you want to change the status
(for example, turn on/off the light or arm/disarm the alarm) pick a user with write access.      
![admin_main](docs/en/img/lupusec_admin.png)
If you have surveillance cams connected to your Lupusec alarm system you can provide them in ioBroker. The Lupusec adapter finds all Lupusec cams by it own. You have to enter a address (your ioBroker IP addrss or 0.0.0.0) and a port for later connecting to the cams.
![admin_webcam](docs/en/img/lupusec_admin_webcam.png)
If you have your Nuki door opener connected to your Lupusec alarm system you can use it from ioBroker too. On the ioBroker instance admin menu, you can enter your Lupusec door sensor which is mounted to the Nuki door. If you now open the door where the Nuki is mounted you have the additional state 'door opened' instead only 'unlocked'. If you do not have a Lupusec door sensor at the Nuki door, you will only see the states 'locked' or 'locked'.
![admin_nuki](docs/en/img/lupusec_admin_nuki.png)

By default all Lupusec devices will be on the ioBroker object tab  displayed.
Fully supported and individually adapted are following devices:

  - Door contact / window contact (Type 4)
  - Water sensor (Type 5)
  - Panic Button (Type 7)
  - Motion detector / 360 degree motion detector (Type 9)
  - CO sensor (Type 13)
  - Smoke Detector / Heat Detector (Type 14)
  - Temperature Sensor V2 (Type 20)
  - Siren inside (Type 21)
  - Status Indicator / Mini Indoor Siren (Type 22)
  - Power Switch (Type 24)
  - 1 channel relay with ZigBee repeater (Type 24)
  - 2 channel relay with ZigBee repeater (Type 24)
  - Repater V2 (Type 26)
  - Keypad (Type 37)
  - Glass sensor (Type 39)
  - Siren inside (Type 45)
  - Siren outside (Type 48)
  - Power Switch Meter (Type 48)
  - Electric Meter (Type 50)
  - Universal IR Controller (Type 52)
  - Room sensor V1 (Type 54)
  - LCD temperature sensor (Type 54)  
  - Mini temperature (Type 54)
  - Nuki door opener (Type 57)
  - Heat detector (Type 58)
  - Dimmer (Type 66)
  - Light Switch V2 (Type 66)
  - Hue (Type 74)
  - Roller shutter relay V1 (Type 76)
  - Radiator thermostat (Type 79)
  - Radiator thermostat V2 (Type 79)
  - Light sensor (Type 78)
  - Scenario Switch V2 (Type 81)
  - Shock sensor (Type 93)
  - Smoke detector V2 (Type 14)
  - Inwall relay with dimmer V3 (Type 66)
  - Keypad Outdoor V2 (Type 17)

The two states apple_home_a1 and lupusec.0.status.apple_home_a2 for the Apple Homekit adapter yahka supported. You can turn in addition to the lupusec states the alarm system for area 1 and 2 on and off.  

If you own a device that is not listed in the list above, please contact me
at Thorsten Stueben <thorsten@stueben.de>.

## Objects
### Lupusec Status
ioBroker offers you the same status objects as in the Lupusec app does.
![lupusec_obj_status](docs/en/img/lupusec_obj_status.png)


### Lupusec Devices 
You find all supported Lupsec sensors and devices under 'devices'. If a device is missing, please contact me.
![lupusec_obj_status](docs/en/img/lupusec_obj_devices.png)
Detailed view of a sensor or device. In this example you see the CO sensor. On CO alarm the state 'alarm_status_ex' change to true and 'alarm_status' change to 'CO'.
![lupusec_obj_status](docs/en/img/lupusec_obj_devices_type09.png)

### Lupusec Webcams
You find all connected surveillance cams under 'webcams'. You can copy the link provided in the 'image' and 'stream' state to your web browser for opening. 
![lupusec_obj_webcam](docs/en/img/lupusec_obj_webcam.png)

### Lupusec Nuki
You find your Nuki door opener under 'devices' like the Lupusec devices. The Nuki provides 2 states. The state nuki_state shows you the actuall state of the Nuki door opener like door is locked or unlocked. With the state nuki_action you can open, lock or unlock your door.  
![lupusec_obj_nuki](docs/en/img/lupusec_obj_nuki.png)

### Lupusec SMS
If you ar using the Lupusec XT1+, XT2+ or XT3 with an SMS sim card, you can send SMS with following states:
![lupusec_obj_sms](docs/en/img/lupusec_obj_sms.png)

Alternative you can send SMS from your JavaScript with following command:
```
sendTo('lupusec.0', 'sms', { number: '017247114711', text: 'Test message' });
``` 

if you are using the SMS gateway you can use following command in your script:
```
sendTo('lupusec.0', 'smsgw', { number: '017247114711', text: 'Test message' });
``` 

## Troubleshooting
If you start the Lupusec Adapter and you get the error that the alarm system is not reachable please try to ping the system from a terminal window of your ioBroker system. 

```
ssh <user>@<iobroker-ip-address> 
sudo -u iobroker ping <lupsec-ip-address>
``` 
If you get the error _ping: icmp open socket: Operation not permitted_ please do following and start afterwards the Lupusec adapter again.
```
ls -l `which ping`
sudo chmod u+s `which ping` 
``` 

## Changelog

### 1.3.6 (30.11.2021)
* (St??bi) Bugfixing
* (St??bi) Fixed Issue #41 (Datenpunkte f??r Temperatur gehen nur bis 0)
* (St??bi) Fixed Issue #34 (cpu load 4-5% higher with 1.3.5 compared to older versions)

### 1.3.5 (24.04.2021)
* (St??bi) Add device keypad outdoor v2
* (St??bi) Add log file state. Important time of Lupusec Alarm system and ioBroker have to be synchrony
* (St??bi) Workaround dropdown list with admin in react mode (wrong type)

### 1.3.4 (01.03.2021)
* (St??bi) Bugfixing

### 1.3.3 (17.02.2021)
* (St??bi) Bugfixing
* (St??bi) Send SMS with SMS gateway or SIM card

### 1.3.2 (14.02.2021)
* (St??bi) Send SMS if you are using a sim card

### 1.3.1 (07.02.2021)
* (St??bi) Add universal IR controller (type 52)

### 1.3.0 (03.10.2020)
* (St??bi) Reduce CPU Load
* (St??bi) Add local link to alarm system
* (St??bi) Bugfixing Issue #27 - bypass

### 1.2.9 (04.07.2020)
* (St??bi) Bugfixing

### 1.2.8 (10.06.2020)
* (St??bi) Add sentry mode
* (St??bi) Now you can hold the reason for the alarm in alarm_status and alarm_status till the alarm ends

### 1.2.7 (25.05.2020)
* (St??bi) Add token renew time to expert mode

### 1.2.6 (02.05.2020)
* (St??bi) Change logic to get faster sensor states
* (St??bi) Node 10 recommended 
* (St??bi) Add old Light sensor (type 78)

### 1.2.5 (21.01.2019)
* (St??bi) Change logic to get faster sensor states

### 1.2.4 (09.01.2019)
* (St??bi) Add device: temperature sensor v2

### 1.2.3 (06.09.2019)
* (St??bi) Add device: Repeater V2
* (St??bi) Add device: Siren inside (Battery version without Zigbee repeater)

### 1.2.1 (14.10.2019)
* (St??bi) Bugfixing (Issue #9)
* (St??bi) Bugfixing: if the name of a device is empty, the name was changed all the time between NaN and ''  

### 1.2.0 (13.09.2019)
* (St??bi) Changing error handling of adapter
* (St??bi) Add Nuki door opener

### 1.1.9 (06.09.2019)
* (St??bi) Add device: Smoke detector V2
* (St??bi) Add device: Inwall relay with dimmer V3

### 1.1.8 (10.06.2019)
* (St??bi) Add device: 360 PIR motion sensor
* (St??bi) Add device: electric meter
* (St??bi) Add device: LCD temperature sensor
* (St??bi) Add device: mini temperature sensor

### 1.1.7 (06.05.2019)
* (St??bi) Enhancement: optimizing webcam support

### 1.1.6 (01.05.2019)
* (St??bi) New feature: you can change the buttons for keypad
* (St??bi) New feature: add push notifications to sensors
* (St??bi) New feature: change switch from switch to push button 
* (St??bi) New feature: now you can change status for tamper, bypass and reporting for sensors
* (St??bi) New feature: Webcam support. You can get the link of Lupusec provided webcams.
* (St??bi) New feature: you can edit the on/off timer for shutters 
* (St??bi) New feature: Discription of states are now in English or German available
* (St??bi) Bugfixing: HUE and saturation of HUE devices fixed 
* (St??bi) Bugfixing: Add role to button 4 of scenario switch.  

### 1.1.5 (24.04.2019)
* (St??bi) New feature: Add buttons for Scenario Switch V2
* (St??bi) Bugfixing: Various improvements

### 1.1.4 (13.04.2019)
* (St??bi) Add device outside alarm
* (St??bi) Add device inside alarm
* (St??bi) Add device PIR motions sensor V2
* (St??bi) Add device glass sensor

### 1.1.3 (10.04.2019)
* (St??bi) New Logo
* (St??bi) Add device Panic Button
* (St??bi) Add status indicator 
* (St??bi) Add sensor Heat detector
* (St??bi) Add shock sensor 
* (St??bi) Add Light Switch V2
 
### 1.1.2 (06.04.2019)
* (St??bi) Add light sensor 
* (St??bi) Add CO sensor
* (St??bi) Add water sensor V2
* (St??bi) Add Radiator thermostat V2
* (St??bi) Add 1 channel relay with ZigBee repeater (Type 24)
* (St??bi) Add 2 channel relay with ZigBee repeater (Type 24)
* (St??bi) If you change the sensor name in the Lupusec App, it will be change in ioBroker too 
* (St??bi) Bugfixing Radiator thermostat V1/V2
* (St??bi) Bugfixing Dimmer
* (St??bi) Bugfixing PD Status (Timer) for relay, power switch
* (St??bi) Bugfixing status switch for rollter/shutter device

### 1.1.1 (27.03.2019)
* (St??bi) Lupusec alarm online status added

### 1.1.0 (23.03.2019)
* (St??bi) Totally redesign of the Lupusec adapter. Node 8 or higher is now required

### 1.0.0 (22.12.2018)
* (St??bi) Support js-controller compact mode
* (St??bi) Changed core adapter
* (St??bi) Add Light sensor (type 78)
* (St??bi) Add Apple home alarm status
* (St??bi) Add dimmer / relais (type 66)
* (St??bi) Bugfixing and new status alarm_ex
* (St??bi) Bugfixing and changing of the polling mechanism
* (St??bi) password will be encrypted. Translation of configuration
* (St??bi) add debug messages
* (St??bi) Hue, room sensor, power switch added
* (St??bi) Fixing error update function
* (St??bi) Improvements and new add/del/update Object function
* (St??bi) Changes of roles and icons added to devices
* (St??bi) Wrong device description removed
* (St??bi) RSSI Status an Device shutter (type 76) supported
* (St??bi) Devices thermostat (type 79) and switch (type 48) supported
* (St??bi) Directory widged deleted
* (St??bi) Port can be added

## Planed
Following things are planed in the future:
* support more sensors / devices
* writing a documentation for every sensor / device

## License
The MIT License (MIT)

Copyright (c) 2019-2021 Thorsten Stueben <thorsten@stueben.de>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
