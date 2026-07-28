/* Малювалки для уроків: нотний стан, табулатура, гриф, акорди.
   Усе — інлайновий SVG, без зовнішніх залежностей.

   GC.staff(el, {notes:[{n:"E4",d:4},{rest:true,d:4},{bar:true}], meter:"4/4"})
   GC.tab(el, "e|--0--2--|\nB|--------|")
   GC.fretboard(el, {from:1, to:5, dots:[{s:6,f:3,label:"3"}], color:"amber"})
   GC.chord(el, {name:"Em", frets:[0,2,2,0,0,0], mute:[], fingers:[0,2,3,0,0,0]})
   s = номер струни (1 — тонка мі, 6 — товста мі), f = лад
*/

window.GC = (function () {
  const NS = "http://www.w3.org/2000/svg";
  const STEP = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
  const C = {
    line: "#4A3355",
    ink: "#F3EADD",
    dim: "rgba(243,234,221,0.58)",
    amber: "#FFB14A",
    mint: "#57C7B0",
    red: "#D4483F",
    panel: "#26192D"
  };

  function el(tag, attrs, text) {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    return n;
  }

  function svg(w, h) {
    const s = el("svg", {
      viewBox: "0 0 " + w + " " + h,
      width: w,
      height: h,
      xmlns: NS,
      role: "img"
    });
    s.style.maxWidth = "100%";
    s.style.height = "auto";
    return s;
  }

  function mount(host, node, boxClass) {
    const target = typeof host === "string" ? document.querySelector(host) : host;
    if (!target) return null;
    target.classList.add(boxClass);
    target.innerHTML = "";
    target.appendChild(node);
    return node;
  }

  /* ── Нотний стан ─────────────────────────────────────── */
  /* Значення ноти = октава*7 + індекс ступеня. E4 (нижня лінійка) = 30. */
  function noteValue(name) {
    const m = /^([A-G])([#b]?)(-?\d)$/.exec(name);
    if (!m) return null;
    return { v: Number(m[3]) * 7 + STEP[m[1]], acc: m[2] };
  }

  function staff(host, opts) {
    const notes = opts.notes || [];
    const meter = opts.meter || null;
    const LEFT = meter ? 78 : 56;
    const GAP = opts.gap || 46;
    const W = LEFT + Math.max(notes.length, 4) * GAP + 24;
    const H = 150;
    const Y0 = 96;           // нижня лінійка (E4)
    const y = function (v) { return Y0 - (v - 30) * 6; };

    const s = svg(W, H);
    s.setAttribute("aria-label", opts.alt || "Нотний приклад");

    for (let i = 0; i < 5; i++) {
      s.appendChild(el("line", { x1: 14, x2: W - 14, y1: Y0 - i * 12, y2: Y0 - i * 12, stroke: C.line, "stroke-width": 1.4 }));
    }

    const clef = el("text", { x: 20, y: Y0 + 6, "font-size": 74, fill: C.ink, "font-family": "Noto Music, serif" }, "\uD834\uDD1E");
    s.appendChild(clef);

    if (meter) {
      const parts = meter.split("/");
      s.appendChild(el("text", { x: 58, y: Y0 - 26, "font-size": 25, fill: C.ink, "text-anchor": "middle", "font-family": "Noto Music, serif" }, parts[0]));
      s.appendChild(el("text", { x: 58, y: Y0 - 2, "font-size": 25, fill: C.ink, "text-anchor": "middle", "font-family": "Noto Music, serif" }, parts[1]));
    }

    let x = LEFT + 14;
    notes.forEach(function (it) {
      if (it.bar) {
        s.appendChild(el("line", { x1: x - GAP / 2, x2: x - GAP / 2, y1: Y0 - 48, y2: Y0, stroke: C.line, "stroke-width": 2 }));
        return;
      }
      if (it.rest) {
        const glyph = { 1: "\uD834\uDD3B", 2: "\uD834\uDD3C", 4: "\uD834\uDD3D", 8: "\uD834\uDD3E", 16: "\uD834\uDD3F" }[it.d || 4];
        s.appendChild(el("text", { x: x, y: Y0 - 24, "font-size": 32, fill: C.ink, "text-anchor": "middle", "font-family": "Noto Music, serif" }, glyph));
        x += GAP;
        return;
      }

      const nv = noteValue(it.n);
      if (!nv) { x += GAP; return; }
      const ny = y(nv.v);
      const dur = it.d || 4;
      const open = dur <= 2;

      // додаткові лінійки
      for (let v = 28; v >= nv.v; v -= 2) s.appendChild(el("line", { x1: x - 13, x2: x + 13, y1: y(v), y2: y(v), stroke: C.line, "stroke-width": 1.4 }));
      for (let v = 40; v <= nv.v; v += 2) s.appendChild(el("line", { x1: x - 13, x2: x + 13, y1: y(v), y2: y(v), stroke: C.line, "stroke-width": 1.4 }));

      if (nv.acc) {
        s.appendChild(el("text", { x: x - 20, y: ny + 7, "font-size": 26, fill: C.amber, "text-anchor": "middle", "font-family": "Noto Music, serif" }, nv.acc === "#" ? "\u266F" : "\u266D"));
      }

      const head = el("ellipse", {
        cx: x, cy: ny, rx: 8, ry: 5.6,
        transform: "rotate(-20 " + x + " " + ny + ")",
        fill: open ? "none" : (it.color ? C[it.color] : C.ink),
        stroke: it.color ? C[it.color] : C.ink,
        "stroke-width": 2
      });
      s.appendChild(head);

      if (dur > 1) {
        const up = nv.v < 34;
        const sx = up ? x + 7.6 : x - 7.6;
        const sy2 = up ? ny - 34 : ny + 34;
        s.appendChild(el("line", { x1: sx, x2: sx, y1: ny, y2: sy2, stroke: it.color ? C[it.color] : C.ink, "stroke-width": 2 }));
        if (dur >= 8) {
          const dir = up ? 1 : -1;
          s.appendChild(el("path", {
            d: "M " + sx + " " + sy2 + " q 11 " + (7 * dir) + " 9 " + (18 * dir),
            fill: "none", stroke: it.color ? C[it.color] : C.ink, "stroke-width": 2
          }));
          if (dur >= 16) {
            s.appendChild(el("path", {
              d: "M " + sx + " " + (sy2 + 9 * dir) + " q 11 " + (7 * dir) + " 9 " + (18 * dir),
              fill: "none", stroke: it.color ? C[it.color] : C.ink, "stroke-width": 2
            }));
          }
        }
      }

      if (it.label) {
        s.appendChild(el("text", { x: x, y: H - 12, "font-size": 12, fill: C.dim, "text-anchor": "middle", "font-family": "JetBrains Mono, monospace" }, it.label));
      }
      x += GAP;
    });

    return mount(host, s, "staff-box");
  }

  /* ── Табулатура ──────────────────────────────────────── */
  function tab(host, text) {
    const target = typeof host === "string" ? document.querySelector(host) : host;
    if (!target) return null;
    target.classList.add("tab-box");
    target.innerHTML = "";
    const pre = document.createElement("pre");
    pre.textContent = String(text).replace(/^\n/, "");
    target.appendChild(pre);
    return pre;
  }

  /* ── Карта грифа ─────────────────────────────────────── */
  function fretboard(host, opts) {
    const from = opts.from || 1;
    const to = opts.to || 5;
    const n = to - from + 1;
    const PAD = 34;
    const FW = opts.fw || 62;
    const SH = 22;
    const W = PAD + n * FW + 22;
    const H = 42 + 5 * SH + 26;
    const top = 30;
    const s = svg(W, H);
    s.setAttribute("aria-label", opts.alt || "Схема грифа");

    s.appendChild(el("rect", { x: PAD, y: top - 8, width: n * FW, height: 5 * SH + 16, fill: C.panel, rx: 4 }));

    for (let i = 0; i <= n; i++) {
      const x = PAD + i * FW;
      const isNut = from === 1 && i === 0;
      s.appendChild(el("line", {
        x1: x, x2: x, y1: top - 8, y2: top + 5 * SH + 8,
        stroke: isNut ? C.ink : C.line, "stroke-width": isNut ? 5 : 2
      }));
      if (i < n) {
        s.appendChild(el("text", {
          x: x + FW / 2, y: H - 8, "font-size": 12, fill: C.dim,
          "text-anchor": "middle", "font-family": "JetBrains Mono, monospace"
        }, String(from + i)));
      }
    }

    const names = ["e", "B", "G", "D", "A", "E"];
    for (let i = 0; i < 6; i++) {
      const y = top + i * SH;
      s.appendChild(el("line", { x1: PAD, x2: PAD + n * FW, y1: y, y2: y, stroke: "rgba(243,234,221,0.28)", "stroke-width": 0.8 + i * 0.35 }));
      s.appendChild(el("text", { x: 18, y: y + 4, "font-size": 12, fill: C.dim, "text-anchor": "middle", "font-family": "JetBrains Mono, monospace" }, names[i]));
    }

    (opts.dots || []).forEach(function (d) {
      const cx = PAD + (d.f - from) * FW + FW / 2;
      const cy = top + (d.s - 1) * SH;
      const col = C[d.color || opts.color || "amber"] || C.amber;
      s.appendChild(el("circle", { cx: cx, cy: cy, r: 11, fill: col }));
      if (d.label != null) {
        s.appendChild(el("text", { x: cx, y: cy + 4.5, "font-size": 12, fill: C.panel, "text-anchor": "middle", "font-family": "JetBrains Mono, monospace", "font-weight": "700" }, String(d.label)));
      }
    });

    return mount(host, s, "fb-box");
  }

  /* ── Схема акорду ────────────────────────────────────── */
  /* frets: масив із 6 значень від 6-ї струни до 1-ї; null або "x" — глушити */
  function chord(host, opts) {
    const frets = opts.frets || [];
    const fingers = opts.fingers || [];
    const played = frets.filter(function (f) { return typeof f === "number" && f > 0; });
    const min = played.length ? Math.min.apply(null, played) : 1;
    const start = min > 3 ? min : 1;
    const ROWS = 5, SW = 26, FH = 30;
    const L = 30, T = 46;
    const W = L + 5 * SW + 26;
    const H = T + ROWS * FH + 28;
    const s = svg(W, H);
    s.setAttribute("aria-label", "Акорд " + (opts.name || ""));

    if (opts.name) {
      s.appendChild(el("text", { x: L + 2.5 * SW, y: 20, "font-size": 17, fill: C.ink, "text-anchor": "middle", "font-family": "Unbounded, sans-serif", "font-weight": "700" }, opts.name));
    }

    for (let i = 0; i <= ROWS; i++) {
      const y = T + i * FH;
      s.appendChild(el("line", { x1: L, x2: L + 5 * SW, y1: y, y2: y, stroke: i === 0 && start === 1 ? C.ink : C.line, "stroke-width": i === 0 && start === 1 ? 5 : 1.6 }));
    }
    for (let i = 0; i < 6; i++) {
      const x = L + i * SW;
      s.appendChild(el("line", { x1: x, x2: x, y1: T, y2: T + ROWS * FH, stroke: C.line, "stroke-width": 1.6 }));
    }
    if (start > 1) {
      s.appendChild(el("text", { x: L - 12, y: T + FH * 0.72, "font-size": 12, fill: C.dim, "text-anchor": "middle", "font-family": "JetBrains Mono, monospace" }, start + "фр"));
    }

    frets.forEach(function (f, i) {
      const x = L + i * SW;
      if (f === "x" || f === null) {
        s.appendChild(el("text", { x: x, y: T - 8, "font-size": 14, fill: C.red, "text-anchor": "middle", "font-family": "JetBrains Mono, monospace" }, "×"));
      } else if (f === 0) {
        s.appendChild(el("circle", { cx: x, cy: T - 13, r: 5.5, fill: "none", stroke: C.mint, "stroke-width": 2 }));
      } else {
        const cy = T + (f - start) * FH + FH / 2;
        s.appendChild(el("circle", { cx: x, cy: cy, r: 11, fill: C.amber }));
        if (fingers[i]) {
          s.appendChild(el("text", { x: x, y: cy + 4.5, "font-size": 12, fill: C.panel, "text-anchor": "middle", "font-family": "JetBrains Mono, monospace", "font-weight": "700" }, String(fingers[i])));
        }
      }
    });

    return mount(host, s, "fb-box");
  }

  /* Автозапуск: <div data-staff='{"notes":[...]}'></div> тощо */
  function auto() {
    document.querySelectorAll("[data-staff]").forEach(function (n) { staff(n, JSON.parse(n.getAttribute("data-staff"))); });
    document.querySelectorAll("[data-fretboard]").forEach(function (n) { fretboard(n, JSON.parse(n.getAttribute("data-fretboard"))); });
    document.querySelectorAll("[data-chord]").forEach(function (n) { chord(n, JSON.parse(n.getAttribute("data-chord"))); });
    document.querySelectorAll("[data-tab]").forEach(function (n) { tab(n, n.getAttribute("data-tab")); });
  }

  document.addEventListener("DOMContentLoaded", auto);

  return { staff: staff, tab: tab, fretboard: fretboard, chord: chord, auto: auto };
})();
