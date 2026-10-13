// Quality: initial tier detection, a GPU timer, and an adaptive controller that trims bloom
// resolution, pixel ratio and (last) the draw range when *our own work* runs long — never the
// particle count, which is fixed per tier.
//
// The controller measures cost, not cadence. The interval between rAF callbacks says more about the
// browser (Low Power Mode / Energy Saver caps at 30 Hz, throttled webviews, a busy main thread) than
// about the GPU, so with a GPU timer (EXT_disjoint_timer_query_webgl2) it judges the 75th percentile
// of the render's GPU ms over 2 s windows against 75 % of a 60 Hz frame (our knobs only cut GPU
// work, so a CPU-bound frame never degrades the picture; CPU time only gates upgrades). Without a
// timer (Safari, Firefox) it falls back to cadence: the median interval (never the minimum), frames
// dropped against it (never against less than a 60 fps frame: a 120–240 Hz display is not chased),
// and a steady cadence at a multiple of the display period counts as a cap, not as slowness. Frames
// that ran a build, bake, compile, resize or loop restart are never sampled. Every degrade is
// verified (it must cut the cost) or reverted and blocked; upgrades back off exponentially when
// they fail instead of locking forever.

import { ADAPTIVE_STEPS, TIERS } from './config.js';

export function detectTier(gl) {
  let gpu = '';
  try {
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    gpu = String(gl.getParameter(ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER) || '');
  } catch {
    gpu = '';
  }
  const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
  const mem = navigator.deviceMemory || 4;
  const cores = navigator.hardwareConcurrency || 4;
  if (/swiftshader|llvmpipe|software|basic render/i.test(gpu)) return 'low';
  if (coarse) {
    if (mem <= 3 || cores <= 4) return 'low';
    return 'medium';
  }
  if (mem <= 2 || cores <= 2) return 'medium';
  return 'high';
}

export const normalizeTier = (q) => (TIERS[q] ? q : null);

/**
 * GPU time of the render via EXT_disjoint_timer_query_webgl2: a ring of queries read 2–3 frames
 * later, results dropped when the GPU reports a disjoint event. Silently absent where unsupported.
 */
export class GpuTimer {
  constructor(gl) {
    this.gl = gl;
    this.ext = null;
    this.ring = [];
    this.head = 0;
    this.active = null;
    this.restore();
  }

  get available() {
    return !!this.ext;
  }

  /** (Re)acquire the extension and the query objects (a restored context starts with neither). */
  restore() {
    this.ring = [];
    this.active = null;
    this.head = 0;
    try {
      this.ext = this.gl.isContextLost() ? null : this.gl.getExtension('EXT_disjoint_timer_query_webgl2');
    } catch {
      this.ext = null;
    }
    if (!this.ext) return;
    try {
      for (let k = 0; k < 4; k++) this.ring.push({ q: this.gl.createQuery(), pending: false, skip: false });
    } catch {
      this.ext = null;
    }
  }

  begin() {
    if (!this.ext || this.active) return;
    const slot = this.ring[this.head];
    if (!slot || slot.pending) return; // results not read yet: skip timing this frame
    try {
      this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT, slot.q);
      this.active = slot;
    } catch {
      this.active = null;
    }
  }

  /** skip: the frame's result must not be sampled (uploads, compiles…). */
  end(skip) {
    const slot = this.active;
    if (!slot) return;
    this.active = null;
    try {
      this.gl.endQuery(this.ext.TIME_ELAPSED_EXT);
      slot.pending = true;
      slot.skip = !!skip;
      this.head = (this.head + 1) % this.ring.length;
    } catch {
      /* ignore */
    }
  }

  /** Calls fn(ms) for every finished, valid result. */
  poll(fn) {
    if (!this.ext) return;
    const gl = this.gl;
    let disjoint = false;
    try {
      disjoint = !!gl.getParameter(this.ext.GPU_DISJOINT_EXT);
    } catch {
      return;
    }
    for (let k = 0; k < this.ring.length; k++) {
      const slot = this.ring[k];
      if (!slot.pending) continue;
      let ready = false;
      try {
        ready = gl.getQueryParameter(slot.q, gl.QUERY_RESULT_AVAILABLE);
      } catch {
        ready = true;
        disjoint = true;
      }
      if (!ready) continue;
      slot.pending = false;
      if (disjoint || slot.skip) continue;
      const ns = gl.getQueryParameter(slot.q, gl.QUERY_RESULT);
      fn(ns / 1e6);
    }
  }
}

const WINDOW_MS = 2000;
const TARGET_MS = 16.667; // the frame rate we hold quality for: 60 fps, whatever the display
const BUDGET_MS = TARGET_MS * 0.75; // our work must fit comfortably inside a 60 Hz frame
const VERIFY_GAIN = 0.85; // a degrade must cut the cost by at least 15 %
const BLOCK_MS = 60000;
const BACKOFF_MIN = 10000;
const BACKOFF_MAX = 300000;

