// InputController: pointer parallax (window, passive), explore-mode drag / pinch / wheel / keys on the
// canvas, and touch-scroll tracking: while the page is being scrolled on a coarse-pointer device the
// engine keeps drawing at a 30 fps cap (the compositor owns the scroll) until ~150 ms after it settles;
// idle work (prewarming, the film build) waits for a quiet moment.

const HOLD_MS = 150;

export class InputController {
  constructor(engine) {
    this.engine = engine;
    this.canvas = engine.canvas;
    this.coarse = typeof matchMedia === 'function' ? matchMedia('(pointer: coarse)') : { matches: false };
    this.interactive = false;
    this.holding = false;
    this.touches = 0;
    this.holdUntil = 0;
    this.holdTimer = 0;
    this.pointers = new Map();
    this.pinch = 0;
    this.lastScroll = -1e9;
    this.abort = new AbortController();
    this.exploreAbort = null;

    const opt = { passive: true, signal: this.abort.signal };
    window.addEventListener('pointermove', this.onWindowPointer, opt);
    window.addEventListener('scroll', this.onScroll, opt);
    window.addEventListener('scrollend', this.onScrollEnd, opt);
    document.addEventListener('touchstart', this.onTouch, opt);
    document.addEventListener('touchend', this.onTouchEnd, opt);
    document.addEventListener('touchcancel', this.onTouchEnd, opt);
  }

  get dragging() {
    return this.pointers.size > 0;
  }

  onWindowPointer = (e) => {
    if (e.pointerType === 'touch') return;
    const w = window.innerWidth || 1, h = window.innerHeight || 1;
    this.engine.pointerMoved((e.clientX / w) * 2 - 1, (e.clientY / h) * 2 - 1);
  };

  // ---- scroll hold (coarse pointers only) ----
  onScroll = () => {
    this.lastScroll = performance.now(); // any pointer: idle work waits for a quiet moment
    if (!this.coarse.matches || this.engine.endingActive || this.dragging) return;
    this.hold(HOLD_MS);
  };

  onScrollEnd = () => {
    if (!this.holding) return;
    this.holdUntil = performance.now() + 40;
    this.schedule(60);
  };

  onTouch = (e) => {
    this.touches = e.touches.length;
  };

  onTouchEnd = (e) => {
    this.touches = e.touches.length;
    if (!this.touches && this.holding) {
      this.holdUntil = performance.now() + HOLD_MS;
      this.schedule(HOLD_MS + 20);
    }
  };

  hold(ms) {
    if (!this.holding) {
      this.holding = true;
      this.engine.onHold(true);
    }
    this.holdUntil = performance.now() + ms;
    this.schedule(ms + 20);
  }

  schedule(ms) {
    clearTimeout(this.holdTimer);
    this.holdTimer = setTimeout(this.release, ms);
  }

  release = () => {
    if (this.touches) {
      this.schedule(120);
      return;
    }
    const left = this.holdUntil - performance.now();
    if (left > 0) {
      this.schedule(left + 15);
      return;
    }
    this.holdTimer = 0;
    this.holding = false;
    this.engine.onHold(false);
  };

  // ---- explore mode ----
  setInteractive(on) {
    on = !!on;
    if (on === this.interactive) return;
    this.interactive = on;
    if (on) {
      this.exploreAbort = new AbortController();
      const c = this.canvas;
      const opt = { passive: true, signal: this.exploreAbort.signal };
      c.addEventListener('pointerdown', this.onDown, opt);
      c.addEventListener('pointermove', this.onMove, opt);
      c.addEventListener('pointerup', this.onUp, opt);
      c.addEventListener('pointercancel', this.onUp, opt);
      c.addEventListener('lostpointercapture', this.onUp, opt);
      c.addEventListener('wheel', this.onWheel, { passive: false, signal: this.exploreAbort.signal });
      c.addEventListener('keydown', this.onKey, { signal: this.exploreAbort.signal });
    } else {
      this.exploreAbort?.abort();
      this.exploreAbort = null;
      this.pointers.clear();
      this.engine.rig.endDrag();
    }
  }

  onDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, t: e.timeStamp });
    try {
      this.canvas.setPointerCapture(e.pointerId);
    } catch {
      /* capture is best-effort */
    }
    if (this.pointers.size === 1) this.engine.rig.beginDrag();
    if (this.pointers.size === 2) this.pinch = this.pinchDistance();
    this.engine.request();
  };

  onMove = (e) => {
    const p = this.pointers.get(e.pointerId);
    if (!p) return;
    const dx = e.clientX - p.x, dy = e.clientY - p.y;
    const dt = Math.max(0.001, (e.timeStamp - p.t) / 1000);
    p.x = e.clientX;
    p.y = e.clientY;
    p.t = e.timeStamp;
    if (this.pointers.size === 1) {
      this.engine.rig.dragBy(dx, dy, dt);
    } else if (this.pointers.size === 2) {
      const d = this.pinchDistance();
      if (this.pinch > 0 && d > 0) this.engine.rig.zoomBy(d / this.pinch);
      this.pinch = d;
    }
    this.engine.request();
  };

  onUp = (e) => {
    if (!this.pointers.delete(e.pointerId)) return;
    if (this.pointers.size === 0) this.engine.rig.endDrag();
    else if (this.pointers.size === 1) this.engine.rig.beginDrag();
    this.pinch = 0;
    this.engine.request();
  };

  onWheel = (e) => {
    if (e.ctrlKey && !this.interactive) return;
    e.preventDefault();
    const unit = e.deltaMode === 1 ? 0.05 : e.deltaMode === 2 ? 1 : 0.0012;
    this.engine.rig.zoomBy(Math.exp(-e.deltaY * unit));
    this.engine.request();
  };

  onKey = (e) => {
    const rig = this.engine.rig;
    let handled = true;
    switch (e.key) {
      case 'ArrowLeft': rig.dragBy(-28, 0, 0); break;
      case 'ArrowRight': rig.dragBy(28, 0, 0); break;
      case 'ArrowUp': rig.dragBy(0, -24, 0); break;
      case 'ArrowDown': rig.dragBy(0, 24, 0); break;
      case '+': case '=': rig.zoomBy(1.12); break;
      case '-': case '_': rig.zoomBy(1 / 1.12); break;
      case 'r': case 'R': rig.reset(); break;
      default: handled = false;
    }
    if (handled) {
      e.preventDefault();
      this.engine.request();
    }
  };

  pinchDistance() {
    const it = this.pointers.values();
    const a = it.next().value, b = it.next().value;
    return a && b ? Math.hypot(a.x - b.x, a.y - b.y) : 0;
  }

  dispose() {
    clearTimeout(this.holdTimer);
    this.abort.abort();
    this.exploreAbort?.abort();
  }
}
