/* Спільний каркас сторінки: верхня панель, нижня навігація,
   блок «урок пройдено» і перехід до наступного уроку.
   Кожна сторінка вказує <body data-page="..." data-lesson="ID"> */

(function () {
  const BASE = document.documentElement.getAttribute("data-base") || "";
  const body = document.body;
  const page = body.getAttribute("data-page") || "";

  /* ── Пласкі списки для навігації ── */
  const allLessons = [];
  if (window.COURSE) {
    COURSE.modules.forEach(function (m) {
      m.lessons.forEach(function (l) {
        allLessons.push(Object.assign({ moduleId: m.id, moduleNum: m.num }, l));
      });
    });
  }
  window.ALL_LESSONS = allLessons;

  /* ── Верхня панель ── */
  function topbar() {
    const title = body.getAttribute("data-title");
    if (!title) return;
    const back = body.getAttribute("data-back");
    const bar = document.createElement("header");
    bar.className = "topbar";
    bar.innerHTML =
      '<div class="topbar__inner">' +
      (back ? '<a class="topbar__back" href="' + back + '">← Назад</a>' : "") +
      '<h2 class="topbar__title">' + title + "</h2>" +
      "</div>";
    body.insertBefore(bar, body.firstChild);
  }

  /* ── Нижня навігація ── */
  function tabbar() {
    const items = [
      { key: "course", icon: "▮", label: "Курс", href: BASE + "index.html" },
      { key: "songs", icon: "♪", label: "Пісні", href: BASE + "songs/index.html" },
      { key: "reference", icon: "≡", label: "Довідник", href: BASE + "reference/index.html" },
      { key: "tools", icon: "◷", label: "Метроном", href: BASE + "tools/metronome.html" }
    ];
    const nav = document.createElement("nav");
    nav.className = "tabbar";
    nav.innerHTML =
      '<div class="tabbar__inner">' +
      items.map(function (i) {
        const cur = i.key === page ? ' aria-current="page"' : "";
        return '<a href="' + i.href + '"' + cur + '><span class="tabbar__icon" aria-hidden="true">' +
          i.icon + "</span>" + i.label + "</a>";
      }).join("") +
      "</div>";
    body.appendChild(nav);
  }

  /* ── Блок завершення уроку ── */
  function finishBlock() {
    const id = body.getAttribute("data-lesson");
    if (!id) return;
    const host = document.querySelector("[data-finish]");
    if (!host) return;

    const saved = Progress.get(id) || {};
    const idx = allLessons.findIndex(function (l) { return l.id === id; });
    const next = allLessons[idx + 1];

    host.innerHTML =
      '<div class="finish">' +
      '<p class="finish__title">Заняття завершено?</p>' +
      '<div class="field">' +
      '<label for="bpm">Мій темп сьогодні</label>' +
      '<input id="bpm" type="number" min="30" max="300" step="1" value="' + (saved.bpm || "") + '" placeholder="BPM">' +
      "</div>" +
      '<button class="btn" id="markDone">' + (saved.done ? "Пройдено ✓" : "Позначити пройденим") + "</button>" +
      "</div>" +
      '<div class="pager">' +
      '<a class="btn btn--ghost" href="' + BASE + 'index.html">До карти курсу</a>' +
      (next && next.status === "ready" ? '<a class="btn btn--ghost" href="' + BASE + next.file + '">Наступний урок →</a>' : "") +
      "</div>";

    const btn = host.querySelector("#markDone");
    const bpm = host.querySelector("#bpm");
    if (saved.done) btn.classList.add("btn--done");

    btn.addEventListener("click", function () {
      const isDone = !Progress.isDone(id);
      Progress.setDone(id, isDone, bpm.value ? { bpm: Number(bpm.value) } : {});
      btn.textContent = isDone ? "Пройдено ✓" : "Позначити пройденим";
      btn.classList.toggle("btn--done", isDone);
    });

    bpm.addEventListener("change", function () {
      if (bpm.value) Progress.setBpm(id, Number(bpm.value));
    });
  }

  topbar();
  tabbar();
  finishBlock();
})();
