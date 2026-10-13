// window.Universe — the public API of the site's single particle universe (design/V9-BRIEF.md §3).
//
// This file never throws, at load or later: mount() probes WebGL2 on the given canvas before three.js
// touches it; without WebGL2 (or on any init failure) documentElement.dataset.universe = 'none' and
// every method stays a harmless no-op with well-formed return values. Every call into the engine is
// guarded, so a failure inside the universe can never break the reading UI.

import { Engine } from './engine.js';
import { isWorkerScope, serveFormations } from './formations/worker.js';

// This very script (inline text or URL): the formation worker runs it again in a worker scope.
const SCRIPT = typeof document !== 'undefined' && document.currentScript ? document.currentScript : null;

const VERSION = '9.1.0';
const SCENES = ['cover', 'preview', 'chapter', 'ending-ready'];
const DEFAULT_PHASES = [
  { start: 0, key: 'collapse' },
  { start: 3.6, key: 'birth' },
  { start: 9, key: 'structure' },
  { start: 19, key: 'world' },
];

let engine = null;
let failed = false;
let loseExt = null;
const subs = new Set();
// State requested before mount (or kept for diagnostics when unavailable).
const pending = { scene: null, layout: null, reading: 0, veil: 0, scatter: 0, armed: false, visible: true, interactive: false, paused: false, pointer: null, selected: 0, quality: null };

const html = () => document.documentElement;
const ready = () => !!(engine && engine.ok);
const reported = new Set();

/** Run fn against the live engine; on error log once and return the fallback. */
function guard(fn, fallback) {
  if (!ready()) return fallback;
  try {
    return fn(engine);
  } catch (e) {
    const key = String(e && e.message);
    if (!reported.has(key)) {
      reported.add(key);
      console.error('Universe:', e);
    }
    return fallback;
  }
}

function dispatch(type, detail) {
  try {
    document.dispatchEvent(new CustomEvent(type, { detail }));
  } catch {
    /* ignore */
  }
}

function idleEndingState() {
  return { active: false, time: 0, duration: 31, started: false, paused: false, finished: false, phase: 0, phases: DEFAULT_PHASES, impact: 3.6 };
}

function noneState() {
  const s = pending.scene;
  return {
    renderer: 'none',
    scene: s ? s.name : null,
    chapter: s && s.opts && s.opts.chapter ? Number(s.opts.chapter) || 0 : 0,
    layout: pending.layout || null,
    quality: pending.quality || 'auto',
    particles: 0,
    fps: 0,
    frames: 0,
    contextLost: false,
    paused: pending.paused,
    visible: pending.visible,
    interactive: pending.interactive,
    scatter: 0,
    ending: idleEndingState(),
  };
}

/** Probe WebGL2 with the attributes three.js will use, so a failure costs no console noise. */
function probe(canvas) {
  if (typeof WebGL2RenderingContext === 'undefined') return null;
  try {
    return canvas.getContext('webgl2', {
      alpha: false, depth: true, stencil: false, antialias: false, premultipliedAlpha: true,
      preserveDrawingBuffer: false, powerPreference: 'high-performance', failIfMajorPerformanceCaveat: false,
    });
  } catch {
    return null;
  }
}

function fail(reason, err) {
  failed = true;
  if (err) console.warn('Universe: unavailable —', reason, err);
  try {
    engine?.dispose();
  } catch {
    /* ignore */
  }
  engine = null;
  try {
    html().dataset.universe = 'none';
  } catch {
    /* ignore */
  }
  return false;
}

function applyPending(e) {
  const p = pending;
  if (p.quality) e.setQuality(p.quality);
  e.setPaused(p.paused);
  e.setReading(p.reading);
  e.setVeil(p.veil);
  e.setScatter(p.scatter);
  e.setArmed(p.armed);
  e.select(p.selected);
  if (p.pointer) e.pointerMoved(p.pointer[0], p.pointer[1]);
  if (p.scene) e.setScene(p.scene.name, p.scene.opts);
  if (p.layout) e.setLayout(p.layout);
  if (p.interactive) e.setInteractive(true);
  if (!p.visible) e.setVisible(false);
}

