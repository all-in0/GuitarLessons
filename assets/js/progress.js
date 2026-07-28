/* Прогрес зберігається локально в браузері (localStorage).
   Один ключ — щоб легко експортувати/переносити на інший пристрій. */

window.Progress = (function () {
  const KEY = "gc.progress.v1";

  function today() {
    return new Date().toISOString().slice(0, 10);
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : blank();
    } catch (e) {
      return blank();
    }
  }

  function blank() {
    return { lessons: {}, songs: {}, days: [], version: 1 };
  }

  function save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      /* приватний режим — просто не зберігаємо */
    }
  }

  function markDay(state) {
    const d = today();
    if (state.days[state.days.length - 1] !== d) state.days.push(d);
    if (state.days.length > 400) state.days = state.days.slice(-400);
  }

  return {
    all: load,

    isDone(id) {
      return !!(load().lessons[id] && load().lessons[id].done);
    },

    get(id) {
      return load().lessons[id] || null;
    },

    setDone(id, done, extra) {
      const s = load();
      s.lessons[id] = Object.assign({}, s.lessons[id], extra || {}, {
        done: done,
        at: done ? new Date().toISOString() : null
      });
      if (done) markDay(s);
      save(s);
      return s.lessons[id];
    },

    setBpm(id, bpm) {
      const s = load();
      s.lessons[id] = Object.assign({}, s.lessons[id], { bpm: bpm });
      save(s);
    },

    doneCount(ids) {
      const s = load();
      return ids.filter(function (id) { return s.lessons[id] && s.lessons[id].done; }).length;
    },

    /* Скільки днів поспіль були заняття, рахуючи від сьогодні або вчора */
    streak() {
      const days = load().days;
      if (!days.length) return 0;
      const set = new Set(days);
      let n = 0;
      const d = new Date();
      if (!set.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
      while (set.has(d.toISOString().slice(0, 10))) {
        n++;
        d.setDate(d.getDate() - 1);
      }
      return n;
    },

    touch() {
      const s = load();
      markDay(s);
      save(s);
    },

    exportJson() {
      return JSON.stringify(load(), null, 2);
    },

    importJson(text) {
      const data = JSON.parse(text);
      if (!data || typeof data !== "object" || !data.lessons) throw new Error("Файл не схожий на збережений прогрес");
      save(data);
    },

    reset() {
      save(blank());
    }
  };
})();