function percentile(arr, n, p) {
  if (!n) return 0;
  const a = arr.slice(0, n).sort((x, y) => x - y);
  return a[Math.min(n - 1, Math.floor(p * (n - 1) + 0.5))];
}

export class AdaptiveQuality {
  constructor(enabled = true) {
    this.enabled = enabled;
    this.maxLevel = ADAPTIVE_STEPS.length - 1;
    this.cpu = new Float32Array(512);
    this.gpu = new Float32Array(512);
    this.intervals = new Float32Array(512);
    this.drops = 0;
    this.history = new Float32Array(90); // uncapped intervals, for the cadence median
    this.reset();
  }

  get step() {
    return ADAPTIVE_STEPS[this.level];
  }

  reset() {
    this.level = 0;
    this.nCpu = 0;
    this.nGpu = 0;
    this.nInt = 0;
    this.drops = 0;
    this.hHead = 0;
    this.hCount = 0;
    this.windowStart = 0;
    this.overWindows = 0;
    this.underMs = 0;
    this.verify = null; // { level, metric, at } after a degrade
    this.probe = null; // { from, at } after an upgrade
    this.blocked = new Float64Array(ADAPTIVE_STEPS.length); // degrade into level k blocked until
    this.upgradeAt = 0; // no upgrade before this time
    this.backoff = BACKOFF_MIN;
    this.lastMetric = 0;
    this.mode = 'none';
    this.cadence = 0;
  }

  /**
   * One rendered frame. interval: ms since the previous rendered frame (0 after a restart);
   * cpu: ms spent in step+render; capped: the engine deliberately throttles this frame (ambient
   * 30 fps); skip: the frame (or the task before it) did one-off work and must not be sampled.
   */
  sample(interval, cpu, capped, skip) {
    if (!this.enabled || skip) return;
    if (this.nCpu < 512) this.cpu[this.nCpu++] = cpu;
    if (!(interval > 0) || interval > 400) return;
    if (!capped) {
      this.history[this.hHead] = interval;
      this.hHead = (this.hHead + 1) % this.history.length;
      if (this.hCount < this.history.length) this.hCount++;
    }
    if (this.nInt < 512) this.intervals[this.nInt++] = capped ? -interval : interval;
  }

  /** A GPU time result (ms) from the timer. */
  gpuSample(ms) {
    if (this.enabled && this.nGpu < 512) this.gpu[this.nGpu++] = ms;
  }

  /** Display/browser cadence: median of recent uncapped intervals. */
  _cadence() {
    const n = this.hCount;
    if (n < 12) return 0;
    return percentile(this.history, n, 0.5);
  }

  /**
   * Called once per rendered frame with the current time. Returns +1 (degraded), -1 (upgraded)
   * or 0. The caller re-applies the step and must not sample the next few frames.
   */
  decide(now, timed) {
    if (!this.enabled) return 0;
    if (!this.windowStart) this.windowStart = now;
    if (now - this.windowStart < WINDOW_MS) return 0;
    const span = now - this.windowStart;
    this.windowStart = now;
    const result = this._evaluate(now, span, timed);
    this.nCpu = 0;
    this.nGpu = 0;
    this.nInt = 0;
    return result;
  }

