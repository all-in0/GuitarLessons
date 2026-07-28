# Електрогітара — практичний курс

Статичний сайт для GitHub Pages. Без збірки, без залежностей — усе працює з файлів.

## Запуск

**GitHub Pages:** Settings → Pages → Source: `Deploy from a branch` → `main` / `root`.

**Локально:**
```
python3 -m http.server 8000
```
Відкрити `http://localhost:8000`. Просто `file://` теж працює, крім кількох дрібниць.

## Структура

```
index.html              карта курсу (гриф = прогрес по модулях)
lessons/                по одному файлу на урок
  _template.html        шаблон — з нього копіюємо новий урок
songs/                  розбори пісень
  index.html            каталог із фільтром за жанром
  _template.html        шаблон розбору
reference/              довідник: те, до чого повертаємось щодня
tools/metronome.html    метроном
assets/js/course-data.js  ← єдиний файл, який редагуємо при додаванні контенту
assets/js/notation.js     ноти, таби, гриф, акорди
assets/js/progress.js     прогрес у localStorage
assets/js/shell.js        верхня панель, нижня навігація, «пройдено»
assets/js/home.js         головний екран
assets/css/style.css      стилі
```

## Додати урок

1. `cp lessons/_template.html lessons/m1l3-alternate.html`
2. У новому файлі: `data-lesson="m1l3"`, `data-title`, `<title>`, вміст `<article>`.
3. У `assets/js/course-data.js` знайти урок і змінити `status: "planned"` → `"ready"`.

Урок одразу з'явиться активним на головній. Порядок і назви можна міняти в `course-data.js` — сторінки правити не треба.

## Додати пісню

Так само, але з `songs/_template.html`, і запис у масив `songs` у `course-data.js`.
Поле `level` — номер модуля, після якого пісня стає посильною.

## Малювалки в уроках

Все через `data-` атрибути, JS підхоплює автоматично:

```html
<div data-staff='{"meter":"4/4","notes":[{"n":"E4","d":4},{"n":"F#4","d":8},{"rest":true,"d":4},{"bar":true}]}'></div>
<div data-fretboard='{"from":1,"to":5,"dots":[{"s":1,"f":3,"label":"3"}]}'></div>
<div data-chord='{"name":"Em","frets":[0,2,2,0,0,0],"fingers":[0,2,3,0,0,0]}'></div>
<div data-tab="e|--0--2--|"></div>
```

- `n` — нота, `d` — тривалість (1, 2, 4, 8, 16), `rest` — пауза, `bar` — тактова риска
- `s` — струна (1 = тонка мі, 6 = товста мі), `f` — лад
- `frets` в акорді — від 6-ї струни до 1-ї, `"x"` = глушити, `0` = відкрита

## Прогрес

Зберігається в `localStorage` браузера на конкретному пристрої. Перенести на інший
пристрій можна через `Progress.exportJson()` / `Progress.importJson(text)` у консолі.

## Авторські права

Повні таби й тексти пісень у репозиторії не зберігаємо. Розбори — власний аналіз
структури та вправи, з посиланнями на легальні джерела табів.
