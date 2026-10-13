const COOLDOWN = {
  shoot: 0.045, hit: 0.065, kill: 0.08, dash: 0.15, pulse: 0.3,
  pickup: 0.075, level: 0.3, relay: 0.45, boss: 0.8, win: 1, lose: 1,
};

/** Small, dependency-free synth. Call init() from the player's start/resume click. */
export class GameAudio {
  constructor() {
    this.muted = false;
    this.context = null;
    this.master = null;
    this.effects = null;
    this.ambient = null;
    this.enabled = true;
    this.lastPlayed = new Map();
    this.voices = [];
    this.intensity = 0;
  }

  async init() {
    if (!this.enabled) return false;
    try {
      if (!this.context) {
        const Context = globalThis.AudioContext || globalThis.webkitAudioContext;
        if (!Context) { this.enabled = false; return false; }
        const ctx = this.context = new Context();
        const limiter = ctx.createDynamicsCompressor();
        limiter.threshold.value = -17;
        limiter.knee.value = 14;
        limiter.ratio.value = 6;
        limiter.attack.value = 0.003;
        limiter.release.value = 0.16;
        this.master = ctx.createGain();
        this.master.gain.value = this.muted ? 0 : 0.42;
        this.effects = ctx.createGain();
        this.effects.gain.value = 0.8;
        this.effects.connect(this.master);
        this.master.connect(limiter);
        limiter.connect(ctx.destination);

        // Reuse one second of noise rather than allocating a buffer per shot.
        this.noiseBuffer = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
        const data = this.noiseBuffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
        this._startAmbient();
      }
      if (this.context.state === 'suspended') await this.context.resume();
      return this.context.state === 'running';
    } catch {
      // Audio must never prevent starting a game when a device rejects playback.
      this.enabled = false;
      return false;
    }
  }

  setMuted(value) {
    this.muted = Boolean(value);
    if (this.context && this.master) {
      const now = this.context.currentTime;
      this.master.gain.cancelScheduledValues(now);
      this.master.gain.setTargetAtTime(this.muted ? 0 : 0.42, now, 0.025);
    }
  }

  _startAmbient() {
    const ctx = this.context;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 260;
    filter.Q.value = 0.6;
    const gain = ctx.createGain();
    gain.gain.value = 0.024;
    filter.connect(gain);
    gain.connect(this.master);
    const low = ctx.createOscillator();
    low.type = 'sine';
    low.frequency.value = 52;
    const high = ctx.createOscillator();
    high.type = 'triangle';
    high.frequency.value = 78.1;
    const highGain = ctx.createGain();
    highGain.gain.value = 0.28;
    high.connect(highGain);
    highGain.connect(filter);
    low.connect(filter);
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.11;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 45;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    low.start();
    high.start();
    lfo.start();
    this.ambient = { gain, filter, low, high, lfo };
  }

  /** Intensity is 0–1; call once per frame or less often. */
  update(intensity = 0, dt = 0.016) {
    if (!this.ambient || this.context.state !== 'running') return;
    const target = Math.max(0, Math.min(1, Number.isFinite(intensity) ? intensity : 0));
    const elapsed = Number.isFinite(dt) ? Math.max(0, Math.min(dt, 0.25)) : 0.016;
    this.intensity += (target - this.intensity) * (1 - Math.exp(-elapsed * 3));
    const now = this.context.currentTime;
    this.ambient.gain.gain.setTargetAtTime(0.024 + this.intensity * 0.014, now, 0.2);
    this.ambient.filter.frequency.setTargetAtTime(260 + this.intensity * 420, now, 0.2);
    this.ambient.high.frequency.setTargetAtTime(78.1 + this.intensity * 0.9, now, 0.3);
  }

