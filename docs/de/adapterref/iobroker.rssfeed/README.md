---
translatedFrom: en
translatedWarning: Wenn Sie dieses Dokument bearbeiten möchten, löschen Sie bitte das Feld "translationsFrom". Andernfalls wird dieses Dokument automatisch erneut übersetzt
editLink: https://github.com/ioBroker/ioBroker.docs/edit/master/docs/de/adapterref/iobroker.rssfeed/README.md
title: ioBroker Adapter zum Anfordern und Anzeigen von RSS-Feeds verschiedener Standards (Atom, RSS, RDF)
hash: i+jcVs9I3OOvYfLijSmDY5U9Io4s5hOf4Cpp+4BOpMw=
---
![Logo](../../../en/adapterref/iobroker.rssfeed/admin/rssfeed-logo.png)

![Anzahl der Installationen](http://iobroker.live/badges/rssfeed-installed.svg)
![NPM-Version](http://img.shields.io/npm/v/iobroker.rssfeed.svg)
![Downloads](https://img.shields.io/npm/dm/iobroker.rssfeed.svg)
![Travis](https://img.shields.io/travis/oweitman/ioBroker.rssfeed.svg)
![AppVeyor-Build-Status](https://img.shields.io/appveyor/ci/oweitman/iobroker-rssfeed.svg)
![GitHub-Probleme](https://img.shields.io/github/issues/oweitman/ioBroker.rssfeed.svg)

# IoBroker Adapter zum Anfordern und Anzeigen von RSS-Feeds verschiedener Standards (Atom, RSS, RDF)
## Überblick
Adapter zum Anfordern und Anzeigen von RSS-Feeds verschiedener Standards (Atom, RSS, RDF).
Sie können die Ausgabe des Feeds mit einem Vorlagensystem anpassen. In die Vorlagen können Sie HTML, CSS und Javascript einbinden.

Wichtig: Aufgrund von Fehlern in automatischen Übersetzungen in andere Sprachen von iobroker ist nur die englische Übersetzung gültig

## Instanz hinzufügen
Nach der Installation sollte der Adapter dann im Adapterbereich im iobroker angezeigt werden.
Manchmal kommt es vor, dass die Änderungen nicht sichtbar sind, insbesondere bei Webänderungen (Widgets / Konfigurationsdialog), muss eventuell folgender Befehl auf der Kommandozeile ausgeführt werden:

```
iobroker upload rssfeed
```

Im rechten Bereich in der Zeile des Adapters kann über den Plus-Button eine Instanz hinzugefügt werden

## Aufbau
Die Konfiguration ist relativ einfach. Es gibt nur wenige Felder

| Einstellung | Beschreibung |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Aktualisieren | ist die allgemeine Vorgabe, wie oft der Feed in Minuten wieder aufgerufen werden soll. Der Standardwert ist 60 Minuten |
| Maximale Elemente im Datenpunkt | Hier kann die Gesamtmenge der zu verarbeitenden Daten begrenzt werden. |

Dann für jeden neuen Feed:

| Einstellung | Beschreibung |
| --------------------------------- | ------------------------------------------------------------------------------------------------- |
| Name | Ein Name für den Datenpunkt. Innerhalb eines Ordners darf ein Name nicht zweimal vorkommen. |
| Kategorie | Name für einen Unterordner dort soll der Datenpunkt erscheinen. Die Kategorie muss eindeutig sein |
| URL | Die vollständige Adresse des Feeds (mit http:// oder https://, siehe Beispiele unten) |
| Aktualisieren | Für diesen Feed kann ein anderer Wert angegeben werden. Ansonsten gilt die allgemeine Spezifikation |
| Bearbeiten-Schaltfläche | Das ausgewählte Element wird entfernt und die Werte erscheinen im Abschnitt Hinzufügen |
| Schaltfläche "Löschen" | Der ausgewählte Artikel wird entfernt |

Wenn Sie die Konfiguration gespeichert und geschlossen haben, finden Sie die Feed-Daten als JSON-Datenpunkt im Objektbaum.

## Vis und Widgets
Die folgenden Widgets existieren tatsächlich

* RSS-Feed-Widget - um einen einzelnen Feed anzuzeigen
* RSS-Feed-Multi-Widget - um mehrere aggregierte Feeds in einem Widget anzuzeigen.
* RSS-Feed-Meta-Helfer - ein Helfer-Widget zum Überprüfen der Metadaten eines Feeds
* RSS-Feed-Artikel-Helfer - ein Helfer-Widget zum Überprüfen der Artikeldaten eines Feeds
* RSS-Feed-Marquee - ein Widget, um die Schlagzeilen eines Feeds als Marquee anzuzeigen
* JSON-Vorlage - ein Widget, das nichts mit RSS-Feeds zu tun hat, aber Sie können eine benutzerdefinierte Vorlage definieren, um beliebige JSON-Daten in vis anzuzeigen.

Dokumentation für die vis-Widgets sind in vis oder [Widget-Dokumentation/deutsch](https://htmlpreview.github.io/?https://github.com/oweitman/ioBroker.rssfeed/blob/master/widgets/rssfeed/doc.html) verfügbar.

## Vorlage basierend auf Beispielen
Ein Beispiel, das ich mit den folgenden RSS-Feeds getestet habe:

* http://www.tagesschau.de/xml/rss2
* https://www.bild.de/rssfeeds/rss3-20745882,feed=alles.bild.html

```
<%= meta.title %>
<% articles.forEach(function(item){ %>
<p><small><%- vis.formatDate(item.pubdate, "TT.MM.JJJJ SS:mm") %></small></p>
<h3><%- item.title %></h3>
<p><%- item.description %></p>
<div style="clear:both;" />
<% }); %>
```

Das Vorlagensystem arbeitet mit bestimmten Tags.
Die verwendeten Tags bedeuten Folgendes

| tag | Beschreibung |
| ----- | --------------------------------------------------------------------- |
| <%= | Der Inhalt des enthaltenen Ausdrucks/der Variablen wird maskiert. |
| <%- | Der Inhalt des enthaltenen Ausdrucks/der Variablen ist nicht maskiert. |
| <% | Keine Ausgabe, wird für beiliegende Javascript-Anweisungen verwendet |
| %> | ist im Allgemeinen ein schließendes Tag, um eines der vorherigen zu vervollständigen |

Alles, was sich außerhalb dieser Tags befindet, wird genau so angezeigt, wie es ist oder wenn es sich um HTML handelt, das als HTML interpretiert wird. (siehe z.B. p-tag, div-tag, small-tag Innerhalb des Templates stehen Ihnen 2 vordefinierte Variablen zur Verfügung

#### Meta
Diese enthält alle Metainformationen zum Feed. Folgende Inhalte stehen zur Verfügung. Ich denke die Bezeichner sind selbsterklärend. In der Hilfe werde ich sie genauer beschreiben. oder geben Sie den Inhalt an (einige sind Arrays) meta.title meta.description meta.link meta.xmlurl meta.date meta.pubdate meta.author meta.language meta.image meta.favicon meta.copyright meta.generator meta.categories

#### Artikel
Ist ein Array mit einzelnen Elementen (Javascript-Array). Jedes Element hat die folgenden Eigenschaften.
Damit es zum Beispiel passt, mache ich das Präfix-Item davor. Aber wenn Sie möchten, können Sie das selbst wählen. Es muss nur in der Schleife (forEach) entsprechend benannt werden. Auch hier sind die Bezeichner selbsterklärend. Nicht alle Attribute werden in jedem Feed ausgefüllt. Die wichtigsten sind bereits in der obigen Vorlage enthalten.

item.title item.description item.summary item.link item.origlink item.permalink item.date item.pubdate item.author item.guid item.comments item.image item.categories item.source item.enclosures

## Vorlagenbeispiel und detaillierte Beschreibung
```
<%= meta.title %>
<% articles.forEach(function(item){ %>
<p><small><%- vis.formatDate(item.pubdate, "TT.MM.JJJJ SS:mm") %></small></p>
<h3><%- item.title %></h3>
<p><%- item.description %></p>
<div style="clear:both;" />
<% }); %>
```

Kurzbeschreibung was in den einzelnen Zeilen passiert Z1: Die Ausgabe des Feedtitels Z2: Ohne Ausgabe. Javascript-Befehl zum Schleifen aller Artikel, bei jedem Zug wird dem variablen Element das aktuelle Element zugewiesen.
Z3: Ausgabe von Datum und Uhrzeit ist. Es ist mit einem p / small-Tag zur Formatierung beigefügt. Zur Formatierung wird die vis-eigene Datumsformatfunktion verwendet. Beschreibung finden Sie im Adapter vis.
Z4: Die Ausgabe des Artikeltitels. Zur Formatierung wird ein Header 3 - Tag verwendet.
Z5: Ausgabe des Inhalts des Artikels. Es ist mit einem p-Tag versehen. Hier ist zumindest in den beiden Beispielen HTML-Code enthalten, der in der Regel mit Bild und Beschreibungstext geliefert wird Z6: Ausgabe eines div-Tags, das spezielle Formatierungen im Feed-html löscht (in beiden Beispielen für tagesschau und bild wird es benötigt. Anderes Futter brauchte es vielleicht nicht.
Z7: Ohne Ausgang. Diese Zeile schloss die Javascript-Schleife. Alles, was zwischen Z2 und Z7 definiert wurde, wird für jeden einzelnen Artikel wiederholt.

## Machen
* Bereinigen Sie nicht verwendete Einträge in Datenpunkt info.lastRequest durch Speichern im Admin-Dialog.
* Schaltfläche zum Bereinigen nicht verwendeter Datenpunkte im Admin-Dialog
* ~~Multi-Widget-RSS-Feeds~~
* ~~Multi-Widget-Festzelt~~
* ~~Weitere Datenpunkte im Template verfügbar machen.~~
* ~~Widget für Laufschrift mit den Titeln https://forum.iobroker.net/topic/31242/nachrichten-ticker-newsticker-via-php-in-vis-einbinden/2~~

## Changelog

### 0.9.0
* fix/extend json template
### 0.8.0
* adapt configuration pages to react. 
* Prepare for stable release
### 0.0.30
* add some template examples to the widget documentation
### 0.0.29
* improve error messages
* remove deprecated widget / change widget beta flag
* change createObject/setState logic due iobroker-controller >3.0
### 0.0.28
* remove customtab
### 0.0.27
* adapter configuration is now editable
### 0.0.26
* correct changelog size 
### 0.0.25
* the error messages for the template are improved 
### 0.0.24
* errors in the request of feeds are now real errors in the iobroker log
* loading of rules for ejs in the editor is improved 
* marquee3 widget: options to show time and date
### 0.0.23
* republish to npm
### 0.0.22
* improvements in the configuration dialog
* remove unused admintab
* new RSS Feed multi widget. in this widget you can add your one or more datapoints, that are available in the template.
* New marquee widget 3 replaces the existing marquee widget 2.The marquee widget 3 is now a multi widget and can handle more than one feed. The Headlines are now aggregated.
* the existing widget JSON template is improved. in this widget you can add your one or more datapoints, that are available in the template.
* Remove several deprecated widgets (RSS Feed widget 1, Article Helper 1, Marquee 1, JSON template 1)
### 0.0.21
* add link option to marquee widget
* widget help added 
* marquee widget: the divider characters (default: +++) are configurable
### 0.0.20
* add ejs syntax to template editor
### 0.0.19
* try to fix marquee widget.
### 0.0.18
* try to fix the wrong NoSave dialog
### 0.0.17
* rework setting objects and states
### 0.0.16
* improve logic adding rssfeed in configuration dialog
* fix wrong icon for marquee widget
* define default template for rssfeed widget
* deprecate existing and replace with new version of widgets to improve naming of the attributes in case of translation
* widget rss marquee: replace duration attribute with speed attribute and improved the calculation algorithm. now same number is same speed regardless of the length of the titles
### 0.0.15
* fix bug saving last request in adapter configuration / improve debug messages
### 0.0.14
* update package.json and install new tools for stream encoding/decoding detection
* implement encoding detection and stream encoding
* change the ejs lib with a real browserified lib
### 0.0.13
* new widget as a guest, because it is not directly related to the rssfeed functionality, but reuse the same code base. maybe later i transfer it to an own adapter. the new widget can take a json datapoint and you can visualize the data with the ejs template system.
### 0.0.12
* now you can download the adapter configuration in the admin dialog. upload is not possible due to security restrictions in modern browsers.
### 0.0.11
* improve admin layout
* implement a forceRefresh button
### 0.0.10
* fix bug a bug in marquee widget. not all styles should applied to the span tag.
### 0.0.9
* apply widget styles also to the inner span element, because they had not any effect on the marquee.
* renew the package-lock.json
* add categories to save feeds in subfolders
* improve mechanism to write only updated feeds to datapoint. the feed has new data if comparision of articles in title and description is different.
### 0.0.8
* improve lasrequest logic of the adapter
* fix problem with datapoint naming
### 0.0.7
* test with encapsulation of ejs.js, becaus of error in some browsers
### 0.0.6
* add attribute duration for widget marquee to control animation duration
### 0.0.5
* new widget marquee for article titles
* add filter function for articles. the filter searchs in title,description and categories, seceral filter criteria can be seperated by semicolon
### 0.0.4
* some adjustments in readme, io-package
### 0.0.3
* add addveyor build
### 0.0.2
* added widgets meta helper and article helper
### 0.0.1
* initial release

## License
MIT License

Copyright (c) 2021 oweitman <oweitman@gmx.de>

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