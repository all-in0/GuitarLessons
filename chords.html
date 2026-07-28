/* Метроном на Web Audio. Планувальник із випередженням —
   інакше на телефоні клік «плаває». */

window.Metronome = (function () {
  let ctx = null;
  let timer = null;
  let nextTime = 0;
  let beat = 0;

  const state = { bpm: 80, beats: 4, running: false, onBeat: null };
  const LOOKAHEAD = 25;      // мс між перевірками
  const SCHEDULE = 0.12;     // с наперед

  function click(time, accent) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = accent ? 1600 : 1000;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(accent ? 0.6 : 0.35, time + 0.001);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);
    osc.connect(gain).connect(ctx.destination);
    osc.start(time);
    osc.stop(time + 0.06);
  }

  function tick() {
    while (nextTime < ctx.currentTime + SCHEDULE) {
      const accent = state.beats > 0 && beat % state.beats === 0;
      click(nextTime, accent);
      if (state.onBeat) {
        const b = state.beats > 0 ? beat % state.beats : 0;
        const delay = Math.max(0, (nextTime - ctx.currentTime) * 1000);
        setTimeout(function () { state.onBeat(b); }, delay);
      }
      nextTime += 60 / state.bpm;
      beat++;
    }
  }

  return {
    state: state,

    setBpm(v) {
      state.bpm = Math.min(300, Math.max(30, Math.round(v)));
    },

    setBeats(v) {
      state.beats = v;
    },

    start() {
      if (state.running) return;
      if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === "suspended") ctx.resume();
      beat = 0;
      nextTime = ctx.currentTime + 0.06;
      timer = setInterval(tick, LOOKAHEAD);
      state.running = true;
    },

    stop() {
      clearInterval(timer);
      timer = null;
      state.running = false;
    },

    toggle() {
      this.state.running ? this.stop() : this.start();
    }
  };
})();
