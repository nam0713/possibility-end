// FilmHost: the engine side of the ending. It hands the reader's exact universe (every visible particle
// in world space with its colour and sprite size, plus the camera, the collapse point `focus` — the
// seed, the one light on screen — and that light's glow as drawn, `focusLight`) to the film module,
// which collapses exactly onto it and continues the seed's own light; drives it from
// the engine's rAF loop, emits the phase/finished events, and on stop() fades to black, ends the film
// and hands back to the engine: 'ending-ready' when the reader returns to the text, or — when the
// reader leaves the film by navigating — the page's own scene, never the seed in between (see
// Engine.onFilmActive). The film module (ending-film.js) is owned by another agent; anything it
// lacks degrades gracefully.

import * as THREE from 'three';
import * as FilmModule from './ending-film.js';

const DEFAULT_PHASES = [
  { start: 0, key: 'collapse' },
  { start: 3.6, key: 'birth' },
  { start: 9, key: 'structure' },
  { start: 19, key: 'world' },
];
const STOP_FADE = 0.6;

export class FilmHost {
  constructor(engine) {
    this.engine = engine;
    this.film = null;
    this.failed = false;
    this.active = false;
    this.stopping = null;
    this.navigated = false; // setScene/setLayout arrived during the stop fade
    this.leaving = false; // stop({ restore: false }): the page is navigating away from the film
    this.fade = 0;
    this.phaseIndex = -1;
    this.finishedSent = false;
    this.overlay = null;
    this.tick = 0;
  }

  /** Construct the film ahead of time (idle), so start() does not stall. */
  prewarm() {
    if (this.film || this.failed) return;
    try {
      const create = FilmModule.createEndingFilm;
      if (typeof create !== 'function') throw new Error('ending-film: createEndingFilm missing');
      this.film = create({ renderer: this.engine.renderer, quality: this.engine.filmQuality() });
      if (!this.film || typeof this.film.render !== 'function') throw new Error('ending-film: invalid film');
    } catch (e) {
      console.warn('Universe: ending film unavailable —', e.message);
      this.film = null;
      this.failed = true;
    }
  }

  async start({ origin } = {}) {
    const engine = this.engine;
    if (!engine.ok || engine.contextLost) return false;
    if (this.active && !this.stopping) return true;
    if (this.stopping) await this.stopping;
    this.prewarm();
    if (!this.film) return false;
    try {
      const snap = engine.snapshotForFilm();
      const o = Array.isArray(origin) && origin.length >= 2 ? [clamp01(origin[0]), clamp01(origin[1])] : [0.5, 0.62];
      this.film.setReducedMotion?.(engine.reducedMotion());
      this.film.resize?.(engine.width, engine.height, engine.pixelRatio);
      // Sprite sizes only make the first frame exact together with the energies folded into the
      // colours: a film that still estimates the energy from the colour would draw the true sizes
      // 1.9–4× too bright (measured). The film opts in with `film.handover = { energies: true }`.
      const mode = engine.filmSizes;
      const exact = mode === true || (mode === 'auto' && !!(this.film.handover && this.film.handover.energies));
      if (!exact) snap.sizes = null;
      // snap.focus: the seed (the formation's focal point = the UI's anchor) in the handover's sheared
      // world space; snap.focusLight: its glow billboards as drawn (see Engine.focusLight).
      this.film.begin({ ...snap, origin: o, width: engine.width, height: engine.height, pixelRatio: engine.pixelRatio });
    } catch (e) {
      console.error('Universe: ending film failed to begin', e);
      this.safeEnd();
      return false;
    }
    this.active = true;
    this.fade = 0;
    this.phaseIndex = -1;
    this.finishedSent = false;
    engine.onFilmActive(true);
    // Resolve once the first film frame has been drawn.
    await new Promise((resolve) => {
      this.firstFrame = resolve;
      engine.request();
      setTimeout(resolve, 600);
    });
    return this.active;
  }

  /** Called from the engine loop while active. */
  frame(dt) {
    const film = this.film;
    if (!film) return;
    try {
      film.update(dt);
      film.render();
      if (this.fade > 0) this.drawFade(this.fade);
    } catch (e) {
      console.error('Universe: ending film error', e);
      this.abort();
      return;
    }
    if (this.firstFrame) {
      const r = this.firstFrame;
      this.firstFrame = null;
      r();
    }
    this.emitEvents();
  }

  emitEvents() {
    // film.state() builds an object; sampling every third frame keeps events within ~50 ms.
    if ((this.tick = (this.tick + 1) % 3) !== 0 && this.phaseIndex >= 0) return;
    const s = this.rawState();
    if (!s) return;
    const index = resolvePhase(s);
    if (index !== this.phaseIndex) {
      this.phaseIndex = index;
      const phases = s.phases || DEFAULT_PHASES;
      dispatch('universe:ending-phase', { index, key: phases[index]?.key ?? String(index), time: s.time || 0 });
    }
    if (s.finished && !this.finishedSent) {
      this.finishedSent = true;
      dispatch('universe:ending-finished', { time: s.time || 0 });
    }
  }