const Universe = {
  version: VERSION,

  get ready() {
    return ready();
  },

  mount(canvas, options = {}) {
    if (engine) return engine.ok;
    if (failed) return false;
    try {
      if (!canvas || typeof canvas.getContext !== 'function') return fail('no canvas');
      const gl = probe(canvas);
      if (!gl) return fail('WebGL2 unavailable');
      const opts = options && typeof options === 'object' ? options : {};
      engine = new Engine(canvas, { quality: pending.quality || opts.quality, adaptive: opts.adaptive, chapters: opts.chapters, context: gl, script: opts.worker === false ? null : SCRIPT });
      engine.init();
      engine.nodes.subs = subs;
      applyPending(engine);
      html().dataset.universe = 'webgl';
      queueMicrotask(() => dispatch('universe:ready', { renderer: 'webgl' }));
      return true;
    } catch (e) {
      return fail('init failed', e);
    }
  },

  setScene(name, opts) {
    if (!SCENES.includes(name)) return;
    pending.scene = { name, opts: opts && typeof opts === 'object' ? { ...opts } : {} };
    pending.layout = null;
    guard((e) => e.pageScene(name, pending.scene.opts));
  },

  setLayout(layout) {
    pending.layout = layout;
    guard((e) => e.pageLayout(layout));
  },

  setReading(progress) {
    pending.reading = Number(progress) || 0;
    guard((e) => e.setReading(progress));
  },

  setVeil(v) {
    pending.veil = Number(v) || 0;
    guard((e) => e.setVeil(v));
  },

  /**
   * Reading starfield: 0 = the formation (cover / object), 1 = fully scattered into a sparse, calm
   * starfield (the reader's body text). Call it on every scroll frame; the engine eases toward it.
   */
  setScatter(v) {
    const s = Number(v);
    pending.scatter = Number.isFinite(s) ? Math.min(1, Math.max(0, s)) : 0;
    guard((e) => e.setScatter(pending.scatter));
  },

  setVisible(v) {
    pending.visible = !!v;
    guard((e) => e.setVisible(v));
  },

  setInteractive(v) {
    pending.interactive = !!v;
    guard((e) => e.setInteractive(v));
  },

  setPointer(nx, ny) {
    pending.pointer = [Number(nx) || 0, Number(ny) || 0];
    guard((e) => e.pointerMoved(pending.pointer[0], pending.pointer[1]));
  },

  setPaused(v) {
    pending.paused = !!v;
    guard((e) => e.setPaused(v));
  },

  setQuality(q) {
    pending.quality = q === 'auto' ? null : q;
    guard((e) => e.setQuality(q));
  },

  select(n) {
    pending.selected = Number(n) || 0;
    guard((e) => e.select(n));
  },

  reset() {
    guard((e) => {
      e.rig.reset();
      e.request();
    });
  },

  zoom(factor) {
    const f = Number(factor);
    if (!(f > 0 && Number.isFinite(f))) return;
    guard((e) => {
      e.rig.zoomBy(f);
      e.request();
    });
  },

  subscribe(fn) {
    if (typeof fn !== 'function') return () => {};
    subs.add(fn);
    guard((e) => {
      e.nodes.dirty = true;
      e.request();
    });
    return () => {
      subs.delete(fn);
    };
  },

  pick(x, y) {
    return guard((e) => e.nodes.pick(Number(x) || 0, Number(y) || 0), 0);
  },

  getState() {
    return guard((e) => e.getState(), null) || noneState();
  },

  ending: {
    /** Hover/focus on the ch.8 trigger: the waiting seed brightens and breathes a little. */
    arm(v) {
      pending.armed = !!v;
      guard((e) => e.setArmed(pending.armed));
    },
    start(opts = {}) {
      const p = guard((e) => e.film.start(opts && typeof opts === 'object' ? opts : {}), null);
      return p ? p.catch(() => false) : Promise.resolve(false);
    },
    pause(v) {
      guard((e) => e.film.pause(v));
    },
    seek(seconds) {
      guard((e) => e.film.seek(seconds));
    },
    skipToEnd() {
      guard((e) => e.film.skipToEnd());
    },
    replay() {
      guard((e) => e.film.replay());
    },
    stop(opts) {
      const p = guard((e) => e.film.stop(opts && typeof opts === 'object' ? opts : undefined), null);
      return p ? p.catch(() => undefined) : Promise.resolve();
    },
    state() {
      return guard((e) => e.film.state(), null) || idleEndingState();
    },
  },

  /** Diagnostics for the lab and tests (not part of the contract). */
  _debug: {
    settle() {
      guard((e) => e.settle());
    },
    setMorph(p, hold = true) {
      guard((e) => e.setMorphProgress(Number(p), hold));
    },
    freeze(v = true) {
      guard((e) => {
        e.frozen = !!v;
        e.request();
      });
    },
    setTime(t) {
      guard((e) => {
        e.time = Number(t) || 0;
        e.request();
      });
    },
    loseContext() {
      loseExt = guard((e) => e.renderer.getContext().getExtension('WEBGL_lose_context'), null);
      if (loseExt) loseExt.loseContext();
      return !!loseExt;
    },
    restoreContext() {
      if (loseExt) loseExt.restoreContext();
      return !!loseExt;
    },
    get engine() {
      return engine;
    },
  },
};

try {
  if (isWorkerScope()) {
    // Running as the formation worker: build formations on request, nothing else.
    serveFormations(self);
  } else if (typeof window !== 'undefined') {
    window.Universe = Universe;
    if (typeof WebGL2RenderingContext === 'undefined') html().dataset.universe = 'none';
  }
} catch {
  /* never throw at load */
}

export default Universe;
