---
translatedFrom: en
translatedWarning: Если вы хотите отредактировать этот документ, удалите поле «translationFrom», в противном случае этот документ будет снова автоматически переведен
editLink: https://github.com/ioBroker/ioBroker.docs/edit/master/docs/ru/adapterref/iobroker.swiss-weather-api/README.md
title: ioBroker.swiss-weather-api
hash: Y4XW7jc7X0m8UrHWpSUBaBDPQhCs2u/8oH6uVk03k8Y=
---
![Логотип](../../../en/adapterref/iobroker.swiss-weather-api/admin/swiss-weather-api.png)

![Версия NPM](http://img.shields.io/npm/v/iobroker.swiss-weather-api.svg)
![Загрузки](https://img.shields.io/npm/dm/iobroker.swiss-weather-api.svg)
![Количество установок (последнее)](http://iobroker.live/badges/swiss-weather-api-installed.svg)
![Количество установок (стабильно)](http://iobroker.live/badges/swiss-weather-api-stable.svg)
![Статус зависимости](https://img.shields.io/david/baerengraben/iobroker.swiss-weather-api.svg)
![Известные уязвимости](https://snyk.io/test/github/baerengraben/ioBroker.swiss-weather-api/badge.svg)
![НПМ](https://nodei.co/npm/iobroker.swiss-weather-api.png?downloads=true)
![Трэвис-Си](http://img.shields.io/travis/baerengraben/ioBroker.swiss-weather-api/master.svg)

# IoBroker.swiss-weather-api
#Внимание!!!
** SRG полностью перестроила свой API. Старый API (<= версия адаптера 0.3.2) больше НЕ поддерживается. Начиная с версии адаптера 0.9.x используется новый API SRG. Вот почему необходимо создать новое приложение SRG (например, продукт «Freemium») (https://developer.srgssr.ch/apis/srf-weather). См. Также Readme, раздел «Начало работы» (ниже). Также обратите внимание, что новый API также будет создавать совершенно новые объекты. **

** Хорошая новость заключается в том, что новый API также предоставляет больше данных. ;) **

** Процедура обновления **

Итак, моя рекомендация по обновлению с 0.3.2 до 0.9.x:

- удалите старый адаптер перед установкой версии 0.9.x.
   - обратите внимание, что объекты данных также будут удалены соответственно.
- создать новое бесплатное приложение на портале разработчика srg (https://developer.srgssr.ch/apis/srf-weather)
- установите новую версию 0.9.x и настройте конфигурацию с помощью новых ключей consumerkey и consumersecret
  - при запуске новый адаптер создаст новые, разные объекты данных.

## Swiss-weather-api адаптер для ioBroker
Подключается к отличному API погоды SRF (https://developer.srgssr.ch/apis/srf-weather).
API-интерфейс SRF Weather REST позволяет получать прогнозы погоды и отчеты из более чем 25 000 мест по всей Швейцарии. Подписка «Freemium» позволяет получать 50 запросов в день.

## **Иконки**
Начиная с версии 0.1.8, SRG-SSR предоставляет собственные значки. Таким образом, каждая точка данных предоставляет URL-адрес соответствующей погодной ситуации (цветные, темные и светлые значки).

## **Имейте в виду, что этот адаптер поддерживает только местоположения в Швейцарии.**
### Начиная
1. Получите бесплатный аккаунт на https://developer.srgssr.ch/.
1. Перейдите в «Мои приложения» и создайте новое приложение. Здесь вы можете выбрать товар. «Freemium» - это их бесплатный продукт. Если вы хотите делать только 50 запросов в день (каждые 30 минут) или / и не хотите платить за большее количество запросов в день, вы хотите выбрать «Freemium». Теперь это создаст определенные ConsumerKey и ConsumerSecret.
1. Узнайте долготу / широту (в десятичных градусах) выбранного места, для которого требуется прогноз. Эта информация не является обязательной, если вы указали свое местоположение в настройках ioBroker (основные настройки) (через карту). В этом случае вы можете оставить поля широты и долготы пустыми. Затем адаптер принимает настройки ioBroker. Широта и долгота, введенные в конфигурации адаптера, имеют приоритет над настройками ioBroker.
1. Установите этот адаптер на ioBroker => Это может занять несколько минут (~ 7 минут на Raspberry Pi 3).
1. В разделе «Конфигурация адаптера» введите
   1. Название приложения
   1. ConsumerKey приложения
   1. ConsumerSecret приложения
   1. Долгота / широта выбранного места в Швейцарии, для которого требуется прогноз. => Используйте десятичные градусы (например, Цюрих: 47,36667 / 8,5)
   1. Интервал опроса в минутах (по умолчанию 30 минут - 50 запросов в день)

Первый запрос выполняется через 10 секунд после запуска адаптера. После первого запуска запрос будет выполняться регулярно в соответствии с параметром конифугирования (Интервал опроса в минутах)

## Changelog

### 0.9.1
* (baerengraben)  Fix to reduce amount of Rest-Calls: https://github.com/baerengraben/ioBroker.swiss-weather-api/issues/41
* (baerengraben)  Fix for https://github.com/baerengraben/ioBroker.swiss-weather-api/issues/32 (Crashes when no Internet Connection is available)
* (baerengraben)  Partly Fix for https://github.com/baerengraben/ioBroker.swiss-weather-api/issues/24: Handling Adapter State Info.


### 0.9.0
* (baerengraben)  Removed NodeJs 10 support and added NodeJs 16 support 
* (baerengraben)  Update to new SRF Weater API (https://developer.srgssr.ch/apis/srf-weather). Attention: Old Weather-API (Adapter Version 0.3.2 and earlier) will be decommissioned on Sept. 2021)
* (baerengraben)  Removed Icon-Support from https://erikflowers.github.io/weather-icons/ since SRF is providing their own icons.

### 0.3.2
* (baerengraben)  Fix for https://github.com/baerengraben/iobroker.swiss-weather-api/issues/13.

### 0.3.1
* (baerengraben)  Adapter-Config attributes longitude & latitude is optional now. If no longitude/latitude is set, the adpater is getting the longitude/latitude from ioBroker System-Attributes (https://github.com/baerengraben/iobroker.swiss-weather-api/issues/6).

### 0.3.0
* (baerengraben)  Change from Scheduled Adapter to Deamon Adapter(https://github.com/baerengraben/iobroker.swiss-weather-api/issues/11). The query interval is now configurable by parameter. The first query is made 10s after the adapter was started. Attention: For installing this version, please delete the older adapter version completely and install it again.

### 0.2.3
* (baerengraben) Update Dependencies

### 0.2.2
* (baerengraben) Some bug fixing
* (baerengraben) Enhancement https://github.com/baerengraben/iobroker.swiss-weather-api/issues/10

### 0.2.0
* (baerengraben) Updates in order to commit to iobroker stable

### 0.1.9
* (baerengraben) Dependency- and Vulnerabilites-Updates

### 0.1.8
* (baerengraben) Added Icons provided by SRGSSR => Thank you!! :)
* (baerengraben) Added new Object icon-url-srgssr => Contains the url-link to the srgssr Icon

### 0.1.7
**Attention**: If you have already installed a previous Version of swiss-weather-api (<= 0.1.6) please remove the adapter and install it completely new. This makes shure you get the new Unit-Names for "fff" and "ffx3" which where corrected by SRG. 
* (baerengraben) Added Icon-Codes -17 to -30 => These are not yet confirmed by srf - but I beleave these are correct.  
* (baerengraben) SRG is now providing the correct unit-names for "fff" and "ffx3". Adaptet this in the swiss-weather-adapter. **Attention**: You have to reinstall the swiss-weather-api (remove and install new Version) to make shure the Object-Name gets this Update.

### 0.1.6
* (baerengraben) Some fixes based on Feedback of forum.iobroker.net

### 0.1.5
* (baerengraben) Some fixes based on Feedback of forum.iobroker.net

### 0.1.4
* (baerengraben) Added Travis CI testing

### 0.1.3
* (baerengraben) Role-Definitions updated and added attribute 'icon-name'.

### 0.1.2
* (baerengraben) Some fixes.

### 0.1.0
* (baerengraben) Running version. Reads the complete weather forecast from https://api.srgssr.ch

### 0.0.2
* (baerengraben) first running version. Reads Current Forecast (https://api.srgssr.ch/forecasts/v1.0/weather/current)

### 0.0.1
* (baerengraben) initial release

## License
MIT License

Copyright (c) 2020 baerengraben <baerengraben@intelli.ch>

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