  drawFade(alpha) {
    const r = this.engine.renderer;
    if (!this.overlay) {
      const mat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0, depthTest: false, depthWrite: false });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
      mesh.frustumCulled = false;
      const scene = new THREE.Scene();
      scene.add(mesh);
      this.overlay = { scene, mat, camera: new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1) };
    }
    this.overlay.mat.opacity = Math.min(1, alpha);
    const autoClear = r.autoClear;
    r.autoClear = false;
    r.setRenderTarget(null);
    r.render(this.overlay.scene, this.overlay.camera);
    r.autoClear = autoClear;
  }

  pause(value) {
    if (this.active) this.film?.pause?.(value === undefined ? undefined : !!value);
    this.engine.request();
  }

  seek(seconds) {
    if (this.active) this.film?.seek?.(Number(seconds) || 0);
    this.finishedSent = this.rawState()?.finished ? this.finishedSent : false;
    this.engine.request();
  }

  skipToEnd() {
    if (this.active) this.film?.skipToEnd?.();
    this.engine.request();
  }

  replay() {
    if (this.active) {
      this.film?.replay?.();
      this.finishedSent = false;
      this.phaseIndex = -1;
    }
    this.engine.request();
  }

  setPointer(nx, ny) {
    if (this.active) this.film?.setPointer?.(nx, ny);
  }

  setReducedMotion(v) {
    this.film?.setReducedMotion?.(!!v);
  }

  resize(w, h, pr) {
    if (this.film) {
      try {
        this.film.resize?.(w, h, pr);
      } catch (e) {
        console.error(e);
      }
    }
  }

  /** Fade to black over ~0.6 s, end the film, restore the engine's 'ending-ready' scene. */
  /**
   * opts.restore === false: the reader is leaving the film for another page; the engine then waits,
   * black, for that page's scene instead of showing the seed. Without it the engine returns to the
   * seed, unless the page sets another scene during the fade or the reveal that follows.
   */
  stop(opts) {
    if (!this.active) return Promise.resolve();
    if (opts && opts.restore === false) this.leaving = true;
    if (this.stopping) return this.stopping;
    this.navigated = false;
    this.stopping = new Promise((resolve) => {
      const t0 = performance.now();
      const step = () => {
        if (!this.active) return resolve();
        const k = (performance.now() - t0) / 1000 / STOP_FADE;
        this.fade = Math.min(1, k * k * (3 - 2 * k));
        this.engine.request();
        if (k >= 1) {
          this.finishStop();
          resolve();
          return;
        }
        // Use timers too: rAF may be throttled (hidden tab), the stop must still complete.
        setTimeout(step, 16);
      };
      step();
    }).then(() => {
      this.stopping = null;
    });
    return this.stopping;
  }

  /** The page set a scene or layout: during the stop fade that means the reader is leaving the film. */
  noteNavigation() {
    if (this.stopping) this.navigated = true;
  }

  finishStop() {
    // One last fully black film frame, then hand the canvas back to the engine (from black).
    this.fade = 1;
    this.safeEnd();
    this.active = false;
    this.fade = 0;
    this.engine.onFilmActive(false, true, this.returnMode());
  }

  abort() {
    this.safeEnd();
    this.active = false;
    this.fade = 0;
    this.engine.onFilmActive(false, true, this.returnMode());
  }

  /** How the engine takes the canvas back: 'navigated' | 'leaving' | 'restore'. */
  returnMode() {
    const mode = this.navigated ? 'navigated' : this.leaving ? 'leaving' : 'restore';
    this.navigated = false;
    this.leaving = false;
    return mode;
  }

  safeEnd() {
    try {
      this.film?.end?.();
    } catch (e) {
      console.error(e);
    }
  }

  rawState() {
    if (!this.film) return null;
    try {
      return this.film.state?.() || null;
    } catch {
      return null;
    }
  }

  state() {
    const s = this.active ? this.rawState() : null;
    const phases = (s && s.phases) || (this.rawState()?.phases) || DEFAULT_PHASES;
    if (!s) {
      return { active: false, time: 0, duration: 31, started: false, paused: false, finished: false, phase: 0, phases, impact: 3.6 };
    }
    return {
      active: true,
      time: s.time || 0,
      duration: s.duration || 31,
      started: !!s.started,
      paused: !!s.paused,
      finished: !!s.finished,
      phase: resolvePhase(s),
      phaseKey: s.phaseKey || phases[resolvePhase(s)]?.key,
      phases,
      impact: s.impact ?? 3.6,
    };
  }

  dispose() {
    if (this.active) this.safeEnd();
    try {
      this.film?.dispose?.();
    } catch {
      /* ignore */
    }
    this.film = null;
    if (this.overlay) {
      this.overlay.mat.dispose();
      this.overlay.scene.children[0].geometry.dispose();
    }
  }
}

function resolvePhase(s) {
  if (typeof s.phase === 'number') return s.phase;
  const phases = s.phases || DEFAULT_PHASES;
  if (typeof s.phase === 'string') {
    const i = phases.findIndex((p) => p.key === s.phase);
    if (i >= 0) return i;
  }
  let i = 0;
  for (let k = 1; k < phases.length; k++) if ((s.time || 0) >= phases[k].start) i = k;
  return i;
}

const clamp01 = (x) => Math.max(0, Math.min(1, Number(x) || 0));

function dispatch(type, detail) {
  try {
    document.dispatchEvent(new CustomEvent(type, { detail }));
  } catch {
    /* never throw from the render loop */
  }
}
