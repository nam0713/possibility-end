// Engine: one THREE.WebGLRenderer on the site's fixed canvas, the shared particle field, starfield,
// accents and post chain; the scene/layout state machine; and the on-demand render loop.
//
// The loop only runs while something needs drawing: ambient motion (unless paused / reduced motion),
// a morph, camera easing, fades, the reading starfield's scatter easing, the seed's arming, explore
// input or the ending film. It stops when the document is hidden, when setVisible(false) and while the
// context is lost. A touch scroll never stops it (the universe keeps moving under the reader's finger);
// it only caps drawing at 30 fps so the compositor keeps headroom for the scroll itself.
//
// The main thread stays free: formations are built in a Worker (requested ahead, prewarmed by
// likelihood), every shader program is compiled asynchronously before the first frame, retargets
// bake on the GPU, and the adaptive quality controller judges our own work, not the browser's
// frame cadence.

import * as THREE from 'three';
import { ADAPTIVE_STEPS, CAMERA_FOV, HEX, MORPH, POST, SCATTER, TIERS, EASE, isTall } from './config.js';
import { clamp, damper, hexToSrgb, lerp, smoothDamp, smoothstep } from './math.js';
import { ParticleField, gpuStateSupported } from './particles/field.js';
import { HOLE_UNIFORMS, PACK, wrapTime } from './particles/shaders.js';
import { HOLE } from './formations/universe.js';
import { FormationCache, SPECS, deriveOrigin, formationId } from './formations/index.js';
import { FormationWorker } from './formations/worker.js';
import { Starfield } from './stars.js';
import { AccentManager } from './accents/index.js';
import { PostChain } from './post.js';
import { CameraRig } from './camera.js';
import { NodeTracker } from './nodes.js';
import { InputController } from './input.js';
import { AdaptiveQuality, GpuTimer, detectTier, normalizeTier } from './quality.js';
import { FilmHost } from './film-host.js';

const SCENES = ['cover', 'preview', 'chapter', 'ending-ready'];
const LAYOUT_NAMES = ['hero', 'explore', 'contents', 'chapter', 'reading'];
const PRODUCTION = process.env.NODE_ENV === 'production';
const RETURN_HOLD = 0.25; // s of black after the film before the seed fades back in
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const idleTick = () => new Promise((resolve) => (typeof requestIdleCallback === 'function' ? requestIdleCallback(() => resolve(), { timeout: 60 }) : setTimeout(resolve, 0)));

