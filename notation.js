/* ── Токени ─────────────────────────────────────────────── */
:root {
  --tolex: #1B1220;
  --panel: #26192D;
  --panel-2: #33223B;
  --line: #4A3355;
  --inlay: #F3EADD;
  --dim: rgba(243, 234, 221, 0.58);
  --amber: #FFB14A;
  --sunburst: #D4483F;
  --mint: #57C7B0;

  --r: 14px;
  --pad: 18px;
  --maxw: 860px;

  --f-display: "Unbounded", system-ui, sans-serif;
  --f-body: "Onest", system-ui, sans-serif;
  --f-mono: "JetBrains Mono", ui-monospace, monospace;
  --f-music: "Noto Music", serif;
}

* { box-sizing: border-box; }

html, body { margin: 0; padding: 0; }

body {
  background: var(--tolex);
  color: var(--inlay);
  font-family: var(--f-body);
  font-size: 17px;
  line-height: 1.6;
  -webkit-text-size-adjust: 100%;
  padding-bottom: 84px;
}

a { color: var(--amber); text-decoration: none; }
a:hover { text-decoration: underline; }

:focus-visible {
  outline: 3px solid var(--amber);
  outline-offset: 2px;
  border-radius: 4px;
}

.wrap {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 var(--pad);
}