  _evaluate(now, span, timed) {
    // ---- the window's metric
    const cpu75 = percentile(this.cpu, this.nCpu, 0.75);
    let metric = 0;
    let over = false;
    let under = false;
    let conclusive = false;
    const cadence = this._cadence();
    this.cadence = cadence;
    if (timed && this.nGpu >= 8) {
      this.mode = 'timer';
      // Our knobs (bloom, pixels, draw range) only cut GPU work: a CPU-bound frame is never a
      // reason to degrade the picture.
      const gpu75 = percentile(this.gpu, this.nGpu, 0.75);
      metric = gpu75;
      conclusive = true;
      over = gpu75 > BUDGET_MS;
      // Headroom: what would the next better level cost? (fill scales with pixels)
      under = gpu75 * this._upRatio() < BUDGET_MS * 0.5 && cpu75 < BUDGET_MS;
    } else if (this.nInt >= 12) {
      this.mode = 'cadence';
      // Dropped frames against the expected period: the median cadence, or our own 30 fps cap —
      // never shorter than our 60 fps target. A faster display (120–240 Hz, or an uncapped
      // browser) is not chased: a fast GPU presenting at 70–110 fps there is not slow, and
      // degrading it would buy nothing anyone can see.
      let drops = 0;
      let uncapped = 0;
      for (let k = 0; k < this.nInt; k++) {
        const v = this.intervals[k];
        const expected = v < 0 ? Math.max(33.3, cadence) : Math.max(TARGET_MS, cadence || TARGET_MS);
        if (Math.abs(v) > expected * 1.5) drops++;
        if (v > 0) uncapped++;
      }
      const dropRatio = drops / this.nInt;
      metric = dropRatio + 0.0001;
      conclusive = true;
      // A steady cadence at a whole multiple of a display period is a browser cap (Low Power
      // Mode, Energy Saver, a throttled webview): never a reason to degrade. A steady cadence
      // that is not such a multiple, and slower than ~50 fps, is our own slowness.
      let slowSteady = false;
      if (uncapped >= 12 && cadence > 20) {
        const q1 = percentile(this.history, this.hCount, 0.25), q3 = percentile(this.history, this.hCount, 0.75);
        const steady = (q3 - q1) / cadence < 0.1;
        const multiple = (period) => {
          const k = Math.round(cadence / period);
          return k >= 1 && Math.abs(cadence - k * period) / cadence < 0.08;
        };
        slowSteady = steady && !multiple(16.667) && !multiple(8.333);
        if (slowSteady) metric = Math.max(metric, cadence / 100);
      }
      over = dropRatio > 0.2 || slowSteady;
      under = dropRatio < 0.03 && !slowSteady && cpu75 < BUDGET_MS * 0.5;
    }
    this.lastMetric = metric;
    if (!conclusive) return 0;

    // ---- a recent upgrade that does not hold is reverted, and upgrades back off
    if (this.probe) {
      if (over) {
        const back = this.probe.from;
        this.probe = null;
        this.backoff = Math.min(BACKOFF_MAX, this.backoff * 2);
        this.upgradeAt = now + this.backoff;
        this.overWindows = 0;
        this.underMs = 0;
        if (back !== this.level) {
          this.level = back;
          return 1;
        }
        return 0;
      }
      if (now - this.probe.at > WINDOW_MS * 2.5) {
        this.probe = null;
        this.backoff = BACKOFF_MIN;
      }
    }

    // ---- a recent degrade must have cut the cost; otherwise revert it. A failed step that cut
    // pixels or particles means the bottleneck is not our fill: stop degrading for a while. A
    // failed bloom-only step just did too little: skip it next time.
    if (this.verify) {
      const v = this.verify;
      this.verify = null;
      if (metric > v.metric * VERIFY_GAIN) {
        const failed = this.level;
        const cutFill = this.cutsFill ? this.cutsFill(failed, v.level) : true;
        if (cutFill) for (let k = v.level + 1; k <= this.maxLevel; k++) this.blocked[k] = now + BLOCK_MS;
        else this.blocked[failed] = now + BLOCK_MS;
        this.level = v.level;
        this.overWindows = 0;
        this.underMs = 0;
        return -1;
      }
    }

    if (over) {
      this.underMs = 0;
      this.overWindows++;
      if (this.overWindows >= 2) {
        const next = this._nextDown(now);
        if (next > this.level) {
          this.verify = { level: this.level, metric };
          this.level = next;
          this.overWindows = 0;
          return 1;
        }
      }
      return 0;
    }
    this.overWindows = 0;
    if (under && this.level > 0) {
      this.underMs += span;
      if (this.underMs >= 5000 && now >= this.upgradeAt) {
        this.probe = { from: this.level, at: now };
        this.level = this._nextUp();
        this.underMs = 0;
        return -1;
      }
    } else {
      this.underMs = 0;
    }
    return 0;
  }

  /** Next level down that is not blocked and changes something here. */
  _nextDown(now) {
    for (let k = this.level + 1; k <= this.maxLevel; k++) {
      if (this.blocked[k] > now) continue;
      if (!this.isNoop || !this.isNoop(k, this.level)) return k;
    }
    return this.level;
  }

  _nextUp() {
    for (let k = this.level - 1; k > 0; k--) if (!this.isNoop || !this.isNoop(k, this.level)) return k;
    return 0;
  }

  /** Predicted cost ratio of the next better level (pixels and drawn particles). */
  _upRatio() {
    if (this.level === 0) return 1;
    const a = ADAPTIVE_STEPS[this.level], b = ADAPTIVE_STEPS[this._nextUp()];
    const px = this.pixelRatioOf ? (this.pixelRatioOf(b) / Math.max(0.01, this.pixelRatioOf(a))) ** 2 : 1;
    return Math.max(px, b.draw / a.draw, 1);
  }

  info() {
    return { level: this.level, mode: this.mode, metric: Math.round(this.lastMetric * 100) / 100, cadence: Math.round(this.cadence * 10) / 10, backoff: this.backoff };
  }
}