  _tone(at, frequency, endFrequency, duration, volume, type = 'sine') {
    const ctx = this.context;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, at);
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFrequency), at + duration);
    gain.gain.setValueAtTime(0.0001, at);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, volume), at + Math.min(0.008, duration / 4));
    gain.gain.exponentialRampToValueAtTime(0.0001, at + duration);
    osc.connect(gain);
    gain.connect(this.effects);
    osc.start(at);
    osc.stop(at + duration + 0.015);
    osc.onended = () => { osc.disconnect(); gain.disconnect(); };
  }

  _noise(at, duration, volume, frequency, endFrequency, type = 'lowpass') {
    const ctx = this.context;
    const source = ctx.createBufferSource();
    source.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.setValueAtTime(frequency, at);
    filter.frequency.exponentialRampToValueAtTime(Math.max(30, endFrequency), at + duration);
    filter.Q.value = 0.8;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, at);
    gain.gain.exponentialRampToValueAtTime(volume, at + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + duration);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.effects);
    source.start(at, Math.random() * 0.4);
    source.stop(at + duration + 0.01);
    source.onended = () => { source.disconnect(); filter.disconnect(); gain.disconnect(); };
  }

  play(name) {
    if (!this.context || !this.enabled || this.muted || this.context.state !== 'running') return;
    if (!(name in COOLDOWN)) return;
    const now = this.context.currentTime;
    if (now - (this.lastPlayed.get(name) ?? -Infinity) < COOLDOWN[name]) return;
    this.voices = this.voices.filter(end => end > now);
    const important = ['level', 'relay', 'boss', 'win', 'lose'].includes(name);
    if (this.voices.length >= (important ? 18 : 12)) return;
    this.lastPlayed.set(name, now);
    const at = now + 0.003;
    let duration = 0.25;
    switch (name) {
      case 'shoot':
        this._tone(at, 780 + Math.random() * 90, 180, 0.065, 0.14, 'triangle');
        this._noise(at, 0.045, 0.07, 4200, 700, 'highpass');
        duration = 0.09;
        break;
      case 'hit':
        this._noise(at, 0.12, 0.2, 2400, 180);
        this._tone(at, 115, 44, 0.14, 0.2, 'triangle');
        break;
      case 'kill':
        this._noise(at, 0.17, 0.14, 1700, 100);
        this._tone(at, 220, 55, 0.19, 0.17, 'triangle');
        break;
      case 'dash':
        this._noise(at, 0.21, 0.13, 750, 5800, 'bandpass');
        this._tone(at, 100, 420, 0.14, 0.08, 'sine');
        break;
      case 'pulse':
        this._tone(at, 170, 35, 0.5, 0.26, 'sine');
        this._tone(at, 660, 90, 0.35, 0.08, 'triangle');
        this._noise(at, 0.42, 0.19, 3200, 80);
        duration = 0.55;
        break;
      case 'pickup':
        this._tone(at, 880, 960, 0.09, 0.085);
        this._tone(at + 0.045, 1320, 1440, 0.1, 0.06);
        duration = 0.16;
        break;
      case 'level':
        [330, 440, 660, 880].forEach((f, i) => this._tone(at + i * 0.075, f, f * 1.003, 0.34, 0.12, 'triangle'));
        duration = 0.62;
        break;
      case 'relay':
        [196, 294, 392, 588].forEach((f, i) => this._tone(at + i * 0.09, f, f, 0.7, 0.1, 'sine'));
        this._noise(at, 0.45, 0.07, 150, 2500, 'bandpass');
        duration = 1.05;
        break;
      case 'boss':
        for (let i = 0; i < 3; i++) {
          this._tone(at + i * 0.3, 82, 65, 0.24, 0.2, 'sawtooth');
          this._tone(at + i * 0.3, 123, 98, 0.24, 0.08, 'triangle');
        }
        duration = 0.95;
        break;
      case 'win':
        [262, 330, 392, 523, 659, 784].forEach((f, i) => this._tone(at + i * 0.12, f, f, 1.1, 0.11, 'sine'));
        duration = 1.8;
        break;
      case 'lose':
        [196, 147, 98].forEach((f, i) => this._tone(at + i * 0.18, f, f * 0.7, 0.55, 0.15, 'triangle'));
        this._noise(at, 0.7, 0.07, 900, 60);
        duration = 1;
        break;
    }
    this.voices.push(now + duration);
  }
}