/* ── Верхня панель ──────────────────────────────────────── */
.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(27, 18, 32, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.topbar__inner {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 10px var(--pad);
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 52px;
}

.topbar__back {
  font-size: 15px;
  color: var(--dim);
  white-space: nowrap;
}

.topbar__title {
  font-family: var(--f-display);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ── Головний екран ─────────────────────────────────────── */
.hero { padding: 26px 0 8px; }

.hero__eyebrow {
  font-family: var(--f-mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--amber);
  margin: 0 0 6px;
}

.hero__title {
  font-family: var(--f-display);
  font-weight: 700;
  font-size: clamp(30px, 9vw, 52px);
  line-height: 1.02;
  letter-spacing: -0.03em;
  margin: 0 0 10px;
}

.hero__lead {
  color: var(--dim);
  margin: 0 0 18px;
  max-width: 44ch;
}

/* Гриф-навігатор: підпис лада = номер модуля, інлей = прогрес */
.neck { width: 100%; height: auto; display: block; }
.neck__wood { fill: var(--panel); }
.neck__nut { fill: var(--inlay); }
.neck__fret { stroke: var(--line); stroke-width: 2; }
.neck__string { stroke: rgba(243, 234, 221, 0.22); stroke-width: 1; }
.neck__dot-bg { fill: none; stroke: var(--line); stroke-width: 2; }
.neck__dot-fill { fill: var(--amber); }
.neck__num {
  font-family: var(--f-mono);
  font-size: 13px;
  fill: var(--dim);
  text-anchor: middle;
}
.neck__hit { fill: transparent; cursor: pointer; }
.neck__hit:hover + .neck__num, .neck__hit:focus-visible + .neck__num { fill: var(--inlay); }

.stats {
  display: flex;
  gap: 10px;
  margin: 18px 0 4px;
}

.stat {
  flex: 1;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 12px;
  text-align: center;
}

.stat__num {
  font-family: var(--f-display);
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
}

.stat__label {
  font-size: 12px;
  color: var(--dim);
  margin-top: 4px;
}

/* ── Секції та картки ───────────────────────────────────── */
.section { margin: 32px 0; }

.section__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.section__title {
  font-family: var(--f-display);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
}

.module {
  background: var(--panel);
  border: 1px solid var(--line);
  border-left: 4px solid var(--amber);
  border-radius: var(--r);
  margin-bottom: 14px;
  overflow: hidden;
}

.module--done { border-left-color: var(--mint); }

.module__head {
  width: 100%;
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.module__num {
  font-family: var(--f-mono);
  font-size: 13px;
  color: var(--amber);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 3px 8px;
  flex: none;
}

.module__name {
  font-family: var(--f-display);
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.01em;
  flex: 1;
}

.module__count {
  font-family: var(--f-mono);
  font-size: 13px;
  color: var(--dim);
  flex: none;
}

.module__body { padding: 0 16px 8px; display: none; }
.module--open .module__body { display: block; }

.module__goal {
  color: var(--dim);
  font-size: 15px;
  margin: 0 0 12px;
  padding-left: 2px;
}

.lesson {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 0;
  border-top: 1px solid var(--line);
  color: var(--inlay);
}
.lesson:hover { text-decoration: none; }

.lesson__mark {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid var(--line);
  flex: none;
  display: grid;
  place-items: center;
  font-size: 12px;
}

.lesson--done .lesson__mark {
  border-color: var(--mint);
  background: var(--mint);
  color: var(--tolex);
}

.lesson__title { flex: 1; font-size: 15.5px; }
.lesson__min { font-family: var(--f-mono); font-size: 12px; color: var(--dim); flex: none; }

.lesson--soon { color: var(--dim); pointer-events: none; }
.lesson--soon .lesson__min { color: var(--line); }

/* ── Сітка довідника й пісень ───────────────────────────── */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
}

.tile {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 14px;
  display: block;
  color: var(--inlay);
}
.tile:hover { text-decoration: none; border-color: var(--amber); }

.tile__title {
  font-family: var(--f-display);
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 4px;
}

.tile__desc { font-size: 13.5px; color: var(--dim); }

.song {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 13px 14px;
  margin-bottom: 10px;
  color: var(--inlay);
}
.song:hover { text-decoration: none; border-color: var(--amber); }
.song--soon { opacity: 0.5; pointer-events: none; }

.song__meta { flex: 1; min-width: 0; }
.song__title { font-family: var(--f-display); font-weight: 700; font-size: 15px; }
.song__artist { font-size: 13px; color: var(--dim); }

.badge {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 3px 9px;
  color: var(--dim);
  flex: none;
}
.badge--amber { color: var(--amber); border-color: var(--amber); }
.badge--mint { color: var(--mint); border-color: var(--mint); }

.filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }

.chip {
  font-family: var(--f-mono);
  font-size: 13px;
  background: none;
  border: 1px solid var(--line);
  color: var(--dim);
  border-radius: 999px;
  padding: 6px 13px;
  cursor: pointer;
}
.chip[aria-pressed="true"] { color: var(--tolex); background: var(--amber); border-color: var(--amber); }

/* ── Контент уроку ──────────────────────────────────────── */
.lesson-page h1 {
  font-family: var(--f-display);
  font-size: clamp(24px, 6.5vw, 34px);
  line-height: 1.12;
  letter-spacing: -0.025em;
  margin: 24px 0 8px;
}

.lesson-page h2 {
  font-family: var(--f-display);
  font-size: 19px;
  letter-spacing: -0.015em;
  margin: 32px 0 10px;
}

.lesson-page h3 {
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 16.5px;
  margin: 22px 0 6px;
}

.lesson-page p { margin: 0 0 14px; }
.lesson-page ul, .lesson-page ol { margin: 0 0 16px; padding-left: 22px; }
.lesson-page li { margin-bottom: 7px; }

.goalbox {
  background: var(--panel);
  border: 1px solid var(--line);
  border-left: 4px solid var(--amber);
  border-radius: var(--r);
  padding: 14px 16px;
  margin: 16px 0 24px;
}

.goalbox__label {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--amber);
  display: block;
  margin-bottom: 4px;
}

.note, .warn, .why {
  border-radius: var(--r);
  padding: 13px 15px;
  margin: 16px 0;
  font-size: 15.5px;
  border: 1px solid var(--line);
  background: var(--panel);
}
.warn { border-left: 4px solid var(--sunburst); }
.why { border-left: 4px solid var(--mint); }
.note { border-left: 4px solid var(--line); }

.note__label, .warn__label, .why__label {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 4px;
  color: var(--dim);
}
.warn__label { color: var(--sunburst); }
.why__label { color: var(--mint); }

/* Вправа */
.drill {
  background: var(--panel-2);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 16px;
  margin: 18px 0;
}

.drill__head {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 8px;
}

.drill__num {
  font-family: var(--f-mono);
  font-size: 12px;
  color: var(--amber);
}

.drill__title { font-family: var(--f-display); font-weight: 700; font-size: 16px; }

