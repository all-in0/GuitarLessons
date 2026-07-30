/* Єдине джерело правди для всього курсу.
   Щоб додати урок: створи файл у lessons/ і додай запис сюди зі status: "ready".
   status: "ready" — урок згенеровано; "planned" — заплановано, картка неактивна. */

window.COURSE = {
  title: "Електрогітара",
  subtitle: "Практичний курс",
  modules: [
    {
      id: "m0",
      num: 0,
      title: "Старт: гітара, комбік, звук",
      goal: "Зібрати робоче місце, дістати перший чистий звук і навчитися налаштовувати гітару самостійно.",
      lessons: [
        { id: "m0l1", title: "Електрогітара зсередини: що тут для чого", min: 35, file: "lessons/m0l1-anatomy.html", status: "ready" },
        { id: "m0l2", title: "Комбік: gain, volume, tone і безпечна гучність", min: 35, file: "lessons/m0l2-amp.html", status: "ready" },
        { id: "m0l3", title: "Посадка, ремінь, положення рук", min: 40, file: "lessons/m0l3-posture.html", status: "ready" },
        { id: "m0l4", title: "Медіатор: хват і перший удар", min: 40, file: "lessons/m0l4-pick.html", status: "ready" },
        { id: "m0l5", title: "Настройка гітари й догляд за струнами", min: 40, file: "lessons/m0l5-tuning.html", status: "ready" }
      ]
    },
    {
      id: "m1",
      num: 1,
      title: "Медіатор і перші мелодії",
      goal: "Рівний удар медіатором під метроном і перша впізнавана одноголоса тема.",
      lessons: [
        { id: "m1l1", title: "Удари вниз: чверті під метроном", min: 35, file: "lessons/m1l1-downstrokes.html", status: "ready" },
        { id: "m1l2", title: "Перехід між сусідніми струнами", min: 35, file: "lessons/m1l2-string-change.html", status: "ready" },
        { id: "m1l3", title: "Alternate picking: вниз-вгору", min: 40, file: "lessons/m1l3-alternate.html", status: "ready" },
        { id: "m1l4", title: "Ліва рука: пальці 1-2-3-4, хроматика", min: 35, file: "lessons/m1l4-left-hand.html", status: "ready" },
        { id: "m1l5", title: "Табулатура: як читати", min: 30, file: "lessons/m1l5-tab.html", status: "ready" },
        { id: "m1l6", title: "Нотний стан і скрипковий ключ", min: 40, file: "lessons/m1l6-staff.html", status: "ready" },
        { id: "m1l7", title: "Ноти на 1-й та 2-й струнах", min: 40, file: "lessons/m1l7-notes-e-b.html", status: "ready" },
        { id: "m1l8", title: "Перша мелодія цілком", min: 45, file: "lessons/m1l8-first-melody.html", status: "ready" },
        { id: "m1l9", title: "Чекпоінт модуля", min: 30, file: "lessons/m1l9-checkpoint.html", status: "ready" }
      ]
    },
    {
      id: "m2",
      num: 2,
      title: "Ритм і рахунок",
      goal: "Тримати долю самостійно: тривалості, паузи, гра під бекінг-трек.",
      lessons: [
        { id: "m2l1", title: "Тривалості: ціла, половинна, чверть", min: 35, file: "lessons/m2l1-durations.html", status: "planned" },
        { id: "m2l2", title: "Восьмі та розмір 4/4", min: 40, file: "lessons/m2l2-eighths.html", status: "planned" },
        { id: "m2l3", title: "Паузи: тиша теж грається", min: 35, file: "lessons/m2l3-rests.html", status: "planned" },
        { id: "m2l4", title: "Точність атаки та рівність звуку", min: 35, file: "lessons/m2l4-accuracy.html", status: "planned" },
        { id: "m2l5", title: "Проста синкопа", min: 40, file: "lessons/m2l5-syncopation.html", status: "planned" },
        { id: "m2l6", title: "Гра під бекінг-трек", min: 40, file: "lessons/m2l6-backing.html", status: "planned" },
        { id: "m2l7", title: "Чекпоінт модуля", min: 30, file: "lessons/m2l7-checkpoint.html", status: "planned" }
      ]
    },
    {
      id: "m3",
      num: 3,
      title: "Пауер-акорди та рифи",
      goal: "Грати рифи з палм-мютом і міняти пауер-акорди в темпі без зупинок.",
      lessons: [
        { id: "m3l1", title: "Пауер-акорд: форма з двох пальців", min: 35, file: "lessons/m3l1-powerchord.html", status: "planned" },
        { id: "m3l2", title: "Переміщення форми по грифу", min: 35, file: "lessons/m3l2-moving.html", status: "planned" },
        { id: "m3l3", title: "Палм-мют", min: 40, file: "lessons/m3l3-palm-mute.html", status: "planned" },
        { id: "m3l4", title: "Перший риф", min: 45, file: "lessons/m3l4-first-riff.html", status: "planned" },
        { id: "m3l5", title: "Форма з трьох звуків", min: 35, file: "lessons/m3l5-three-note.html", status: "planned" },
        { id: "m3l6", title: "Зміна акордів у темпі", min: 40, file: "lessons/m3l6-changes.html", status: "planned" },
        { id: "m3l7", title: "Рок-риф із мютом і акцентами", min: 45, file: "lessons/m3l7-riff-mute.html", status: "planned" },
        { id: "m3l8", title: "Чекпоінт модуля", min: 30, file: "lessons/m3l8-checkpoint.html", status: "planned" }
      ]
    },
    {
      id: "m4",
      num: 4,
      title: "Чистий звук: глушіння і динаміка",
      goal: "Прибрати шум і навчитися грати тихо й гучно свідомо, а не як вийде.",
      lessons: [
        { id: "m4l1", title: "Звідки беруться шуми", min: 30, file: "lessons/m4l1-noise.html", status: "planned" },
        { id: "m4l2", title: "Глушіння правою рукою", min: 40, file: "lessons/m4l2-right-mute.html", status: "planned" },
        { id: "m4l3", title: "Глушіння лівою рукою", min: 40, file: "lessons/m4l3-left-mute.html", status: "planned" },
        { id: "m4l4", title: "Динаміка: тихо, голосно, акцент", min: 35, file: "lessons/m4l4-dynamics.html", status: "planned" },
        { id: "m4l5", title: "Скільки gain насправді потрібно", min: 30, file: "lessons/m4l5-gain.html", status: "planned" },
        { id: "m4l6", title: "Чекпоінт модуля", min: 30, file: "lessons/m4l6-checkpoint.html", status: "planned" }
      ]
    },
    {
      id: "m5",
      num: 5,
      title: "Соло-техніки",
      goal: "Легато, слайд, вібрато та перші бенди — щоб мелодія співала, а не просто звучала.",
      lessons: [
        { id: "m5l1", title: "Hammer-on", min: 35, file: "lessons/m5l1-hammer.html", status: "planned" },
        { id: "m5l2", title: "Pull-off", min: 35, file: "lessons/m5l2-pulloff.html", status: "planned" },
        { id: "m5l3", title: "Легато-зв'язки", min: 40, file: "lessons/m5l3-legato.html", status: "planned" },
        { id: "m5l4", title: "Слайд", min: 35, file: "lessons/m5l4-slide.html", status: "planned" },
        { id: "m5l5", title: "Вібрато", min: 40, file: "lessons/m5l5-vibrato.html", status: "planned" },
        { id: "m5l6", title: "Бенд на півтону", min: 40, file: "lessons/m5l6-bend-half.html", status: "planned" },
        { id: "m5l7", title: "Бенд на тон і контроль строю", min: 40, file: "lessons/m5l7-bend-full.html", status: "planned" },
        { id: "m5l8", title: "Чекпоінт модуля", min: 30, file: "lessons/m5l8-checkpoint.html", status: "planned" }
      ]
    },
    {
      id: "m6",
      num: 6,
      title: "Пентатоніка та імпровізація",
      goal: "Знати гриф у першому боксі й складати власні фрази під бекінг-трек.",
      lessons: [
        { id: "m6l1", title: "Пентатоніка: перший бокс", min: 40, file: "lessons/m6l1-box1.html", status: "planned" },
        { id: "m6l2", title: "Позиції по грифу", min: 40, file: "lessons/m6l2-positions.html", status: "planned" },
        { id: "m6l3", title: "Фрази замість гам", min: 40, file: "lessons/m6l3-phrases.html", status: "planned" },
        { id: "m6l4", title: "Мінор і мажор на слух", min: 35, file: "lessons/m6l4-minor-major.html", status: "planned" },
        { id: "m6l5", title: "Імпровізація під бекінг", min: 45, file: "lessons/m6l5-improv.html", status: "planned" },
        { id: "m6l6", title: "Своє соло на 8 тактів", min: 45, file: "lessons/m6l6-own-solo.html", status: "planned" },
        { id: "m6l7", title: "Чекпоінт модуля", min: 30, file: "lessons/m6l7-checkpoint.html", status: "planned" }
      ]
    },
    {
      id: "m7",
      num: 7,
      title: "Акорди та акомпанемент",
      goal: "Супроводжувати пісню: відкриті акорди, ритмічні патерни, арпеджіо.",
      lessons: [
        { id: "m7l1", title: "Відкриті акорди: Em, Am, D", min: 40, file: "lessons/m7l1-open-1.html", status: "planned" },
        { id: "m7l2", title: "Відкриті акорди: G, C, Dm", min: 40, file: "lessons/m7l2-open-2.html", status: "planned" },
        { id: "m7l3", title: "Швидкий перехід між акордами", min: 40, file: "lessons/m7l3-transitions.html", status: "planned" },
        { id: "m7l4", title: "Ритмічні патерни правої руки", min: 40, file: "lessons/m7l4-strumming.html", status: "planned" },
        { id: "m7l5", title: "Арпеджіо медіатором", min: 40, file: "lessons/m7l5-arpeggio.html", status: "planned" },
        { id: "m7l6", title: "Акомпанемент до цілої пісні", min: 45, file: "lessons/m7l6-full-song.html", status: "planned" },
        { id: "m7l7", title: "Чекпоінт модуля", min: 30, file: "lessons/m7l7-checkpoint.html", status: "planned" }
      ]
    },
    {
      id: "m8",
      num: 8,
      title: "Музична грамота на практиці",
      goal: "Читати ноти впевнено й розуміти, чому мелодія звучить саме так.",
      lessons: [
        { id: "m8l1", title: "Інтервали: відстань між нотами", min: 40, file: "lessons/m8l1-intervals.html", status: "planned" },
        { id: "m8l2", title: "Тональність і знаки при ключі", min: 40, file: "lessons/m8l2-keys.html", status: "planned" },
        { id: "m8l3", title: "Дієзи, бемолі, бекари на грифі", min: 40, file: "lessons/m8l3-accidentals.html", status: "planned" },
        { id: "m8l4", title: "Транспонування мелодії", min: 40, file: "lessons/m8l4-transpose.html", status: "planned" },
        { id: "m8l5", title: "Слуховий тренінг", min: 35, file: "lessons/m8l5-ear.html", status: "planned" },
        { id: "m8l6", title: "Чекпоінт модуля", min: 30, file: "lessons/m8l6-checkpoint.html", status: "planned" }
      ]
    }
  ],

  /* Розбори пісень. level — з якого модуля пісня стає посильною. */
  songs: [
    { id: "s-pd-1", title: "Щедрик", artist: "Микола Леонтович", genre: "pd", level: 1, file: "songs/s-pd-1.html", status: "ready" },
    { id: "s-pd-2", title: "Ода до радості", artist: "Бетховен", genre: "pd", level: 1, file: "songs/s-pd-2.html", status: "ready" },
    { id: "s-anime-1", title: "Gurenge", artist: "LiSA — Kimetsu no Yaiba", genre: "anime", level: 3, file: "songs/s-anime-1.html", status: "planned" },
    { id: "s-anime-2", title: "Cruel Angel's Thesis", artist: "Neon Genesis Evangelion", genre: "anime", level: 2, file: "songs/s-anime-2.html", status: "planned" },
    { id: "s-anime-3", title: "Silhouette", artist: "KANA-BOON — Naruto Shippuden", genre: "anime", level: 3, file: "songs/s-anime-3.html", status: "planned" },
    { id: "s-anime-4", title: "Unravel", artist: "TK — Tokyo Ghoul", genre: "anime", level: 5, file: "songs/s-anime-4.html", status: "planned" },
    { id: "s-anime-5", title: "Blue Bird", artist: "Ikimono-gakari — Naruto Shippuden", genre: "anime", level: 3, file: "songs/s-anime-5.html", status: "planned" },
    { id: "s-ost-1", title: "Hedwig's Theme", artist: "Harry Potter", genre: "ost", level: 1, file: "songs/s-ost-1.html", status: "ready" },
    { id: "s-ost-2", title: "He's a Pirate", artist: "Pirates of the Caribbean", genre: "ost", level: 2, file: "songs/s-ost-2.html", status: "planned" },
    { id: "s-ost-3", title: "Main Theme", artist: "The Legend of Zelda", genre: "ost", level: 1, file: "songs/s-ost-3.html", status: "planned" },
    { id: "s-ost-4", title: "Megalovania", artist: "Undertale", genre: "ost", level: 4, file: "songs/s-ost-4.html", status: "planned" },
    { id: "s-rock-1", title: "Smoke on the Water", artist: "Deep Purple", genre: "rock", level: 3, file: "songs/s-rock-1.html", status: "planned" },
    { id: "s-rock-2", title: "Seven Nation Army", artist: "The White Stripes", genre: "rock", level: 1, file: "songs/s-rock-2.html", status: "ready" },
    { id: "s-rock-3", title: "Come As You Are", artist: "Nirvana", genre: "rock", level: 2, file: "songs/s-rock-3.html", status: "planned" },
    { id: "s-rock-4", title: "Iron Man", artist: "Black Sabbath", genre: "rock", level: 3, file: "songs/s-rock-4.html", status: "planned" },
    { id: "s-pop-1", title: "Believer", artist: "Imagine Dragons", genre: "pop", level: 3, file: "songs/s-pop-1.html", status: "planned" }
  ],

  genres: {
    pd: "Повні розбори",
    anime: "Аніме",
    ost: "Саундтреки",
    rock: "Рок",
    pop: "Поп"
  },

  reference: [
    { title: "Настройка гітари", desc: "Строй, порядок струн, як не зірвати", file: "reference/tuning.html" },
    { title: "Таби", desc: "Як читати табулатуру і всі її значки", file: "reference/tabs.html" },
    { title: "Ноти", desc: "Нотний стан, тривалості, ноти на грифі", file: "reference/notes.html" },
    { title: "Гриф", desc: "Карта нот, лади, орієнтири", file: "reference/fretboard.html" },
    { title: "Акорди", desc: "Відкриті акорди та пауер-акорди", file: "reference/chords.html" },
    { title: "Техніки", desc: "Палм-мют, бенд, слайд, легато, вібрато", file: "reference/techniques.html" },
    { title: "Розігрів", desc: "5 хвилин перед кожним заняттям", file: "reference/warmup.html" }
  ]
};