export class Engine {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.options = options;
    this.ok = false;
    this.contextLost = false;
    this.visible = true;
    this.paused = false;
    this.interactive = false;
    this.selected = 0;
    this.sceneName = 'cover';
    this.sceneKey = '';
    this.chapter = 0;
    this.layout = 'hero';
    this.formationId = 'origin';
    this.pending = null; // a morph waiting for its formation (built off the main thread)
    this.readingRaw = 0;
    this.reading = damper(0);
    this.time = 0; // living-motion clock (stops when paused); uploaded wrapped
    this.clock = 0; // real clock
    this.frames = 0;
    this.fps = 0;
    this.fpsFrames = 0;
    this.fpsT0 = 0;
    this.raf = 0;
    this.lastDraw = 0;
    this.holding = false;
    this.holdFrame = false;
    this.holdFrameTimer = 0;
    this.lastHoldFrame = 0;
    this.pendingResize = false;
    this.compiling = false;
    this.noSample = 0; // frames the adaptive controller must not sample (one-off work)
    this.width = 1;
    this.height = 1;
    this.pixelRatio = 1;
    this.seenRatio = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    this.lightFade = { value: 0, target: 1, rate: 0.7 };
    this.black = { value: 1, target: 1, rate: 1.4 };
    this.frozen = false;
    this.filmDof = true; // film handover sizes include the fake depth of field (diagnostic switch)
    // Film handover sizes: 'auto' sends them once the film declares it reads `energies` (see FilmHost).
    this.filmSizes = 'auto';
    this.projScratch = [0, 0, 0, 0];
    this.blackHold = false; // black until a pending formation arrives (film left by navigation)
    this.awaitPage = false; // black until the page sets its scene (film left with stop({restore:false}))
    this.awaitTimer = 0;
    this.revealUntil = 0; // end of the seed's reveal after the film (a page scene before it takes over)
    this.focusScratch = [0, 0, 0];
    // Reading starfield (setScatter): the page's target and its eased value (uScatter).
    this.scatterTarget = 0;
    this.scatter = damper(0);
    this.scatterMoving = false;
    // Ch.8 trigger hover/focus (ending.arm): the seed brightens and breathes a little.
    this.armTarget = 0;
    this.arm = damper(0);
    this.armMoving = false;
    this.dimEff = 1; // the light's dim as drawn: the composition's, released by the scatter
    this.ctx = { presence: 0, time: 0, gpuTime: 0, dtLiving: 0, clock: 0, reading: 0, focus: 10, spread: 0, expand: 1, evolve: 1, pixelScale: 1000, pixelRatio: 1, selected: 0, morph: 1, solid: 1, arm: 0 };
    this.reducedMQ = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false, addEventListener() {} };
    this.coarseMQ = typeof matchMedia === 'function' ? matchMedia('(pointer: coarse)') : { matches: false };
  }

  // ------------------------------------------------------------------ setup

  init() {
    const canvas = this.canvas;
    // The formation worker parses the bundle in parallel with everything below.
    this.worker = FormationWorker.create(this.options.script);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      context: this.options.context || undefined,
      antialias: false,
      alpha: false,
      depth: true,
      stencil: false,
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance',
    });
    const r = this.renderer;
    // Shader diagnostics query the driver synchronously; production never needs them.
    r.debug.checkShaderErrors = !PRODUCTION;
    r.setClearColor(0x000000, 1);
    r.toneMapping = THREE.NoToneMapping;
    r.toneMappingExposure = POST.exposure;
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.autoClear = true;
    const gl = r.getContext();
    try {
      // Deep space right away (a plain clear, no shader): the canvas never flashes black while
      // the programs compile. Restores the clear colour three.js believes is set.
      gl.clearColor(4 / 255, 7 / 255, 11 / 255, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.clearColor(0, 0, 0, 0);
    } catch {
      /* ignore */
    }
    try {
      const range = gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE);
      this.maxPointSize = range && range[1] ? range[1] : 64;
    } catch {
      this.maxPointSize = 64;
    }

    const requested = normalizeTier(this.options.quality);
    this.autoQuality = !requested;
    this.tierName = requested || detectTier(gl);
    this.gpuTimer = new GpuTimer(gl);
    this.adaptive = new AdaptiveQuality(this.options.adaptive !== false);
    this.adaptive.isNoop = (a, b) => this.sameStep(ADAPTIVE_STEPS[a], ADAPTIVE_STEPS[b]);
    this.adaptive.pixelRatioOf = (step) => this.pixelRatioFor(step, this.width, this.height);
    this.adaptive.cutsFill = (a, b) => {
      const A = ADAPTIVE_STEPS[a], B = ADAPTIVE_STEPS[b];
      return A.draw !== B.draw || this.pixelRatioFor(A, this.width, this.height) !== this.pixelRatioFor(B, this.width, this.height);
    };

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(CAMERA_FOV, 1, 0.05, 500);
    this.rig = new CameraRig(this.camera);
    this.nodes = new NodeTracker();
    this.film = new FilmHost(this);
    this.post = new PostChain(r, this.scene, this.camera);
    this.buildWorld();

    // Nothing is drawn until the first formation arrives; then dust derived from it streams in.
    this.spec = SPECS.origin;
    this.rig.setFormation(this.spec);

    this.input = new InputController(this);
    this.listen();
    this.resize();
    this.rig.snap();
    this.applyBackground(true);
    this.ok = true;
    this.compileThenRun();
    this.schedulePrewarm(2600);
  }

  buildWorld() {
    const tier = TIERS[this.tierName];
    this.cache = new FormationCache(tier.particles, this.worker);
    this.field = new ParticleField(tier.particles, { renderer: this.renderer, gpuState: gpuStateSupported(this.renderer) });
    this.stars = new Starfield(tier.stars);
    if (!this.accents) {
      this.accents = new AccentManager(this.scene);
      // Every accent exists from the start (hidden), so its programs compile before any morph.
      this.accents.createAll();
    }
    this.scene.add(this.stars.points, this.field.points, this.field.ghost);
    this.field.uniforms.uSizeScale.value = tier.size;
    this.field.uniforms.uGain.value = tier.gain;
    this.attachOverlay();
  }

  /** The post-bloom overlay scene holds the ch.7 shadow and the particles re-drawn in front of it. */
  attachOverlay() {
    const ov = this.post && this.post.overlay;
    if (!ov) return;
    const hole = this.accents.get('ch7');
    if (hole && hole.overlay.parent !== ov) ov.add(hole.overlay);
    if (this.field.overlay.parent !== ov) ov.add(this.field.overlay);
  }

  disposeWorld() {
    this.scene.remove(this.stars.points, this.field.points, this.field.ghost);
    this.field.dispose();
    this.stars.dispose();
    this.cache.clear();
  }

  /**
   * Compile every program asynchronously (KHR_parallel_shader_compile) before the first frame:
   * particles, stars, all accents, the post-bloom overlay, the bake pass and every post pass, each
   * against the kind of target it renders into (the program keys depend on it).
   */
  compileThenRun() {
    this.compiling = true;
    const done = () => {
      this.compiling = false;
      this.lastDraw = 0;
      this.request();
    };
    const warm = () => this.warmPrograms().then(done, done);
    this.precompile().then(warm, (e) => {
      console.warn('Universe: shader precompile failed', e);
      done();
    });
  }

  /**
   * A program's first use queries its uniforms and attributes from the driver (a synchronous
   * round trip each). Do that for every compiled program in small idle slices, so the first
   * frame and the first visit to any chapter only draw.
   */
  warmPrograms() {
    const programs = ((this.renderer.info && this.renderer.info.programs) || []).slice();
    const deadline = performance.now() + 1500;
    return new Promise((resolve) => {
      const slice = () => {
        const t0 = performance.now();
        while (programs.length && performance.now() - t0 < 4) {
          const p = programs.pop();
          try {
            p.getUniforms();
            p.getAttributes();
          } catch {
            /* a broken program reports itself when used */
          }
        }
        if (!programs.length || performance.now() > deadline || !this.ok) resolve();
        else if (typeof requestIdleCallback === 'function') requestIdleCallback(slice, { timeout: 50 });
        else setTimeout(slice, 0);
      };
      slice();
    });
  }

  async precompile() {
    const r = this.renderer;
    if (typeof r.compileAsync !== 'function') return;
    const post = this.post;
    const scene = this.scene;
    const linear = post.composer.readBuffer;
    // Staged: each compileAsync() builds its programs synchronously, so the stages are spread over
    // idle callbacks instead of one long task. What the first frame needs comes first.
    const field = this.field;
    const stages = [
      [field.points, this.camera, linear, scene],
      [this.stars.points, this.camera, linear, scene],
      [post.passScene(), this.camera, linear],
      [post.finishScene(), this.camera, null],
      [this.accents.root, this.camera, linear, scene],
      [post.overlay, this.camera, linear],
      field.bakeScene ? [field.bakeScene, field.bakeCamera, field.states[0]] : null,
    ];
    const jobs = [];
    for (const stage of stages) {
      if (!stage || !this.ok) continue;
      const [object, camera, target, targetScene] = stage;
      const prev = r.getRenderTarget();
      try {
        r.setRenderTarget(target);
        jobs.push(r.compileAsync(object, camera, targetScene || null));
      } finally {
        r.setRenderTarget(prev);
      }
      await idleTick();
    }
    // Never wait forever (a context lost mid-compile never reports ready).
    await Promise.race([Promise.all(jobs), wait(6000)]);
  }

  listen() {
    const signal = (this.abort = new AbortController()).signal;
    this.resizeObserver = new ResizeObserver(() => this.onResize());
    this.resizeObserver.observe(this.canvas);
    // A device-pixel-ratio change with the same CSS size (window moved to a HiDPI monitor, zoom)
    // fires no resize: watch the resolution itself, re-armed after every change.
    const watchRatio = () => {
      if (typeof matchMedia !== 'function' || signal.aborted) return;
      try {
        const mq = matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`);
        mq.addEventListener('change', () => {
          this.lastSize = '';
          this.onResize();
          watchRatio();
        }, { once: true, signal });
      } catch {
        /* ignore */
      }
    };
    watchRatio();
    document.addEventListener('visibilitychange', () => (document.hidden ? this.stopLoop() : this.request()), { signal });
    this.canvas.addEventListener('webglcontextlost', this.onContextLost, { signal });
    this.canvas.addEventListener('webglcontextrestored', this.onContextRestored, { signal });
    const onReduced = () => {
      this.film.setReducedMotion(this.reducedMotion());
      this.request();
    };
    if (this.reducedMQ.addEventListener) this.reducedMQ.addEventListener('change', onReduced, { signal });
  }

  onResize() {
    if (this.holding) this.pendingResize = true;
    else this.resize();
  }

  onContextLost = (e) => {
    e.preventDefault();
    this.contextLost = true;
    this.stopLoop();
    dispatch('universe:contextlost', {});
  };

  onContextRestored = () => {
    // three.js re-initialises its GL state. The old post chain's GL objects belonged to the lost
    // context: drop it without dispose() (deleting foreign objects only floods the console) and
    // build a new one; every buffer is re-sent.
    try {
      this.post = new PostChain(this.renderer, this.scene, this.camera);
      this.attachOverlay();
      this.field.markDirty();
      this.gpuTimer.restore();
      this.contextLost = false;
      this.lastSize = '';
      this.resize();
      this.applyBackground(true);
      this.noSample = Math.max(this.noSample, 10);
      dispatch('universe:contextrestored', {});
      this.schedulePrewarm(300);
      this.request();
    } catch (err) {
      console.error('Universe: context restore failed', err);
    }
  };

  // ------------------------------------------------------------------ sizing & quality

  /** Device pixel ratio capped by the tier, its pixel budget and coarse pointers. */
  basePixelRatio(w, h) {
    const tier = TIERS[this.tierName];
    const coarse = this.coarseMQ.matches;
    let pr = Math.min(window.devicePixelRatio || 1, coarse ? Math.min(1.5, tier.dprCap) : tier.dprCap);
    return Math.min(pr, Math.sqrt(tier.pixelBudget / Math.max(1, w * h)));
  }

  /** Pixel ratio an adaptive step gives at this size (never below min(base, floor)). */
  pixelRatioFor(step, w, h) {
    const base = this.basePixelRatio(w, h);
    const pr = Math.max(0.5, Math.min(base, step.floor || 0), base * step.dpr);
    return Math.round(pr * 100) / 100;
  }

  /** Two adaptive steps that would render identically here (e.g. bloom steps on a no-bloom tier). */
  sameStep(a, b) {
    const tier = TIERS[this.tierName];
    const bloomA = tier.bloom ? a.bloom : 0, bloomB = tier.bloom ? b.bloom : 0;
    return a.draw === b.draw && bloomA === bloomB && this.pixelRatioFor(a, this.width, this.height) === this.pixelRatioFor(b, this.width, this.height);
  }

  resize() {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    if (!w || !h) return;
    const tier = TIERS[this.tierName];
    const step = this.adaptive.step;
    const pr = this.pixelRatioFor(step, w, h);
    const key = `${w}x${h}@${pr}|${step.bloom}|${step.draw}|${this.tierName}`;
    this.field.setDrawCount(this.field.count * step.draw);
    // A trimmed draw range loses light: compensate so formations do not dim.
    this.field.uniforms.uGain.value = tier.gain / Math.sqrt(step.draw);
    this.post.setBloom(tier.bloom && step.bloom > 0, tier.bloomScale * step.bloom);
    this.post.uniforms.uGrain.value = tier.grain ? POST.grain : POST.grain * 0.5;
    if (key === this.lastSize) return;
    this.lastSize = key;
    // The canvas is sized to the large viewport (site.css: 100lvh), so a phone's address bar that
    // collapses or returns mid-scroll never resizes it. Compositions are framed in the visible part —
    // the window height measured when the canvas size really changes (load, rotation, a resized
    // window) — so nothing re-centres while the toolbar moves.
    if (w !== this.width || h !== this.height || !this.frameHeight) this.frameHeight = Math.min(h, Math.max(1, window.innerHeight || h));
    this.width = w;
    this.height = h;
    this.pixelRatio = pr;
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h, false);
    this.post.setSize(w, h, pr);
    this.rig.setViewport(w, h, this.frameHeight);
    const u = this.field.uniforms;
    u.uPixelScale.value = (h * pr) / (2 * Math.tan(THREE.MathUtils.degToRad(CAMERA_FOV) / 2));
    u.uMinPx.value = Math.max(1.5, 1.45 * pr);
    u.uMaxPx.value = Math.min(this.maxPointSize, 46 * pr);
    this.stars.uniforms.uPixelRatio.value = pr;
    this.ctx.pixelScale = u.uPixelScale.value;
    this.ctx.pixelRatio = pr;
    this.updateScatterLook();
    this.film.resize(w, h, pr);
    this.noSample = Math.max(this.noSample, 10);
    this.request();
  }

  /**
   * The reading starfield's size-dependent settings: how many stars stay visible (a density per CSS
   * megapixel, as a share of the drawn particles: the draw range trimmed by adaptive quality and
   * the tier's count are compensated), the sprite sizes in drawing-buffer px, and the calm text
   * column (wide screens only; on portrait phones the text spans the screen).
   */
  updateScatterLook() {
    const u = this.field.uniforms;
    const stars = clamp((SCATTER.density * this.width * this.height) / 1e6, SCATTER.minStars, SCATTER.maxStars);
    u.uScatterKeep.value = Math.min(1, stars / Math.max(1, this.field.drawCount));
    const L = u.uScatterLook.value;
    L.y = SCATTER.gain;
    L.z = SCATTER.px * this.pixelRatio;
    L.w = SCATTER.pxBright * this.pixelRatio;
    u.uScatterMotion.value.w = isTall(this.width, this.frameHeight || this.height) ? 1 : SCATTER.calm;
  }

  setQuality(q) {
    const requested = normalizeTier(q);
    this.autoQuality = !requested;
    const tier = requested || detectTier(this.renderer.getContext());
    this.adaptive.reset();
    if (tier !== this.tierName) {
      this.tierName = tier;
      this.disposeWorld();
      this.buildWorld();
      // Rebuild the current formation at the new count without a morph.
      this.prewarmJob = null;
      const pending = this.pending;
      this.pending = null;
      if (this.formationId !== 'origin') {
        this.field.setImmediate(this.cache.get(this.formationId));
        this.updateToUniforms(true);
      }
      if (pending) this.queueMorph(pending.fid, pending.kind, pending.instant);
      this.compileThenRun();
      this.schedulePrewarm(1500);
    }
    this.lastSize = '';
    this.resize();
    this.request();
  }

  qualityInfo() {
    const tier = TIERS[this.tierName];
    return { tier: this.tierName, particles: this.field.count, pixelRatio: this.pixelRatio, bloom: tier.bloom && this.post.bloom.enabled };
  }

  filmQuality() {
    const q = this.qualityInfo();
    return { tier: q.tier, particles: q.particles, pixelRatio: q.pixelRatio, bloom: TIERS[q.tier].bloom };
  }

  // ------------------------------------------------------------------ scenes

  reducedMotion() {
    return !!this.reducedMQ.matches;
  }

  ambient() {
    return !this.paused && !this.reducedMotion() && !this.frozen;
  }

  setScene(name, opts = {}) {
    if (!SCENES.includes(name)) return;
    const o = opts && typeof opts === 'object' ? opts : {};
    const chapter = name === 'preview' || name === 'chapter' ? clamp(Math.round(Number(o.chapter) || 1), 1, 8) : 0;
    const layout = LAYOUT_NAMES.includes(o.layout) ? o.layout : this.defaultLayout(name);
    const key = `${name}|${chapter}|${layout}`;
    if (key === this.sceneKey) return;
    this.sceneKey = key;
    const prevScene = this.sceneName;
    // A different chapter starts unread; the UI then restores the reader's position via setReading.
    if (name === 'chapter' && (prevScene !== 'chapter' || chapter !== this.chapter)) this.readingRaw = 0;
    this.sceneName = name;
    this.chapter = chapter;
    const fid = formationId(name, chapter);
    const target = this.pending ? this.pending.fid : this.formationId;
    if (fid !== target) {
      const kind = this.formationId === 'origin' ? 'intro' : name === 'ending-ready' ? 'seed' : name === 'cover' ? 'cover' : name === 'preview' ? 'preview' : 'chapter';
      this.queueMorph(fid, kind, o.instant === true);
    } else if (prevScene !== name) {
      // Same formation, different scene (e.g. preview → chapter): reading semantics change smoothly.
      this.updateToUniforms(false);
    }
    this.layout = layout;
    this.rig.setLayout(layout);
    if (name === 'ending-ready') this.scheduleFilmPrewarm();
    this.applyBackground(false);
    this.requestHoldFrame();
    this.schedulePrewarm(900);
    this.request();
  }

  defaultLayout(name) {
    if (name === 'cover') return this.layout === 'explore' && this.sceneName === 'cover' ? 'explore' : 'hero';
    if (name === 'preview') return 'contents';
    if (name === 'chapter') return 'chapter';
    return this.layout === 'reading' || this.layout === 'chapter' ? this.layout : 'chapter';
  }

  /** Morph to fid as soon as its formation exists (cached: now; otherwise when the worker delivers). */
  queueMorph(fid, kind, instant) {
    if (fid === this.formationId) {
      this.pending = null; // back to what is shown: nothing to do
      this.releaseBlack();
      return;
    }
    const intro = this.formationId === 'origin';
    const ready = this.cache.peek(fid);
    if (ready) {
      this.pending = null;
      this.morphTo(ready, intro ? 'intro' : kind, instant);
      return;
    }
    const token = { fid, kind: intro ? 'intro' : kind, instant };
    this.pending = token;
    this.cache.request(fid, { origin: intro }).then((f) => {
      if (this.pending !== token || !this.ok) return;
      this.pending = null;
      this.morphTo(f, token.kind, token.instant);
      this.request();
    }, (e) => {
      console.error(`Universe: formation '${fid}' failed`, e);
      if (this.pending === token) this.releaseBlack();
    });
  }

  /** End a black hold (see settleBehindBlack): the screen fades in from black. */
  releaseBlack() {
    if (!this.blackHold) return;
    this.blackHold = false;
    this.black.target = 1;
    this.request();
  }

  morphTo(f, kind, instant) {
    if (!f || !f.spec) return;
    if (this.blackHold) {
      // Arriving behind a black hold: appear settled, then fade in.
      instant = true;
      this.releaseBlack();
    }
    const spec = f.spec;
    const fid = f.id;
    const reduced = this.reducedMotion();
    const m = MORPH[kind] || MORPH.chapter;
    const first = this.formationId === 'origin';
    this.formationId = fid;
    this.spec = spec;
    this.rig.setFormation(spec);
    this.noSample = Math.max(this.noSample, 2);
    if (instant) {
      f.origin = null;
      this.field.setImmediate(f);
      this.updateToUniforms(true);
      this.accents.setActive(fid, 0, true);
      this.rig.snap();
      this.applyBackground(false);
      return;
    }
    const duration = reduced ? MORPH.dissolve.duration : m.duration;
    const params = { ...m, duration, radius: spec.radius * 1.15 };
    if (first) {
      // Load-in: dust derived from this formation streams in (one upload, no extra build).
      const origin = f.origin || deriveOrigin(f, this.field.count);
      f.origin = null;
      this.field.setPair(origin, f, params, reduced);
    } else {
      // Order matters: the field freezes (swap) or bakes the *outgoing* formation's reading
      // controls, then the incoming formation's controls take over the to-side uniforms.
      this.field.morphTo(f, this.time, params, reduced);
    }
    this.updateToUniforms(true);
    this.accents.setActive(fid, duration, false);
    this.morphKind = kind;
    this.applyBackground(false);
  }

  /** Reading progress → per-formation uniforms (evolve, expand, spread, dim). */
  readingValue() {
    const spec = this.spec;
    if (!spec) return 0;
    return this.sceneName === 'chapter' ? this.readingRaw : spec.reading.preview;
  }

  updateToUniforms(snap) {
    const target = this.readingValue();
    if (snap) {
      this.reading.value = target;
      this.reading.velocity = 0;
    }
    this.applyReading();
  }

  applyReading() {
    const spec = this.spec;
    if (!spec) return;
    const r = this.reading.value;
    const R = spec.reading;
    const u = this.field.uniforms;
    u.uEvolve.value = lerp(R.evolve[0], R.evolve[1], r);
    u.uEvolveMode.value = R.mode;
    u.uToExpand.value = lerp(R.expand[0], R.expand[1], r);
    u.uToSpread.value = lerp(R.spread[0], R.spread[1], r);
    u.uToDim.value = lerp(R.dim[0], R.dim[1], r);
    this.ctx.reading = r;
    this.ctx.evolve = u.uEvolve.value;
    this.ctx.expand = u.uToExpand.value;
    this.ctx.spread = u.uToSpread.value;
  }

  /** Background glow: centred on the composition, tinted per formation. */
  applyBackground(snap) {
    const tint = hexToSrgb(this.spec?.tint || HEX.deep);
    this.bgTint = this.bgTint || [0, 0, 0];
    this.bgTarget = [tint[0] * 0.018 + 0.004, tint[1] * 0.018 + 0.012, tint[2] * 0.018 + 0.022];
    if (snap) for (let k = 0; k < 3; k++) this.bgTint[k] = this.bgTarget[k];
  }

  setLayout(layout) {
    if (!LAYOUT_NAMES.includes(layout) || layout === this.layout) return;
    this.layout = layout;
    this.rig.setLayout(layout);
    this.requestHoldFrame();
    this.request();
  }

  setReading(p) {
    this.readingRaw = clamp(Number(p) || 0, 0, 1);
    // Build the ending film in idle time once the reader nears the end of ch.8.
    if (this.sceneName === 'chapter' && this.chapter === 8 && this.readingRaw > 0.8) this.scheduleFilmPrewarm();
    this.request();
  }

  setVeil(v) {
    this.rig.setVeil(Number(v) || 0);
    this.requestHoldFrame();
    this.request();
  }

  setVisible(v) {
    const vis = !!v;
    if (vis === this.visible) return;
    this.visible = vis;
    if (vis) this.request();
    else this.stopLoop();
  }

  setInteractive(v) {
    const on = !!v;
    this.interactive = on;
    this.input.setInteractive(on);
    if (!on) this.rig.reset();
    this.request();
  }

  pointerMoved(nx, ny) {
    if (this.film.active) {
      this.film.setPointer(nx, ny);
      return;
    }
    this.rig.setPointer(nx, ny);
    if (this.parallaxEnabled()) this.request();
  }

  parallaxEnabled() {
    return !this.paused && !this.reducedMotion() && !this.interactive;
  }

  setPaused(v) {
    this.paused = !!v;
    this.request();
  }

  /** Reading starfield target (0 formation … 1 scattered); the value eases toward it. */
  setScatter(v) {
    const s = clamp(Number(v) || 0, 0, 1);
    if (s === this.scatterTarget) return;
    this.scatterTarget = s;
    this.request();
  }

  /** Whether the scatter is still easing (it renders even through a touch-scroll hold). */
  scatterActive() {
    return this.scatter.value !== this.scatterTarget;
  }

  /** Ch.8 trigger hover/focus: the ready seed brightens and breathes (visible only at 'ending-ready'). */
  setArmed(v) {
    const a = v ? 1 : 0;
    if (a === this.armTarget) return;
    this.armTarget = a;
    this.request();
  }

  select(n) {
    this.selected = clamp(Math.round(Number(n) || 0), 0, 8);
    this.request();
  }

  // ------------------------------------------------------------------ ending

  get endingActive() {
    return this.film.active;
  }

  /**
   * Build the ending film in idle time, never while the reader scrolls or matter moves: the build is
   * one task (the film module's), so it waits for a quiet moment.
   */
  scheduleFilmPrewarm() {
    if (this.film.film || this.film.failed || this.filmPrewarmQueued) return;
    this.filmPrewarmQueued = true;
    const later = (ms) => setTimeout(() => idle(run), ms);
    const idle = (fn) => (typeof requestIdleCallback === 'function' ? requestIdleCallback(fn, { timeout: 3000 }) : setTimeout(fn, 200));
    const run = (deadline) => {
      if (!this.ok || this.film.film || this.film.failed) {
        this.filmPrewarmQueued = false;
        return;
      }
      if (this.film.active) {
        this.filmPrewarmQueued = false;
        return;
      }
      const quiet = performance.now() - this.input.lastScroll > 600 && !this.field.morphing && !this.holding && !this.input.dragging && !document.hidden;
      if (!quiet || (deadline && !deadline.didTimeout && deadline.timeRemaining() < 6)) {
        later(300);
        return;
      }
      this.filmPrewarmQueued = false;
      this.film.prewarm();
      this.noSample = Math.max(this.noSample, 2);
    };
    later(400);
  }

  /** Formations in the order the reader is likely to need them. */
  prewarmOrder() {
    const n = this.chapter || 0;
    const list = [];
    const push = (id) => {
      if (!list.includes(id)) list.push(id);
    };
    if (this.sceneName === 'ending-ready' || n === 8) push('seed');
    if (n) {
      push(`ch${n}`);
      if (n < 8) push(`ch${n + 1}`);
      if (n > 1) push(`ch${n - 1}`);
    }
    push('cover');
    for (let k = 1; k <= 8; k++) push(`ch${k}`);
    push('seed');
    return list;
  }

  /**
   * Build the formations the reader is likely to visit next, so hover previews and chapter
   * changes hit the cache. With a worker this costs the main thread nothing; without one, a few
   * milliseconds per idle slot.
   */
  schedulePrewarm(delay = 400) {
    if (this.prewarmTimer) return;
    const run = (deadline) => {
      this.prewarmTimer = 0;
      if (!this.ok) return;
      const busy = this.input.dragging || this.holding || this.film.active || document.hidden || (!this.cache.async && this.field.morphing);
      if (busy) {
        this.schedulePrewarm(600);
        return;
      }
      const cache = this.cache;
      let job = this.prewarmJob;
      if (job && cache.has(job.id)) job = null; // built meanwhile on demand
      if (!job) {
        if (cache.size >= cache.limit - 1) return; // keep a slot free for on-demand builds
        const next = this.prewarmOrder().find((id) => !cache.has(id));
        if (!next) return;
        if (cache.async) {
          this.prewarmTimer = -1;
          const field = this.field;
          cache.request(next).then(
            () => {
              this.prewarmTimer = 0;
              if (this.field === field) this.schedulePrewarm(60);
            },
            () => {
              this.prewarmTimer = 0;
            },
          );
          return;
        }
        job = cache.job(next);
      }
      this.prewarmJob = job;
      // A few milliseconds per idle slot: the render loop never misses a frame for it.
      const budget = deadline && !deadline.didTimeout ? Math.max(1, Math.min(4, deadline.timeRemaining() - 1)) : 3;
      const t0 = performance.now();
      const done = job.step(budget);
      if (performance.now() - t0 > 6) this.noSample = Math.max(this.noSample, 1);
      if (done) this.prewarmJob = null;
      this.schedulePrewarm(done ? 80 : 0);
    };
    // Safari has no requestIdleCallback: fall back to short timeouts (never synchronous).
    const idle = () => {
      if (typeof requestIdleCallback === 'function') requestIdleCallback(run, { timeout: 1000 });
      else setTimeout(run, 16, null);
    };
    this.prewarmTimer = -1; // scheduled
    if (delay > 0) setTimeout(idle, delay);
    else idle();
  }

  /**
   * Exact on-screen state for the film: particles (+ stars) in world space, sheared to undo the view
   * offset, with
   *   colors   — linear colour with the sprite energy folded in (the film's long-standing input);
   *   sizes    — the diameter each sprite is drawn at, in world units at its own depth (depth of
   *              field included; the film applies its own pixel limits);
   *   energies — the factor folded into each colour: colors / energies is the linear colour of the
   *              sprite's centre pixel as the engine drew it (before the minimum-pixel dimming, which
   *              the film applies itself). With sizes and energies the film's first frame is exact.
   */
  snapshotForFilm() {
    const n = this.field.drawCount;
    const total = n + this.stars.count;
    const positions = new Float32Array(total * 3);
    const colors = new Float32Array(total * 3);
    const sizes = new Float32Array(total);
    const energies = new Float32Array(total);
    this.field.snapshot(this.time, positions, colors, n, sizes);
    this.stars.snapshot(positions, colors, n);
    // The engine renders with an off-axis projection (setViewOffset); the film uses a centred camera
    // with the same position/target/fov. Shear view-space x/y by z so the centred view matches exactly.
    const cam = this.camera;
    cam.updateMatrixWorld();
    const P = cam.projectionMatrix.elements;
    const kx = P[8] / P[0];
    const ky = P[9] / P[5];
    const V = cam.matrixWorldInverse.elements;
    const Wm = cam.matrixWorld.elements;
    const u = this.field.uniforms;
    const focus = Math.max(1e-3, u.uFocus.value);
    const dof = u.uDof.value;
    const codeOf = 1 / (PACK.SIZE_MAX * u.uSizeScale.value); // world diameter → size code
    // Stars keep a fixed pixel size: their world diameter at depth d is px · d / (px per unit at depth 1).
    const starPx = this.pixelRatio / Math.max(1e-6, u.uPixelScale.value);
    const look = this.stars.look;
    for (let i = 0; i < total; i++) {
      const x = positions[i * 3], y = positions[i * 3 + 1], z = positions[i * 3 + 2];
      let vx = V[0] * x + V[4] * y + V[8] * z + V[12];
      let vy = V[1] * x + V[5] * y + V[9] * z + V[13];
      const vz = V[2] * x + V[6] * y + V[10] * z + V[14];
      const depth = Math.max(0.05, -vz);
      if (i < n) {
        // As in the vertex shader: the colour carries gain × min(4, code / 0.02 + 0.25); the drawn
        // sprite grows away from the focus plane (fake depth of field) and dims by 1 / blur².
        const blur = this.filmDof ? 1 + (dof * Math.abs(depth - focus)) / focus : 1;
        energies[i] = Math.min(4, (sizes[i] * codeOf) / 0.02 + 0.25) * blur * blur;
        sizes[i] *= blur;
      } else {
        // Stars: fixed pixel size; the colour is already the centre pixel's.
        const m = look[(i - n) * 4 + 3] / 255;
        sizes[i] = (1.35 + 3.4 * m * m) * starPx * depth;
        energies[i] = 1;
      }
      vx += kx * vz;
      vy += ky * vz;
      positions[i * 3] = Wm[0] * vx + Wm[4] * vy + Wm[8] * vz + Wm[12];
      positions[i * 3 + 1] = Wm[1] * vx + Wm[5] * vy + Wm[9] * vz + Wm[13];
      positions[i * 3 + 2] = Wm[2] * vx + Wm[6] * vy + Wm[10] * vz + Wm[14];
    }
    const dim = this.dimEff * this.lightFade.value;
    for (let i = 0; i < total * 3; i++) colors[i] *= dim;
    const t = this.rig.target;
    // The collapse point: the formation's focal point (the ready seed = the anchor), in the same
    // sheared space as the positions, so the film collapses exactly onto the light the reader saw.
    const f = this.rig.focusPoint(this.focusScratch);
    let fx = V[0] * f[0] + V[4] * f[1] + V[8] * f[2] + V[12];
    let fy = V[1] * f[0] + V[5] * f[1] + V[9] * f[2] + V[13];
    const fz = V[2] * f[0] + V[6] * f[1] + V[10] * f[2] + V[14];
    fx += kx * fz;
    fy += ky * fz;
    const collapse = [
      Wm[0] * fx + Wm[4] * fy + Wm[8] * fz + Wm[12],
      Wm[1] * fx + Wm[5] * fy + Wm[9] * fz + Wm[13],
      Wm[2] * fx + Wm[6] * fy + Wm[10] * fz + Wm[14],
    ];
    return {
      positions,
      colors,
      sizes,
      energies,
      count: total,
      camera: { position: [cam.position.x, cam.position.y, cam.position.z], target: [t.x, t.y, t.z], fov: cam.fov },
      focus: collapse,
      focusLight: this.focusLight(f, dim),
    };
  }

  /**
   * The seed's own light (its glow accent) as drawn this frame, for the film to continue at `focus`:
   * { glows: [{scale (world radius of the billboard), intensity, core, halo (linear rgb), breath,
   * rays}], anchor: [x, y] CSS px, pxPerUnit (CSS px per world unit at the focus), dim, exposure }.
   * The billboards' profile is materials.js glowFragment. null when no seed glow is showing.
   */
  focusLight(f, dim) {
    const id = this.formationId === 'seed' ? 'seed' : this.formationId === 'ch8' ? 'ch8' : null;
    const accent = id ? this.accents.visible(id) : null;
    if (!accent || typeof accent.light !== 'function') return null;
    const p = this.rig.project(f[0], f[1], f[2], this.projScratch);
    return { glows: accent.light(), anchor: [p[0], p[1]], pxPerUnit: this.rig.pxPerUnit(p[2]), dim, exposure: POST.exposure };
  }

  /**
   * active: the film takes over / hands back the canvas. returning: back from the film, faded in
   * from black. mode (how the reader left the film):
   *   'restore'   — back to the text: the seed waiting at the end of ch.8 fades in after a short
   *                 black hold; a page scene that leaves the seed during that reveal (a navigation
   *                 staged after the fade) takes over settled, from black (see afterPageCall);
   *   'navigated' — the page set its scene/layout during the fade: that scene, settled;
   *   'leaving'   — stop({restore:false}): black until the page sets its scene (2.5 s at most).
   */
  onFilmActive(active, returning = false, mode = 'restore') {
    if (active) {
      this.input.setInteractive(false);
      this.revealUntil = 0;
      this.cancelAwaitPage();
    } else if (returning) {
      this.renderer.setRenderTarget(null);
      this.renderer.toneMapping = THREE.NoToneMapping;
      this.renderer.toneMappingExposure = POST.exposure;
      this.renderer.autoClear = true;
      this.renderer.setClearColor(0x000000, 1);
      this.black.value = 0;
      this.black.target = 1;
      this.black.rate = 1 / 0.9;
      this.black.delay = 0;
      if (mode === 'navigated') {
        this.settleBehindBlack();
      } else if (mode === 'leaving') {
        this.black.target = 0;
        this.awaitPage = true;
        this.awaitTimer = setTimeout(() => this.endAwaitPage(), 2500);
      } else {
        this.sceneKey = '';
        this.setScene('ending-ready', { instant: true, layout: this.layout === 'reading' ? 'reading' : 'chapter' });
        this.black.delay = RETURN_HOLD;
        this.revealUntil = performance.now() + (RETURN_HOLD + 1.3) * 1000;
      }
      if (this.interactive) this.input.setInteractive(true);
    }
    this.lastDraw = 0;
    this.request();
  }

  /** setScene from the page (the public API): also decides how a return from the film ends. */
  pageScene(name, opts) {
    this.film.noteNavigation();
    const before = this.pending ? this.pending.fid : this.formationId;
    this.setScene(name, opts);
    const after = this.pending ? this.pending.fid : this.formationId;
    this.afterPageCall(after !== before);
  }

  /** setLayout from the page (the public API). */
  pageLayout(layout) {
    this.film.noteNavigation();
    this.setLayout(layout);
    this.afterPageCall(false);
  }

  afterPageCall(leftFormation) {
    if (this.awaitPage) {
      this.endAwaitPage();
      return;
    }
    // A navigation staged just after the film's fade: the seed was only beginning to fade in.
    // Take the page's scene over from black instead of morphing out of the seed.
    if (leftFormation && this.revealUntil && performance.now() < this.revealUntil) {
      this.revealUntil = 0;
      this.black.value = 0;
      this.black.target = 1;
      this.black.delay = 0;
      this.settleBehindBlack();
      this.request();
    }
  }

  /** The page's scene has arrived (or the wait timed out): settle it and fade in from black. */
  endAwaitPage() {
    if (!this.awaitPage) return;
    this.cancelAwaitPage();
    this.black.target = 1;
    this.settleBehindBlack();
    this.request();
  }

  cancelAwaitPage() {
    this.awaitPage = false;
    clearTimeout(this.awaitTimer);
    this.awaitTimer = 0;
  }

  /**
   * After a film left by navigation: complete whatever the page asked for during the fade-out
   * (morph, accents, composition) so it fades in from black as it is, never morphing out of the
   * seed. A formation still being built keeps the screen black until it arrives.
   */
  settleBehindBlack() {
    if (this.pending) {
      this.blackHold = true;
      this.black.target = 0;
    } else {
      this.field.settle();
      this.morphHold = false;
    }
    this.accents.settle();
    this.reading.value = this.readingValue();
    this.reading.velocity = 0;
    this.applyReading();
    for (let k = 0; k < 3; k++) this.bgTint[k] = this.bgTarget[k];
    this.rig.snap();
  }

  // ------------------------------------------------------------------ loop

  canRender() {
    return this.ok && this.visible && !this.contextLost && !this.compiling && !document.hidden;
  }

  request() {
    if (this.raf || !this.canRender()) return;
    this.raf = requestAnimationFrame(this.frame);
  }

  stopLoop() {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = 0;
    this.lastDraw = 0;
  }

  /** A touch scroll began (true) or settled (false). Drawing continues throughout, capped at 30 fps
   * while the finger and its fling move the page; a resize that arrives mid-scroll waits for the end. */
  onHold(holding) {
    this.holding = holding;
    if (holding) {
      this.request();
    } else {
      clearTimeout(this.holdFrameTimer);
      this.holdFrameTimer = 0;
      if (this.pendingResize) {
        this.pendingResize = false;
        this.resize();
      }
      this.request();
    }
  }

  /** A veil/scene/layout change during a touch scroll: the loop is running, so it simply eases in. */
  requestHoldFrame() {
    this.request();
  }

  frame = (now) => {
    this.raf = 0;
    if (!this.canRender()) {
      this.lastDraw = 0;
      return;
    }
    const restart = !this.lastDraw;
    const sinceLast = restart ? 0 : now - this.lastDraw;
    // A device-pixel-ratio change without a CSS resize (window dragged to another monitor): one
    // property read per frame catches it even where the resolution media query stays silent.
    if ((window.devicePixelRatio || 1) !== this.seenRatio) {
      this.seenRatio = window.devicePixelRatio || 1;
      this.lastSize = '';
      if (this.holding) this.pendingResize = true;
      else this.resize();
    }
    // Ending film: the film owns the canvas.
    if (this.film.active) {
      const dt = restart ? 1 / 60 : Math.min(0.1, sinceLast / 1000);
      this.lastDraw = now;
      this.film.frame(dt);
      this.countFrame(now);
      this.noSample = 10;
      this.request();
      return;
    }
    const holdFrame = this.holdFrame;
    this.holdFrame = false;
    const ambientOnly = this.ambient() && !this.field.morphing && !this.rig.moving && !this.input.dragging && !this.fading && !this.scatterMoving && !this.armMoving;
    // During a touch scroll the universe keeps moving at 30 fps (the compositor owns the scroll).
    const holdCap = this.holding && !this.input.dragging ? 1000 / 30 : 0;
    // The steady reading starfield (fully scattered) drifts ≤ 4 px/s: 30 fps is plenty there too.
    const cap = Math.max(holdCap, ambientOnly && (this.coarseMQ.matches || this.rig.veil.value > 0.6 || this.adaptive.level >= 3 || this.scatter.value >= 1) ? 1000 / 30 : 0);
    if (!holdFrame && cap && !restart && sinceLast < cap - 3) {
      this.raf = requestAnimationFrame(this.frame);
      return;
    }
    const dt = restart ? 1 / 60 : Math.min(0.05, sinceLast / 1000);
    if (restart) this.noSample = Math.max(this.noSample, 10);
    this.lastDraw = now;

    // Our own work, timed: CPU around step + render, GPU with a timer query when available.
    const info = this.renderer.info;
    const programs = info.programs ? info.programs.length : 0;
    const skip = this.noSample > 0 || holdFrame;
    const t0 = performance.now();
    const more = this.step(dt);
    this.gpuTimer.begin();
    this.render(dt);
    const compiled = (info.programs ? info.programs.length : 0) !== programs;
    this.gpuTimer.end(skip || compiled);
    this.adaptive.sample(sinceLast, performance.now() - t0, cap > 0, skip || compiled);
    if (this.noSample > 0) this.noSample--;
    this.gpuTimer.poll(this.onGpuTime);
    const change = this.adaptive.decide(now, this.gpuTimer.available);
    if (change !== 0) {
      this.resize();
      this.noSample = Math.max(this.noSample, 10);
    }
    this.countFrame(now);
    // Subscribers (the UI's node buttons) run after the timed work.
    this.nodes.flush();
    if (holdFrame && this.holding && !this.scatterActive()) {
      this.lastHoldFrame = performance.now();
      this.lastDraw = 0;
      return;
    }
    if (more || change !== 0) this.request();
    else this.lastDraw = 0;
  };

  onGpuTime = (ms) => this.adaptive.gpuSample(ms);

  countFrame(now) {
    this.frames++;
    this.fpsFrames++;
    if (!this.fpsT0) this.fpsT0 = now;
    if (now - this.fpsT0 >= 1000) {
      this.fps = Math.round((this.fpsFrames * 1000) / (now - this.fpsT0));
      this.fpsFrames = 0;
      this.fpsT0 = now;
    }
  }

  /** Advance all state by dt. Returns true when another frame is needed. */
  step(dt) {
    const animate = this.ambient();
    const dtLiving = animate ? dt : 0;
    this.time += dtLiving;
    this.clock += dt;
    const reduced = this.reducedMotion();
    const gpuTime = wrapTime(this.time);

    const morphing = this.field.update(this.morphHold ? 0 : dt) || this.morphHold;
    // Reading starfield and the seed's arming ease toward the page's targets (scroll jitter never shows).
    const S = easeTo(this.scatter, this.scatterTarget, reduced ? EASE.scatterReduced : EASE.scatter, dt);
    this.scatterMoving = this.scatter.value !== this.scatterTarget;
    easeTo(this.arm, this.armTarget, EASE.arm, dt);
    this.armMoving = this.arm.value !== this.armTarget;
    this.rig.calm = S;
    const camMoving = this.rig.update(dt, this.time, reduced, this.parallaxEnabled());

    // Reading progress eases (it follows scroll).
    const rt = this.readingValue();
    smoothDamp(this.reading, rt, reduced ? 0.05 : EASE.reading, dt);
    const readingMoving = Math.abs(this.reading.value - rt) > 1e-4;
    this.applyReading();

    // Fades: intro light, return-from-film black, background tint.
    let fading = stepFade(this.lightFade, dt) | stepFade(this.black, dt);
    for (let k = 0; k < 3; k++) {
      const d = this.bgTarget[k] - this.bgTint[k];
      if (Math.abs(d) > 2e-4) {
        this.bgTint[k] += d * (1 - Math.exp(-dt * 2.2));
        fading = 1;
      }
    }

    const ctx = this.ctx;
    ctx.time = this.time;
    ctx.gpuTime = gpuTime;
    ctx.dtLiving = dtLiving;
    ctx.clock = this.clock;
    ctx.focus = this.rig.distance;
    ctx.selected = this.selected;
    ctx.morph = this.field.uniforms.uMorph.value;
    // Accents are the formation's structure: they leave with its matter (gone before the stars settle;
    // under reduced motion on the formation's own cross-fade curve).
    ctx.solid = reduced ? 1 - smoothstep(0, 0.6, S) : 1 - smoothstep(0.12, 0.7, S);
    ctx.arm = this.arm.value;
    const accentsFading = this.accents.update(dt, ctx);
    this.fading = !!fading || accentsFading;

    // Uniforms (the living clock wraps; every rate it drives is quantised to the period).
    const u = this.field.uniforms;
    u.uTime.value = gpuTime;
    u.uFocus.value = this.rig.distance;
    u.uTwinkle.value = animate ? 1 : 0;
    // Reading starfield: the reference frame its stars are anchored to (see camera.js).
    u.uScatter.value = S;
    u.uScatterTravel.value = reduced ? 0 : 1;
    u.uScatterFrame.value.copy(this.rig.refMatrix);
    const P = this.camera.projectionMatrix.elements;
    u.uScatterRay.value.set(P[0], P[5], P[8], P[9]);
    u.uScatterCenter.value.set(this.rig.tx.value, this.rig.ty.value, this.rig.tz.value, this.spec ? this.spec.radius : 3);
    u.uScatterLook.value.x = this.rig.refDistance;
    this.stars.uniforms.uTime.value = gpuTime;
    this.stars.uniforms.uTwinkle.value = animate ? 1 : 0;
    const pu = this.post.uniforms;
    pu.uTime.value = gpuTime;
    // The composition's dim (layout, veil) is for formations behind text; the scattered field is
    // already designed to sit behind it, so the scatter releases the dim. Its bloom is low and the
    // formation's tinted glow behind it fades.
    this.dimEff = lerp(this.rig.dim.value, 1, S);
    pu.uDim.value = this.dimEff;
    pu.uFade.value = this.lightFade.value;
    pu.uBlack.value = this.black.value;
    const lift = 1 - 0.85 * S;
    pu.uBgLift.value.set(this.bgTint[0] * lift, this.bgTint[1] * lift, this.bgTint[2] * lift);
    this.post.bloom.strength = POST.bloomStrength * (1 - (1 - SCATTER.bloom) * S);
    pu.uGlowCenter.value.set(this.rig.cx.value, 1 - (this.rig.cy.value * this.frameHeight) / this.height);
    const tall = isTall(this.width, this.frameHeight);
    pu.uGlowRadius.value = tall ? 0.42 : 0.55;

    // Black hole: the shadow is re-drawn after bloom, with whatever lies in front of it.
    const hole = this.accents.visible('ch7');
    this.post.overlayPass.enabled = !!hole && hole.horizon.visible;
    if (hole) {
      const p = this.rig.project(0, 0, 0, this.projScratch);
      const pr = this.pixelRatio;
      const H = HOLE_UNIFORMS;
      // Screen: centre, silhouette radius and a ~1 CSS px anti-aliased edge (drawing-buffer px).
      H.uHole.value.set(p[0] * pr, (this.height - p[1]) * pr, hole.radius * this.rig.pxPerUnit(p[2]) * pr, 0.45 * pr + 0.3);
      // View space: the horizon sphere, for the analytic "in front of it" test.
      const V = this.camera.matrixWorldInverse.elements;
      H.uHoleView.value.set(V[12], V[13], V[14], hole.radius);
      H.uViewport.value.set(this.width * pr, this.height * pr);
      H.uHoleReach.value = hole.reach;
      const n = HOLE.normal;
      const nx = V[0] * n[0] + V[4] * n[1] + V[8] * n[2], ny = V[1] * n[0] + V[5] * n[1] + V[9] * n[2], nz = V[2] * n[0] + V[6] * n[1] + V[10] * n[2];
      H.uHoleDisc.value.set(nx, ny, nz, hole.thickness);
      // Pixel → view ray (off-axis projection) and the disc's band, which the shadow spares.
      const P = this.camera.projectionMatrix.elements;
      H.uHoleRay.value.set(P[0], P[5], P[8], P[9]);
      H.uHoleBand.value.set(hole.bandInner, hole.bandOuter, 1, 0);
    }

    // Cover nodes and the formation's anchor → subscribers (delivered by nodes.flush() after the frame).
    const cover = this.accents.get('cover');
    const focus = this.rig.focusPoint(this.focusScratch);
    this.nodes.update(this.rig, cover ? cover.positions : null, cover ? this.accents.presence('cover') : 0, this.sceneName, this.selected, focus, this.formationId !== 'origin');

    return animate || morphing || camMoving || readingMoving || this.fading || this.input.dragging || this.scatterMoving || this.armMoving;
  }

  render(dt) {
    this.post.render(dt);
  }

  // ------------------------------------------------------------------ diagnostics

  getState() {
    return {
      renderer: 'webgl',
      scene: this.sceneName,
      chapter: this.chapter,
      layout: this.layout,
      quality: this.tierName,
      particles: this.field.drawCount,
      fps: this.fps,
      frames: this.frames,
      contextLost: this.contextLost,
      paused: this.paused,
      visible: this.visible,
      interactive: this.interactive,
      ending: this.film.state(),
      // Extra diagnostics (not part of the contract).
      formation: this.formationId,
      pendingFormation: this.pending ? this.pending.fid : null,
      morphing: this.field.morphing,
      morph: Math.round(this.field.uniforms.uMorph.value * 1000) / 1000,
      reducedMotion: this.reducedMotion(),
      selected: this.selected,
      pixelRatio: this.pixelRatio,
      adaptiveLevel: this.adaptive.level,
      adaptive: this.adaptive.info(),
      gpuTimer: this.gpuTimer.available,
      particlesTotal: this.field.count,
      bloom: this.post.bloom.enabled,
      veil: Math.round(this.rig.veil.value * 1000) / 1000,
      reading: Math.round(this.reading.value * 1000) / 1000,
      zoom: Math.round(this.rig.zoom.value * 1000) / 1000,
      scatter: Math.round(this.scatter.value * 1000) / 1000,
      scatterTarget: this.scatterTarget,
      scatterStars: Math.round(this.field.uniforms.uScatterKeep.value * this.field.drawCount),
      armed: this.armTarget === 1,
      holding: this.holding,
      compiling: this.compiling,
      worker: this.cache.async,
      gpuBake: this.field.gpu,
      cached: [...this.cache.map.keys()],
      lastBuildMs: Math.round(this.cache.lastBuildMs),
      lastBakeMs: Math.round(this.field.lastBakeMs * 10) / 10,
      size: [this.width, this.height],
    };
  }

  /** Lab helpers: complete morphs/fades/easing instantly so screenshots are deterministic. */
  settle() {
    if (this.pending) {
      // The formation is still being built off the main thread: build it here, now.
      const p = this.pending;
      this.pending = null;
      this.morphTo(this.cache.get(p.fid), p.kind, p.instant);
    }
    this.morphHold = false;
    this.field.settle();
    this.accents.settle();
    this.lightFade.value = this.lightFade.target;
    this.black.value = this.black.target;
    this.reading.value = this.readingValue();
    this.applyReading();
    for (let k = 0; k < 3; k++) this.bgTint[k] = this.bgTarget[k];
    this.scatter.value = this.scatterTarget;
    this.scatter.velocity = 0;
    this.arm.value = this.armTarget;
    this.arm.velocity = 0;
    this.rig.snap();
    this.request();
  }

  /** Pin the morph clock at p (hold) — deterministic mid-morph frames for the lab. */
  setMorphProgress(p, hold = true) {
    this.field.uniforms.uMorph.value = clamp(p, 0, 1);
    this.field.morphing = p < 1;
    this.morphHold = !!hold && p < 1;
    this.request();
  }

  dispose() {
    this.stopLoop();
    this.ok = false;
    clearTimeout(this.holdFrameTimer);
    clearTimeout(this.awaitTimer);
    this.abort?.abort();
    this.resizeObserver?.disconnect();
    this.input?.dispose();
    this.film?.dispose();
    this.accents?.dispose();
    if (this.field) this.disposeWorld();
    this.post?.dispose();
    this.renderer?.dispose();
    this.worker?.dispose();
  }
}

/** Critically damped ease of a damper toward target; lands exactly on it (so "moving" ends). */
function easeTo(d, target, smoothTime, dt) {
  if (d.value === target && d.velocity === 0) return target;
  smoothDamp(d, target, smoothTime, dt);
  if (Math.abs(d.value - target) < 2e-4 && Math.abs(d.velocity) < 5e-3) {
    d.value = target;
    d.velocity = 0;
  }
  return d.value;
}

function stepFade(f, dt) {
  if (f.value === f.target) return 0;
  if (f.delay > 0) {
    f.delay -= dt;
    return 1;
  }
  const s = f.rate * dt;
  f.value = f.target > f.value ? Math.min(f.target, f.value + s) : Math.max(f.target, f.value - s);
  return 1;
}

function dispatch(type, detail) {
  try {
    document.dispatchEvent(new CustomEvent(type, { detail }));
  } catch {
    /* ignore */
  }
}
