/* 가능성의 끝 — interface and reader (v9, “One Universe”).
 *
 * A classic script, inlined after the Universe bundle by build.mjs. It never assumes that the
 * universe works: every call goes through the guarded `universe` facade, and a CSS/SVG sky stands
 * in whenever <html data-universe="none">.
 *
 *  1 utilities          2 data & verbatim copy   3 storage           4 universe facade
 *  5 fallback sky       6 announcer & toast      7 settings          8 reveal on scroll
 *  9 prose rendering   10 home (cover, nodes, explore, contents, litany)
 * 11 reader            12 scroll engine          13 sheets (dialogs) 14 ending overlay
 * 15 router            16 keyboard               17 boot
 */
(() => {
  'use strict';

  /* ───────────────────────────── 1. Utilities ───────────────────────────── */

  const $ = id => document.getElementById(id);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const root = document.documentElement;
  const body = document.body;
  const clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
  const pad = n => String(n).padStart(2, '0');
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  /** Typesetting only: straight single quotes around a phrase are set as ‘ ’ (the text is unchanged). */
  const curly = text => String(text).replace(/'([^'\n]+)'/g, '‘$1’');
  // Only markup the text itself asks for: 10^{25} → 10<sup>25</sup>.
  const richText = text => escapeHTML(curly(text)).replace(/10\^\{(-?\d+)\}/g, '10<sup>$1</sup>');
  /** Display lines: keep a one-syllable word with the next word (no “그 / 자체가” breaks). */
  const bindShort = text => curly(text).replace(/(^|[\s(“‘])([가-힣])\s(?=\S)/g, '$1$2 ');
  const reducedQuery = matchMedia('(prefers-reduced-motion: reduce)');
  const isReduced = () => reducedQuery.matches;
  /** OS reduced motion, or the reader’s own “움직임: 멈춤”: no decorative text motion either. */
  const isCalm = () => reducedQuery.matches || state.motion === 'off';
  const isMobile = () => innerWidth < 760;
  /* Portrait composition. Mirrors the universe’s own test (src/universe/config.js isTall:
   * W < 640 || W/H < 0.8) so the page and the formations always agree; site.css uses the same
   * media query for the stacked cover, the bottom-anchored litany, the chapter end and the seed. */
  const tallQuery = matchMedia('(max-width: 639px), (max-aspect-ratio: 4/5)');
  const isTall = () => tallQuery.matches;
  const coarseQuery = matchMedia('(pointer: coarse)');
  /* Phones: a coarse pointer and the portrait test, held upright (a small phone turned sideways is
   * narrow enough for the portrait test, but has no room for the dial: it keeps the wide cover).
   * They get the chapter dial on the cover (design/V9.1-FEEDBACK.md, amendment 3). */
  const dialQuery = matchMedia('(pointer: coarse) and (max-width: 639px) and (orientation: portrait), (pointer: coarse) and (max-aspect-ratio: 4/5)');
  /** A pointer that really hovers (a touch screen's :hover sticks to the last tapped element). */
  const hoverQuery = matchMedia('(hover: hover)');
  /** Portrait or short screens show the chapter readout as a bottom sheet (see site.css). */
  const isCompactScreen = () => isTall() || innerHeight < 520;
  const isTyping = el => !!el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));
  /** Keyboard-style focus (not the focus a click or a tap leaves behind). */
  const focusVisible = el => { try { return el.matches(':focus-visible'); } catch { return true; } };
  const noWebGL = /[?&]nowebgl=1\b/.test(location.search);

  /** A tiny deterministic random generator, so generated art is identical on every visit. */
  function seeded(seed) {
    return () => {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  /* ───────────────────────── 2. Data & verbatim copy ───────────────────────── */

  const chapters = JSON.parse($('novel-data').textContent);
  const LAST = chapters.length;
  const chapterOf = n => chapters[n - 1];

  /* Ending captions — short verbatim fragments of chapter 8, shown over the film. Each line
   * appears at `at` (film seconds) with the image it describes (src/universe/ending-timeline.js:
   * impact 3.6, the plasma clearing into the dark ages 8.2–9.6, first stars 11.95–15.3, the
   * galaxy edge from 19.4, the planet 24.6–25.6); `phase` is the film phase it belongs to. A line
   * needs ~1.9 s to come in whole (the old one dissolves, the new one resolves), so a long line
   * wants ≥ 4 s before the next `at`. The finale line is the closing
   * quote. If the manuscript is revised, re-sync these strings with src/manuscript.txt;
   * `npm run build` warns whenever one of them is no longer found verbatim. */
  const ENDING_CAPTIONS = /* ENDING_CAPTIONS:start */ [
    { phase: 'collapse', at: 0, text: '남아 있던 모든 물질이 한 점으로 결집했고,' },
    { phase: 'birth', at: 3.6, text: '‘시간’이라는 차원이 막 태동하고 있었다.' },
    { phase: 'structure', at: 8.2, text: '처음에는 원자도, 별도, 정보를 새길 구조도 없었다.' },
    { phase: 'structure', at: 12.4, text: '중력이 물질을 끌어모아 첫 번째 별들의 불을 켰다.' },
    { phase: 'world', at: 19.4, text: '수십억 년이 지났다.' },
    { phase: 'world', at: 25, text: '어느 평범한 은하의 변두리에서 작은 암석 행성 하나가 식어 갔다.' },
    { phase: 'finale', text: '‘우리가 왜 시작했는지는 기억해라.’' },
  ] /* ENDING_CAPTIONS:end */;
  const FILM_CAPTIONS = ENDING_CAPTIONS.filter(c => Number.isFinite(c.at));
  /** Index of the caption showing at film time t. */
  const captionIndexAt = t => { let k = 0; FILM_CAPTIONS.forEach((c, i) => { if (t >= c.at) k = i; }); return k; };

  /** The film timeline used when the universe cannot run (same phases as the contract). */
  const FALLBACK_FILM = {
    duration: 31,
    phases: [{ start: 0, key: 'collapse' }, { start: 3.6, key: 'birth' }, { start: 9.2, key: 'structure' }, { start: 19.4, key: 'world' }],
  };
  /* The fallback sky and plates use the one cold palette of site.css (design/V9.1-FEEDBACK.md). */
  const ACCENT_HI = '#e6fbff';
  /* Reduced motion: four still compositions. The live film turns a paused seek to a phase start
   * into its own composed still (ending-timeline.js PHASE_STILLS); these are the times those
   * stills show, used for the captions and for the CSS film. */
  const STILL_TIMES = [2.7, 4.95, 15.8, 31];

  const STAR_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 1.5c.5 6.3 4.2 10 10.5 10.5-6.3.5-10 4.2-10.5 10.5-.5-6.3-4.2-10-10.5-10.5C7.8 11.5 11.5 7.8 12 1.5Z"/></svg>';

  /* ───────────────────────────── 3. Storage ───────────────────────────── */

  const STORE_KEY = 'possibility-end-v9';
  const LEGACY_KEY = 'possibility-end-edition-v2';
  const SIZES = [16, 18, 20, 22, 24, 26];
  const LEADING = { tight: 1.75, normal: 1.9, loose: 2.05 };
  /* One theme only (dark, v9.1): a 'paper' or 'light' theme saved by v9.0 or migrated from v8.1 is
   * silently dropped — normaliseState keeps no theme at all, so the next save writes none. */

  const validPosition = p => !!p && Number.isInteger(p.chapter) && p.chapter >= 1 && p.chapter <= LAST
    && Number.isInteger(p.paragraph) && p.paragraph >= 0 && p.paragraph < chapterOf(p.chapter).paragraphs.length;
  const cleanPosition = p => validPosition(p)
    ? { chapter: p.chapter, paragraph: p.paragraph, percent: clamp(Math.round(Number(p.percent) || 0), 0, 100) }
    : null;

  function normaliseState(raw) {
    const progress = {};
    if (raw.progress && typeof raw.progress === 'object') {
      for (const [key, value] of Object.entries(raw.progress)) {
        const n = Number(key);
        if (Number.isInteger(n) && n >= 1 && n <= LAST && Number.isFinite(value)) progress[n] = clamp(Math.round(value), 0, 100);
      }
    }
    const completed = Array.isArray(raw.completed) ? [...new Set(raw.completed.filter(n => Number.isInteger(n) && n >= 1 && n <= LAST))] : [];
    const sound = raw.sound && typeof raw.sound === 'object' ? raw.sound : {};
    return {
      v: 9,
      // Default size by screen: the narrowest phones (320 px) keep ~17 characters to a line.
      size: SIZES.includes(raw.size) ? raw.size : (innerWidth < 360 ? 16 : innerWidth <= 760 ? 18 : 20),
      leading: Object.prototype.hasOwnProperty.call(LEADING, raw.leading) ? raw.leading : 'normal',
      font: raw.font === 'serif' ? 'serif' : 'sans',
      motion: raw.motion === 'off' ? 'off' : 'on',
      sound: {
        enabled: typeof sound.enabled === 'boolean' ? sound.enabled : null,
        volume: Number.isFinite(sound.volume) ? clamp(sound.volume) : null,
      },
      position: cleanPosition(raw.position),
      bookmark: cleanPosition(raw.bookmark),
      progress,
      completed,
      migratedFrom: typeof raw.migratedFrom === 'string' ? raw.migratedFrom : null,
    };
  }

  /** One-time migration from the v8.1 edition key. Serif was kept only as an explicit later choice. */
  function fromLegacy(old) {
    const position = cleanPosition(old.position);
    const completed = Array.isArray(old.completed) ? old.completed : [];
    const progress = {};
    if (position) progress[position.chapter] = position.percent;
    for (const n of completed) progress[n] = 100;
    return {
      size: old.size,
      font: old.fontVersion === 1 && old.font === 'serif' ? 'serif' : 'sans',
      motion: old.paused === true ? 'off' : 'on',
      position, bookmark: old.bookmark, progress, completed,
      migratedFrom: LEGACY_KEY,
    };
  }

  const store = (() => {
    let available = true;
    const read = key => {
      let text = null;
      try { text = localStorage.getItem(key); } catch { available = false; return null; }
      try { const value = JSON.parse(text || 'null'); return value && typeof value === 'object' ? value : null; } catch { return null; }
    };
    let raw = read(STORE_KEY);
    let migrated = false;
    if (!raw) {
      const legacy = read(LEGACY_KEY);
      raw = legacy ? fromLegacy(legacy) : {};
      migrated = !!legacy;
    }
    const data = normaliseState(raw);
    /* Several open tabs share one record. Each tab writes only what it changed itself since it last
     * agreed with the stored record (a three-way merge against `base`); everything else is taken
     * from the other tabs. Progress only grows and a completed chapter stays completed. */
    const FIELDS = ['size', 'leading', 'font', 'motion', 'sound', 'position', 'bookmark', 'migratedFrom'];
    const copy = value => JSON.parse(JSON.stringify(value));
    const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    let base = copy(data);
    /** Take the stored record's changes into `data`; returns the names of the fields that changed. */
    function merge(stored) {
      const theirs = normaliseState(stored);
      const changed = [];
      for (const key of FIELDS) {
        if (same(data[key], base[key]) && !same(data[key], theirs[key])) { data[key] = theirs[key]; changed.push(key); }
      }
      for (const [n, p] of Object.entries(theirs.progress)) {
        if ((data.progress[n] || 0) < p) { data.progress[n] = p; if (!changed.includes('progress')) changed.push('progress'); }
      }
      for (const n of theirs.completed) {
        if (!data.completed.includes(n)) { data.completed.push(n); if (!changed.includes('completed')) changed.push('completed'); }
      }
      return { theirs, changed };
    }
    const save = () => {
      try {
        const stored = read(STORE_KEY);
        if (stored) merge(stored);
        localStorage.setItem(STORE_KEY, JSON.stringify(data));
        base = copy(data);
        available = true;
      } catch { available = false; }
    };
    /** Another tab wrote the record (the `storage` event): adopt its changes, write nothing. */
    const sync = () => {
      const stored = read(STORE_KEY);
      if (!stored) return [];
      const { theirs, changed } = merge(stored);
      base = copy(theirs);
      return changed;
    };
    // (A record that still names a theme is written back once without it.)
    if (migrated || Object.prototype.hasOwnProperty.call(raw, 'theme')) save();
    return { data, save, sync, get available() { return available; } };
  })();
  const state = store.data;

  /* ─────────────────────────── 4. Universe facade ─────────────────────────── */

  /* All calls are guarded: the engine is developed in parallel and may be missing, a stub, or
   * throw. A failure is reported once per method and the page carries on. */
  const universe = (() => {
    const reported = new Set();
    const memo = new Map();
    const api = () => (noWebGL ? null : window.Universe || null);
    function call(name, ...args) {
      const u = api();
      if (!u) return undefined;
      const [scope, method] = name.startsWith('ending.') ? [u.ending, name.slice(7)] : [u, name];
      try {
        return scope && typeof scope[method] === 'function' ? scope[method](...args) : undefined;
      } catch (error) {
        if (!reported.has(name)) { reported.add(name); console.warn(`Universe.${name} failed; the page continues without it.`, error); }
        return undefined;
      }
    }
    /** Skip calls whose arguments did not change (the engine also ignores them; this saves work). */
    function once(key, value, fn) {
      const signature = JSON.stringify(value);
      if (memo.get(key) === signature) return;
      memo.set(key, signature);
      fn();
    }
    const asPromise = (value, fallback) => Promise.resolve(value === undefined ? fallback : value).catch(() => fallback);
    return {
      get live() { return root.dataset.universe === 'webgl' && !root.classList.contains('universe-lost'); },
      /** Can the reading body show scattered stars? (A live engine without setScatter — older than
       * v9.1 — cannot: the reader then keeps v9.0's veiled 'reading' composition. Without a live
       * universe the fallback sky scatters its own plate.) */
      get scatters() { const u = api(); return !this.live || !!u && typeof u.setScatter === 'function'; },
      mount(canvas) {
        if (noWebGL || !window.Universe) { root.dataset.universe = 'none'; return false; }
        const ok = call('mount', canvas, {
          chapters: chapters.map(({ number, short, english, kicker, figure }) => ({ number, short, english, kicker, figure })),
          quality: 'auto',
        });
        if (!ok && root.dataset.universe !== 'webgl') root.dataset.universe = 'none';
        return !!ok;
      },
      scene(name, opts = {}) {
        const signature = JSON.stringify([name, opts.chapter || 0]);
        if (memo.get('scene') !== signature) {
          memo.set('scene', signature);
          call('setScene', name, opts);
          if (opts.layout) memo.set('layout', JSON.stringify(opts.layout));
        } else if (opts.layout) {
          once('layout', opts.layout, () => call('setLayout', opts.layout));
        }
      },
      layout(name) { once('layout', name, () => call('setLayout', name)); },
      veil(v) { const value = Math.round(clamp(v) * 100) / 100; once('veil', value, () => call('setVeil', value)); },
      reading(p) { const value = Math.round(clamp(p) * 500) / 500; once('reading', value, () => call('setReading', value)); },
      /** 0: the formation; 1: scattered into a sparse starfield (the reader's body text). Sent on
       * every scroll frame while reading; the engine eases toward it (an engine without it: no-op). */
      scatter(v) { const value = Math.round(clamp(v) * 500) / 500; once('scatter', value, () => call('setScatter', value)); },
      interactive(on) { once('interactive', !!on, () => call('setInteractive', !!on)); },
      paused(on) { once('paused', !!on, () => call('setPaused', !!on)); },
      select(n) { once('select', n || 0, () => call('select', n || 0)); },
      /** The phone cover's chapter dial (design/V9.1-FEEDBACK.md, amendment 3): turn the ring until
       * node n is at the front, lit as by select(n), and hold it there; 0 releases the ring. Sent on
       * every change of the dial (the engine eases and retargets). An engine without it still lights
       * the node. Either way the engine's selection is now n, which the next select() must know. */
      focusNode(n, force = false) {
        const value = n || 0;
        const u = api();
        if (force) memo.delete('focusNode');
        once('focusNode', value, () => {
          if (u && typeof u.focusNode === 'function') call('focusNode', value);
          // (Released: no node stays lit either.)
          if (!value || !u || typeof u.focusNode !== 'function') call('select', value);
        });
        memo.set('select', JSON.stringify(value));
      },
      pointer(x, y) { call('setPointer', x, y); },
      reset() { call('reset'); },
      zoom(f) { call('zoom', f); },
      pick(x, y) { return Number(call('pick', x, y)) || 0; },
      subscribe(fn) { const off = call('subscribe', fn); return typeof off === 'function' ? off : () => {}; },
      state() { return call('getState') || null; },
      /** Forget memoised arguments (after the ending film moved the engine on its own). */
      invalidate() { memo.clear(); },
      ending: {
        start: origin => asPromise(call('ending.start', { origin }), false),
        pause: on => call('ending.pause', !!on),
        seek: t => call('ending.seek', t),
        skipToEnd: () => call('ending.skipToEnd'),
        replay: () => call('ending.replay'),
        stop: () => asPromise(call('ending.stop'), undefined),
        state: () => call('ending.state') || null,
        /** Hover/focus on ch.8's trigger: the seed itself answers (brightens a little). */
        arm: on => once('arm', !!on, () => call('ending.arm', !!on)),
      },
    };
  })();

  /* ─────────────────────────── 5. Fallback sky ─────────────────────────── */

  /* Shown only when the universe cannot render (CSS: html[data-universe="none"] .sky).
   * A static starfield, the possibility ring for the cover and line plates for chapters. */

  const RING = { cx: 500, cy: 500, r: 300, tilt: 0.3, roll: -0.3, orbit: 1.24 };
  const nodeAngle = n => -1.95 + (n - 1) / 8 * Math.PI * 2;
  /** A point on the inclined ring in the 1000×1000 figure space, plus depth (0 near … 1 far). */
  function ringPoint(angle, radius, lift = 0) {
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius * RING.tilt + lift;
    const c = Math.cos(RING.roll), s = Math.sin(RING.roll);
    return [RING.cx + x * c - y * s, RING.cy + x * s + y * c, (1 - Math.sin(angle)) / 2];
  }

  let ringCache = '';
  function ringSVG() {
    if (ringCache) return ringCache;
    const random = seeded(8);
    let dots = '';
    for (let i = 0; i < 1500; i++) {
      const a = random() * Math.PI * 2;
      const spread = (random() + random() + random() - 1.5) / 1.5;
      const [x, y, depth] = ringPoint(a, RING.r * (0.95 + spread * 0.16), spread * 20 + (random() - 0.5) * 10);
      const alpha = (0.22 + (1 - depth) * 0.6) * (0.55 + random() * 0.45);
      const r = 0.7 + random() * (1.1 - depth * 0.5);
      dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(2)}" fill="${random() < 0.12 ? '#a9e7f2' : '#eaf2f8'}" fill-opacity="${alpha.toFixed(2)}"/>`;
    }
    let orbit = '';
    for (let i = 0; i <= 120; i++) {
      const [x, y] = ringPoint(i / 120 * Math.PI * 2, RING.r * RING.orbit);
      orbit += `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    // The singularity: a white-hot core in the cold palette (ice cyan into deep blue).
    ringCache = `<svg viewBox="0 0 1000 1000" aria-hidden="true" focusable="false"><defs><radialGradient id="sky-core"><stop offset="0" stop-color="#ffffff"/><stop offset=".18" stop-color="${ACCENT_HI}" stop-opacity=".9"/><stop offset=".5" stop-color="#a9e7f2" stop-opacity=".22"/><stop offset="1" stop-color="#4f8fb0" stop-opacity="0"/></radialGradient></defs><path d="${orbit}Z" fill="none" stroke="#eaf2f8" stroke-opacity=".12" stroke-width="1"/>${dots}<circle cx="500" cy="500" r="46" fill="url(#sky-core)"/></svg>`;
    return ringCache;
  }

  /* Parametric line plates for chapters (decorative; the meaning is in the text). */
  const plateCache = new Map();
  function plate(n) {
    if (plateCache.has(n)) return plateCache.get(n);
    let lines = '';
    const poly = (pts, opacity = 0.55, width = 0.65, color = 'currentColor') => `<polyline points="${pts.map(p => p.map(v => v.toFixed(1)).join(',')).join(' ')}" fill="none" stroke="${color}" stroke-opacity="${opacity}" stroke-width="${width}"/>`;
    const circle = (x, y, r, opacity = 0.4, color = 'currentColor', fill = 'none') => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${fill}" stroke="${color}" stroke-opacity="${opacity}" stroke-width=".65"/>`;
    const core = ACCENT_HI;   // the plates' lit points (stars, cores, the seed)
    const rot = (x, y, z) => {
      const a = 0.67, b = -0.34, c = -0.3;
      const y1 = y * Math.cos(a) - z * Math.sin(a), z1 = y * Math.sin(a) + z * Math.cos(a);
      const x1 = x * Math.cos(b) + z1 * Math.sin(b);
      return [170 + x1 * Math.cos(c) - y1 * Math.sin(c), 170 + x1 * Math.sin(c) + y1 * Math.cos(c)];
    };
    if (n === 1) {
      for (let j = 0; j < 33; j++) {
        const v = j / 33 * Math.PI * 2, pts = [];
        for (let i = 0; i <= 180; i++) { const u = i / 180 * Math.PI * 2; pts.push(rot((91 + 35 * Math.cos(v)) * Math.cos(u), (91 + 35 * Math.cos(v)) * Math.sin(u), 35 * Math.sin(v))); }
        lines += poly(pts, 0.3 + (Math.sin(v) + 1) * 0.11);
      }
      lines += circle(255, 104, 4, 1, core, core);
    } else if (n === 2) {
      for (let z = -63; z <= 63; z += 21) for (let y = -63; y <= 63; y += 21) {
        lines += poly([rot(-63, y, z), rot(63, y, z)], 0.22) + poly([rot(y, -63, z), rot(y, 63, z)], 0.22) + poly([rot(y, z, -63), rot(y, z, 63)], 0.22);
      }
      for (let x = -63; x <= 63; x += 21) for (let y = -63; y <= 63; y += 21) for (let z = -63; z <= 63; z += 21) {
        const p = rot(x, y, z); lines += circle(p[0], p[1], 1.15, 0.6, 'currentColor', 'currentColor');
      }
    } else if (n === 3) {
      for (let j = 0; j < 24; j++) {
        const pts = [], v = j / 24 * Math.PI * 2;
        for (let i = 0; i <= 180; i++) {
          const u = i / 180 * Math.PI * 2, r = 72 + 15 * Math.cos(v);
          pts.push(rot(r * Math.cos(u) * (1 + 0.4 * Math.sin(3 * u)), r * Math.sin(u) * (1 + 0.4 * Math.sin(3 * u)), 20 * Math.sin(v) + 38 * Math.sin(3 * u)));
        }
        lines += poly(pts, 0.42);
      }
    } else if (n === 4) {
      for (let z = -1; z <= 1; z++) for (let x = -1; x <= 1; x++) for (let y = -1; y <= 1; y++) {
        const a = rot(x * 63, y * 63, z * 63);
        if (x < 1) lines += poly([a, rot((x + 1) * 63, y * 63, z * 63)], 0.25);
        if (y < 1) lines += poly([a, rot(x * 63, (y + 1) * 63, z * 63)], 0.25);
        if (z < 1) lines += poly([a, rot(x * 63, y * 63, (z + 1) * 63)], 0.25);
        lines += circle(a[0], a[1], 5, 0.6) + circle(a[0], a[1], 1.5, 0.8, core, core);
      }
    } else if (n === 5) {
      for (let j = 0; j < 28; j++) {
        const a = j / 28 * Math.PI, pts = [];
        for (let i = 0; i <= 180; i++) {
          const u = i / 180 * Math.PI * 2;
          pts.push([170 + 112 * Math.cos(u) * Math.cos(a) - 32 * Math.sin(u) * Math.sin(a), 170 + 112 * Math.cos(u) * Math.sin(a) + 32 * Math.sin(u) * Math.cos(a)]);
        }
        lines += poly(pts, 0.2);
      }
      lines += circle(170, 170, 20, 0.8, core) + circle(170, 170, 6, 1, core, core);
    } else if (n === 6) {
      for (const [cx, cy] of [[91, 126], [246, 215]]) {
        for (let r = 12; r < 86; r += 11) lines += circle(cx, cy, r, 0.5 - r * 0.004);
        lines += circle(cx, cy, 3, 1, core, core);
      }
      lines += '<path d="M91 126L246 215" stroke="currentColor" stroke-dasharray="3 6" stroke-opacity=".4" stroke-width=".7"/>';
    } else if (n === 7) {
      for (let j = 0; j < 39; j++) {
        const radius = 26 + j * 2.6, pts = [];
        for (let i = 0; i <= 210; i++) { const a = i / 210 * Math.PI * 2; pts.push([170 + radius * Math.cos(a), 170 + radius * Math.sin(a) * (1 + 0.055 * Math.sin(a * 5 + j * 0.1))]); }
        lines += poly(pts, 0.75 - j * 0.017, 0.7);
      }
      lines += circle(170, 170, 3, 1, core, core);
    } else {
      for (let i = 0; i < 120; i++) {
        const a = i * 2.39996, r = 10 + Math.sqrt(i) * 10;
        const p = [170 + Math.cos(a) * r, 170 + Math.sin(a) * r];
        if (i % 2 === 0) lines += poly([[170, 170], p], 0.14, 0.6);
        lines += circle(p[0], p[1], i % 7 === 0 ? 2.4 : 1, 0.3 + (i % 5) * 0.1, i % 7 === 0 ? core : 'currentColor', i % 7 === 0 ? core : 'currentColor');
      }
      lines += circle(170, 170, 7, 1, core, core);
    }
    const svg = `<svg viewBox="0 0 340 340" aria-hidden="true" focusable="false"><g fill="none">${lines}</g></svg>`;
    plateCache.set(n, svg);
    return svg;
  }

  const sky = (() => {
    const el = $('sky');
    const figure = $('sky-figure');
    let figureKey = '';
    function init() {
      // A sparse starfield tile, generated once (no network, no image files).
      const random = seeded(2026);
      let stars = '';
      for (let i = 0; i < 220; i++) {
        const r = random() < 0.08 ? 1.3 : 0.6 + random() * 0.5;
        stars += `<circle cx="${(random() * 1200).toFixed(0)}" cy="${(random() * 1200).toFixed(0)}" r="${r.toFixed(2)}" fill="#eaf2f8" fill-opacity="${(0.18 + random() * 0.55).toFixed(2)}"/>`;
      }
      const url = `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200">${stars}</svg>`)}")`;
      root.style.setProperty('--star-tile', url);
    }
    function show(scene, opts = {}) {
      el.dataset.scene = scene;
      el.dataset.layout = opts.layout || (scene === 'cover' ? 'hero' : scene === 'preview' ? 'contents' : 'chapter');
      // Ch.8's seed: without a live universe the trigger carries the one light itself (site.css
      // .seed), so the sky draws no second one there.
      const key = scene === 'cover' ? 'ring' : scene === 'ending-ready' ? 'none' : `plate-${opts.chapter || 1}`;
      if (key === figureKey) return;
      figureKey = key;
      figure.innerHTML = key === 'ring' ? ringSVG() : key === 'none' ? '' : plate(opts.chapter || 1);
      if (key !== 'none' && !isCalm() && figure.animate) figure.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 700, easing: 'ease-out' });
    }
    const layout = name => { el.dataset.layout = name; };
    const styled = new Map();
    const setVar = (name, v) => { const value = clamp(v).toFixed(3); if (styled.get(name) !== value) { styled.set(name, value); el.style.setProperty(name, value); } };
    const veil = v => setVar('--veil', v);
    /** The plate disperses as the reader enters the text, like the universe's formation. */
    const scatter = v => setVar('--scatter', v);
    // The figure glides to its composition: the fallback nodes follow when it arrives.
    figure.addEventListener('transitionend', e => { if (e.target === figure && e.propertyName !== 'opacity') home.placeFallbackNodes(); });
    /* The phone cover's chapter dial turns the fallback ring as well: the nodes glide along the
     * drawn orbit (the ring of dots is uniform, so only the nodes move) until the chosen node rests
     * at the front (angle π/2, the nearest point), the next chapter to its right as in the
     * universe. `dialPhase` is the chapter at the front (fractional while turning); null: the
     * nodes keep their usual places (wide screens). Eased critically (~0.9 s), retargeted by every
     * step; still screens jump. */
    let dialPhase = null;
    let dialTarget = 1;
    let dialFrame = 0;
    let dialTime = 0;
    function turn(now) {
      const dt = Math.min(0.1, (now - dialTime) / 1000);
      dialTime = now;
      const diff = dialTarget - dialPhase;
      dialPhase = Math.abs(diff) < 0.002 ? dialTarget : dialPhase + diff * (1 - Math.exp(-dt / 0.17));
      home.placeFallbackNodes(false);
      dialFrame = dialPhase === dialTarget ? 0 : requestAnimationFrame(turn);
    }
    /** n: the chapter to bring to the front; null: back to the usual ring. */
    function dial(n) {
      cancelAnimationFrame(dialFrame);
      dialFrame = 0;
      if (!n) { dialPhase = null; return; }
      if (dialPhase === null || isCalm()) { dialPhase = dialTarget = n; return; }
      // The shortest way round (8 → 1 is one step).
      dialTarget = dialPhase + ((((n - dialPhase) % 8) + 12) % 8 - 4);
      dialTime = performance.now();
      dialFrame = requestAnimationFrame(turn);
    }
    /** Node positions on the fallback ring, in viewport px (the figure is a square box). */
    function nodes() {
      const box = figure.getBoundingClientRect();
      if (!box.width) return [];
      const scale = box.width / 1000;
      return chapters.map(c => {
        const angle = dialPhase === null ? nodeAngle(c.number) : Math.PI / 2 - (c.number - dialPhase) * Math.PI / 4;
        const [x, y, depth] = ringPoint(angle, RING.r * RING.orbit);
        return { n: c.number, x: box.left + x * scale, y: box.top + y * scale, radius: 5, depth, visible: true };
      });
    }
    return { init, show, layout, veil, scatter, nodes, dial };
  })();

  /** Every scene change drives both the universe and its fallback. */
  function stage(scene, opts = {}) {
    universe.scene(scene, opts);
    sky.show(scene, opts);
  }
  /** Re-compose without changing the formation. */
  function compose(name) {
    universe.layout(name);
    sky.layout(name);
  }
  function veil(v) { universe.veil(v); sky.veil(v); }
  /* Reading = scattered stars (design/V9.1-FEEDBACK.md 2): formations belong to the chapter covers
   * and the home sections; in the body text their particles have scattered into a sparse, calm
   * starfield. 0 = the formation, 1 = the starfield. */
  let scatterTarget = 0;
  function scatter(v) {
    scatterTarget = clamp(v);
    universe.scatter(scatterTarget);
    sky.scatter(scatterTarget);
  }

  /* ─────────────────────────── 6. Announcer & toast ─────────────────────────── */

  /** Replay the staggered entrance of a cover's copy (CSS: .intro). */
  function playIntro(el) {
    if (!el) return;
    el.classList.remove('intro');
    void el.offsetWidth;
    el.classList.add('intro');
    // Once it has played, let go of the entrance: its fill would otherwise pin opacity and
    // transform, and the copy could not fade aside later (portrait chapter card, explore).
    const done = () => {
      const running = el.getAnimations?.({ subtree: true }).some(a => a.animationName && a.playState !== 'finished');
      if (running) return;
      el.removeEventListener('animationend', done);
      el.classList.remove('intro');
    };
    el.addEventListener('animationend', done);
  }

  function announce(text) {
    const el = $('announcer');
    el.textContent = '';
    setTimeout(() => { el.textContent = text; }, 40);
  }
  let toastTimer = 0;
  function toast(text) {
    const el = $('toast');
    clearTimeout(toastTimer);
    el.textContent = text;
    el.classList.add('is-visible');
    toastTimer = setTimeout(() => el.classList.remove('is-visible'), 2800);
  }

  /* ───────────────────────────── 7. Settings ───────────────────────────── */

  function setPressed(selector, isOn) {
    for (const button of $$(selector)) button.setAttribute('aria-pressed', String(isOn(button)));
  }

  function applyReading() {
    root.style.setProperty('--reading-size', `${state.size}px`);
    root.style.setProperty('--reading-leading', String(LEADING[state.leading]));
    root.dataset.font = state.font;
    $('size-value').textContent = String(state.size);
    // aria-disabled, not disabled: the step that was just pressed keeps keyboard focus at the end
    // of the range (a disabled button would drop it to the page behind the sheet).
    $('size-down').setAttribute('aria-disabled', String(state.size <= SIZES[0]));
    $('size-up').setAttribute('aria-disabled', String(state.size >= SIZES[SIZES.length - 1]));
    setPressed('button[data-leading]', b => b.dataset.leading === state.leading);
    setPressed('button[data-font]', b => b.dataset.font === state.font);
  }

  /** Change the typography while keeping the reader at the same place in the same paragraph (a
   * face that arrives later re-anchors again through the reader's ResizeObserver). */
  function changeReading(mutate, persist = true) {
    const place = reader.capture();
    reader.holdReflow();
    mutate();
    applyReading();
    if (persist) store.save();
    if (!reader.active) return;
    requestAnimationFrame(() => {
      reader.reanchor(place);
      scrollEngine.update(true);
    });
  }

  /* “움직임: 멈춤” stills the universe and every decorative text motion (entrances, transmissions,
   * the litany, star breaks), exactly like the OS reduced-motion setting; the content stays. */
  let motionHold = false;   // a pointer or keyboard focus rests on a chapter node (cover)
  function applyMotion() {
    const off = state.motion === 'off';
    root.classList.toggle('motion-paused', off);
    root.classList.toggle('motion-ok', !isCalm());
    if (off || isCalm()) reveal.flushAll();
    universe.paused(off || isReduced() || motionHold);
    setPressed('button[data-motion]', b => (b.dataset.motion === 'off') === off);
    // A changing label, so no pressed state (it would read “재생, 눌림”). Under the device's
    // reduced-motion setting the ring never moves, so the explore tools offer no motion toggle.
    $('explore-motion').textContent = off ? '재생' : '멈춤';
    $('explore-motion').hidden = isReduced();
  }
  /** Hold the drifting ring still while a node is pointed at or focused (stable targets). */
  function holdMotion(on) {
    motionHold = on;
    universe.paused(state.motion === 'off' || isReduced() || on);
  }

  function bindSettings() {
    const step = d => {
      const next = SIZES[clamp(SIZES.indexOf(state.size) + d, 0, SIZES.length - 1)];
      if (next !== state.size) changeReading(() => { state.size = next; });
    };
    $('size-down').addEventListener('click', () => step(-1));
    $('size-up').addEventListener('click', () => step(1));
    for (const b of $$('button[data-leading]')) b.addEventListener('click', () => changeReading(() => { state.leading = b.dataset.leading; }));
    for (const b of $$('button[data-font]')) b.addEventListener('click', () => changeReading(() => { state.font = b.dataset.font; }));
    for (const b of $$('button[data-motion]')) b.addEventListener('click', () => {
      state.motion = b.dataset.motion;
      store.save();
      applyMotion();
      if (state.motion === 'on' && isReduced()) toast('기기의 ‘동작 줄이기’ 설정에 따라 우주는 멈춘 채로 표시됩니다.');
    });
    // The settings preview is a verbatim sentence from the opening of the novel.
    $('settings-preview').textContent = chapterOf(1).paragraphs[0];

    // Sound: audio.js owns playback; the reader's choice is remembered here.
    const rememberSound = () => queueMicrotask(() => {
      const s = window.NovelSound?.getState?.();
      if (!s) return;
      state.sound = { enabled: !!s.enabled, volume: clamp(s.volume) };
      store.save();
    });
    for (const b of $$('[data-audio-toggle],[data-audio-switch]')) b.addEventListener('click', rememberSound);
    for (const input of $$('[data-audio-volume]')) input.addEventListener('change', rememberSound);
  }

  function applySoundPreference() {
    const sound = window.NovelSound;
    if (!sound) return;
    try {
      if (state.sound.volume !== null) sound.setVolume?.(state.sound.volume);
      if (state.sound.enabled === false) sound.mute?.();
    } catch (error) { console.warn('Sound preference not applied.', error); }
  }
  /** Another tab changed the sound: its volume and “off” apply here at once. “On” waits until this
   * tab is in view (a hidden tab keeps its audio suspended, audio.js), and then starts as on a first
   * visit (after a gesture, if the browser asks for one). */
  let soundOnLater = false;
  function applySyncedSound() {
    const sound = window.NovelSound;
    if (!sound) return;
    soundOnLater = false;
    try {
      applySoundPreference();
      if (state.sound.enabled === true && sound.getState?.().enabled === false) {
        if (document.hidden) soundOnLater = true;
        else sound.unmute?.();
      }
    } catch (error) { console.warn('Sound preference not applied.', error); }
  }

  /* ─────────────────────────── 8. Reveal on scroll ─────────────────────────── */

  /* Elements marked [data-reveal] rise in once when they enter the viewport (opacity/transform
   * only; never layout). Variants: "lines" (staggered lines) and "tx" (a transmission whose
   * characters resolve in). Everything is shown at once under reduced motion. */
  const reveal = (() => {
    const supported = 'IntersectionObserver' in window;
    const observer = supported ? new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        show(entry.target);
      }
    }, { rootMargin: '0px 0px -3% 0px', threshold: 0.01 }) : null;
    function show(el) {
      el.classList.add('is-in');
      if (el.dataset.reveal === 'tx') resolveTransmission(el);
    }
    function observe(scope) {
      for (const el of $$('[data-reveal]:not(.is-in)', scope)) {
        if (!observer || isCalm()) el.classList.add('is-in');
        else observer.observe(el);
      }
    }
    /** Reveal everything above a point at once (used after jumping to a saved paragraph). */
    function flushAbove(y) {
      for (const el of $$('[data-reveal]:not(.is-in)')) {
        if (el.getBoundingClientRect().bottom < y) { observer?.unobserve(el); el.classList.add('is-in'); }
      }
    }
    /** Motion turned off: show everything that is still waiting to rise in. */
    function flushAll() {
      for (const el of $$('[data-reveal]:not(.is-in)')) { observer?.unobserve(el); el.classList.add('is-in'); }
    }
    return { observe, flushAbove, flushAll };
  })();

  /** Characters resolving in, one after another, as an aria-hidden layer over `el`’s own text
   * (which is only made transparent, never replaced, so assistive technology keeps reading the
   * same DOM). Returns the layer, or null when nothing is drawn. */
  function glyphLayer(el, text, total, [min, max]) {
    const glyphs = Array.from(text);
    if (!glyphs.length) return null;
    const step = clamp(total / glyphs.length, min, max);
    const layer = document.createElement('span');
    layer.className = 'tx-glyphs';
    layer.setAttribute('aria-hidden', 'true');
    layer.innerHTML = glyphs.map((g, i) => `<span style="--d:${Math.round(i * step)}ms">${escapeHTML(g)}</span>`).join('');
    el.classList.add('is-resolving');
    el.appendChild(layer);
    const done = glyphs.length * step + 900;
    setTimeout(() => { layer.remove(); if (!el.querySelector('.tx-glyphs')) el.classList.remove('is-resolving'); }, done);
    return layer;
  }

  /** A transmission arrives: its characters resolve in over the text, which stays untouched. */
  function resolveTransmission(el) {
    if (isCalm() || el.querySelector('sup, br, .tx-glyphs')) return;
    glyphLayer(el, el.textContent, 1150, [14, 38]);
  }

  /* ─────────────────────────── 9. Prose rendering ─────────────────────────── */

  /* Special renderings are derived from the text alone; nothing is added to it.
   *  ✦                      → a scene break (a small star)
   *  ‘…’ (whole paragraph)  → a transmission: a written, machine or interstellar message
   *  “…                     → a line of dialogue; consecutive lines are set as one exchange
   *  three or more lines    → a verse (litany), revealed line by line; if it ends on a comma, the
   *                           following paragraph completes it and is given room
   *  metadata pull          → the chapter’s key sentence, by weight and space only
   *  last scene of the book → paced with growing space */
  const isTransmission = p => !p.includes('\n') && (/^‘[^’]*’$/.test(p) || /^'[^']*'$/.test(p));
  /** Hanging punctuation for text opening with a quotation mark: double (“) or single (‘ '). */
  const hangClass = text => (/^“/.test(text) ? 'hang-d' : /^[‘']/.test(text) ? 'hang-s' : '');

  function renderProse(chapter) {
    const paragraphs = chapter.paragraphs;
    const codaFrom = chapter.number === LAST ? paragraphs.lastIndexOf('✦') : -1;
    const codaCount = codaFrom >= 0 ? paragraphs.length - 1 - codaFrom : 0;
    let previous = '';
    let completesLitany = false;
    return paragraphs.map((p, i) => {
      if (p === '✦') {
        previous = 'break';
        return `<div class="scene-break" role="separator" id="p-${i}" data-paragraph="${i}" data-reveal>${STAR_SVG}</div>`;
      }
      const lines = p.split('\n');
      const classes = [];
      let reveal = '';
      let inner;
      if (lines.length >= 3) {
        classes.push('verse');
        reveal = 'lines';
        // Each line is its own block: an opening quote hangs per line, not per paragraph.
        inner = lines.map((line, j) => `<span class="line ${hangClass(line)}" style="--i:${j}">${richText(line)}</span>`).join('');
      } else {
        inner = lines.map(richText).join('<br>');
      }
      let kind = 'para';
      if (isTransmission(p)) { kind = 'tx'; classes.push('tx'); reveal = 'tx'; }
      else if (p.startsWith('“')) { kind = 'dialogue'; classes.push('dialogue'); if (previous === 'dialogue') classes.push('dialogue-next'); }
      if (lines.length < 3 && hangClass(p)) classes.push(hangClass(p));
      if (p === chapter.pull) classes.push('pull');
      if (completesLitany) { classes.push('verse-final'); completesLitany = false; }
      if (lines.length >= 3 && /,\s*$/.test(lines[lines.length - 1])) completesLitany = true;
      let style = '';
      if (codaFrom >= 0 && i > codaFrom) {
        classes.push('coda');
        const k = (i - codaFrom) / codaCount;
        style = ` style="--coda:${k.toFixed(3)}"`;
        if (i === paragraphs.length - 1) classes.push('coda-last');
      }
      previous = kind;
      return `<p id="p-${i}" data-paragraph="${i}"${classes.length ? ` class="${classes.join(' ')}"` : ''}${style} data-reveal${reveal ? `="${reveal}"` : ''}>${inner}</p>`;
    }).join('');
  }

  /* ─────────────── 10. Home: cover, nodes, explore, contents, litany ─────────────── */

  const home = (() => {
    const hero = $('home');
    const nodeLayer = $('node-layer');
    const nodeButtons = [];
    let selected = 0;
    let exploring = false;
    let heroActive = true;
    let lastFrame = null;
    let section = 'hero';
    let previewN = 1;
    let hoverUntil = 0;
    let previewTimer = 0;
    let litanyStep = -1;
    let litanyChapters = [];
    let rowsFaded = false;
    let fallbackQueued = false;
    let pointed = 0;   // the node under the mouse
    let keyed = 0;     // the node with keyboard focus
    let actionsFade = 1;
    let dialFade = 1;
    /* The phone cover (design/V9.1-FEEDBACK.md, amendment 3): a chapter dial under the ring. */
    let dialOn = false;    // phones: coarse pointer and the portrait test (isDial)
    let dialN = 1;         // the chapter at the front of the ring
    let dialSent = -1;     // what the universe was last asked to hold at the front (0: released)

    /** The cover’s composition: centred while exploring, or (portrait) while a chapter card is open.
     * Phones with the dial: always centred (the ring higher, the dial and the actions below it). */
    const coverLayout = () => (dialOn || exploring || (selected && isTall()) ? 'explore' : 'hero');

    /** Light node n in the universe (0: the selection, if any); the ring holds still while a node
     * is pointed at or keyboard-focused. Labels make room for the lit node at once. (The dial lights
     * its own node through Universe.focusNode; nothing else lights one meanwhile.) */
    function light(n) {
      if (dialOn) { if (lastFrame) placeNodes(lastFrame); return; }
      universe.select(n);
      holdMotion(!!(pointed || keyed));
      if (lastFrame) placeNodes(lastFrame);
    }

    /* Node buttons ride the universe’s nodes (positions come from Universe.subscribe). */
    function buildNodes() {
      for (const c of chapters) {
        const button = document.createElement('button');
        button.className = 'node';
        button.type = 'button';
        button.dataset.chapter = c.number;
        // Activating a node discloses its chapter card (#readout).
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', 'readout');
        button.setAttribute('aria-label', `${pad(c.number)} ${c.short} — ${c.kicker}`);
        button.innerHTML = `<span class="node-ring" aria-hidden="true"></span><span class="node-label" aria-hidden="true"><span class="mono">${pad(c.number)}</span><span class="node-name">${escapeHTML(c.short)}</span></span>`;
        // (Phones: tapping a node turns the dial to its chapter; no card opens.)
        button.addEventListener('click', () => (dialOn ? setDial(c.number) : select(selected === c.number ? 0 : c.number)));
        // Pointing at or keyboard-focusing a node lights it and holds the ring still (a stable
        // target). Focus that only follows a tap or a click (the card's ✕ returns focus to its node)
        // lights nothing: the highlight belongs to the open card alone.
        button.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { pointed = c.number; light(c.number); } });
        button.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') { pointed = 0; light(keyed || selected); } });
        button.addEventListener('focus', () => { if (focusVisible(button)) { keyed = c.number; light(c.number); } });
        button.addEventListener('blur', () => { if (keyed === c.number) { keyed = 0; light(pointed || selected); } });
        button._place = { state: '', x: NaN, y: NaN, lx: NaN, ly: NaN, geo: -1, sel: false, selFlag: false, side: '', shift: 0, terse: false, found: true, bottom: 0, lo: 0, depth: -1, sunk: false };
        nodeLayer.appendChild(button);
        nodeButtons.push(button);
      }
    }

    /* Geometry the node layer avoids: the cover’s buttons, the title, an open bottom sheet and the
     * explore toolbar. Read together (never between style writes) and refreshed when stale. */
    const geometry = { stamp: -1e9, w: 0, h: 0, left: 8, right: 8, top: 8, bottom: 8, terse: false, title: [], obstacles: [], widths: [], terseWidth: 18, labelH: 20 };
    let geometryStale = true;
    const rectOf = el => { if (!el || el.hidden) return null; const r = el.getBoundingClientRect(); return r.width && r.height ? r : null; };
    function readGeometry() {
      const g = geometry;
      g.stamp = performance.now();
      g.w = innerWidth;
      g.h = innerHeight;
      g.terse = isMobile();
      // Labels stay inside the page's own margins (the gutter, or a notch's safe area) and below
      // the top bar, like every other line of text on the page.
      const pad = getComputedStyle(hero);
      g.left = Math.max(8, parseFloat(pad.paddingLeft) || 0);
      g.right = Math.max(8, parseFloat(pad.paddingRight) || 0);
      g.top = Math.max(8, topbar.height() + 4);
      g.bottom = 12;
      const copyHidden = exploring || (selected && isTall());
      // The title's glyphs (each line's own box), not the whole heading block.
      g.title = copyHidden ? [] : $$('#cover-title .ht-line > span').map(rectOf).filter(Boolean);
      g.obstacles = [];
      // (Portrait: buttons that have faded on their way over the ring no longer stand in its way.)
      if (!copyHidden && actionsFade >= 0.35) for (const id of ['dial-read', 'start-reading', 'resume', 'explore-open']) { const r = rectOf($(id)); if (r) g.obstacles.push(r); }
      // The dial's chapter and dots (phones).
      if (dialOn && !copyHidden && dialFade >= 0.35) for (const id of ['dial-now', 'dial-dots']) { const r = rectOf($(id)); if (r) g.obstacles.push(r); }
      if (exploring) {
        const r = rectOf($('explore-bar')); if (r) g.obstacles.push(r);
        // (Short landscape screens set the hint apart from the tools, at the lower left.)
        const hint = $('explore-hint');
        const h = hint.classList.contains('is-faded') ? null : rectOf(hint);
        if (h && !(r && h.top >= r.top && h.bottom <= r.bottom && h.left >= r.left && h.right <= r.right)) g.obstacles.push(h);
      }
      // An open card is solid ground for the node layer wherever it may meet the ring: the bottom
      // sheet, and the card docked beside the explore ring (a node dragged under it is not offered,
      // and labels keep clear of it).
      if (selected && (isCompactScreen() || exploring)) { const r = rectOf($('readout')); if (r) g.obstacles.push(r); }
      // The fallback sky's ring of dots (no WebGL): labels keep off its band as well.
      const figure = universe.live ? null : rectOf($('sky-figure'));
      g.band = figure ? { left: figure.left, top: figure.top, scale: figure.width / 1000 } : null;
      // Full label widths (names shown), measured in one pass.
      const terse = nodeButtons.filter(b => b.classList.contains('is-terse'));
      for (const b of terse) b.classList.remove('is-terse');
      g.widths = nodeButtons.map(b => b.querySelector('.node-label').offsetWidth);
      for (const b of terse) b.classList.add('is-terse');
      const mono = nodeButtons[0]?.querySelector('.node-label .mono');
      if (mono) { g.terseWidth = mono.offsetWidth || 18; g.labelH = mono.parentNode.offsetHeight || 20; }
      geometryStale = false;
    }
    const hitsAny = (list, l, t, r, b, pad) => { for (const o of list) if (l - pad < o.right && r + pad > o.left && t - pad < o.bottom && b + pad > o.top) return true; return false; };
    /** Does a box cross the dense part of the fallback ring's band of dots (ringSVG: radius
     * .79–1.11 r, lifted up to ±25 units, on the inclined ellipse; its rare outermost dots are let
     * be)? Tested at a grid of points of the box. */
    function hitsBand(band, l, t, r, b) {
      const c = Math.cos(RING.roll), s = Math.sin(RING.roll);
      const inner = RING.r * 0.85, outer = RING.r * 1.06, lift = 16;
      for (let i = 0; i <= 4; i++) for (let j = 0; j <= 2; j++) {
        const dx = (l + (r - l) * i / 4 - band.left) / band.scale - RING.cx;
        const dy = (t + (b - t) * j / 2 - band.top) / band.scale - RING.cy;
        // Undo the roll: (u, w) in the ring's own plane, w still squashed by the tilt and lifted.
        const u = dx * c + dy * s, w = Math.abs(-dx * s + dy * c);
        const near = Math.hypot(u, Math.max(0, w - lift) / RING.tilt);
        const far = Math.hypot(u, (w + lift) / RING.tilt);
        if (near <= outer && far >= inner) return true;
      }
      return false;
    }
    let labelFloor = 0;   // the lowest label edge (the desktop card rests below it)
    let lastReadoutCheck = 0;
    let textFloor = Infinity;   // the contents' first line on screen, as it rises over the cover
    const SIDES = { left: ['left', 'right'], right: ['right', 'left'] };

    /** Does a label box come within `clear` px (plus the dot's own radius) of another node's dot?
     * Such a label would read as that node's name. */
    function nearDot(dots, n, l, t, r, b, clear) {
      for (const d of dots) {
        if (d.n === n || d.visible === false || !Number.isFinite(d.x) || !Number.isFinite(d.y)) continue;
        const dx = Math.max(l - d.x, 0, d.x - r), dy = Math.max(t - d.y, 0, d.y - b);
        const m = clear + (Number(d.radius) || 0);
        if (dx * dx + dy * dy < m * m) return true;
      }
      return false;
    }

    /** Choose a label side: outward first, then above/below (away from the ring's middle), then
     * inward; never across the title, the buttons, the top bar or the page gutter, and never beside
     * another node's dot. The side a label already has keeps a few pixels of advantage, so a node
     * drifting along an edge does not make its label flicker between two sides. Writes the result
     * into `p`. */
    const HOLD = 6;
    const DOT_CLEAR = 10;
    function placeLabel(p, n, x, y, lo, midX, midY, dots) {
      const g = geometry, h = g.labelH;
      const [out, inward] = SIDES[x < midX ? 'left' : 'right'];
      const vert = y < midY ? 'above' : 'below';
      const order = [out, vert, inward, vert === 'above' ? 'below' : 'above'];
      const minL = g.left, maxR = g.w - g.right, minT = g.top, maxB = g.h - g.bottom;
      p.found = false;
      for (const kind of g.terse ? ['terse'] : ['full', 'terse']) {
        const w = kind === 'terse' ? g.terseWidth : g.widths[n - 1] || 60;
        for (const side of order) {
          // 2 px of slack: a side is reconsidered only once its node has moved 1.5 px.
          const m = side === p.side && (kind === 'terse') === p.terse ? 2 : 2 + HOLD;
          let l, t, shift = 0;
          if (side === 'right') { l = x + lo; t = y - h / 2; }
          else if (side === 'left') { l = x - lo - w; t = y - h / 2; }
          else {
            // Centred on the node, slid inward just enough to stay within the margins.
            shift = Math.max(0, minL + m - (x - w / 2)) + Math.min(0, maxR - m - (x + w / 2));
            if (Math.abs(shift) > w / 2 - 4) continue;   // it would no longer sit over its node
            l = x - w / 2 + shift;
            t = side === 'above' ? y - lo - h : y + lo;
          }
          const r = l + w, b = t + h;
          if (l < minL + m || r > maxR - m || t < minT + m || b > maxB - m) continue;
          if (hitsAny(g.title, l, t, r, b, 6) || hitsAny(g.obstacles, l, t, r, b, 4)) continue;
          if (g.band && hitsBand(g.band, l, t, r, b)) continue;
          if (nearDot(dots, n, l, t, r, b, m === 2 ? DOT_CLEAR : DOT_CLEAR + HOLD)) continue;
          p.side = side; p.shift = shift; p.terse = kind === 'terse'; p.found = true; p.bottom = b;
          return;
        }
      }
      p.side = out; p.shift = 0; p.terse = g.terse; p.bottom = 0;
    }

    /** Portrait screens: the ring stays where the universe draws it while the cover scrolls, and the
     * cover's buttons sit below it. They fade out on their way up, gone before they would cross the
     * ring (or its lowest label), and return on the way back. At the top of the page they are whole. */
    function fadeActions() {
      const row = hero.querySelector('.hero-actions');
      const dial = $('dial');
      let fade = 1, fadeDial = 1;
      const frame = lastFrame;
      const onCover = frame && frame.nodes && (frame.scene === undefined || frame.scene === 'cover');
      // (Scrolled on past the cover — the next section has the screen, or the ring is already
      // turning into its formation — they stay gone: the section's own fade takes them from here,
      // and nothing flashes back over the ring meanwhile.)
      if (isTall() && !exploring && !selected && scrollY > 0 && (!heroActive || section !== 'hero' || !onCover)) fade = fadeDial = 0;
      else if (isTall() && heroActive && !exploring && !selected && onCover) {
        let ring = -Infinity;
        for (const n of frame.nodes) if (Number.isFinite(n.y)) ring = Math.max(ring, n.y + Math.max(18, (Number(n.radius) || 0) + 10));
        ring = Math.max(ring, labelFloor || 0) + 10;
        if (ring > -Infinity) {
          // (At the top of the page they are always whole; scrolled, touching the ring means gone.)
          const fadeAt = top => {
            const gap = top - ring;                 // now
            const rest = gap + scrollY;             // at the top of the page
            return scrollY <= 0 ? 1 : gap <= 0 ? 0 : clamp(gap / Math.min(96, Math.max(1, rest)));
          };
          fade = fadeAt(row.getBoundingClientRect().top);
          // The dial rests just under the ring, so it gives way within its first few pixels of
          // travel (the ring at rest is measured as the dial's own floor: dialFloor).
          if (dialOn) {
            const top = dial.getBoundingClientRect().top;
            const gap = top - dialFloor - 2, rest = gap + scrollY;
            fadeDial = scrollY <= 0 ? 1 : gap <= 0 ? 0 : clamp(gap / Math.min(96, Math.max(1, rest)));
          }
        }
      }
      fade = Math.round(fade * 100) / 100;
      fadeDial = Math.round(fadeDial * 100) / 100;
      if (fadeDial !== dialFade) {
        if ((fadeDial < 0.35) !== (dialFade < 0.35)) geometryStale = true;
        dialFade = fadeDial;
        dial.style.setProperty('--fade', String(fadeDial));
        dial.classList.toggle('is-faded', fadeDial < 0.35);
      }
      if (fade === actionsFade) return;
      if ((fade < 0.35) !== (actionsFade < 0.35)) geometryStale = true;
      actionsFade = fade;
      row.style.setProperty('--fade', String(fade));
      row.classList.toggle('is-faded', fade < 0.35);
    }

    /* The dial rests just under the ring: below the lowest point of the nodes' orbit (fitted to the
     * eight nodes, so it holds still while the ring turns) and the front node's lit ring, and above
     * the cover's actions. It is placed in the cover's own coordinates (the ring is fixed on screen;
     * the cover scrolls), so it travels with the page and fades before it would reach the ring. */
    let dialFloor = 0;
    let dialTop = NaN;
    let dialHeights = null;   // the dial's height, full and snug (measured again when its copy or the screen changes)
    const DIAL_GAP = 28, DIAL_GAP_MIN = 14;
    function placeDial(frame) {
      let floor = -Infinity;
      for (const n of frame.nodes) {
        if (n.visible === false || !Number.isFinite(n.y)) continue;
        floor = Math.max(floor, n.y + Math.max(12, (Number(n.radius) || 0) * 3.4));
      }
      const orbit = orbitOf(frame.nodes);
      if (orbit) floor = Math.max(floor, orbit.cy + Math.hypot(orbit.uy, orbit.vy) + 12);
      if (!Number.isFinite(floor)) return;
      dialFloor = Math.round(floor);
      const dial = $('dial');
      const row = hero.querySelector('.hero-actions');
      // (Cover coordinates = screen coordinates at the top of the page: the cover starts the page.)
      // (Its laid-out place: not the few pixels it rises by in the cover's entrance.)
      const rowTop = row.offsetParent === hero ? row.offsetTop : row.getBoundingClientRect().top - hero.getBoundingClientRect().top;
      const room = rowTop - 14 - dialFloor;   // between the ring and the actions
      // Short of room: the snug dial (a smaller title, tighter dots), then the least gap.
      if (!dialHeights) {
        const was = dial.classList.contains('is-snug');
        dial.classList.remove('is-snug');
        const full = dial.offsetHeight;
        dial.classList.add('is-snug');
        dialHeights = { full, snug: dial.offsetHeight };
        dial.classList.toggle('is-snug', was);
      }
      const snug = room < dialHeights.full + DIAL_GAP_MIN;
      if (dial.classList.contains('is-snug') !== snug) { dial.classList.toggle('is-snug', snug); geometryStale = true; }
      const h = snug ? dialHeights.snug : dialHeights.full;
      const top = Math.round(Math.max(dialFloor + DIAL_GAP_MIN, Math.min(dialFloor + DIAL_GAP, rowTop - 14 - h)));
      if (top !== dialTop) {
        dialTop = top;
        hero.style.setProperty('--dial-top', `${top}px`);
        geometryStale = true;
      }
    }

    function placeNodes(frame) {
      lastFrame = frame;
      if (dialOn && frame && frame.nodes && body.dataset.view === 'home' && (frame.scene === undefined || frame.scene === 'cover')) placeDial(frame);
      fadeActions();
      if (!frame || !frame.nodes) return;
      const show = body.dataset.view === 'home' && heroActive && (frame.scene === undefined || frame.scene === 'cover');
      if (nodeLayer.classList.contains('is-shown') !== show) nodeLayer.classList.toggle('is-shown', show);
      if (!show) return;
      if (geometryStale || performance.now() - geometry.stamp > 600) readGeometry();
      const g = geometry;
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, count = 0;
      for (const n of frame.nodes) {
        if (n.visible === false || !Number.isFinite(n.x) || !Number.isFinite(n.y)) continue;
        count++;
        if (n.x < minX) minX = n.x; if (n.x > maxX) maxX = n.x;
        if (n.y < minY) minY = n.y; if (n.y > maxY) maxY = n.y;
      }
      const midX = count ? (minX + maxX) / 2 : g.w / 2;
      const midY = count ? (minY + maxY) / 2 : g.h / 2;
      // (Explore mode holds the page at its top: the contents never rise over the ring there.)
      const floor = exploring ? Infinity : textFloor;
      labelFloor = 0;
      for (const node of frame.nodes) {
        const button = nodeButtons[node.n - 1];
        if (!button) continue;
        const p = button._place;   // last values written to this button (reused, no allocation)
        const visible = node.visible !== false && Number.isFinite(node.x) && Number.isFinite(node.y);
        const x = node.x, y = node.y;
        // A node under the cover’s buttons, the title or a sheet is not offered (a tap there
        // belongs to what is on top, and the title stays readable).
        const occluded = visible && (hitsAny(g.obstacles, x - 22, y - 22, x + 22, y + 22, 0) || hitsAny(g.title, x - 14, y - 14, x + 14, y + 14, 0));
        const state = !visible ? 'hidden' : occluded ? 'occluded' : 'shown';
        if (p.state !== state) {
          p.state = state;
          button.classList.toggle('is-hidden', state === 'hidden');
          button.classList.toggle('is-occluded', state === 'occluded');
        }
        if (state === 'hidden') continue;
        if (p.x !== x || p.y !== y) {
          button.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
          p.x = x; p.y = y;
        }
        const depth = Math.round(clamp(Number(node.depth) || 0) * 100);
        if (p.depth !== depth) { p.depth = depth; button.style.setProperty('--depth', String(depth / 100)); }
        // Labels sit clear of the node’s glow (its radius), a little further when it is lit (selected,
        // pointed at or keyboard-focused: the universe's ring and the focus outline both grow there).
        // The selected node also wears the universe's selection ring, 3–3.5 node radii out with a
        // soft edge (accents/cover.js): its lit number stays outside that ring.
        const isSel = node.n === (dialOn ? dialN : selected);
        const isLit = isSel || node.n === keyed || node.n === pointed;
        const radius = Number(node.radius) || 0;
        let lo = Math.round(Math.max(18, radius + 10) + (isLit ? 4 : 0));
        if (isSel) lo = Math.max(lo, Math.ceil(Math.max(radius, 2.4) * 3.9) + 4);
        if (p.lo !== lo) { p.lo = lo; button.style.setProperty('--lo', `${lo}px`); }
        // The side is decided again only when the node has moved, or the geometry changed.
        if (p.geo !== g.stamp || p.sel !== isLit || p.selFlag !== isSel || Math.abs(x - p.lx) > 1.5 || Math.abs(y - p.ly) > 1.5) {
          const before = { side: p.side, shift: p.shift, terse: p.terse, found: p.found };
          placeLabel(p, node.n, x, y, lo, midX, midY, frame.nodes);
          p.geo = g.stamp; p.sel = isLit; p.lx = x; p.ly = y;
          if (before.side !== p.side) button.dataset.side = p.side;
          if (before.shift !== p.shift) button.style.setProperty('--shift', `${Math.round(p.shift)}px`);
          if (before.terse !== p.terse) button.classList.toggle('is-terse', p.terse);
          if (before.found !== p.found || p.selFlag !== isSel) { p.selFlag = isSel; button.classList.toggle('no-label', !p.found && !isSel); }
        }
        if (p.found && p.bottom > labelFloor) labelFloor = p.bottom;
        // The contents rising over the cover: a label that would lie on their text gives way (it
        // fades), and its node is not offered there (a tap belongs to the row on top).
        const sunk = state === 'shown' && (y + 22 > floor || (p.found && p.bottom + 8 > floor));
        if (p.sunk !== sunk) { p.sunk = sunk; button.classList.toggle('is-sunk', sunk); }
      }
      // The card follows the ring while it settles.
      if (selected && performance.now() - lastReadoutCheck > 220) { lastReadoutCheck = performance.now(); placeReadout(false); updateAway(); }
      // A node with keyboard focus that turns behind the core or under the card (arrow keys turn the
      // ring in explore mode) is no longer offered: focus moves to the nearest node still in view,
      // rather than dropping to the page.
      const active = document.activeElement;
      const lost = active && active.classList.contains('node') && nodeButtons.includes(active) && active._place.state !== 'shown' ? active : null;
      if (lost) {
        let best = null, bestD = Infinity;
        for (const b of nodeButtons) {
          if (b === lost || b._place.state !== 'shown' || b._place.sunk) continue;
          const d = Math.hypot(b._place.x - lost._place.x, b._place.y - lost._place.y);
          if (d < bestD) { bestD = d; best = b; }
        }
        (best || (exploring ? $('explore-zoom-in') : null))?.focus({ preventScroll: true });
      }
    }

    /* Explore (wide screens): the ring is centred and large, so the card docks in a corner the
     * nodes' orbit does not reach — bottom right first, then bottom left, top right, top left —
     * keeping as much of its text as fits there. The orbit is fitted to the eight nodes (evenly
     * spaced on one circle, whose projection is close to an ellipse p(t) = c + u cos t + v sin t),
     * so the ring's own rotation never brings a node under the card. */
    function orbitOf(nodes) {
      if (!nodes || nodes.length !== 8) return null;
      let cx = 0, cy = 0;
      for (const p of nodes) {
        if (!Number.isFinite(p.x) || !Number.isFinite(p.y)) return null;
        cx += p.x / 8; cy += p.y / 8;
      }
      const o = { cx, cy, ux: 0, uy: 0, vx: 0, vy: 0 };
      for (const p of nodes) {
        const t = (p.n - 1) / 8 * Math.PI * 2, c = Math.cos(t) / 4, s = Math.sin(t) / 4;
        o.ux += (p.x - cx) * c; o.uy += (p.y - cy) * c;
        o.vx += (p.x - cx) * s; o.vy += (p.y - cy) * s;
      }
      return o;
    }
    /** Does the orbit pass within m px of the box? */
    function orbitNear(o, l, t, r, b, m) {
      for (let i = 0; i < 120; i++) {
        const a = i / 120 * Math.PI * 2, c = Math.cos(a), s = Math.sin(a);
        const x = o.cx + o.ux * c + o.vx * s, y = o.cy + o.uy * c + o.vy * s;
        if (x > l - m && x < r + m && y > t - m && y < b + m) return true;
      }
      return false;
    }
    const FOLDS = [[], ['is-compact'], ['is-compact', 'is-tight']];
    const CORNERS = ['br', 'bl', 'tr', 'tl'];
    const DOCK_MARGIN = 34;    // a node's button (22 px) and a little air
    let dockSizes = [];        // the card's height for each fold and width (measured on relevel)
    let dock = null;           // where the card rests now: {corner, size}
    let dragging = false;      // the explore ring is being dragged (the card waits until it is let go)
    function clearDock(readout) {
      dock = null;
      readout.style.removeProperty('width');
      readout.style.removeProperty('left');
      readout.style.removeProperty('right');
    }
    function dockRect(corner, size, frame) {
      const l = corner[1] === 'r' ? frame.right - size.width : frame.left;
      const t = corner[0] === 'b' ? frame.floor - size.height : frame.top;
      return { l, t, r: l + size.width, b: t + size.height };
    }
    function dockFrame() {
      const pad = getComputedStyle(hero);
      const bar = rectOf($('explore-bar'));
      return {
        left: Math.max(8, parseFloat(pad.paddingLeft) || 0),
        right: innerWidth - Math.max(8, parseFloat(pad.paddingRight) || 0),
        top: topbar.height() + 16,
        floor: (bar ? bar.top : innerHeight - 96) - 16,
      };
    }
    function placeDocked(readout, relevel) {
      const orbit = orbitOf(lastFrame?.nodes);
      const frame = dockFrame();
      if (relevel || !dockSizes.length) {
        // The card's height at each fold and width (a few synchronous layouts, once per opening).
        readout.style.removeProperty('width');
        readout.classList.remove('is-compact', 'is-tight');
        const full = readout.offsetWidth;
        const widths = [...new Set([full, Math.round(full * 0.84), Math.round(full * 0.7)].map(w => Math.max(240, w)))];
        dockSizes = [];
        for (const fold of FOLDS) {
          readout.classList.remove('is-compact', 'is-tight');
          readout.classList.add(...fold);
          for (const width of widths) {
            readout.style.width = `${width}px`;
            dockSizes.push({ fold, width, height: readout.offsetHeight });
          }
        }
      }
      const clear = (corner, size, m) => {
        const r = dockRect(corner, size, frame);
        if (r.l < frame.left - 1 || r.t < frame.top - 1 || r.b > frame.floor + 1) return false;
        return !orbit || !orbitNear(orbit, r.l, r.t, r.r, r.b, m);
      };
      let next = dock;
      // The card stays where it is while that corner is still clear (with some slack), or while
      // the ring is being dragged; otherwise it moves to the first corner that is.
      if (relevel || !next || (!dragging && !clear(next.corner, next.size, DOCK_MARGIN / 2))) {
        next = null;
        search: for (const size of dockSizes) for (const corner of CORNERS) {
          if (clear(corner, size, DOCK_MARGIN)) { next = { corner, size }; break search; }
        }
        // Nowhere clear (a ring zoomed or dragged across the screen): the tightest card at the
        // bottom right; nodes it covers are not offered meanwhile.
        if (!next) next = { corner: 'br', size: dockSizes[(FOLDS.length - 1) * (dockSizes.length / FOLDS.length)] };
      }
      const moved = relevel || !dock || dock.corner !== next.corner || dock.size !== next.size;
      const shifted = !!dock && (dock.corner !== next.corner || dock.size.width !== next.size.width || dock.size.fold.length !== next.size.fold.length);
      dock = next;
      if (moved) {
        const { fold, width } = dock.size;
        readout.classList.remove('is-compact', 'is-tight');
        if (fold.length) readout.classList.add(...fold);
        readout.style.width = `${width}px`;
      }
      const r = dockRect(dock.corner, dock.size, frame);
      const left = `${Math.round(r.l)}px`, top = `${Math.round(r.t)}px`;
      if (readout.style.left !== left) readout.style.left = left;
      readout.style.right = 'auto';
      if (readout.style.top !== top) readout.style.top = top;
      readout.style.bottom = 'auto';
      if (moved) geometryStale = true;
      // (A card that changes corner or size by itself fades in where it now rests.)
      if (shifted && !isCalm() && readout.animate) readout.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 420, easing: 'ease-out' });
    }

    /** Desktop: rest the readout just below the orbit and its labels (or as low as the screen
     * allows, without its excerpt when space is short); in explore, docked clear of the ring.
     * Portrait and short screens: a bottom sheet. */
    function placeReadout(relevel = true) {
      const readout = $('readout');
      if (readout.hidden) return;
      if (isCompactScreen()) {
        clearDock(readout);
        readout.style.removeProperty('top');
        readout.style.removeProperty('bottom');
        return;
      }
      if (!lastFrame?.nodes?.length) return;
      if (exploring) { placeDocked(readout, relevel); return; }
      if (dock) { clearDock(readout); relevel = true; }
      const live = lastFrame.nodes.filter(n => n.visible !== false && Number.isFinite(n.y));
      if (!live.length) return;
      const lowest = Math.max(labelFloor, ...live.map(n => n.y + Math.max(22, n.radius || 6)));
      const wasCompact = readout.classList.contains('is-compact');
      const floor = innerHeight - 16 - (exploring ? 96 : 0);
      const gap = 20;   // clear of the lowest node's glow and label
      let height;
      if (relevel) {
        // Short of room: fold the excerpt, then the kicker, before the card would touch the ring.
        // (Decided when the card opens or the window changes; while the ring drifts only the
        // card's height stays put, so it never flickers between the two.)
        readout.classList.remove('is-compact', 'is-tight');
        height = readout.offsetHeight;
        if (lowest + gap + height > floor) { readout.classList.add('is-compact'); height = readout.offsetHeight; }
        if (readout.classList.contains('is-compact') && lowest + gap + height > floor) { readout.classList.add('is-tight'); height = readout.offsetHeight; }
      } else height = readout.offsetHeight;
      const compact = readout.classList.contains('is-compact');
      const top = Math.round(clamp(lowest + gap, innerHeight * 0.45, floor - height));
      if (readout.style.top !== `${top}px`) readout.style.top = `${top}px`;
      readout.style.bottom = 'auto';
      if (wasCompact !== compact) geometryStale = true;
    }

    /** Portrait: the card is a bottom sheet under the ring’s centred composition. Its excerpt is
     * folded when the ring would not clear it there (src/universe/config.js: the explore
     * composition is centred at .46 H with a radius of min(.47 W, .3 H); nodes reach ~.69 r below). */
    function fitSheet() {
      const readout = $('readout');
      if (readout.hidden || !isCompactScreen()) return;
      readout.classList.remove('is-compact', 'is-tight', 'is-row');
      if (!isTall()) return;   // short landscape: a one-line bar (CSS)
      const lowestNode = innerHeight * 0.46 + 0.69 * Math.min(innerWidth * 0.47, innerHeight * 0.3) + 22;
      const gap = exploring ? 66 : 0;   // above the explore toolbar (site.css)
      // Fold the excerpt, then the kicker, then set the title beside its actions on one row.
      for (const fold of ['is-compact', 'is-tight', 'is-row']) {
        if (innerHeight - gap - readout.offsetHeight >= lowestNode + 8) return;
        readout.classList.add(fold);
      }
    }

    /** Fallback positions when the universe is not rendering. (`stale`: measure the obstacles
     * again; the fallback dial's turn, frame by frame, does not.) */
    function placeFallbackNodes(stale = true) {
      if (stale) geometryStale = true;
      if (!universe.live) placeNodes({ scene: 'cover', nodes: sky.nodes(), selected: dialOn ? dialN : selected });
      placeReadout();
    }

    /** The lit node: the open card's (wide screens) or the dial's (phones). Nodes disclose the card
     * only where there is one. */
    function markNodes() {
      const lit = dialOn ? dialN : selected;
      for (const button of nodeButtons) {
        const n = Number(button.dataset.chapter);
        button.classList.toggle('is-selected', n === lit);
        if (dialOn) {
          button.removeAttribute('aria-expanded');
          button.removeAttribute('aria-controls');
          if (n === lit) button.setAttribute('aria-current', 'true'); else button.removeAttribute('aria-current');
        } else {
          button.setAttribute('aria-expanded', String(n === selected));
          button.setAttribute('aria-controls', 'readout');
          button.removeAttribute('aria-current');
        }
      }
    }

    function select(n, { focusNode = false } = {}) {
      const previous = selected;
      selected = n;
      // (Closing a card leaves only a pointed-at or keyboard-focused node lit. The dial lights its
      // own node and opens no card.)
      if (!dialOn) universe.select(n || keyed || pointed);
      markNodes();
      const readout = $('readout');
      geometryStale = true;
      if (!n) {
        readout.hidden = true;
        hero.classList.remove('has-readout');
        hero.querySelector('.hero-copy').inert = exploring;
        if (!exploring && section === 'hero' && body.dataset.view === 'home') compose(coverLayout());
        updateAway();
        if (focusNode && previous) nodeButtons[previous - 1]?.focus({ preventScroll: true });
        return;
      }
      const c = chapterOf(n);
      $('readout-kicker').textContent = c.kicker;
      $('readout-title').textContent = c.short;
      $('readout-title').classList.toggle('is-long', c.short.length > 6);
      $('readout-deck').textContent = bindShort(c.deck);
      $('readout-read').href = `#chapter-${n}`;
      $('readout-read').textContent = state.position?.chapter === n ? '이어서 읽기' : '읽기';
      $('readout-meta').textContent = `약 ${c.minutes}분${progressLabel(n) ? ` · ${progressLabel(n)}` : ''}`;
      // The card follows its node in the reading and Tab order (it is fixed on screen wherever it
      // sits in the document), so 읽기 is the next stop after the node that opened it.
      const node = nodeButtons[n - 1];
      if (node && readout.previousElementSibling !== node) {
        const had = readout.contains(document.activeElement) ? document.activeElement : null;
        node.after(readout);
        had?.focus({ preventScroll: true });
      }
      if (n !== previous) { clearDock(readout); dockSizes = []; }
      readout.hidden = false;
      hero.classList.add('has-readout');
      // Portrait: the title steps aside and the ring rises to the middle, clear of the card.
      hero.querySelector('.hero-copy').inert = exploring || isTall();
      if (!exploring && section === 'hero' && body.dataset.view === 'home') compose(coverLayout());
      fitSheet();
      placeReadout();
      // Chosen while the contents have risen to where the card rests (wide screens): the page steps
      // back just enough for the card to be read clear of them.
      if (n !== previous && !exploring && !isCompactScreen() && body.dataset.view === 'home') {
        const over = cardBottom(readout) + 40 - textFloor;
        if (over > 16) window.scrollTo({ top: Math.max(0, scrollY - over), behavior: isCalm() ? 'instant' : 'smooth' });
      }
      updateAway();
      if (!previous && !isCalm() && readout.animate) {
        const from = isCompactScreen() ? 'translateY(24px)' : 'translateY(8px)';
        readout.animate([{ opacity: 0, transform: from }, { opacity: 1, transform: 'none' }], { duration: 420, easing: 'cubic-bezier(.16,1,.3,1)' });
      }
    }

    /* ── The chapter dial (phones: a coarse pointer and the portrait test; design/V9.1-FEEDBACK.md,
     * amendment 3). The ring turns one chapter per step under a horizontal swipe, a dot, a node or
     * the quiet 이전 장 / 다음 장 buttons (keyboard, screen readers); the chapter at the front is
     * named below the ring and 이 장 읽기 opens it (at its saved place, if it has one: router). The
     * universe holds that node at the front (Universe.focusNode) while the cover is on screen and
     * lets the ring go (focusNode(0)) whenever the cover is left. ── */
    const isDial = () => dialQuery.matches;
    const wrap = n => ((n - 1 + LAST * 4) % LAST) + 1;
    const dialDots = [];

    function buildDial() {
      const dots = $('dial-dots');
      for (const c of chapters) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'dial-dot';
        dot.dataset.chapter = c.number;
        dot.setAttribute('aria-label', `${pad(c.number)} ${c.short}`);
        dot.innerHTML = '<i aria-hidden="true"></i>';
        dot.addEventListener('click', () => setDial(c.number));
        dots.appendChild(dot);
        dialDots.push(dot);
      }
      // The dots are one stop in the Tab order; arrow keys, Home and End move along them.
      dots.addEventListener('keydown', e => {
        const keys = { ArrowRight: dialN + 1, ArrowDown: dialN + 1, ArrowLeft: dialN - 1, ArrowUp: dialN - 1, Home: 1, End: LAST };
        if (!(e.key in keys) || e.altKey || e.ctrlKey || e.metaKey) return;
        e.preventDefault();
        setDial(keys[e.key]);
        dialDots[dialN - 1].focus();
      });
      $('dial-prev').addEventListener('click', () => setDial(dialN - 1));
      $('dial-next').addEventListener('click', () => setDial(dialN + 1));
      bindSwipe();
    }

    /** Show chapter n in the dial. `dir` (+1 next, −1 previous) slides the new name in from that side. */
    function renderDial(dir = 0, announce = false) {
      const c = chapterOf(dialN);
      const progress = progressLabel(dialN);
      $('dial-num').textContent = pad(dialN);
      $('dial-kicker').textContent = c.kicker;
      $('dial-meta').textContent = `약 ${c.minutes}분${progress ? ` · ${progress}` : ''}`;
      const title = $('dial-title');
      title.textContent = c.short;
      if (title.classList.contains('is-long') !== c.short.length > 6) { title.classList.toggle('is-long', c.short.length > 6); dialHeights = null; }
      dialDots.forEach((dot, i) => {
        const on = i + 1 === dialN;
        if (on) dot.setAttribute('aria-current', 'true'); else dot.removeAttribute('aria-current');
        dot.tabIndex = on ? 0 : -1;
      });
      const read = $('dial-read');
      read.href = `#chapter-${dialN}`;
      // (The accessible name starts with the visible words, WCAG 2.5.3.)
      read.setAttribute('aria-label', `이 장 읽기 — ${pad(dialN)}. ${c.short}${progress ? `, ${progress}` : ''}`);
      if (announce) $('dial-live').textContent = `${pad(dialN)} ${c.short} — ${c.kicker}, 약 ${c.minutes}분${progress ? `, ${progress}` : ''}`;
      markNodes();
      if (dir && !isCalm()) {
        $('dial-now').animate?.([{ opacity: 0, translate: `${dir * 18}px 0` }, { opacity: 1, translate: '0 0' }], { duration: 420, easing: 'cubic-bezier(.16,1,.3,1)' });
      }
    }

    /** Turn the dial to chapter n (wrapping: the ring has no ends). */
    function setDial(n, { announce = true } = {}) {
      const next = wrap(n);
      if (next === dialN) return;
      // (Which way the name slides: the shorter way round, as the ring turns.)
      const ahead = (next - dialN + LAST) % LAST;
      const dir = ahead === 0 ? 0 : ahead <= LAST / 2 ? 1 : -1;
      dialN = next;
      renderDial(dir, announce);
      sky.dial(dialOn ? dialN : null);
      if (!universe.live) placeFallbackNodes(false);
      syncFocus();
      if (lastFrame) placeNodes(lastFrame);
    }

    /** Hold the dial's node at the front while the cover is the page's own (its section, the home
     * view, no explore); release the ring otherwise. */
    function syncFocus() {
      const want = dialOn && body.dataset.view === 'home' && section === 'hero' && !exploring ? dialN : 0;
      if (want === dialSent) return;
      const fresh = dialSent === -1;   // (a new page, or a new engine: send it whatever was sent before)
      dialSent = want;
      universe.focusNode(want, fresh);
    }

    /** Phones ↔ everything else (a turn of the device, a pointer attached): the dial and its
     * centred ring, or the cover as it is on wide screens. */
    function updateMode(force = false) {
      const on = isDial();
      if (on === dialOn && !force) return;
      dialOn = on;
      root.classList.toggle('has-dial', on);
      if (on) {
        if (exploring) exitExplore({ focus: false });
        if (selected) select(0);
      }
      sky.dial(on ? dialN : null);
      markNodes();
      dialHeights = null;
      geometryStale = true;
      fitActions();
      if (body.dataset.view === 'home' && section === 'hero') compose(coverLayout());
      syncFocus();
      placeFallbackNodes();
    }

    /* Swipes over the ring and the dial. Vertical movement stays the page's own scroll (the cover is
     * touch-action: pan-y in dial mode); the axis is decided once the finger has moved ~10 px. A
     * horizontal swipe turns one chapter per step of travel as it goes (a long swipe may turn
     * several), and on release a short quick flick that has not turned yet turns exactly one. Left
     * brings the next chapter (it waits to the right of the front node), right the previous. */
    let swiped = 0;   // when a swipe last turned the dial (the tap that ends it is not a click)
    function bindSwipe() {
      let touch = null;
      const nameplate = $('dial-now');
      const stepPx = () => clamp(innerWidth * 0.32, 90, 150);
      const drag = px => { nameplate.style.translate = px ? `${px.toFixed(1)}px 0` : ''; nameplate.style.opacity = px ? String(1 - Math.min(0.45, Math.abs(px) / 80)) : ''; };
      /** The ring and the dial: from just above the ring's highest node to the dial's dots. */
      function inZone(x, y) {
        if (!dialOn || exploring || section !== 'hero' || body.dataset.view !== 'home' || dialFade < 0.35) return false;
        let top = innerHeight * 0.2;
        if (lastFrame?.nodes) for (const n of lastFrame.nodes) if (Number.isFinite(n.y)) top = Math.min(top, n.y - 36);
        const bottom = $('dial-dots').getBoundingClientRect().bottom + 6;
        return y >= top && y <= bottom;
      }
      hero.addEventListener('touchstart', e => {
        touch = null;
        if (e.touches.length !== 1) return;
        const t = e.touches[0];
        if (!inZone(t.clientX, t.clientY) || e.target.closest?.('.hero-actions, .dial-step')) return;
        touch = { id: t.identifier, x0: t.clientX, y0: t.clientY, axis: '', used: 0, steps: 0, track: [[e.timeStamp, t.clientX]] };
      }, { passive: true });
      hero.addEventListener('touchmove', e => {
        if (!touch) return;
        if (e.touches.length !== 1) { touch = null; drag(0); return; }
        const t = [...e.changedTouches].find(p => p.identifier === touch.id);
        if (!t) return;
        const dx = t.clientX - touch.x0, dy = t.clientY - touch.y0;
        if (!touch.axis) {
          if (Math.hypot(dx, dy) < 10) return;
          touch.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
          if (touch.axis === 'y') { touch = null; return; }   // the page scrolls
          touch.used = Math.sign(dx) * 10;                   // (the slop is not travel)
        }
        touch.track.push([e.timeStamp, t.clientX]);
        if (touch.track.length > 8) touch.track.shift();
        const step = stepPx();
        let rest = dx - touch.used;
        while (Math.abs(rest) >= step) {
          const s = Math.sign(rest);
          setDial(dialN - s);
          touch.used += s * step;
          touch.steps++;
          swiped = performance.now();
          rest = dx - touch.used;
        }
        if (!isCalm()) drag(clamp(rest * 0.32, -26, 26));
      }, { passive: true });
      const end = e => {
        if (!touch) return;
        const t = [...e.changedTouches].find(p => p.identifier === touch.id);
        const was = touch;
        touch = null;
        drag(0);
        if (!t || was.axis !== 'x' || e.type === 'touchcancel') return;
        const dx = t.clientX - was.x0;
        // Release speed over the last ~100 ms (px/ms).
        const now = e.timeStamp;
        const recent = was.track.filter(([time]) => now - time <= 100);
        const first = recent[0] || was.track[0];
        const v = (t.clientX - first[1]) / Math.max(16, now - first[0]);
        if (!was.steps && (Math.abs(dx) >= stepPx() * 0.45 || (Math.abs(dx) >= 24 && Math.abs(v) >= 0.3 && Math.sign(v) === Math.sign(dx)))) {
          setDial(dialN - Math.sign(dx));
        }
        swiped = performance.now();
      };
      hero.addEventListener('touchend', end, { passive: true });
      hero.addEventListener('touchcancel', end, { passive: true });
      // A swipe that began on a node or a dot does not also press it.
      hero.addEventListener('click', e => {
        if (performance.now() - swiped < 400 && e.target.closest?.('.node, .dial-dot')) { e.preventDefault(); e.stopPropagation(); }
      }, true);
    }

    /* Explore mode: the ring centred and interactive; Esc returns to the cover. Everything else on
     * the page is inert meanwhile, so keyboard focus stays with the ring, its card and the tools. */
    const outsideExplore = () => [hero.querySelector('.hero-copy'), $('contents'), $('interlude'), $('litany'), $('about')];
    const exploreHint = () => (coarseQuery.matches ? '드래그하여 회전 · 두 손가락으로 확대' : '드래그·화살표 키로 회전 · 휠로 확대');
    function enterExplore() {
      if (exploring || body.dataset.view !== 'home') return;
      exploring = true;
      window.scrollTo({ top: 0, behavior: 'instant' });
      root.classList.add('exploring');
      for (const el of outsideExplore()) if (el) el.inert = true;
      $('explore-open').setAttribute('aria-pressed', 'true');
      $('explore-bar').hidden = false;
      $('explore-hint').textContent = exploreHint();
      stage('cover', { layout: 'explore' });
      veil(0);
      universe.interactive(true);
      topbar.show();
      geometryStale = true;
      $('explore-hint').classList.remove('is-faded');
      setTimeout(() => $('explore-hint').classList.add('is-faded'), 5200);
      $('explore-zoom-in').focus({ preventScroll: true });
      announce(`우주 탐색. ${exploreHint()}. Esc를 누르면 표지로 돌아갑니다.`);
      // An open card stays: as a sheet it now rests above the tools; on wide screens it docks
      // clear of the ring once the ring has grown to the centre (and follows it meanwhile).
      fitSheet();
      updateAway();
      setTimeout(placeFallbackNodes, 50);
      setTimeout(placeFallbackNodes, 950);
      setTimeout(placeFallbackNodes, 2400);
    }
    function exitExplore({ focus = true } = {}) {
      if (!exploring) return;
      exploring = false;
      root.classList.remove('exploring');
      for (const el of outsideExplore()) if (el) el.inert = false;
      hero.querySelector('.hero-copy').inert = !!(selected && isTall());
      $('explore-open').setAttribute('aria-pressed', 'false');
      $('explore-bar').hidden = true;
      universe.interactive(false);
      geometryStale = true;
      dragging = false;
      fitSheet();
      if (body.dataset.view === 'home') stage('cover', { layout: coverLayout() });
      if (focus) {
        window.scrollTo({ top: 0, behavior: 'instant' });
        // (Without a live universe the explore button is hidden: the cover's title instead.)
        const back = $('explore-open');
        (back.getClientRects().length ? back : $('cover-title')).focus({ preventScroll: true });
      }
      // (The page did not scroll while exploring: the contents are measured again.)
      if (body.dataset.view === 'home') measureFloor();
      setTimeout(placeFallbackNodes, 50);
      setTimeout(placeFallbackNodes, 950);
    }

    function bindExplore() {
      $('explore-open').addEventListener('click', () => (exploring ? exitExplore() : enterExplore()));
      $('explore-close').addEventListener('click', () => exitExplore());
      $('explore-zoom-in').addEventListener('click', () => universe.zoom(1.12));
      $('explore-zoom-out').addEventListener('click', () => universe.zoom(1 / 1.12));
      $('explore-reset').addEventListener('click', () => universe.reset());
      $('explore-motion').addEventListener('click', () => {
        state.motion = state.motion === 'off' ? 'on' : 'off';
        store.save();
        applyMotion();
      });
      // Clicks on the canvas in explore mode select the nearest node (drags rotate instead).
      const canvas = $('universe-canvas');
      let down = null;
      canvas.addEventListener('pointerdown', e => { if (exploring) { down = { x: e.clientX, y: e.clientY }; dragging = true; } });
      canvas.addEventListener('pointercancel', () => { down = null; dragging = false; });
      canvas.addEventListener('pointerup', e => {
        dragging = false;
        if (!exploring || !down) return;
        const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
        down = null;
        if (moved > 6) { $('explore-hint').classList.add('is-faded'); return; }
        const n = universe.pick(e.clientX, e.clientY);
        if (n) select(n);
      });
    }

    function bindReadout() {
      $('readout-close').addEventListener('click', () => select(0, { focusNode: true }));
    }

    /* Contents: hover/focus (or, without hover, scroll position) previews a chapter. */
    function preview(n, immediate = false) {
      if (!n || n === previewN && !immediate) return;
      previewN = n;
      for (const row of $$('.toc-row')) row.classList.toggle('is-active', Number(row.dataset.chapter) === n);
      $('stage-num').textContent = pad(n);
      $('stage-name').textContent = chapterOf(n).figure;
      clearTimeout(previewTimer);
      const apply = () => { if (section === 'contents') stage('preview', { chapter: n, layout: 'contents' }); };
      if (immediate) apply(); else previewTimer = setTimeout(apply, 90);
    }
    function bindContents() {
      for (const link of $$('.toc-link')) {
        const n = Number(link.dataset.chapter);
        link.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { hoverUntil = performance.now() + 1500; preview(n); } });
        link.addEventListener('pointermove', e => { if (e.pointerType === 'mouse') hoverUntil = performance.now() + 1500; });
        link.addEventListener('focus', () => { hoverUntil = performance.now() + 1500; preview(n); });
      }
    }

    /* Portrait contents: the formation is composed in a band at the top of the screen (the
     * universe’s tall ‘contents’ composition, centred at .2 H). Each line of a row (number, title,
     * English, excerpt, length, rule) dissolves on its own as it reaches that band, so the list never
     * leaves a blank stretch under it; the band names the formation, and the preview stays with a
     * row while any of its lines is still legible below the band (a row hands over once its last
     * line has dissolved), so the lines under the caption always belong to the chapter it names. */
    const bandEdge = () => $('contents').querySelector('.stage-sticky').getBoundingClientRect().bottom || innerHeight * 0.4;
    function setVar(el, name, v) {
      const value = v.toFixed(2);
      const key = `_${name}`;
      if (el[key] !== value) { el[key] = value; el.style.setProperty(name, value); }
    }
    function setFlag(el, name, on) {
      const key = `_${name}`;
      if (el[key] !== on) { el[key] = on; el.classList.toggle(name, on); }
    }
    /** 1 while the line is clear of the band; 0 once its top reaches the band's lower edge. */
    const lineFade = (top, height, band) => 1 - smooth(band + clamp(height * 0.5, 16, 40), band, top);
    /** Below this a dissolving line no longer reads (nor takes taps); the preview leaves its row. */
    const LEGIBLE = 0.35;
    function updateRows(probe, follow = true) {
      const tall = isTall();
      if (!tall) clearRowFade();   // (turned from portrait to landscape)
      const band = tall ? bandEdge() : 0;
      let pick = 0, above = 0;
      for (const row of $$('.toc-row')) {
        const r = row.getBoundingClientRect();
        if (tall) {
          const link = row.firstElementChild;
          const parts = row._parts || (row._parts = $$('.toc-link > span', row));
          const fades = parts.map(part => {
            if (r.top > band + 60) return 1;           // the whole row is still below the band
            if (r.bottom < band - 2) return 0;         // …or already above it
            const b = part.getBoundingClientRect();
            return b.height ? lineFade(b.top, b.height, band) : 0;
          });
          // The number sits beside the title, lower in its line: the two leave as one line (no
          // number left alone under the caption once its title has gone).
          const num = parts.findIndex(part => part.classList.contains('toc-num'));
          const title = parts.findIndex(part => part.classList.contains('toc-title'));
          if (num >= 0 && title >= 0) fades[num] = Math.min(fades[num], fades[title]);
          let legible = 0;
          parts.forEach((part, i) => {
            setVar(part, '--f', fades[i]);
            setFlag(part, 'is-gone', fades[i] <= LEGIBLE);
            if (fades[i] > legible && !part.classList.contains('toc-bar')) legible = fades[i];
          });
          setVar(link, '--line', lineFade(r.bottom - 1, 1, band));
          // A row reaching into the band takes taps on its legible lines only: a tap on the band
          // (the formation, its caption) never opens an earlier chapter whose lines have dissolved.
          setFlag(link, 'is-parted', fades.some(f => f < 1));
          if (!pick && legible > LEGIBLE) pick = Number(row.dataset.chapter);
        } else if (!pick) {
          if (r.top <= probe && r.bottom > probe) pick = Number(row.dataset.chapter);
          else if (r.top <= probe) above = Number(row.dataset.chapter);
        }
      }
      // Wide screens: in the space under the last row (or above the first) no row holds the middle
      // of the screen; the formation and its caption name the row nearest it.
      if (!tall && !pick) pick = above || 1;
      if (tall) {
        const head = $('contents').querySelector('.section-head');
        head.classList.toggle('is-under', head.getBoundingClientRect().bottom < band + 8);
      }
      rowsFaded = tall;
      if (follow && pick && performance.now() > hoverUntil) preview(pick);
    }
    function clearRowFade() {
      if (!rowsFaded) return;
      rowsFaded = false;
      for (const el of $$('.toc-link, .toc-link > span')) {
        el.style.removeProperty('--f'); el.style.removeProperty('--line');
        el['_--f'] = el['_--line'] = undefined;
        setFlag(el, 'is-parted', false); setFlag(el, 'is-gone', false);
      }
      $('contents').querySelector('.section-head').classList.remove('is-under');
    }

    /* Portrait: the interlude's quote and its link rise through the same band after the rows, and
     * dissolve the same way, line by line (each clause; the link), so no words ever rest on the
     * ch.3 knot or on the litany's first formation, which takes the band as the section changes. */
    let interludeFaded = false;
    function fadeInterlude(on = true) {
      const lines = $$('#interlude .iq-line, #interlude .interlude-link');
      if (!on) {
        if (!interludeFaded) return;
        interludeFaded = false;
        for (const el of lines) { el.style.removeProperty('--f'); el['_--f'] = undefined; setFlag(el, 'is-gone', false); }
        return;
      }
      interludeFaded = true;
      const band = bandEdge();
      for (const el of lines) {
        const b = el.getBoundingClientRect();
        const f = b.top > band + 60 ? 1 : b.height ? lineFade(b.top, b.height, band) : 0;
        setVar(el, '--f', f);
        setFlag(el, 'is-gone', f <= LEGIBLE);
      }
    }

    /* The litany of bottlenecks, quoted verbatim from chapter 7. */
    function buildLitany() {
      const seventh = chapterOf(7);
      const index = seventh.paragraphs.findIndex(p => p.split('\n').length >= 3);
      const list = $('litany-lines');
      if (index < 0) { $('litany').hidden = true; return; }
      const lines = seventh.paragraphs[index].split('\n');
      const final = seventh.paragraphs[index + 1] || '';
      const keyed = [[/지능/, '01', 1], [/계산/, '02', 2], [/제조|손/, '03', 3], [/물질|에너지/, '04·05', 4], [/광속|거리/, '06', 6]];
      litanyChapters = [];
      list.innerHTML = lines.map((line, i) => {
        const match = keyed.find(([re]) => re.test(line));
        const label = match ? match[1] : '07';
        litanyChapters.push(match ? match[2] : 7);
        return `<li class="litany-line" style="--i:${i}"><span class="litany-num mono" aria-hidden="true">${label}</span><span class="litany-text">${richText(line)}</span></li>`;
      }).join('');
      $('litany-final').textContent = bindShort(final);
      litanyChapters.push(7);
      $('litany').style.setProperty('--steps', String(lines.length + 1));
    }

    /** Where the litany sits over the universe: portrait text below a top band; wide text left. */
    const litanyLayout = () => (isTall() ? 'contents' : 'chapter');
    function updateLitany(progress) {
      const steps = litanyChapters.length;
      const step = clamp(Math.floor(progress * steps * 1.08), 0, steps - 1);
      if (step === litanyStep) return;
      litanyStep = step;
      $$('.litany-line').forEach((li, i) => {
        li.classList.toggle('is-past', i < step);
        li.classList.toggle('is-current', i === step);
        li.classList.toggle('is-in', i <= step);
      });
      $('litany-final').classList.toggle('is-in', step >= steps - 1);
      if (section === 'litany') stage('preview', { chapter: litanyChapters[step] || 7, layout: litanyLayout() });
    }

    /** Which home section holds the middle of the viewport; drives the universe scene. */
    function onScroll(force = false) {
      if (exploring) return;
      const probe = innerHeight * 0.5;
      let next = 'hero';
      for (const [name, id] of [['contents', 'contents'], ['interlude', 'interlude'], ['litany', 'litany'], ['footer', 'about']]) {
        const rect = $(id).getBoundingClientRect();
        if (rect.top <= probe && rect.bottom > 0) next = name;
      }
      if (heroActive && $('home').getBoundingClientRect().bottom > probe) next = 'hero';
      // Litany progress (sticky stage inside a tall section).
      const litany = $('litany').getBoundingClientRect();
      // (Reduced motion sets the litany as a static list, about a screen tall (site.css): it is all
      // there at once, so the universe shows where it ends, however little the section scrolls.)
      const travel = litany.height - innerHeight;
      const litanyProgress = !isReduced() && travel > 1 ? clamp(-litany.top / travel) : 1;
      if (next === 'litany' || next === 'footer') updateLitany(next === 'footer' ? 1 : litanyProgress);
      // Portrait: rows that have risen into the band stay dissolved while they are still on screen
      // (the next section's formation takes the band), and only the contents follow a row.
      if (next === 'contents') updateRows(probe);
      else if (isTall() && $('contents').getBoundingClientRect().bottom > 0 && next !== 'hero') updateRows(probe, false);
      else clearRowFade();
      fadeInterlude(isTall() && next !== 'hero');
      setSection(next, force);
      measureFloor();
      fadeActions();
    }

    /** The cover's own text (node labels, the chapter card) gives way to the contents' first line
     * as it rises over the cover. */
    function measureFloor() {
      // (Its laid-out place, not its box: the heading rises in with a transform when it first
      // comes into view, and no scroll follows the end of that.)
      let top = 0;
      for (let el = $('contents').querySelector('.section-head'); el; el = el.offsetParent) top += el.offsetTop;
      const floor = top - scrollY;
      if (floor !== textFloor) {
        textFloor = floor;
        if (lastFrame) placeNodes(lastFrame);
      }
      updateAway();
    }
    /** Where the card's lower edge rests (its laid-out place: not the few pixels it rises by as it opens). */
    const cardBottom = readout => (readout.style.top && readout.style.top !== 'auto' ? parseFloat(readout.style.top) + readout.offsetHeight : readout.getBoundingClientRect().bottom);
    /** Wide screens: the chapter card floats over the page with no backing of its own. When the
     * contents' first line rises to it (the reader scrolls on instead of opening the chapter), it
     * fades away, and returns when they scroll back. (Sheets on small screens are opaque.) */
    function updateAway() {
      const readout = $('readout');
      const away = !readout.hidden && !exploring && !isCompactScreen() && cardBottom(readout) + 24 > textFloor;
      if (away === readout.classList.contains('is-away')) return;
      // (Keyboard focus never stays on a card that is fading out: it moves to the contents.)
      if (away && readout.contains(document.activeElement)) $('contents-title').focus({ preventScroll: true });
      readout.classList.toggle('is-away', away);
    }

    function setSection(next, force = false) {
      if (next === section && !force) return;
      section = next;
      body.dataset.section = next;
      const tall = isTall();
      // Text never lies on a lit formation: portrait screens compose the formation in a band
      // above the text (tall ‘contents’ composition); wide screens put it beside the text.
      if (next === 'hero') { stage('cover', { layout: coverLayout() }); veil(0); }
      // (Wide screens: the formation has its own column beside the rows, or, where the rows take the
      // full width, it is veiled behind them.)
      else if (next === 'contents') { stage('preview', { chapter: previewN, layout: 'contents' }); veil(tall ? 0.22 : $('contents').querySelector('.contents-stage').offsetWidth > 0 ? 0.08 : 0.8); }
      else if (next === 'interlude') { stage('preview', { chapter: 3, layout: 'contents' }); veil(tall ? 0.38 : 0.32); }
      else if (next === 'litany') { stage('preview', { chapter: litanyChapters[Math.max(0, litanyStep)] || 1, layout: litanyLayout() }); veil(tall ? 0.38 : 0.18); }
      else if (next === 'footer') { veil(tall ? 0.5 : 0.6); }
      // (The home sections keep their formations: nothing is scattered here.)
      scatter(0);
      // Phones: the dial's node is held at the front on the cover only.
      syncFocus();
    }

    function observeHero() {
      if (!('IntersectionObserver' in window)) return;
      new IntersectionObserver(([entry]) => {
        heroActive = entry.isIntersecting && entry.intersectionRatio > 0.28;
        body.classList.toggle('hero-active', heroActive);
        if (!heroActive && selected) {
          // The card leaves with the cover; keep keyboard focus on something visible.
          const inside = $('readout').contains(document.activeElement) || nodeLayer.contains(document.activeElement);
          select(0);
          if (inside) $('contents-title').focus({ preventScroll: true });
        }
        if (lastFrame) placeNodes(lastFrame);
        if (body.dataset.view === 'home') onScroll();
      }, { threshold: [0, 0.28, 0.5, 1] }).observe(hero);
    }

    function renderResume() {
      const pos = state.position;
      const button = $('resume');
      button.hidden = !pos;
      // (Phones: 이어서 읽기 takes the place of 읽기 시작 beside the dial's 이 장 읽기.)
      hero.querySelector('.hero-actions').classList.toggle('has-resume', !!pos);
      geometryStale = true;
      if (!pos) { fitActions(); return; }
      const c = chapterOf(pos.chapter);
      // (Where the row would wrap, the number alone names the chapter: fitActions.)
      button.innerHTML = `이어서 읽기<span class="resume-sep" aria-hidden="true"> — </span><span class="mono">${pad(pos.chapter)}<span class="resume-name">.</span></span><span class="resume-name"> ${escapeHTML(c.short)}</span>`;
      // The accessible name starts with the visible words (WCAG 2.5.3).
      button.setAttribute('aria-label', `이어서 읽기 — ${pad(pos.chapter)}. ${c.short}, ${pos.percent}%`);
      fitActions();
    }
    /** The cover's actions stay on one row: when they would wrap (a returning reader on a small
     * phone), 이어서 읽기 shows the chapter's number only and the row tightens (site.css .is-terse),
     * which keeps the ring's lower nodes free of a second row of buttons. */
    function fitActions() {
      const row = hero.querySelector('.hero-actions');
      row.classList.remove('is-terse');
      if (body.dataset.view !== 'home' || $('resume').hidden) return;
      const items = [...row.children].filter(el => !el.hidden && el.getClientRects().length);
      if (items.length < 2) return;
      // (Items on one row differ only by their centring: the primary button is a little taller.)
      if (items.some(el => Math.abs(el.offsetTop - items[0].offsetTop) > 16)) row.classList.add('is-terse');
    }

    function enter(target = 'home', restoreY = null, { focus = false } = {}) {
      body.dataset.view = 'home';
      $('home-view').hidden = false;
      $('reader-view').hidden = true;
      document.title = '가능성의 끝 — The End of Possibility';
      measureFooter();
      // The dial opens on the chapter of the saved place (or 01).
      dialN = state.position?.chapter || 1;
      dialSent = -1;
      sky.dial(dialOn ? dialN : null);
      renderResume();
      updateProgressViews();
      renderDial();
      document.dispatchEvent(new Event('novel:home'));   // audio: cover balance
      playIntro(hero.querySelector('.hero-copy'));
      // (The section the page was left in no longer applies: the cover's words must not fade in
      // from a section measured before the page went away. The first scroll frame sets it.)
      section = '';
      delete body.dataset.section;
      // Until the page has scrolled to its place, focus rests on the cover's title.
      if (focus) $('cover-title').focus({ preventScroll: true });
      requestAnimationFrame(() => {
        if (restoreY !== null) window.scrollTo({ top: restoreY, behavior: 'instant' });
        else scrollToTarget(target, 'instant');
        onScroll();
        if (!section) setSection('hero', true);
        // (Back at a later section, the cover's entrance has nothing to show: its words stay away
        // rather than rising in only to fade.)
        if (section !== 'hero') hero.querySelector('.hero-copy').classList.remove('intro');
        placeFallbackNodes();
        if (focus) focusTarget(restoreY !== null ? 'auto' : target);
      });
    }

    /** Scroll to a home destination. Portrait and short screens rest with the contents' top at the
     * top of the screen (nothing of the cover above it): its padding keeps the heading and the first
     * row clear of the bar and, in portrait, below the formation's band. */
    function scrollToTarget(target, behavior = 'instant') {
      const el = target === 'contents' || target === 'about' ? $(target) : null;
      if (!el) window.scrollTo({ top: 0, behavior });
      else if (target === 'contents' && (isTall() || innerHeight < 520)) window.scrollTo({ top: el.getBoundingClientRect().top + scrollY, behavior });
      else el.scrollIntoView({ behavior, block: 'start' });
    }
    /** Keyboard focus follows a route within the home page (without scrolling): the next Tab
     * continues from the destination. 'auto': the section in view. */
    function focusTarget(target) {
      const el = target === 'contents' ? $('contents-title')
        : target === 'about' ? $('about')
        : target === 'auto' ? skipTarget() || $('cover-title')
        : $('cover-title');
      el?.focus({ preventScroll: true });
    }

    /** The litany's stage keeps its words clear of the footer that slides over its end (site.css). */
    function measureFooter() {
      const h = $('about').offsetHeight;
      if (h) root.style.setProperty('--foot-h', `${h}px`);
    }

    /** Skip-link target on the home page: the heading of the section in view, or the section itself
     * (the quote, the litany, the footer; at the very end of the page, the footer): the next Tab
     * continues from there, not from the top of the page. */
    function skipTarget() {
      if (section === 'hero' || !section) return $('cover-title');
      if (section === 'contents') return $('contents-title');
      if (section === 'footer' || scrollY + innerHeight >= document.documentElement.scrollHeight - 2) return $('about');
      if (section === 'interlude' || section === 'litany') return $(section);
      return null;
    }

    function init() {
      for (const el of $$('.section-head, .toc-row')) el.setAttribute('data-reveal', '');
      $$('.toc-row').forEach((row, i) => row.style.setProperty('--row', String(i % 3)));
      buildNodes();
      buildDial();
      updateMode(true);
      renderDial();
      buildLitany();
      bindExplore();
      bindReadout();
      bindContents();
      observeHero();
      $('resume').addEventListener('click', () => {
        if (state.position) router.go(`#chapter-${state.position.chapter}`, { resume: { ...state.position } });
      });
      preview(1, true);
    }

    return {
      init, enter, onScroll, setSection, placeNodes, placeFallbackNodes, select, renderResume,
      exitExplore, enterExplore, skipTarget, scrollToTarget, focusTarget, coverLayout, updateMode,
      /** The page is leaving the cover: no node stays pointed at or focused, and the dial lets the
       * ring go. */
      unlight() {
        pointed = 0; keyed = 0;
        if (dialSent > 0) { dialSent = 0; universe.focusNode(0); }
      },
      /** A new universe (mounted, or its context restored): tell it the dial's node again. */
      refocus() { dialSent = -1; syncFocus(); },
      /** Progress changed (another tab): the dial's chapter line. */
      renderDial() { renderDial(); },
      /** Resize, fonts or copy changed: measure the label boxes and obstacles again. */
      invalidate() {
        geometryStale = true;
        dialHeights = null;
        fitSheet();
        if (body.dataset.view !== 'home') return;
        fitActions();
        measureFooter();
        // Without a live universe no frame follows: place the fallback nodes again (once a frame).
        if (!universe.live && !fallbackQueued) {
          fallbackQueued = true;
          requestAnimationFrame(() => { fallbackQueued = false; placeFallbackNodes(); });
        }
      },
      get exploring() { return exploring; },
      get section() { return section; },
      get selected() { return selected; },
      /** The phone dial: whether it is in use, and the chapter at the front. */
      get dial() { return { on: dialOn, chapter: dialN, held: Math.max(0, dialSent) }; },
    };
  })();

  /* ─────────────────────────────── 11. Reader ─────────────────────────────── */

  /** Does opening chapter n at this saved place land inside its text (rather than on its cover)? */
  const intoText = (n, resume, atEnd = false) => !atEnd && !!resume && resume.chapter === n && (resume.paragraph > 0 || resume.percent > 0);

  /* While reading, the universe shows no formation: the cover's formation scatters into a starfield
   * as the text arrives, and gathers again at either end (reader.onScroll). Above the text the
   * starfield keeps its own calm presence (no veil); the text column has its own scrim (site.css). */
  const READING_VEIL = 0;

  const reader = (() => {
    let current = 0;
    let paragraphEls = [];
    // (`chapter`: the chapter these measures belong to; 0 until the open chapter is measured.)
    const layout = { chapter: 0, coverH: 0, proseTop: 0, proseH: 1, endTop: 0, offsets: [], heights: [] };
    let restore = null;            // {paragraph, until} while a saved position is being held
    let lastPlace = null;          // the reading place at the last scroll frame (for reflows)
    let reflowing = false;         // the column is being re-laid out: do not re-read the place
    let quiet = false;             // a programmatic jump (legacy #ending): record nothing yet
    let pinEnd = false;            // …and keep resting on the last screen while fonts settle
    let saveTimer = 0;
    let lastPercent = -1;
    let phase = '';
    let staged = '';               // what the universe was given: 'chapter' (this formation) | 'end' (the next; ch.8: the seed) | 'text' (an engine without scatter)
    let recorded = null;           // the point in the text this tab last recorded (another tab may record its own)
    let focusScrollUntil = 0;      // a scroll that only brings a focused control into view is not reading

    /** The reading line: the paragraph whose top has passed it is the one being read. */
    const anchorOffset = () => Math.max(isMobile() ? 72 : 96, placeOffset());
    /** Where a paragraph rests when the reader is taken to it (resume, bookmark): just under the top
     * bar, whatever its height (short landscape screens, a notch), so the paragraph before it is
     * hidden behind the bar rather than cut in half under it (paragraphs are at least 16 px apart). */
    const placeOffset = () => topbar.height() + 16;

    /* Portrait: the cover's words stay below the formation (the tall 'chapter' composition is
     * centred at .34 H with a radius of min(.45 W, .24 H), src/universe/config.js; the formations
     * reach about .62 r below their centre). A long excerpt on a short phone would carry the
     * kicker and the title up into it: the copy then tightens and sets the English name aside. */
    function fitCover() {
      const cover = $('chapter-cover');
      const copy = cover.querySelector('.cc-copy');
      cover.classList.remove('is-snug');
      if (!isTall()) return;
      const band = innerHeight * 0.34 + 0.62 * Math.min(innerWidth * 0.45, innerHeight * 0.24) + 14;
      // (Layout offsets, not boxes: the copy may still be rising in.)
      if (copy.offsetTop + $('cc-kicker').offsetTop < band) cover.classList.add('is-snug');
    }

    function measure() {
      if (!current) return;
      fitCover();
      const y = scrollY;
      const rect = id => $(id).getBoundingClientRect();
      const cover = rect('chapter-cover'), prose = rect('prose'), end = rect('chapter-end');
      layout.chapter = current;
      layout.coverH = cover.height;
      layout.proseTop = prose.top + y;
      layout.proseH = Math.max(1, prose.height);
      layout.endTop = end.top + y;
      // Where the end's own content begins (the next chapter's card), whatever padding precedes it.
      const card = current < LAST ? $('chapter-end').querySelector('.next-card') : null;
      layout.cardTop = card ? card.getBoundingClientRect().top + y : 0;
      layout.offsets = paragraphEls.map(el => layout.proseTop + el.offsetTop);
      // Each paragraph's slot: from its top to the next one's (its margin included), so a reading
      // line between two paragraphs keeps its exact point too.
      layout.heights = paragraphEls.map((el, i) => Math.max(1, i + 1 < paragraphEls.length ? layout.offsets[i + 1] - layout.offsets[i] : el.offsetHeight));
      layout.maxY = Math.max(0, document.documentElement.scrollHeight - innerHeight);
      const final = current === LAST ? $('chapter-end').querySelector('.end-final') : null;
      layout.finalTop = final ? final.getBoundingClientRect().top + y : 0;
      pinSeed();
    }

    /* Ch.8 ends on exactly one light: the universe's seed. The trigger draws no light of its own; its
     * hit area (the empty .seed square) rests exactly on the seed. The engine reports the seed's
     * screen point (`anchor`, canvas px) with its frames; the trigger scrolls with the page and
     * arrives there when the page rests at its end, the screen the seed waits for. Without an anchor
     * (no WebGL, an older engine) the stylesheet's own placement stands. */
    let seedAnchor = null;     // {x, y} of the 'ending-ready' seed, for the current viewport size
    let seedPinned = '';
    /** The seed's point on screen as fractions of the viewport, or null when the universe has not
     * reported one for this window size. */
    function seedOrigin() {
      const a = universe.live && seedAnchor && seedAnchor.w === innerWidth && seedAnchor.h === innerHeight ? seedAnchor : null;
      return a ? [clamp(a.x / innerWidth), clamp(a.y / innerHeight)] : null;
    }
    /* Pointing at the trigger or focusing it from the keyboard: the seed itself answers
     * (Universe.ending.arm). A tap or a click opens the ending at once; the focus it leaves behind
     * arms nothing. */
    const arming = { hover: false, focus: false };
    // (While the film runs the seed is the film's: the blur and pointer-leave that the opening
    // dialog causes change nothing there. Closing it re-arms from the trigger's state: rearm.)
    function armSeed() { if (!root.classList.contains('ending-open')) universe.ending.arm(current === LAST && (arming.hover || arming.focus)); }
    function bindTrigger(trigger) {
      trigger.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { arming.hover = true; armSeed(); } });
      trigger.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') { arming.hover = false; armSeed(); } });
      trigger.addEventListener('focus', () => { arming.focus = focusVisible(trigger); armSeed(); });
      trigger.addEventListener('blur', () => { arming.focus = false; armSeed(); });
    }
    /** After the film (back on the seed): the seed is armed again only if the trigger still holds
     * the pointer or keyboard focus. */
    function rearm() {
      const trigger = $('seed-trigger');
      arming.hover = !!trigger && hoverQuery.matches && trigger.matches(':hover');
      arming.focus = !!trigger && document.activeElement === trigger && focusVisible(trigger);
      armSeed();
    }
    function disarm() { arming.hover = arming.focus = false; armSeed(); }
    function placeSeed(frame) {
      const a = frame && frame.anchor;
      if (!a || frame.scene !== 'ending-ready' || root.classList.contains('ending-open')) return;
      if (a.visible === false || !Number.isFinite(a.x) || !Number.isFinite(a.y)) return;
      if (seedAnchor && Math.abs(seedAnchor.x - a.x) < 0.25 && Math.abs(seedAnchor.y - a.y) < 0.25) return;
      seedAnchor = { x: a.x, y: a.y, w: innerWidth, h: innerHeight };
      pinSeed();
    }
    function pinSeed() {
      const final = current === LAST ? $('chapter-end').querySelector('.end-final') : null;
      if (!final) return;
      // A seed measured for another window size (or no live universe) no longer applies.
      const a = universe.live && seedAnchor && seedAnchor.w === innerWidth && seedAnchor.h === innerHeight ? seedAnchor : null;
      if (!a) {
        if (seedPinned) { seedPinned = ''; final.classList.remove('is-anchored'); final.style.removeProperty('--seed-x'); final.style.removeProperty('--seed-y'); }
        return;
      }
      // The section's top on the last screen of the page, where the seed is met.
      const restTop = layout.finalTop - layout.maxY;
      const gutter = 32;
      const x = clamp(a.x, gutter, innerWidth - gutter);
      const y = a.y - restTop;
      const key = `${x.toFixed(1)},${y.toFixed(1)}`;
      if (key === seedPinned) return;
      // The first placement glides from the stylesheet's position; later ones follow the seed.
      if (!seedPinned && !isCalm()) {
        final.classList.add('is-anchoring');
        setTimeout(() => final.classList.remove('is-anchoring'), 700);
      }
      seedPinned = key;
      final.style.setProperty('--seed-x', `${x.toFixed(1)}px`);
      final.style.setProperty('--seed-y', `${y.toFixed(1)}px`);
      final.classList.add('is-anchored');
    }

    function paragraphAt(y) {
      const target = y + anchorOffset() + 4;
      const offsets = layout.offsets;
      let lo = 0, hi = offsets.length - 1, found = 0;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (offsets[mid] <= target) { found = mid; lo = mid + 1; } else hi = mid - 1;
      }
      return found;
    }
    const currentParagraph = () => (current ? paragraphAt(scrollY) : -1);
    /** Where the reading line is: a paragraph and how far into it (0…1; below 0 above the first). Survives reflow. */
    function capture() {
      if (!current || !layout.offsets.length) return null;
      const line = scrollY + anchorOffset() + 4;
      const index = paragraphAt(scrollY);
      const top = layout.offsets[index];
      // Heights as measured with the offsets (a reflow may already have changed the live ones).
      const height = layout.heights[index] || 1;
      // (Above the first paragraph, in the space under the chapter cover, the fraction runs below 0:
      // a reflow returns the line there, not onto the first line.)
      const raw = (line - top) / height;
      const place = { index, fraction: index === 0 ? Math.min(1, raw) : clamp(raw), atTop: scrollY < layout.proseTop - innerHeight * 0.5, y: scrollY };
      // Past the last line (the chapter's end): the place is kept relative to the end itself.
      if (line > layout.proseTop + layout.proseH) place.end = scrollY - layout.endTop;
      return place;
    }
    /** `strict`: only if nothing else scrolled the page since the place was captured. */
    function restorePlace(place, strict = false) {
      if (!place || !current || place.atTop) return;
      if (strict && Math.abs(scrollY - place.y) > 1) return;
      if (Number.isFinite(place.end)) {
        window.scrollTo({ top: clamp(layout.endTop + place.end, 0, layout.maxY), behavior: 'instant' });
        return;
      }
      const top = layout.offsets[place.index];
      if (top === undefined) return;
      const height = layout.heights[place.index] || paragraphEls[place.index].offsetHeight;
      window.scrollTo({ top: Math.max(0, top + place.fraction * height - anchorOffset() - 4), behavior: 'instant' });
    }
    function scrollToParagraph(index) {
      const top = layout.offsets[index];
      if (top === undefined) return;
      window.scrollTo({ top: Math.max(0, top - placeOffset()), behavior: 'instant' });
    }

    function progressAt(y) {
      return clamp((y + innerHeight * 0.5 - layout.proseTop) / layout.proseH);
    }

    /** The reading line as a point in the text (paragraph + how far into it), the way a reflow
     * keeps it (capture → restorePlace). The chapter's cover, which a reflow leaves alone, is one
     * point: looking around on it is not reading. */
    function textPoint() {
      const place = capture();
      return { chapter: current, at: !place || place.atTop ? -Infinity : place.index + place.fraction };
    }
    /** Has the reading line left the point last recorded, by more than the pixel or so a reflow's
     * restore can round to? (One coordinate, so a line restored onto a paragraph boundary is not
     * a move either.) */
    function moved(point) {
      if (!recorded || recorded.chapter !== point.chapter) return true;
      if (!Number.isFinite(point.at) || !Number.isFinite(recorded.at)) return point.at !== recorded.at;
      const slot = layout.heights[clamp(Math.floor(Math.min(point.at, recorded.at)), 0, layout.heights.length - 1)] || 1;
      return Math.abs(point.at - recorded.at) * slot > 3;
    }

    function savePosition(now = false) {
      if (!current || restore || quiet || reflowing) return;
      const run = () => {
        saveTimer = 0;
        // (Nothing is known of a chapter not measured yet: a tab closed or reloaded in the frames
        // between opening a chapter and measuring it records nothing, rather than 100 %.)
        if (!current || quiet || layout.chapter !== current) return;
        const percent = Math.round(progressAt(scrollY) * 100);
        const paragraph = paragraphAt(scrollY);
        state.progress[current] = Math.max(state.progress[current] || 0, percent);
        if (percent >= 98 && !state.completed.includes(current)) state.completed.push(current);
        // Looking at a chapter’s cover does not move the place to resume from; reading does. A tab
        // whose reader has not moved since it last recorded its place leaves the place alone (the
        // reader may have read on in another tab meanwhile). Moving is measured in the text, not in
        // percent: a reflow (a resized window, type settings arriving from another tab) keeps the
        // reading line at the same point of the same paragraph while the percent shifts.
        const entered = paragraph > 0 || percent > 0 || phase === 'text' || state.position?.chapter === current;
        const point = textPoint();
        if (entered && moved(point)) { state.position = { chapter: current, paragraph, percent }; recorded = point; }
        store.save();
        updateProgressViews();
      };
      clearTimeout(saveTimer);
      saveTimer = 0;
      if (now) run(); else saveTimer = setTimeout(run, 260);
    }

    function render(n) {
      const c = chapterOf(n);
      clearTimeout(saveTimer);
      saveTimer = 0;
      current = n;
      lastPlace = null;
      restore = null;
      reflowing = false;
      body.dataset.view = 'reader';
      body.dataset.chapter = String(n);
      $('home-view').hidden = true;
      $('reader-view').hidden = false;
      document.title = `${pad(n)}. ${c.short} — 가능성의 끝`;

      $('cc-kicker').textContent = c.kicker;
      $('reader-title').textContent = c.short;
      $('reader-title').classList.toggle('is-long', c.short.length > 6);
      $('cc-en').textContent = c.english;
      $('cc-deck').textContent = bindShort(c.deck);
      // The kicker already says which bottleneck this is; the meta only gives the length.
      $('cc-meta').textContent = `약 ${c.minutes}분`;
      $('topbar-context').innerHTML = `<span class="mono">${pad(n)}</span>${escapeHTML(c.short)}`;

      $('prose').innerHTML = renderProse(c);
      paragraphEls = $$('#prose > [data-paragraph]');
      layout.chapter = 0;
      layout.offsets = [];
      layout.heights = [];
      renderEnd(n);
      for (const tick of $$('.rail-tick')) {
        const on = Number(tick.dataset.chapter) === n;
        if (on) tick.setAttribute('aria-current', 'page'); else tick.removeAttribute('aria-current');
      }
      updateBookmark();
      $('bookmark-toggle').hidden = false;
      lastPercent = -1;
      phase = '';
      staged = '';
      disarm();
      // The tab starts on the chapter's cover: only a move from there is this tab's to record (an
      // idle tab never writes the cover over a place read on in another tab).
      recorded = { chapter: n, at: -Infinity };
      reveal.observe($('reader-view'));
    }

    function renderEnd(n) {
      const end = $('chapter-end');
      if (n < LAST) {
        const next = chapterOf(n + 1);
        end.innerHTML = `<div class="end-inner">
          <a class="next-card" href="#chapter-${n + 1}" data-reveal>
            <span class="next-kicker">다음 장<span class="mono">${pad(n + 1)}</span></span>
            <span class="next-title">${escapeHTML(next.short)}</span>
            <span class="next-en mono" lang="en">${escapeHTML(next.english)}</span>
            <span class="next-deck">${escapeHTML(bindShort(next.deck))}</span>
            <span class="next-meta meta">약 ${next.minutes}분</span>
          </a>
          <p class="end-links">${n > 1 ? `<a href="#chapter-${n - 1}">이전 장</a>` : ''}<a href="#contents">목차</a><button type="button" id="copy-link">링크 복사</button></p>
        </div>`;
      } else {
        // (.seed is the empty square over the universe's seed: the trigger's hit area covers the one
        // light without drawing a second.)
        end.innerHTML = `<div class="end-final">
          <button type="button" class="seed-trigger" id="seed-trigger" data-ending-open aria-haspopup="dialog">
            <span class="seed" aria-hidden="true"></span>
            <span class="seed-line">단&nbsp;하나의 가능성.</span>
          </button>
          <p class="end-links"><a href="#chapter-${n - 1}">이전 장</a><a href="#contents">목차</a><button type="button" id="copy-link">링크 복사</button></p>
        </div>`;
        bindTrigger($('seed-trigger'));
      }
      $('copy-link')?.addEventListener('click', copyLink);
      seedPinned = '';
    }

    async function copyLink() {
      if (!/^https?:$/.test(location.protocol)) { toast('웹 주소로 열었을 때 이 장의 링크를 복사할 수 있습니다.'); return; }
      try { await navigator.clipboard.writeText(location.href); toast('이 장의 링크를 복사했습니다.'); }
      catch { toast('복사할 수 없습니다. 주소 표시줄의 주소를 사용해 주세요.'); }
    }

    /** One stable label (책갈피) with a pressed state; the filled mark shows it. */
    function updateBookmark() {
      const on = !!state.bookmark && state.bookmark.chapter === current;
      $('bookmark-toggle').setAttribute('aria-pressed', String(on));
    }
    function toggleBookmark() {
      if (!current) return;
      if (state.bookmark?.chapter === current) {
        state.bookmark = null;
        toast('책갈피를 해제했습니다.');
      } else {
        state.bookmark = { chapter: current, paragraph: paragraphAt(scrollY), percent: Math.round(progressAt(scrollY) * 100) };
        toast(store.available ? '이 위치에 책갈피를 꽂았습니다.' : '책갈피를 꽂았습니다. 이 브라우저에서는 저장되지 않습니다.');
      }
      store.save();
      updateBookmark();
    }

    /** Keyboard focus rests on a paragraph without moving the page (no outline: site.css). */
    function focusParagraph(index) {
      const el = paragraphEls[index];
      if (!el) return;
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    }

    /** Show the chapter; `resume` = {paragraph, percent} returns to a saved place in the text;
     * `atEnd` rests at the chapter’s last screen (legacy #ending) without recording it as read.
     * `focus`: keyboard focus moves to the chapter's title, or to the paragraph it resumes at (so
     * a screen reader starts there, and the next Tab continues from there, not from the cover). */
    function open(n, resume, { atEnd = false, focus = false } = {}) {
      // A save still waiting for the chapter on its way out is made now, for that chapter.
      if (saveTimer) savePosition(true);
      quiet = atEnd;
      pinEnd = atEnd;
      if (motionHold) holdMotion(false);   // a cover node may have kept focus while the page swapped
      render(n);
      document.dispatchEvent(new CustomEvent('novel:chapter', { detail: n }));   // audio: reader balance
      playIntro($('chapter-cover').querySelector('.cc-copy'));
      window.scrollTo({ top: 0, behavior: 'instant' });
      // A reader returning into the middle of the text (resume, bookmark, ←/→ onto a saved place)
      // finds the stars already scattered: the formation is never seen gathering only to scatter.
      stage('chapter', { chapter: n, layout: 'chapter' });
      scatter(intoText(n, resume, atEnd) ? 1 : 0);
      veil(0);
      if (focus) $('reader-title').focus({ preventScroll: true });
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (current !== n) return;
        measure();
        if (atEnd) {
          window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' });
          reveal.flushAbove(innerHeight);
        } else if (resume && resume.chapter === n && (resume.paragraph > 0 || resume.percent > 0)) {
          // (A place in the first paragraph counts too, once the reader had scrolled into the text.)
          restore = { paragraph: resume.paragraph, until: performance.now() + 2500 };
          scrollToParagraph(resume.paragraph);
          reveal.flushAbove(innerHeight * 0.4);
          if (focus && $('reader-title') === document.activeElement) focusParagraph(resume.paragraph);
          // Fonts may still be arriving: hold the paragraph until they settle or the reader scrolls.
          // From here on the place is the reader's: remember it for any later reflow.
          const release = () => { restore = null; lastPlace = capture(); savePosition(true); };
          document.fonts?.ready.then(() => {
            if (!restore || current !== n) return;
            measure();
            scrollToParagraph(restore.paragraph);
            setTimeout(release, 120);
          });
          setTimeout(() => { if (restore) release(); }, 2600);
        }
        scrollEngine.update(true);
      }));
    }

    function cancelRestore() { if (restore) { restore = null; lastPlace = capture(); savePosition(); } }

    /** Same chapter, another saved place (contents sheet): move there without re-rendering.
     * Keyboard focus follows to that paragraph once `focusAfter` (the sheet closing) settles. */
    function jumpTo(place, { focusAfter = null } = {}) {
      if (!current || !place || place.chapter !== current) return;
      restore = null;
      quiet = false;
      pinEnd = false;
      measure();
      scrollToParagraph(place.paragraph);
      reveal.flushAbove(innerHeight * 0.4);
      scrollEngine.update(true);
      if (focusAfter) {
        const n = current;
        Promise.resolve(focusAfter).then(() => { if (current === n && !document.querySelector('dialog[open]')) focusParagraph(place.paragraph); });
      }
    }

    /** Called on every scroll frame while reading. */
    function onScroll(y, force) {
      // (Nothing is known of a chapter not measured yet: its cover's staging stands meanwhile.)
      if (!current || layout.chapter !== current) return;
      const vh = innerHeight;
      const p = progressAt(y);
      const percent = Math.round(p * 100);
      $('progress-line').style.transform = `scaleX(${p.toFixed(4)})`;
      if (percent !== lastPercent || force) {
        lastPercent = percent;
        $('rail').style.setProperty('--live', p.toFixed(3));
      }
      universe.reading(p);

      // Where are we: on the chapter cover, in the text, or at the chapter end? The next formation
      // flows in with the card that names it: the hand-over begins as the card enters the screen and
      // has taken over by the time the card's top is halfway up, so the formation that gathers behind
      // the card's title is always the one it names. Ch.8's seed begins once the last lines have
      // left the screen.
      const coverPart = smooth(layout.coverH * 0.12, layout.coverH * 0.82, y);
      // (On a phone the card may not reach the middle of the screen: the hand-over is then complete
      // where the page ends.)
      const cardIn = layout.cardTop - vh * 0.94;
      const endPart = layout.cardTop
        ? smooth(cardIn, Math.max(cardIn + 1, Math.min(layout.cardTop - vh * 0.5, layout.maxY)), y)
        : smooth(layout.endTop - vh * 0.55, layout.endTop, y);
      const handover = layout.cardTop ? 0.06 : 0.5;
      // (A little hysteresis, so resting right at the threshold never swaps formations back and forth.)
      const handed = staged === 'end' ? endPart > handover * 0.5 : endPart > handover;
      // The scattered stars stay in the cover's composition, so scrolling back gathers the formation
      // where the cover shows it. (An engine without scatter keeps v9.0's 'reading' composition.)
      const scatters = universe.scatters;
      const nextStage = handed ? 'end' : coverPart >= 0.5 && !scatters ? 'text' : 'chapter';
      if (nextStage !== staged || force) {
        staged = nextStage;
        if (staged === 'end') {
          if (current < LAST) stage('preview', { chapter: current + 1, layout: 'chapter' });
          // The seed waits at the centre of the screen, under the trigger.
          else stage('ending-ready', { layout: 'reading' });
        } else stage('chapter', { chapter: current, layout: staged === 'text' ? 'reading' : 'chapter' });
      }
      const nextPhase = endPart > 0.5 ? 'end' : coverPart < 0.5 ? 'cover' : 'text';
      if (nextPhase !== phase || force) {
        phase = nextPhase;
        body.dataset.phase = phase;
      }
      // Reading = scattered stars. On the cover the formation stands (0); as the text arrives its
      // particles scatter into a sparse starfield, complete by the time the first paragraph's top has
      // risen to 60% of the screen (1), and they stay scattered through the text. At the chapter end
      // they gather again, in step with the hand-over: the next chapter's formation (ch.8: the seed)
      // is staged while they are still scattered, so they gather into it, complete as it takes over.
      // Every value follows the scroll position alone, so scrolling back reverses it all (the cover
      // gathers its formation again), and a jump into the text lands scattered.
      const from = layout.coverH * 0.1;
      const into = smooth(from, Math.max(from + vh * 0.2, layout.proseTop - vh * 0.6), y);
      const gathered = clamp((endPart - handover) / (1 - handover));
      scatter(Math.min(into, 1 - gathered));
      veil(lerp((scatters ? READING_VEIL : 0.74) * coverPart, 0.1, gathered));
      body.classList.toggle('in-text', coverPart > 0.6 && endPart < 0.5);

      if (restore && performance.now() > restore.until) cancelRestore();
      if (!restore && !reflowing) {
        if (performance.now() >= focusScrollUntil) savePosition();
        lastPlace = capture();
      }
    }

    /** The column is about to be laid out again (the window width or the type changed): keep the
     * place from before and ignore positions the browser clamps or adjusts meanwhile. */
    function holdReflow() { if (current) reflowing = true; }
    /** Has the text moved on the page since it was measured (e.g. the cover's height followed the
     * window's)? A phone's address bar never moves it (svh), so its momentum scroll is left alone. */
    function textMoved() {
      if (!current || !layout.offsets.length) return false;
      const moved = (id, at) => Math.abs($(id).getBoundingClientRect().top + scrollY - at) > 0.5;
      return moved('prose', layout.proseTop) || moved('chapter-end', layout.endTop);
    }
    /** After a reflow (resize, rotation, fonts arriving, type settings): measure again and put
     * the reading line back in the same paragraph, at the same point inside it. */
    function reanchor(place = lastPlace) {
      if (!current) { reflowing = false; return; }
      if (restore) { measure(); scrollToParagraph(restore.paragraph); reflowing = false; return; }
      if (quiet && pinEnd) { measure(); window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }); reflowing = false; return; }
      measure();
      restorePlace(place);
      reflowing = false;
      lastPlace = place && !place.atTop ? { ...place, y: scrollY } : capture();
    }

    /** Skip link while reading: focus the text at the current place, without moving it. */
    function focusReadingPlace() {
      if (!current) return;
      if (phase === 'cover' || !paragraphEls.length) { $('reader-title').focus({ preventScroll: true }); return; }
      if (phase === 'end') { $('chapter-end').querySelector('a, button')?.focus({ preventScroll: true }); return; }
      focusParagraph(paragraphAt(scrollY));
    }

    function close() {
      if (current) savePosition(true);
      disarm();
      current = 0;
      restore = null;
      quiet = false;
      reflowing = false;
      body.classList.remove('in-text');
      delete body.dataset.phase;
      $('bookmark-toggle').hidden = true;
      $('progress-line').style.transform = 'scaleX(0)';
    }

    function bind() {
      $('bookmark-toggle').addEventListener('click', e => {
        toggleBookmark();
        // Pressed with a pointer, the button hands focus back to the text: the next Space reads on
        // instead of pressing 책갈피 again. (From the keyboard focus stays on the button.)
        if (e.detail > 0) focusReadingPlace();
      });
      $('cc-cue').addEventListener('click', () => {
        const top = layout.proseTop - anchorOffset() - 24;
        window.scrollTo({ top, behavior: isReduced() ? 'instant' : 'smooth' });
        // Focus moves into the text with the page (a screen reader starts there; Space reads on
        // from it instead of pressing the cue again, which would return to the first line).
        focusParagraph(0);
        focusScrollUntil = 0;   // (unlike a scroll that only follows focus, this one is the reader's)
      });
      // Any deliberate scroll gesture ends a held restore, and starts recording after a jump.
      for (const type of ['wheel', 'touchstart', 'keydown']) addEventListener(type, () => { if (restore) cancelRestore(); }, { passive: true });
      for (const type of ['wheel', 'touchmove', 'keydown']) {
        addEventListener(type, e => { if (quiet && !(e.type === 'keydown' && /^(Shift|Control|Alt|Meta|Tab)$/.test(e.key))) { quiet = false; pinEnd = false; } }, { passive: true });
      }
      // Any change of the column’s size (width, rotation, a late webfont, type settings), of the
      // page's padding or of the chapter cover above it (window height) re-anchors in the same
      // frame, before a clamped scroll position can be read as the reader’s place.
      if ('ResizeObserver' in window) {
        const seen = new Map();
        const observer = new ResizeObserver(entries => {
          let changed = false;
          for (const entry of entries) {
            const box = entry.borderBoxSize?.[0];
            const size = box ? `${Math.round(box.inlineSize)}x${Math.round(box.blockSize)}` : `${Math.round(entry.contentRect.width)}x${Math.round(entry.contentRect.height)}`;
            if (seen.get(entry.target) !== size) { seen.set(entry.target, size); changed = true; }
          }
          if (changed && current) reanchor();
        });
        for (const id of ['chapter-cover', 'surface', 'prose']) observer.observe($(id), { box: 'border-box' });
      }
      window.addEventListener('pagehide', () => savePosition(true));
      document.addEventListener('visibilitychange', () => { if (document.hidden) savePosition(true); });
      // A scroll that only brings a newly focused control into view (Tab from the text to the next
      // chapter's card, or back to the cover's cue) is not reading: the place recorded just before
      // it stands. (focusin arrives before the browser scrolls the control into view.)
      document.addEventListener('focusin', () => {
        if (!current) return;
        if (saveTimer) savePosition(true);
        focusScrollUntil = performance.now() + 400;
      }, true);
    }

    return {
      bind, open, close, measure, onScroll, currentParagraph, scrollToParagraph, savePosition, capture, restorePlace, reanchor,
      holdReflow, textMoved, jumpTo, focusReadingPlace, placeSeed, seedOrigin, rearm, updateBookmark,
      get active() { return current > 0; },
      get chapter() { return current; },
      /** A reflow is being held (its place restored by the next reanchor). */
      get held() { return reflowing; },
      /** The reader rests on the last screen of the chapter. */
      get atEnd() { return current > 0 && scrollY >= document.documentElement.scrollHeight - innerHeight - 2; },
    };
  })();

  /** Reading state labels shared by the contents section, the contents sheet and the rail. */
  function progressLabel(n) {
    if (state.completed.includes(n)) return '읽음';
    const p = state.progress[n] || 0;
    return p > 0 ? `${p}%` : '';
  }
  function updateProgressViews() {
    for (const c of chapters) {
      const n = c.number;
      const done = state.completed.includes(n);
      const p = done ? 100 : state.progress[n] || 0;
      for (const bar of $$(`[data-bar-for="${n}"]`)) bar.style.transform = `scaleX(${(p / 100).toFixed(3)})`;
      for (const label of $$(`[data-state-for="${n}"]`)) label.textContent = progressLabel(n);
      for (const row of $$(`[data-chapter="${n}"].toc-row, .sheet-row[data-chapter="${n}"], .rail-tick[data-chapter="${n}"]`)) {
        row.classList.toggle('is-done', done);
        row.classList.toggle('is-started', p > 0 && !done);
      }
    }
  }

  /* ─────────────────────────── 12. Scroll engine ─────────────────────────── */

  const topbar = (() => {
    const bar = $('topbar');
    let hidden = false;
    const height = () => bar.offsetHeight || 64;
    function show() { if (hidden) { hidden = false; bar.classList.remove('is-hidden'); } }
    function hide() { if (!hidden) { hidden = true; bar.classList.add('is-hidden'); } }
    // A control that receives keyboard focus is never left off-screen (WCAG 2.4.11).
    bar.addEventListener('focusin', show);
    function update(y, dy) {
      bar.classList.toggle('is-solid', y > 24 || body.dataset.view === 'reader' && body.dataset.phase !== 'cover');
      const locked = document.querySelector('dialog[open]') || home.exploring || bar.contains(document.activeElement);
      const nearEnd = y + innerHeight >= document.documentElement.scrollHeight - 80;
      if (locked || y < innerHeight * 0.5 || nearEnd) show();
      else if (dy > 6) hide();
      else if (dy < -6) show();
    }
    return { update, show, height };
  })();

  const scrollEngine = (() => {
    let lastY = scrollY;
    let pending = false;
    function update(force = false) {
      pending = false;
      const y = scrollY;
      const dy = y - lastY;
      lastY = y;
      if (root.classList.contains('ending-open')) return;
      if (body.dataset.view === 'reader') reader.onScroll(y, force);
      else home.onScroll(force);
      // (After the page: the bar's look follows the phase the reader has just set, e.g. a chapter
      // cover opened from the cover's 읽기 시작 at the top of the page, where no scroll follows.)
      topbar.update(y, force ? 0 : dy);
      body.classList.toggle('is-scrolled', y > 24);
    }
    function schedule() {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => update(false));
    }
    function bind() {
      addEventListener('scroll', schedule, { passive: true });
      let resizeTimer = 0;
      let lastWidth = innerWidth;
      addEventListener('resize', () => {
        // A width change reflows the text, and a height change can move it (the chapter cover is
        // one screen tall: fullscreen, docked devtools). From this moment until it is re-anchored,
        // scroll positions are the browser's (clamped or adjusted), not the reader's: hold the place.
        if (innerWidth !== lastWidth || reader.textMoved()) reader.holdReflow();
        home.invalidate();
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          // Height-only changes that move nothing (a phone's address bar: the layout uses svh) must
          // not scroll programmatically, or momentum scrolling would stop.
          if (innerWidth !== lastWidth) { lastWidth = innerWidth; reader.reanchor(); }
          else if (reader.held) reader.reanchor();
          else if (reader.active) reader.measure();
          if (body.dataset.view === 'home' && home.section) home.setSection(home.section, true);   // compositions depend on the shape
          home.invalidate();
          home.placeFallbackNodes();
          update(true);
        }, 160);
      }, { passive: true });
      document.fonts?.ready.then(() => { reader.reanchor(); home.invalidate(); update(true); });
      // Webfonts arriving later (a slow first visit, the first switch to 명조): node labels change width.
      document.fonts?.addEventListener?.('loadingdone', () => home.invalidate());
    }
    return { bind, update, schedule };
  })();

  /* Pointer parallax for the universe (mouse only, one call per frame). */
  function bindPointer() {
    let queued = null;
    addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse') return;
      if (!queued) requestAnimationFrame(() => { universe.pointer(queued.x, queued.y); queued = null; });
      queued = { x: e.clientX / innerWidth * 2 - 1, y: e.clientY / innerHeight * 2 - 1 };
    }, { passive: true });
  }

  /* ─────────────────────────── 13. Sheets (dialogs) ─────────────────────────── */

  const sheets = (() => {
    const openers = new Map();
    function refreshContents() {
      updateProgressViews();
      for (const row of $$('.sheet-row')) {
        const on = Number(row.dataset.chapter) === reader.chapter;
        if (on) row.setAttribute('aria-current', 'page'); else row.removeAttribute('aria-current');
      }
      const pos = state.position, mark = state.bookmark;
      const resume = $('sheet-resume'), bookmark = $('sheet-bookmark');
      resume.hidden = !pos || pos.chapter === reader.chapter;
      if (pos) resume.innerHTML = `<span class="sheet-link-label">이어서 읽기</span><span><span class="mono">${pad(pos.chapter)}</span> ${escapeHTML(chapterOf(pos.chapter).short)} <span class="mono">${pos.percent}%</span></span>`;
      bookmark.hidden = !mark;
      if (mark) bookmark.innerHTML = `<span class="sheet-link-label">책갈피</span><span><span class="mono">${pad(mark.chapter)}</span> ${escapeHTML(chapterOf(mark.chapter).short)} <span class="mono">${mark.percent}%</span></span>`;
    }
    /** `byPointer`: opened with a pointer (not the keyboard). Closed again while reading, such a
     * sheet hands focus back to the text, so the next Space reads on instead of reopening it. */
    function open(id, opener = document.activeElement, { byPointer = false } = {}) {
      closeAll(true);
      const dialog = $(id);
      if (id === 'contents-dialog') refreshContents();
      openers.set(id, { opener, byPointer });
      dialog.showModal();
      // Start at the sheet's heading (announced as the dialog's name), not on its close button.
      dialog.querySelector('h2[tabindex]')?.focus({ preventScroll: true });
      topbar.show();
      if (!isReduced() && dialog.animate) {
        const from = isMobile() ? 'translateY(24px)' : 'translateX(28px)';
        dialog.animate([{ opacity: 0, transform: from }, { opacity: 1, transform: 'none' }], { duration: 420, easing: 'cubic-bezier(.16,1,.3,1)' });
      }
    }
    async function close(id, instant = false) {
      const dialog = $(id);
      if (!dialog.open || dialog.dataset.closing) return;
      if (!instant && !isReduced() && dialog.animate) {
        dialog.dataset.closing = '1';
        const to = isMobile() ? 'translateY(16px)' : 'translateX(20px)';
        await dialog.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: to }], { duration: 220, easing: 'cubic-bezier(.4,0,1,1)' }).finished.catch(() => {});
        delete dialog.dataset.closing;
      }
      if (dialog.open) dialog.close();
    }
    /** `restoreFocus: false` when the reader is taken somewhere (a chapter, a saved place): the
     * destination takes keyboard focus, not the button that opened the sheet. Resolves once closed. */
    function closeAll(instant = false, { restoreFocus = true } = {}) {
      const open = $$('dialog.sheet[open]');
      if (!restoreFocus) for (const d of open) openers.delete(d.id);
      return Promise.all(open.map(d => close(d.id, instant)));
    }
    function bind() {
      $('contents-open').addEventListener('click', e => open('contents-dialog', e.currentTarget, { byPointer: e.detail > 0 }));
      $('settings-open').addEventListener('click', e => open('settings-dialog', e.currentTarget, { byPointer: e.detail > 0 }));
      for (const dialog of $$('dialog.sheet')) {
        dialog.addEventListener('cancel', e => { e.preventDefault(); close(dialog.id); });
        dialog.addEventListener('close', () => {
          const { opener, byPointer } = openers.get(dialog.id) || {};
          openers.delete(dialog.id);
          if (!opener || root.classList.contains('ending-open')) return;
          if (byPointer && reader.active) reader.focusReadingPlace();
          else if (opener.isConnected) opener.focus({ preventScroll: true });
        });
        // A click on the backdrop (outside the panel) closes the sheet.
        dialog.addEventListener('click', e => {
          if (e.target !== dialog) return;
          const r = dialog.getBoundingClientRect();
          if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) close(dialog.id);
        });
        for (const button of $$('[data-close]', dialog)) button.addEventListener('click', () => close(dialog.id));
      }
      $('sheet-resume').addEventListener('click', () => { if (state.position) router.go(`#chapter-${state.position.chapter}`, { resume: { ...state.position } }); });
      $('sheet-bookmark').addEventListener('click', () => { if (state.bookmark) router.go(`#chapter-${state.bookmark.chapter}`, { resume: { ...state.bookmark } }); });
      // A sheet row for the chapter already open only closes the sheet (router.go skips it).
      for (const row of $$('.sheet-row')) row.addEventListener('click', () => { if (Number(row.dataset.chapter) === reader.chapter) closeAll(); });
    }
    return { bind, open, close, closeAll };
  })();

  /* ─────────────────────────── 14. Ending overlay ─────────────────────────── */

  /* The ending is a <dialog> over the canvas, never a route: the chapter, URL and exact scroll
   * position stay underneath. There is exactly one light from the waiting seed into the film: the
   * universe's own seed. Pressing the trigger fades the page and its controls and hands the seed's
   * screen point to Universe.ending.start({origin}); the seed itself flares and becomes the collapse
   * core. Nothing on the page lights up at any moment (no HTML glow, no bloom). */
  const ending = (() => {
    const dialog = $('ending');
    let isOpen = false;
    let closing = null;
    let live = false;           // the Universe film is running (else the fallback clock)
    let stills = false;         // reduced motion: four still compositions
    let stillIndex = 0;
    let savedY = 0;
    let savedPlace = null;      // the reading place under the film (re-found if the page reflows)
    let savedAtEnd = false;     // …or the last screen of the chapter, where the star rests
    let engineFilm = false;     // the Universe film was started (it is stopped on close, even if lost)
    let opener = null;
    let raf = 0;
    let lastNow = 0;
    let shownCaption = -1;
    let finaleShown = false;
    let idleTimer = 0;
    let swallowClickUntil = 0;
    const clock = { time: 0, started: false, paused: false, finished: false };

    const finaleText = () => ENDING_CAPTIONS.find(c => c.phase === 'finale')?.text || '';

    /** One film state for both renderers: {time, duration, started, paused, finished, phase, phases}. */
    function film() {
      if (live) {
        const s = universe.ending.state();
        if (s && s.active !== false) {
          const phases = Array.isArray(s.phases) && s.phases.length ? s.phases : FALLBACK_FILM.phases;
          const duration = Number(s.duration) || FALLBACK_FILM.duration;
          const time = Number(s.time) || 0;
          return { time, duration, started: !!s.started, paused: !!s.paused, finished: !!s.finished, phases, phase: Number.isInteger(s.phase) && s.phase >= 0 ? s.phase : phaseAt(phases, time) };
        }
      }
      const phases = FALLBACK_FILM.phases;
      return { ...clock, duration: FALLBACK_FILM.duration, phases, phase: phaseAt(phases, clock.time) };
    }
    function phaseAt(phases, time) {
      let index = 0;
      phases.forEach((p, i) => { if (time >= p.start) index = i; });
      return index;
    }

    /* Captions: the previous line dissolves, the next one resolves in. */
    let captionToken = 0;
    async function showCaption(text) {
      const el = $('ending-caption');
      const token = ++captionToken;
      if (el.textContent && !isCalm()) {
        el.classList.add('is-leaving');
        await wait(520);
        if (token !== captionToken) return;
      }
      el.classList.remove('is-leaving', 'is-resolving');
      // The live region hears the plain line once; the resolving glyphs are an aria-hidden layer.
      // A still can carry two lines of the film's text: each keeps a line (or lines) of its own.
      const lines = bindShort(text).split('\n');
      if (lines.length > 1) el.replaceChildren(...lines.map((line, i) => Object.assign(document.createElement('span'), { className: 'caption-line', textContent: (i ? ' ' : '') + line })));
      else el.textContent = lines[0];
      dialog.classList.toggle('has-caption', !!text);
      if (text && !isCalm()) glyphLayer(el, el.textContent, 1300, [18, 46]);
    }

    function renderTimeline(f) {
      const items = $$('#timeline li');
      f.phases.forEach((p, i) => {
        const end = f.phases[i + 1]?.start ?? f.duration;
        const li = items[i];
        if (!li) return;
        li.style.flexGrow = String(Math.max(0.5, end - p.start));
        const fill = stills ? (i <= stillIndex ? 1 : 0) : clamp((f.time - p.start) / Math.max(0.001, end - p.start));
        li.firstElementChild.style.transform = `scaleX(${fill.toFixed(3)})`;
        li.classList.toggle('is-current', i === f.phase && !f.finished);
      });
    }

    /* The CSS film shown when the universe cannot render. */
    function renderFallbackFilm(t) {
      const el = $('film');
      el.style.setProperty('--gather', smooth(0, 3.4, t).toFixed(3));
      el.style.setProperty('--flash', (smooth(3.4, 3.75, t) * (1 - smooth(3.9, 8.5, t))).toFixed(3));
      el.style.setProperty('--expand', smooth(3.6, 14, t).toFixed(3));
      el.style.setProperty('--stars', smooth(8, 18, t).toFixed(3));
      el.style.setProperty('--world', smooth(19, 26, t).toFixed(3));
    }

    function frame(now) {
      raf = 0;
      if (!isOpen) return;
      const dt = lastNow ? Math.min(0.1, (now - lastNow) / 1000) : 0;
      lastNow = now;
      if (!live && clock.started && !clock.paused && !clock.finished && !stills) {
        clock.time = Math.min(FALLBACK_FILM.duration, clock.time + dt);
        if (clock.time >= FALLBACK_FILM.duration) clock.finished = true;
      }
      const f = film();
      if (!live) renderFallbackFilm(f.time);
      renderTimeline(f);
      if (!stills && f.started) {
        // Each line arrives with the image it describes (ENDING_CAPTIONS[].at).
        const k = captionIndexAt(f.time);
        if (k !== shownCaption && !f.finished) {
          shownCaption = k;
          showCaption(FILM_CAPTIONS[k].text);
        }
        if (!f.paused && !f.finished) { try { window.NovelSound?.syncFilm(f.time); } catch { /* sound never blocks the film */ } }
        if (f.finished && !finaleShown) showFinale();
      }
      raf = requestAnimationFrame(frame);
    }
    const loop = () => { if (!raf) { lastNow = 0; raf = requestAnimationFrame(frame); } };

    /* The finale's buttons take no taps or focus until they have faded in (site.css: they rise in
     * after the quote), so a stray second tap on 건너뛰기 never presses one nobody can see yet. */
    let finaleTimer = 0;
    function holdFinaleActions() {
      const actions = $('finale').querySelector('.finale-actions');
      clearTimeout(finaleTimer);
      const release = () => { clearTimeout(finaleTimer); actions.inert = false; };
      const delay = isCalm() ? 0 : (() => {
        // Until the rise is mostly done: its delay plus half its duration (from the stylesheet).
        const cs = getComputedStyle(actions);
        const s = v => (parseFloat(v) || 0) * (/ms$/.test(v) ? 1 : 1000);
        return s(cs.animationDelay) + s(cs.animationDuration) * 0.5;
      })();
      actions.inert = delay > 0;
      if (delay > 0) finaleTimer = setTimeout(release, delay);
    }

    function showFinale(focus = true, natural = true) {
      finaleShown = true;
      dialog.classList.add('is-finished');
      showCaption('');
      $('finale-quote').textContent = bindShort(finaleText());
      $('finale').hidden = false;
      holdFinaleActions();
      $('ending-replay').hidden = false;
      // The finale has its own 읽던 곳. The top one and the transport fade out where they stand
      // (site.css .is-finished) and leave the tab order at once; nothing reflows under the fade.
      $('ending-close').inert = true;
      dialog.querySelector('.ending-bar').inert = true;
      dialog.classList.remove('has-caption');
      // A film that ran to its end lets the score decay naturally; a skip has already stilled it.
      if (natural) { try { window.NovelSound?.visualEnd(); } catch { /* ignore */ } }
      if (focus) $('finale-quote').focus({ preventScroll: true });
      wake();
    }

    /** A changing label (멈춤 / 재생), so no pressed state alongside it. */
    function setPausedUI(paused) {
      $('ending-pause').textContent = paused ? '재생' : '멈춤';
      dialog.classList.toggle('is-paused', paused);
    }

    function resetUI() {
      finaleShown = false;
      shownCaption = -1;
      dialog.classList.remove('is-finished', 'is-paused', 'is-idle', 'has-caption');
      $('finale').hidden = true;
      clearTimeout(finaleTimer);
      $('finale').querySelector('.finale-actions').inert = false;
      $('ending-close').hidden = false;
      $('ending-close').inert = false;
      dialog.querySelector('.ending-bar').inert = false;
      $('ending-pause').hidden = stills;
      $('ending-skip').hidden = false;
      $('ending-prev').hidden = !stills;
      $('ending-next').hidden = !stills;
      $('ending-replay').hidden = false;
      setPausedUI(false);
    }

    /* Reduced motion: step through four stills. The live film composes its own still when it is
     * sought to a phase start and paused; the CSS film shows the same moments (STILL_TIMES). */
    function showStill(index) {
      stillIndex = clamp(index, 0, STILL_TIMES.length - 1);
      const t = STILL_TIMES[stillIndex];
      if (live) {
        const phases = film().phases;
        universe.ending.seek((phases[stillIndex] || FALLBACK_FILM.phases[stillIndex]).start);
        universe.ending.pause(true);
      }
      clock.time = t;
      renderFallbackFilm(t);
      const f = film();
      const from = stillIndex ? captionIndexAt(STILL_TIMES[stillIndex - 1]) + 1 : 0;
      showCaption(FILM_CAPTIONS.slice(from, captionIndexAt(t) + 1).map(c => c.text).join('\n'));
      // (aria-disabled keeps keyboard focus on 이전 at the first still; its click does nothing then.)
      $('ending-prev').setAttribute('aria-disabled', String(stillIndex === 0));
      renderTimeline({ ...f, phase: stillIndex });
    }

    function play() {
      if (stills) { showStill(0); return; }
      clock.time = 0; clock.started = true; clock.paused = false; clock.finished = false;
      // The live film has already drawn its first frames by now: the score joins it where it is.
      try { window.NovelSound?.playFilm(live ? film().time : 0); } catch { /* ignore */ }
      loop();
    }

    async function open(trigger) {
      if (isOpen) return;
      sheets.closeAll(true);
      home.exitExplore({ focus: false });
      reader.savePosition(true);
      isOpen = true;
      closing = null;
      stills = isReduced();
      savedY = scrollY;
      savedPlace = reader.capture();
      savedAtEnd = reader.atEnd;
      engineFilm = false;
      opener = trigger || document.activeElement;
      // The light the film continues: the seed's own point as the universe reports it, else the
      // centre of the trigger's seed square (the fallback's CSS seed, or a stylesheet placement).
      const seed = trigger?.querySelector('.seed') || trigger;
      const r = seed?.getBoundingClientRect();
      const origin = reader.seedOrigin() || (r && r.width ? [clamp((r.left + r.width / 2) / innerWidth), clamp((r.top + r.height / 2) / innerHeight)] : [0.5, 0.6]);
      // (The CSS film's light begins there too.)
      $('film').style.setProperty('--ox', `${(origin[0] * 100).toFixed(2)}%`);
      $('film').style.setProperty('--oy', `${(origin[1] * 100).toFixed(2)}%`);

      try { window.NovelSound?.prepareEnding().catch(() => {}); } catch { /* ignore */ }
      document.dispatchEvent(new Event('novel:ending'));
      // The page and its controls fade (site.css html.ending-open); the trigger's words rise away.
      root.classList.add('ending-open');
      trigger?.classList.add('is-departing');
      veil(0);

      resetUI();
      $('ending-caption').textContent = '';
      clock.time = 0; clock.started = false; clock.paused = false; clock.finished = false;
      dialog.classList.add('is-arriving');
      dialog.showModal();
      dialog.focus({ preventScroll: true });
      setTimeout(() => dialog.classList.remove('is-arriving'), isReduced() ? 0 : 1500);
      wake();

      live = universe.live;
      dialog.classList.toggle('is-fallback', !live);
      if (live) {
        engineFilm = true;
        const ok = await universe.ending.start(origin);
        if (!isOpen) return;
        if (ok === false) { live = false; dialog.classList.add('is-fallback'); }
      }
      // No separate announcement: the dialog's name and the live caption already say it.
      if (stills) { showStill(0); loop(); return; }
      if (!live) { await wait(isReduced() ? 0 : 900); if (!isOpen) return; }
      play();
    }

    /* Closing hands the canvas back: Universe.ending.stop() fades the film to black and resolves
     * once the engine draws the page's universe again.
     *  · Back to the text (읽던 곳, Esc): the overlay waits for that, so ch.8 reappears over its
     *    seed ('ending-ready'), at the same scroll position, focus on the star.
     *  · On to another page (처음, Back): the overlay only fades (0.32 s); the router then stages the
     *    next page during the film's fade, which the engine takes as navigation and brings in
     *    settled from black instead of the seed. ch.8 stays hidden meanwhile.
     * In both cases, once stop() has resolved, the page showing by then sets its scene again, so
     * the universe always ends on the page the reader is on. */
    async function close({ restore = true } = {}) {
      if (!isOpen) return;
      if (closing) return closing;
      closing = (async () => {
        cancelAnimationFrame(raf); raf = 0;
        try { window.NovelSound?.beginReturn(); } catch { /* ignore */ }
        dialog.classList.add('is-leaving');
        // On to another page, the reading page goes now (the router brings the next one in). Back to
        // the text, it stays hidden until the film is black, then returns with the seed under it.
        if (!restore) { root.classList.add('is-leaving'); root.classList.remove('ending-open'); }
        const wasLive = engineFilm;
        engineFilm = false;
        const stopped = wasLive ? universe.ending.stop() : Promise.resolve();
        if (restore) { if (!isReduced()) await Promise.race([stopped, wait(1800)]); }
        else await Promise.race([stopped, wait(isReduced() ? 0 : 320)]);
        root.classList.remove('ending-open');
        dialog.classList.remove('is-leaving');
        if (dialog.open) dialog.close();
        isOpen = false;
        live = false;
        universe.invalidate();
        $$('.is-departing').forEach(el => el.classList.remove('is-departing'));
        document.dispatchEvent(new Event('novel:ending-close'));
        if (restore) {
          // The same place, even if the window changed size meanwhile (rotation): the last screen
          // of the chapter, or the same point of the same paragraph.
          reader.measure();
          if (savedAtEnd) window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' });
          else if (savedPlace && !savedPlace.atTop) reader.restorePlace(savedPlace);
          else window.scrollTo({ top: savedY, behavior: 'instant' });
          if (opener?.isConnected) opener.focus({ preventScroll: true });
          scrollEngine.update(true);
          reader.rearm();
        }
        closing = null;
        if (wasLive) {
          // (A page still on its way in stages its own scene when it is swapped in: wait for it.)
          const reassert = () => {
            if (isOpen) return;
            if (router.busy) { setTimeout(reassert, 120); return; }
            universe.invalidate();
            scrollEngine.update(true);
            reader.rearm();
          };
          stopped.then(reassert);
        }
      })();
      return closing;
    }

    /* The WebGL context was lost mid-film: the CSS film carries on from the same moment, with the
     * score, rather than a frozen frame (and a score looping on a stalled clock). When the context
     * returns, the universe's film resumes from where the CSS film has got to. */
    function contextLost() {
      if (!isOpen || !live || closing) return;
      const f = film();
      live = false;
      Object.assign(clock, { time: f.time, started: f.started, paused: f.paused, finished: f.finished });
      dialog.classList.add('is-fallback');
      if (stills) showStill(stillIndex);
      else renderFallbackFilm(clock.time);
      loop();
    }
    function contextRestored() {
      if (!isOpen || live || !engineFilm || closing || !universe.live) return;
      live = true;
      dialog.classList.remove('is-fallback');
      if (stills) showStill(stillIndex);
      else if (clock.finished) universe.ending.skipToEnd();
      else { universe.ending.seek(clock.time); universe.ending.pause(clock.paused); }
      loop();
    }

    function togglePause() {
      const f = film();
      if (!f.started || f.finished) return;
      const paused = !f.paused;
      if (live) universe.ending.pause(paused); else clock.paused = paused;
      try { window.NovelSound?.pauseFilm(f.time, paused); } catch { /* ignore */ }
      setPausedUI(paused);
      announce(paused ? '멈춤' : '재생');
    }
    function skip() {
      if (live) universe.ending.skipToEnd();
      clock.time = FALLBACK_FILM.duration; clock.started = true; clock.finished = true;
      renderFallbackFilm(clock.time);
      try { window.NovelSound?.stillFilm(); } catch { /* ignore */ }
      showFinale(true, false);
    }
    function replay() {
      resetUI();
      if (stills) { showStill(0); $('ending-next').focus({ preventScroll: true }); return; }
      if (live) universe.ending.replay();
      clock.time = 0; clock.started = true; clock.paused = false; clock.finished = false;
      try { window.NovelSound?.playFilm(0); } catch { /* ignore */ }
      $('ending-pause').focus({ preventScroll: true });
      loop();
    }

    const keyboardFocusInside = () => { try { return !!dialog.querySelector(':focus-visible'); } catch { return false; } };
    /* Controls fade while the film plays undisturbed, and return on any movement. */
    function wake() {
      dialog.classList.remove('is-idle');
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        const f = film();
        if (isOpen && f.started && !f.paused && !f.finished && !stills && !dialog.querySelector('.sound-panel:not([hidden])') && !keyboardFocusInside()) dialog.classList.add('is-idle');
      }, 2800);
    }

    function bind() {
      $('ending-close').addEventListener('click', () => close());
      $('ending-return').addEventListener('click', () => close());
      $('ending-pause').addEventListener('click', togglePause);
      $('ending-skip').addEventListener('click', skip);
      $('ending-replay').addEventListener('click', replay);
      $('ending-next').addEventListener('click', () => { if (stillIndex >= STILL_TIMES.length - 1) showFinale(true, false); else showStill(stillIndex + 1); });
      $('ending-prev').addEventListener('click', () => { if (stillIndex > 0) showStill(stillIndex - 1); });
      dialog.addEventListener('cancel', e => { e.preventDefault(); close(); });
      dialog.addEventListener('close', () => { if (isOpen && !closing) close(); });
      // While the controls are hidden, the first touch only brings them back: it never presses a
      // button nobody can see (건너뛰기 rests under the thumb, 읽던 곳 under the other one).
      dialog.addEventListener('pointerdown', e => {
        if (dialog.classList.contains('is-idle')) {
          e.preventDefault();
          e.stopPropagation();
          swallowClickUntil = performance.now() + 700;
        }
        wake();
      }, { capture: true });
      dialog.addEventListener('click', e => {
        if (performance.now() < swallowClickUntil) { e.preventDefault(); e.stopPropagation(); swallowClickUntil = 0; }
      }, { capture: true });
      for (const type of ['pointermove', 'keydown', 'focusin']) dialog.addEventListener(type, wake, { passive: true });
      document.addEventListener('click', e => {
        const trigger = e.target.closest('[data-ending-open]');
        if (trigger) { e.preventDefault(); open(trigger); }
      });
      document.addEventListener('universe:ending-phase', () => { if (isOpen) loop(); });
      document.addEventListener('universe:ending-finished', () => { if (isOpen && !finaleShown && !stills) showFinale(); });
    }

    return {
      bind, open, close, contextLost, contextRestored,
      get isOpen() { return isOpen; },
      /** Test hook: film state as the UI sees it. */
      state: () => ({ open: isOpen, live, stills, finale: finaleShown, ...film() }),
    };
  })();

  /* ─────────────────────────────── 15. Router ─────────────────────────────── */

  /* Hash routes: #home #contents #about #chapter-1…8 (legacy #ending → #chapter-8). The DOM
   * fades while the universe is already morphing toward the destination. One history entry per
   * destination: repeated or rapid requests for a page that is already showing (or still fading
   * in) never add entries, and a request during the fade replaces the one it cancels. */
  const router = (() => {
    let token = 0;
    let homeY = 0;
    let lastHash = '';      // the canonical address of the page shown or being shown
    let pending = null;     // a route whose page is still on its way in (its swap has not run)

    function parse(hash) {
      const m = /^#chapter-(\d+)$/.exec(hash);
      if (m && Number(m[1]) >= 1 && Number(m[1]) <= LAST) return { view: 'reader', chapter: Number(m[1]) };
      if (hash === '#ending') return { view: 'reader', chapter: LAST, legacyEnding: true };
      if (hash === '#contents' || hash === '#about') return { view: 'home', target: hash.slice(1) };
      if (hash === '' || hash === '#' || hash === '#home') return { view: 'home', target: 'home' };
      return null;
    }
    /** #chapter-03 → #chapter-3, #ending → #chapter-8, '' → #home. */
    const canonical = route => (route.view === 'reader' ? `#chapter-${route.chapter}` : `#${route.target}`);
    const norm = hash => (hash === '' || hash === '#' ? '#home' : hash);
    function replaceURL(hash) {
      try { history.replaceState(null, '', hash || location.pathname + location.search); } catch { /* file:// in some browsers */ }
    }
    /** The page the reader is on, or about to be on. */
    function heading() {
      if (pending) return pending;
      return body.dataset.view === 'reader' ? { view: 'reader', chapter: reader.chapter } : { view: 'home', target: 'home' };
    }

    /** A page that was about to replace this one was cancelled: show this one fully again. */
    function settle() {
      const wasLeaving = pending || root.classList.contains('is-leaving');
      pending = null;
      root.classList.remove('is-leaving');
      if (!wasLeaving) return;
      universe.invalidate();          // the universe had started toward the cancelled page
      scrollEngine.update(true);
    }

    /** The universe starts moving first; then the page fades out, swaps, and fades in. `text`: the
     * chapter opens inside its text (a saved place), where the stars are already scattered. */
    async function transition(mine, route, apply, { text = false } = {}) {
      pending = route;
      // The stars flow straight into the state the next page opens on: gathered into the formation
      // of a chapter's cover or of the cover, or scattered for a return into a chapter's text.
      if (route.view === 'reader') { stage('chapter', { chapter: route.chapter, layout: 'chapter' }); scatter(text ? 1 : 0); }
      else if (route.target === 'home') { stage('cover', { layout: home.coverLayout() }); scatter(0); }
      veil(0);
      const animate = !isReduced() && !root.classList.contains('is-booting');
      if (animate) {
        root.classList.add('is-leaving');
        await wait(340);
        if (mine !== token) return;
      }
      pending = null;
      apply();
      root.classList.remove('is-leaving');
      if (animate) {
        root.classList.add('is-entering');
        setTimeout(() => { if (mine === token) root.classList.remove('is-entering'); }, 1400);
      }
    }

    /* Focus moves to the new page's heading (its name is announced with it; no second message). */
    function show(route, { resume = null, restoreHomeY = false, homeY: entryY = null } = {}) {
      const view = body.dataset.view;    // what the page shows right now
      const stays = route.view === 'reader' && view === 'reader' && reader.chapter === route.chapter;
      // A sheet closed on the way hands keyboard focus to the destination (below), not back to the
      // button that opened it; only a sheet closed with nothing to go to returns it there.
      sheets.closeAll(true, { restoreFocus: stays && !resume });
      const mine = ++token;              // cancels a page that is still fading in
      if (route.view === 'reader') {
        home.exitExplore({ focus: false });
        if (stays) {
          settle();
          if (resume) reader.jumpTo(resume, { focusAfter: true });
          return;
        }
        if (view === 'home') homeY = scrollY;
        home.select(0);
        home.unlight();
        const n = route.chapter;
        const savedHere = state.position?.chapter === n ? { ...state.position } : null;
        const at = route.legacyEnding ? null : resume || savedHere;
        transition(mine, route, () => {
          // Legacy #ending rests on the last screen without recording ch.8 as read. Focus moves to
          // the chapter's title, or to the paragraph the reader returns to.
          reader.open(n, at, { atEnd: !!route.legacyEnding, focus: true });
        }, { text: intoText(n, at, !!route.legacyEnding) });
        return;
      }
      if (view === 'home') {
        // Within the home page: just scroll (and leave explore mode first). Focus moves to the
        // destination at once (without scrolling), so the next Tab continues from there.
        settle();
        home.exitExplore({ focus: false });
        // (After the browser's own jump to an edited address's fragment, which follows popstate
        // and drops focus.)
        requestAnimationFrame(() => {
          home.scrollToTarget(route.target, isReduced() ? 'instant' : 'smooth');
          home.focusTarget(route.target);
        });
        return;
      }
      transition(mine, route, () => {
        reader.close();
        // Focus follows the destination: the cover's title, the contents heading, the footer, or
        // (a restored position) the section in view.
        home.enter(route.target, restoreHomeY ? entryY ?? homeY : null, { focus: true });
      });
    }

    function go(hash, options = {}) {
      const route = parse(hash);
      if (!route) return;
      const target = canonical(route);
      const now = heading();
      // This chapter is already showing or on its way in (double clicks, its own rail tick or
      // contents row, a repeated key): no new page and no new history entry. A saved place in it
      // (the sheet's 이어서 읽기 · 책갈피) is scrolled to, and keyboard focus lands on that paragraph
      // once the sheet has closed.
      if (route.view === 'reader' && now.view === 'reader' && now.chapter === route.chapter) {
        const jump = options.resume && !pending;
        const closed = sheets.closeAll(false, { restoreFocus: !jump });
        if (jump) reader.jumpTo(options.resume, { focusAfter: closed });
        if (norm(location.hash) !== target) replaceURL(target);
        lastHash = target;
        return;
      }
      const replace = options.replace || !!pending || norm(location.hash) === target;
      // Leaving the home page for a new entry: this entry remembers where the page was, so Back
      // returns to that place (the contents row the reader came from), not to the section's top.
      if (!replace && body.dataset.view === 'home' && !pending) {
        try { history.replaceState({ ...(history.state || {}), y: Math.round(scrollY) }, ''); } catch { /* file:// */ }
      }
      try { history[replace ? 'replaceState' : 'pushState'](null, '', target); } catch { /* file:// in some browsers */ }
      lastHash = target;
      if (ending.isOpen) ending.close({ restore: false }).then(() => show(route, options));
      else show(route, options);
    }

    function onHistory() {
      const route = parse(location.hash);
      if (!route) {
        // An address that names no page: keep the page and put its own address back.
        replaceURL(lastHash && lastHash !== '#home' ? lastHash : '');
        return;
      }
      const target = canonical(route);
      if (norm(location.hash) !== target) replaceURL(target);
      if (target === lastHash) return;
      lastHash = target;
      // Back/Forward to the home page returns to where it was left: the place this entry remembers
      // (go), else, for the cover, the last place the home page was left at. (#contents and #about
      // reached afresh still land on their section.)
      const entryY = Number.isFinite(history.state?.y) ? history.state.y : null;
      const options = { restoreHomeY: route.view === 'home' && (route.target === 'home' || entryY !== null), homeY: entryY };
      if (ending.isOpen) ending.close({ restore: false }).then(() => show(route, options));
      else show(route, options);
    }

    /** Skip link: to the text at hand, without moving it and without touching the route. */
    function skip() {
      if (home.exploring) home.exitExplore({ focus: false });
      if (body.dataset.view === 'reader') reader.focusReadingPlace();
      else (home.skipTarget() || $('main')).focus({ preventScroll: true });
    }

    function bind() {
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
      addEventListener('popstate', onHistory);
      addEventListener('hashchange', onHistory);
      // In-page links keep real hrefs (new tabs and no-JS still work); plain clicks are routed.
      document.addEventListener('click', e => {
        const link = e.target.closest('a[href^="#"]');
        if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        const hash = link.getAttribute('href');
        if (hash === '#main') { e.preventDefault(); skip(); return; }
        if (!parse(hash)) return;
        e.preventDefault();
        go(hash);
      });
    }

    function start() {
      let route = parse(location.hash);
      if (!route) {
        route = { view: 'home', target: 'home' };
        replaceURL('');
      }
      const target = canonical(route);
      if (location.hash && norm(location.hash) !== target) replaceURL(target);
      lastHash = target;
      if (route.view === 'reader') {
        const resume = !route.legacyEnding && state.position?.chapter === route.chapter ? { ...state.position } : null;
        reader.open(route.chapter, resume, { atEnd: !!route.legacyEnding });
        document.title = `${pad(route.chapter)}. ${chapterOf(route.chapter).short} — 가능성의 끝`;
      } else {
        home.enter(route.target);
      }
    }

    return {
      bind, go, start, parse,
      /** A page is on its way in (its swap has not run yet). */
      get busy() { return !!pending; },
      /** The chapter shown, or the one on its way in (←/→ count from it). */
      get chapter() { return pending?.view === 'reader' ? pending.chapter : reader.chapter; },
    };
  })();

  /* ────────────────────────────── 16. Keyboard ────────────────────────────── */

  function bindKeyboard() {
    document.addEventListener('keydown', e => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
      if (home.exploring) {
        // A sheet open over the explore mode is the top layer: Esc (and every key) belongs to it.
        if (isTyping(e.target) || document.querySelector('dialog[open]')) return;
        // Esc closes the innermost layer first: an open card, then the explore mode.
        if (e.key === 'Escape') {
          e.preventDefault();
          if (home.selected) {
            const inside = $('readout').contains(document.activeElement) || $('node-layer').contains(document.activeElement);
            home.select(0, { focusNode: inside });
          } else home.exitExplore();
          return;
        }
        // Explore keys act only while focus is with the ring, its card or its tools (WCAG 2.1.4).
        const at = document.activeElement;
        const inExplore = !at || at === body || at === root || $('explore-bar').contains(at) || $('node-layer').contains(at) || $('readout').contains(at);
        if (!inExplore) return;
        if (/^Arrow(Left|Right|Up|Down)$/.test(e.key)) {
          // Rotate: the canvas's own explore handler turns the ring (it never has focus itself).
          e.preventDefault();
          $('universe-canvas').dispatchEvent(new KeyboardEvent('keydown', { key: e.key, cancelable: true }));
        } else if (e.key === '+' || e.key === '=') { e.preventDefault(); universe.zoom(1.12); }
        else if (e.key === '-' || e.key === '_') { e.preventDefault(); universe.zoom(1 / 1.12); }
        else if (e.key === '0' || e.key.toLowerCase() === 'r') { e.preventDefault(); universe.reset(); }
        return;
      }
      if (document.querySelector('dialog[open]') || isTyping(e.target)) return;
      if (e.key === 'Escape' && home.selected) {
        const inside = $('readout').contains(document.activeElement) || $('node-layer').contains(document.activeElement);
        home.select(0, { focusNode: inside });
        return;
      }
      if (!reader.active || e.shiftKey) return;
      const n = router.chapter;
      if (e.key === 'ArrowLeft' && n > 1) { e.preventDefault(); router.go(`#chapter-${n - 1}`); }
      else if (e.key === 'ArrowRight' && n < LAST) { e.preventDefault(); router.go(`#chapter-${n + 1}`); }
    });
  }

  /* ──────────────────────────────── 17. Boot ──────────────────────────────── */

  function boot() {
    root.classList.add('is-booting');
    root.classList.toggle('motion-ok', !isCalm());
    applyReading();
    bindSettings();
    applySoundPreference();

    sky.init();
    universe.mount($('universe-canvas'));
    if (!root.dataset.universe) root.dataset.universe = 'none';
    document.addEventListener('universe:ready', e => {
      if (e.detail?.renderer === 'none') root.dataset.universe = 'none';
      home.placeFallbackNodes();
      home.refocus();
    });
    // Context lost: the fallback sky takes over (its seed sits where the stylesheet puts the star).
    // Explore mode needs the live ring (its button is hidden meanwhile), and an open ending film
    // carries on as the CSS film from the same moment, with its score.
    document.addEventListener('universe:contextlost', () => {
      root.classList.add('universe-lost');
      if (home.exploring) home.exitExplore({ focus: $('explore-bar').contains(document.activeElement) });
      ending.contextLost();
      home.placeFallbackNodes();
      reader.measure();
    });
    document.addEventListener('universe:contextrestored', () => {
      root.classList.remove('universe-lost');
      universe.invalidate();
      home.refocus();
      ending.contextRestored();
      scrollEngine.update(true);
    });
    applyMotion();
    reducedQuery.addEventListener?.('change', () => { applyMotion(); });
    // Portrait ↔ landscape: an open chapter card re-composes the cover for the new shape.
    tallQuery.addEventListener?.('change', () => { home.updateMode(); if (home.selected) home.select(home.selected); });
    // Phones (a coarse pointer, portrait) use the chapter dial; a pointer attached or a turn of the
    // device brings back the wide cover.
    dialQuery.addEventListener?.('change', () => home.updateMode());

    home.init();
    reader.bind();
    // Universe frames: the cover's node buttons, and ch.8's star on the seed (frame.anchor).
    universe.subscribe(frame => { home.placeNodes(frame); reader.placeSeed(frame); });
    sheets.bind();
    ending.bind();
    router.bind();
    scrollEngine.bind();
    bindKeyboard();
    bindPointer();
    updateProgressViews();
    reveal.observe($('home-view'));
    router.start();

    // Another tab saved: take its progress, place and settings (store.sync merges; nothing is
    // written back from here, so two tabs never echo each other).
    addEventListener('storage', e => {
      if (e.key !== STORE_KEY) return;
      const changed = store.sync();
      if (!changed.length) return;
      if (changed.some(key => ['size', 'leading', 'font'].includes(key))) changeReading(() => {}, false);
      if (changed.includes('motion')) applyMotion();
      if (changed.includes('sound')) applySyncedSound();
      updateProgressViews();
      reader.updateBookmark();
      if (body.dataset.view === 'home') { home.renderResume(); home.renderDial(); }
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden || !soundOnLater) return;
      if (state.sound.enabled === true) applySyncedSound();
      else soundOnLater = false;
    });

    // Load-in choreography: the entrance waits (briefly) for the typefaces, so the title rises
    // once, in its own face; the universe streams in on its own clock meanwhile.
    const fontsReady = document.fonts?.ready || Promise.resolve();
    Promise.race([fontsReady, wait(1400)]).then(() => requestAnimationFrame(() => {
      root.classList.remove('is-booting');
      root.classList.add('is-ready');
      scrollEngine.update(true);
    }));

    // Test hooks (read-only views of the UI state; nothing is transmitted).
    window.NovelUI = {
      state: () => JSON.parse(JSON.stringify(state)),
      ending: () => ending.state(),
      openEnding: () => ending.open(document.querySelector('[data-ending-open]')),
      closeEnding: () => ending.close(),
      section: () => home.section,
      route: () => ({ view: body.dataset.view, chapter: reader.chapter, phase: body.dataset.phase || null }),
      /** The scatter the page asks of the universe now (0 formation … 1 starfield; the engine eases toward it). */
      scatter: () => scatterTarget,
      /** The phone cover's chapter dial: {on, chapter, held} (held: the node the universe was asked to hold at the front; 0 released). */
      dial: () => home.dial,
    };
  }

  boot();
})();
