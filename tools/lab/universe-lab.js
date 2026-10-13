// Universe lab: drives every window.Universe call from buttons and from URL flags, and exposes
// `window.lab` for headless runs (tools/shot.mjs --eval / --steps).
//
// URL flags: ?scene=cover|preview|chapter|ending-ready &chapter=1..8 &layout=hero|explore|contents|chapter|reading
//            &quality=auto|high|medium|low &adaptive=0 &settle=1 &reading=0..1 &veil=0..1 &scatter=0..1 &arm=1 &paused=1
//            &time=<s> (freeze living time) &select=n &ui=0 (hide panel) &nodes=0 (hides the node and
//            anchor overlay) &guides=1 &nowebgl=1
(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const U = window.Universe;
  const q = new URLSearchParams(location.search);
  const flag = (k, d = null) => (q.has(k) ? q.get(k) : d);
  const events = [];

  function log(line) {
    events.unshift(`${new Date().toISOString().slice(14, 23)} ${line}`);
    events.length = Math.min(events.length, 14);
    $('events').textContent = events.join('\n');
  }

  for (const type of ['universe:ready', 'universe:ending-phase', 'universe:ending-finished', 'universe:contextlost', 'universe:contextrestored']) {
    document.addEventListener(type, (e) => log(`${type} ${JSON.stringify(e.detail || {})}`));
  }

  // ---- mount
  const canvas = $('universe-canvas');
  const quality = flag('quality', 'auto');
  const mounted = U.mount(canvas, { quality, adaptive: flag('adaptive') !== '0' });
  log(`mount → ${mounted} · dataset.universe=${document.documentElement.dataset.universe}`);

  // ---- node overlay
  const layer = $('node-layer');
  const markers = [];
  for (let n = 1; n <= 8; n++) {
    const el = document.createElement('div');
    el.className = 'node hidden';
    el.innerHTML = `<span>${String(n).padStart(2, '0')}</span>`;
    layer.append(el);
    markers.push(el);
    const opt = document.createElement('option');
    opt.value = n;
    opt.textContent = `select: ${n}`;
    $('select-node').append(opt);
  }
  // The formation's anchor (its focal point: where the UI puts the ch.8 trigger star).
  const anchorMark = document.createElement('div');
  anchorMark.className = 'anchor hidden';
  layer.append(anchorMark);
  let lastFrame = null;
  let frameCount = 0;
  U.subscribe((frame) => {
    lastFrame = frame;
    frameCount++;
    for (const node of frame.nodes) {
      const el = markers[node.n - 1];
      el.style.transform = `translate(${node.x}px, ${node.y}px)`;
      el.classList.toggle('hidden', !node.visible);
      el.classList.toggle('selected', node.n === frame.selected);
    }
    const a = frame.anchor;
    if (a) {
      anchorMark.style.transform = `translate(${a.x}px, ${a.y}px)`;
      anchorMark.classList.toggle('hidden', !a.visible);
    }
  });
  $('show-nodes').checked = flag('nodes', '1') !== '0';
  const syncNodes = () => (layer.style.display = $('show-nodes').checked ? '' : 'none');
  $('show-nodes').addEventListener('change', syncNodes);
  syncNodes();

  // ---- scene buttons
  const sceneButtons = [];
  for (const kind of ['preview', 'chapter']) {
    const host = $(`${kind}-buttons`);
    for (let n = 1; n <= 8; n++) {
      const b = document.createElement('button');
      b.dataset.scene = kind;
      b.dataset.chapter = n;
      b.textContent = n;
      host.append(b);
    }
  }
  document.querySelectorAll('[data-scene]').forEach((b) => sceneButtons.push(b));
  function go(scene, chapter, layout, opts = {}) {
    const o = {};
    if (chapter) o.chapter = Number(chapter);
    if (layout) o.layout = layout;
    U.setScene(scene, o);
    const interactive = !!opts.interactive;
    U.setInteractive(interactive);
    $('interactive').checked = interactive;
    document.documentElement.classList.toggle('explore', interactive);
    sceneButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.scene === scene && (!chapter || Number(b.dataset.chapter) === Number(chapter)) && (!b.dataset.layout || b.dataset.layout === layout))));
    syncLayoutButtons();
  }
  sceneButtons.forEach((b) => b.addEventListener('click', () => go(b.dataset.scene, b.dataset.chapter, b.dataset.layout, { interactive: b.dataset.interactive === '1' })));

  const layouts = ['hero', 'explore', 'contents', 'chapter', 'reading'];
  for (const l of layouts) {
    const b = document.createElement('button');
    b.dataset.layoutButton = l;
    b.textContent = l;
    b.addEventListener('click', () => {
      U.setLayout(l);
      syncLayoutButtons();
    });
    $('layout-buttons').append(b);
  }
  function syncLayoutButtons() {
    const s = U.getState();
    document.querySelectorAll('[data-layout-button]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.layoutButton === s.layout)));
  }

  // ---- sliders & toggles
  const slider = (id, fn) => {
    const input = $(id);
    const out = input.parentElement.querySelector('output');
    const apply = () => {
      out.textContent = Number(input.value).toFixed(2);
      fn(Number(input.value));
    };
    input.addEventListener('input', apply);
    return { input, apply };
  };
  const reading = slider('reading', (v) => U.setReading(v));
  const veil = slider('veil', (v) => U.setVeil(v));
  const scatter = slider('scatter', (v) => U.setScatter(v));
  slider('px', (v) => U.setPointer(v, Number($('py').value)));
  slider('py', (v) => U.setPointer(Number($('px').value), v));
  const seek = slider('seek', (v) => U.ending.seek(v));
  $('visible').addEventListener('change', (e) => U.setVisible(e.target.checked));
  $('interactive').addEventListener('change', (e) => {
    U.setInteractive(e.target.checked);
    document.documentElement.classList.toggle('explore', e.target.checked);
  });
  $('paused').addEventListener('change', (e) => U.setPaused(e.target.checked));
  $('arm').addEventListener('change', (e) => U.ending.arm(e.target.checked));
  $('quality').value = quality;
  $('quality').addEventListener('change', (e) => U.setQuality(e.target.value));
  $('select-node').addEventListener('change', (e) => U.select(Number(e.target.value)));
  $('zoom-in').addEventListener('click', () => U.zoom(1.12));
  $('zoom-out').addEventListener('click', () => U.zoom(1 / 1.12));
  $('reset').addEventListener('click', () => U.reset());
  $('end-start').addEventListener('click', async () => log(`ending.start → ${await U.ending.start({ origin: [0.5, 0.62] })}`));
  $('end-pause').addEventListener('click', () => U.ending.pause(true));
  $('end-resume').addEventListener('click', () => U.ending.pause(false));
  $('end-skip').addEventListener('click', () => U.ending.skipToEnd());
  $('end-replay').addEventListener('click', () => U.ending.replay());
  $('end-stop').addEventListener('click', async () => {
    await U.ending.stop();
    log('ending.stop resolved');
  });
  $('settle').addEventListener('click', () => U._debug.settle());
  let frozen = false;
  $('freeze').addEventListener('click', (e) => {
    frozen = !frozen;
    U._debug.freeze(frozen);
    e.target.setAttribute('aria-pressed', String(frozen));
  });
  $('lose').addEventListener('click', () => log(`loseContext → ${U._debug.loseContext()}`));
  $('restore').addEventListener('click', () => log(`restoreContext → ${U._debug.restoreContext()}`));
  $('dump').addEventListener('click', () => console.log(U.getState()));
  $('toggle-panel').addEventListener('click', () => {
    const p = $('panel');
    p.classList.toggle('collapsed');
    $('toggle-panel').setAttribute('aria-expanded', String(!p.classList.contains('collapsed')));
  });
  addEventListener('keydown', (e) => {
    if (e.key === 'h' || e.key === 'H') $('panel').classList.toggle('hidden');
  });

  // Click on a node in explore mode (as the UI would): pick → select.
  canvas.addEventListener('click', (e) => {
    const n = U.pick(e.clientX, e.clientY);
    if (n) {
      U.select(n);
      $('select-node').value = n;
      log(`pick → ${n}`);
    }
  });

  // ---- composition guides: the current framing circle
  const guides = $('layout-guides');
  const ring = document.createElement('i');
  const mark = document.createElement('b');
  guides.append(ring, mark);
  $('show-guides').checked = flag('guides') === '1';
  const syncGuides = () => guides.classList.toggle('on', $('show-guides').checked);
  $('show-guides').addEventListener('change', syncGuides);
  syncGuides();

  // ---- status line
  function tick() {
    const s = U.getState();
    const a = lastFrame && lastFrame.anchor;
    $('status').textContent = `${s.renderer} · ${s.scene || '-'}${s.chapter ? ' ' + s.chapter : ''} · ${s.layout || '-'} · ${s.quality} · ${s.particles} · ${s.fps} fps · scatter ${(s.scatter || 0).toFixed(2)}${a ? ` · anchor ${Math.round(a.x)},${Math.round(a.y)}${a.visible ? '' : ' (hidden)'}` : ''}`;
    $('state').textContent = JSON.stringify({ ...s, ending: { ...s.ending, phases: undefined } }, null, 1);
    const eng = U._debug.engine;
    if (eng && guides.classList.contains('on')) {
      const rig = eng.rig;
      const r = (eng.spec ? eng.spec.radius : 3) * rig.pxPerUnit(rig.distance);
      const x = rig.cx.value * rig.W, y = rig.cy.value * rig.H;
      Object.assign(ring.style, { left: `${x - r}px`, top: `${y - r}px`, width: `${2 * r}px`, height: `${2 * r}px` });
      Object.assign(mark.style, { left: `${x}px`, top: `${y}px` });
    }
    if (s.ending.active) {
      seek.input.value = s.ending.time;
      seek.input.parentElement.querySelector('output').textContent = s.ending.time.toFixed(1);
    }
    setTimeout(tick, 250);
  }
  tick();

  // ---- URL-driven setup (also what headless screenshots use)
  if (flag('ui') === '0') $('panel').classList.add('hidden');
  if (flag('paused') === '1') {
    $('paused').checked = true;
    U.setPaused(true);
  }
  const scene = flag('scene', 'cover');
  go(scene, flag('chapter'), flag('layout'), { interactive: flag('layout') === 'explore' });
  if (flag('reading')) {
    reading.input.value = flag('reading');
    reading.apply();
  }
  if (flag('veil')) {
    veil.input.value = flag('veil');
    veil.apply();
  }
  if (flag('scatter')) {
    scatter.input.value = flag('scatter');
    scatter.apply();
  }
  if (flag('arm') === '1') {
    $('arm').checked = true;
    U.ending.arm(true);
  }
  if (flag('select')) U.select(Number(flag('select')));
  if (flag('time')) {
    U._debug.setTime(Number(flag('time')));
    U._debug.freeze(true);
  }
  if (flag('settle') === '1') U._debug.settle();

  window.lab = {
    go(sceneName, chapter, layout, opts) {
      go(sceneName, chapter, layout, opts);
      return U.getState();
    },
    settle() {
      U._debug.settle();
      return U.getState();
    },
    /** Freeze living time at t and settle: deterministic stills (s: scatter, settled too). */
    still(sceneName, chapter, layout, t = 12, s) {
      go(sceneName, chapter, layout, { interactive: layout === 'explore' });
      if (s !== undefined) this.scatter(s);
      U._debug.setTime(t);
      U._debug.freeze(true);
      U._debug.settle();
      return U.getState();
    },
    /** Scatter target (the slider follows); settle = true jumps there. */
    scatter(v, settle = false) {
      scatter.input.value = v;
      scatter.apply();
      if (settle) U._debug.settle();
      return U.getState().scatter;
    },
    nodes: () => lastFrame,
    anchor: () => (lastFrame ? { ...lastFrame.anchor } : null),
    frames: () => frameCount,
    state: () => U.getState(),
  };
})();