.drill__spec {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0;
}

.spec {
  font-family: var(--f-mono);
  font-size: 12px;
  background: var(--tolex);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 4px 9px;
  color: var(--dim);
}
.spec b { color: var(--inlay); font-weight: 700; }

.done-when {
  border-top: 1px dashed var(--line);
  margin-top: 12px;
  padding-top: 10px;
  font-size: 14.5px;
  color: var(--dim);
}
.done-when b { color: var(--mint); }

/* Нотація */
.figure { margin: 18px 0; }
.figure__cap { font-size: 13.5px; color: var(--dim); margin-top: 6px; }

.staff-box, .tab-box, .fb-box {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 12px;
  overflow-x: auto;
}

.staff-box svg, .fb-box svg { display: block; min-width: 280px; }

.tab-box pre {
  font-family: var(--f-mono);
  font-size: 13px;
  line-height: 1.7;
  margin: 0;
  white-space: pre;
  color: var(--inlay);
}

/* Підсумок уроку */
.finish {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 18px;
  margin: 34px 0 10px;
}

.finish__title { font-family: var(--f-display); font-weight: 700; font-size: 17px; margin: 0 0 12px; }

.field { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
.field label { font-size: 14.5px; color: var(--dim); }

input[type="number"], input[type="text"] {
  font-family: var(--f-mono);
  font-size: 16px;
  background: var(--tolex);
  border: 1px solid var(--line);
  color: var(--inlay);
  border-radius: 10px;
  padding: 9px 12px;
  width: 92px;
}

.btn {
  font-family: var(--f-display);
  font-weight: 700;
  font-size: 15px;
  background: var(--amber);
  color: var(--tolex);
  border: 0;
  border-radius: 12px;
  padding: 13px 20px;
  cursor: pointer;
  width: 100%;
}
.btn:active { transform: translateY(1px); }
.btn--ghost { background: none; border: 1px solid var(--line); color: var(--inlay); }
.btn--done { background: var(--mint); }

.pager { display: flex; gap: 10px; margin: 18px 0 8px; }
.pager a { flex: 1; text-align: center; }

/* ── Нижня навігація ────────────────────────────────────── */
.tabbar {
  position: fixed;
  left: 0; right: 0; bottom: 0;
  z-index: 30;
  background: rgba(27, 18, 32, 0.96);
  backdrop-filter: blur(12px);
  border-top: 1px solid var(--line);
  padding-bottom: env(safe-area-inset-bottom);
}

.tabbar__inner {
  max-width: var(--maxw);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.tabbar a {
  padding: 10px 4px 12px;
  text-align: center;
  color: var(--dim);
  font-size: 11.5px;
  font-family: var(--f-mono);
  letter-spacing: 0.03em;
}
.tabbar a:hover { text-decoration: none; }
.tabbar a[aria-current="page"] { color: var(--amber); }
.tabbar__icon { display: block; font-size: 19px; line-height: 1.2; }

/* ── Метроном ───────────────────────────────────────────── */
.metro { text-align: center; padding: 20px 0 8px; }

.metro__bpm {
  font-family: var(--f-display);
  font-weight: 700;
  font-size: clamp(60px, 22vw, 108px);
  line-height: 1;
  letter-spacing: -0.04em;
}

.metro__label { font-family: var(--f-mono); font-size: 12px; letter-spacing: 0.2em; color: var(--dim); text-transform: uppercase; }

.metro__beats { display: flex; justify-content: center; gap: 12px; margin: 22px 0; }

.beat {
  width: 16px; height: 16px;
  border-radius: 50%;
  border: 2px solid var(--line);
}
.beat--on { background: var(--amber); border-color: var(--amber); }
.beat--first.beat--on { background: var(--sunburst); border-color: var(--sunburst); }

.metro__row { display: flex; gap: 10px; align-items: center; justify-content: center; margin: 14px 0; }

.round {
  width: 54px; height: 54px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: var(--panel);
  color: var(--inlay);
  font-size: 22px;
  cursor: pointer;
}

input[type="range"] { width: 100%; accent-color: var(--amber); }

@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}

@media (min-width: 700px) {
  body { font-size: 18px; }
  .grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }
}
