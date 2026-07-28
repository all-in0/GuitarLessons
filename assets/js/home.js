/* Головний екран: гриф-навігатор, статистика, список модулів */

(function () {
  const neckHost = document.getElementById("neck");
  const listHost = document.getElementById("modules");
  const statsHost = document.getElementById("stats");
  const NS = "http://www.w3.org/2000/svg";

  function ratio(m) {
    const ids = m.lessons.map(function (l) { return l.id; });
    return ids.length ? Progress.doneCount(ids) / ids.length : 0;
  }

  /* Гриф: один лад = один модуль, інлей заповнюється разом із прогресом */
  function drawNeck() {
    const mods = COURSE.modules;
    const PAD = 26, FW = 92, TOP = 18, SH = 17, W = PAD + mods.length * FW + 14, H = TOP + 5 * SH + 44;
    const s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", "0 0 " + W + " " + H);
    s.setAttribute("class", "neck");
    s.setAttribute("role", "img");
    s.setAttribute("aria-label", "Карта курсу у вигляді грифа гітари");

    function n(tag, a, t) {
      const e = document.createElementNS(NS, tag);
      for (const k in a) e.setAttribute(k, a[k]);
      if (t != null) e.textContent = t;
      return e;
    }

    s.appendChild(n("rect", { class: "neck__wood", x: PAD, y: TOP - 7, width: mods.length * FW, height: 5 * SH + 14, rx: 3 }));
    s.appendChild(n("rect", { class: "neck__nut", x: PAD - 5, y: TOP - 9, width: 5, height: 5 * SH + 18, rx: 2 }));

    for (let i = 0; i < 6; i++) {
      const y = TOP + i * SH;
      s.appendChild(n("line", { class: "neck__string", x1: PAD, x2: PAD + mods.length * FW, y1: y, y2: y }));
    }

    mods.forEach(function (m, i) {
      const x0 = PAD + i * FW;
      s.appendChild(n("line", { class: "neck__fret", x1: x0 + FW, x2: x0 + FW, y1: TOP - 7, y2: TOP + 5 * SH + 7 }));

      const cx = x0 + FW / 2, cy = TOP + 2.5 * SH, r = 13;
      const p = ratio(m);
      s.appendChild(n("circle", { class: "neck__dot-bg", cx: cx, cy: cy, r: r }));
      if (p > 0) {
        const clipId = "clip" + m.id;
        const cp = document.createElementNS(NS, "clipPath");
        cp.setAttribute("id", clipId);
        cp.appendChild(n("rect", { x: cx - r, y: cy + r - 2 * r * p, width: 2 * r, height: 2 * r * p }));
        s.appendChild(cp);
        s.appendChild(n("circle", { class: "neck__dot-fill", cx: cx, cy: cy, r: r - 1, "clip-path": "url(#" + clipId + ")" }));
      }

      const hit = n("rect", { class: "neck__hit", x: x0, y: 0, width: FW, height: H, tabindex: "0", role: "link" });
      hit.setAttribute("aria-label", "Модуль " + m.num + ": " + m.title);
      function go() {
        const card = document.getElementById(m.id);
        if (card) {
          card.classList.add("module--open");
          card.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      hit.addEventListener("click", go);
      hit.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
      s.appendChild(hit);
      s.appendChild(n("text", { class: "neck__num", x: cx, y: H - 12 }, String(m.num)));
    });

    neckHost.appendChild(s);
  }

  function drawStats() {
    const all = [];
    COURSE.modules.forEach(function (m) { m.lessons.forEach(function (l) { all.push(l.id); }); });
    const done = Progress.doneCount(all);
    const items = [
      { num: done + " / " + all.length, label: "уроків пройдено" },
      { num: Progress.streak(), label: "днів поспіль" },
      { num: COURSE.songs.length, label: "пісень у плані" }
    ];
    statsHost.innerHTML = items.map(function (i) {
      return '<div class="stat"><div class="stat__num">' + i.num + '</div><div class="stat__label">' + i.label + "</div></div>";
    }).join("");
  }

  function drawModules() {
    listHost.innerHTML = COURSE.modules.map(function (m) {
      const ids = m.lessons.map(function (l) { return l.id; });
      const done = Progress.doneCount(ids);
      const full = done === ids.length && ids.length > 0;

      const rows = m.lessons.map(function (l) {
        const isDone = Progress.isDone(l.id);
        const soon = l.status !== "ready";
        const cls = "lesson" + (isDone ? " lesson--done" : "") + (soon ? " lesson--soon" : "");
        const inner =
          '<span class="lesson__mark">' + (isDone ? "✓" : "") + "</span>" +
          '<span class="lesson__title">' + l.title + "</span>" +
          '<span class="lesson__min">' + (soon ? "скоро" : l.min + " хв") + "</span>";
        return soon
          ? '<div class="' + cls + '">' + inner + "</div>"
          : '<a class="' + cls + '" href="' + l.file + '">' + inner + "</a>";
      }).join("");

      return '<section class="module' + (full ? " module--done" : "") + '" id="' + m.id + '">' +
        '<button class="module__head" aria-expanded="false">' +
        '<span class="module__num">' + m.num + "</span>" +
        '<span class="module__name">' + m.title + "</span>" +
        '<span class="module__count">' + done + "/" + ids.length + "</span>" +
        "</button>" +
        '<div class="module__body"><p class="module__goal">' + m.goal + "</p>" + rows + "</div>" +
        "</section>";
    }).join("");

    listHost.querySelectorAll(".module__head").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const card = btn.closest(".module");
        const open = card.classList.toggle("module--open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* Резервна копія прогресу — без консолі, щоб працювало з планшета */
  function wireBackup() {
    const msg = document.getElementById("dataMsg");
    const file = document.getElementById("importFile");
    if (!msg || !file) return;

    document.getElementById("exportBtn").addEventListener("click", function () {
      const stamp = new Date().toISOString().slice(0, 10);
      const blob = new Blob([Progress.exportJson()], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "gitara-prohres-" + stamp + ".json";
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
      msg.textContent = "Копію збережено у завантаження.";
    });

    document.getElementById("importBtn").addEventListener("click", function () { file.click(); });

    file.addEventListener("change", function () {
      const f = file.files[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = function () {
        try {
          Progress.importJson(reader.result);
          location.reload();
        } catch (err) {
          msg.textContent = "Не вдалося прочитати файл: " + err.message + ". Потрібен файл, збережений кнопкою «Зберегти копію».";
        }
      };
      reader.readAsText(f);
    });

    document.getElementById("resetBtn").addEventListener("click", function (e) {
      e.preventDefault();
      if (confirm("Стерти всі позначки «пройдено» і рекорди BPM? Скасувати це не вийде.")) {
        Progress.reset();
        location.reload();
      }
    });
  }

  drawNeck();
  drawStats();
  drawModules();
  wireBackup();
})();
