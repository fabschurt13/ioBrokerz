---
translatedFrom: en
translatedWarning: Если вы хотите отредактировать этот документ, удалите поле «translationFrom», в противном случае этот документ будет снова автоматически переведен
editLink: https://github.com/ioBroker/ioBroker.docs/edit/master/docs/ru/adapterref/iobroker.octoprint/README.md
title: ioBroker.octoprint
hash: UIQzTj/niqykyk4X6zYZI+AH+i3/X5WYH27JP8BFhxI=
---
![Логотип](../../../en/adapterref/iobroker.octoprint/admin/octoprint.png)

![Версия NPM](http://img.shields.io/npm/v/iobroker.octoprint.svg)
![Загрузки](https://img.shields.io/npm/dm/iobroker.octoprint.svg)
![Стабильный](http://iobroker.live/badges/octoprint-stable.svg)
![установлены](http://iobroker.live/badges/octoprint-installed.svg)
![Статус зависимости](https://img.shields.io/david/klein0r/iobroker.octoprint.svg)
![Известные уязвимости](https://snyk.io/test/github/klein0r/ioBroker.octoprint/badge.svg)
![Статус сборки](http://img.shields.io/travis/klein0r/ioBroker.octoprint.svg)
![НПМ](https://nodei.co/npm/iobroker.octoprint.png?downloads=true)

# IoBroker.octoprint
Адаптер для подключения OctoPrint к ioBroker

Протестировано с OctoPrint 1.6.0

## Установка
Используйте «список адаптеров» в ioBroker, чтобы установить стабильную версию этого адаптера. Вы также можете использовать интерфейс командной строки для установки этого адаптера:

```
iobroker add octoprint
```

## Функции
### Информация
- Получить информацию о версии
- Получить информацию о принтере
- Получить информацию о текущем задании печати
- Получить информацию о списке файлов

### Температуры
- Установить температуру инструмента
- Установить температуру кровати

### Команды
- Принтер: подключите, отключите и вернитесь домой
- Задание: запуск, отмена, перезапуск
- SD-карта: инициализация, обновление, выпуск
- Пользовательские команды принтера
- Системные команды
- Перемещение по осям X, Y и Z
- Выберите файл или распечатайте его

## Важный!
НЕ перезапускайте экземпляр OctoPrint (или любой другой экземпляр) с таким кодом:

```javascript
var obj = getObject('system.adapter.octoprint.0');
obj.common.enabled = false;
setObject('system.adapter.octoprint.0', obj);
```

Поскольку `API key` является защищенным атрибутом, начиная с версии 1.1.0, это приведет к удалению настроенного ключа API. Причина в том, что `getObject` не возвращает защищенную информацию (поэтому ключ api не включается в возвращаемый объект). При сохранении объекта вы сохраните объект без ключа.

Пожалуйста, используйте состояние `system.adapter.octoprint.0.alive`, чтобы остановить / запустить экземпляр.

## Changelog

### 2.0.1

* (klein0r) Fixed missing translations

### 2.0.0

* (klein0r) Admin 5 Support

### 1.1.2

* (klein0r) Updated file refresh handling

### 1.1.1

* (klein0r) Minor fixes

### 1.1.0

* (klein0r) Encrypt sensitive information **(BREAKING CHANGE - RE-ENTER YOUR API KEY)**

### 1.0.10

* (klein0r) Fixed printjob state format issues

### 1.0.9

* (klein0r) nodejs 12 required

### 1.0.8

* (klein0r) Avoid constant refresh of file list

### 1.0.7

* (klein0r) Fixed async object creation

### 1.0.6

* (foxriver76) Avoid spamming the same error again and again

### 1.0.5

* (klein0r) Allow to select and print files using objects
* (klein0r) Fixed .toFixed exception when no job is running

### 1.0.4

* (klein0r) Fixed .toFixed exception when no job is running

### 1.0.3

* (klein0r) Fixed filament information (volume and length)

### 1.0.2

* (klein0r) Added name for OctoPrint Instance
* (klein0r) Fixed admin translation issue (syntax error)

### 1.0.1

* (klein0r) Added iobroker sentry

### 1.0.0

* (klein0r) First stable release

### 0.0.6

* (klein0r) Improved error handling

### 0.0.5

* (klein0r) Switched to axios lib (replaced request - deprecated)

### 0.0.4

* (klein0r) Added missing translations
* (klein0r) Changed default port to 80

### 0.0.3

* (klein0r) Updated depencencies

### 0.0.2

* (klein0r) fixed several issues, new class based structure

### 0.0.1

* (klein0r) initial release

## License

The MIT License (MIT)

Copyright (c) 2021 Matthias Kleine <info@haus-automatisierung.com>

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