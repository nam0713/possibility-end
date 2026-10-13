// NodeTracker: projects the eight cover nodes and the current formation's focal point (the anchor)
// to CSS px after each rendered frame, and delivers a reused frame object to subscribers only when
// something changed (a node's position, size or visibility, the anchor, the selection or the scene)
// — and on the frame after subscribe(). The UI positions its accessible HTML buttons from these
// frames: the node buttons on the cover, the ch.8 trigger star on the anchor.

import { NODE_COUNT, NODE_RADIUS } from './accents/cover.js';
import { RING } from './formations/cover.js';

const CORE_RADIUS = 0.5; // world units: nodes behind this disc around the singularity are "behind the core"
const round1 = (v) => Math.round(v * 10) / 10;

export class NodeTracker {
  constructor() {
    this.subs = new Set();
    // anchor: the focal point of the formation on screen (cover singularity, ch.8 / ending-ready
    // seed, a chapter formation's centre), CSS px in canvas space. Moves with the composition.
    this.frame = { scene: 'cover', nodes: [], selected: 0, anchor: { x: 0, y: 0, visible: false } };
    for (let n = 1; n <= NODE_COUNT; n++) this.frame.nodes.push({ n, x: 0, y: 0, radius: 0, depth: 0, visible: false });
    this.prev = new Float32Array(NODE_COUNT * 4).fill(-1);
    this.prevScene = '';
    this.prevSelected = -1;
    this.scratch = [0, 0, 0, 0];
    this.center = [0, 0, 0, 0];
    this.dirty = true;
    this.allHidden = false;
    this.pending = false;
    // Bound once: delivering a frame allocates nothing.
    this.notifyOne = (fn) => {
      try {
        fn(this.frame);
      } catch (e) {
        console.error(e);
      }
    };
  }

  subscribe(fn) {
    if (typeof fn !== 'function') return () => {};
    this.subs.add(fn);
    this.dirty = true;
    return () => this.subs.delete(fn);
  }

  /**
   * positions: Float32Array(24) cover node world positions (or null); presence: cover accent
   * presence (0..1); focus: world point of the formation's focal point; present: whether a
   * formation is on screen at all. Returns true when a frame will be delivered.
   */
  update(rig, positions, presence, scene, selected, focus, present) {
    const f = this.frame;
    const W = rig.W, H = rig.H;
    let changed = this.dirty || scene !== this.prevScene || selected !== this.prevSelected;

    // The anchor: by construction the camera target sits on the composition point, so it moves
    // only with the composition (layout easing, resize, veil) — never with parallax or drift.
    const a = rig.project(focus[0], focus[1], focus[2], this.scratch);
    const ax = round1(a[0]);
    const ay = round1(a[1]);
    const avis = !!present && a[3] < 1 && a[0] >= 0 && a[0] <= W && a[1] >= 0 && a[1] <= H;
    const anchor = f.anchor;
    if (anchor.x !== ax || anchor.y !== ay || anchor.visible !== avis) {
      anchor.x = ax;
      anchor.y = ay;
      anchor.visible = avis;
      changed = true;
    }

    // Absent nodes (the cover accent faded out) do not move for anyone: once a frame with every
    // node hidden has gone out, they are not projected again until they return.
    if (positions && !(presence <= 0.001 && this.allHidden && !this.dirty)) {
      const c = rig.project(0, 0, 0, this.center);
      const centerDist = c[2];
      const coreR = CORE_RADIUS * rig.pxPerUnit(centerDist);
      const orbitR = RING.nodeOrbit.radius;
      for (let i = 0; i < NODE_COUNT; i++) {
        const node = f.nodes[i];
        const p = rig.project(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2], this.scratch);
        const radius = NODE_RADIUS * rig.pxPerUnit(p[2]);
        const behind = p[2] > centerDist && Math.hypot(p[0] - c[0], p[1] - c[1]) < coreR;
        const onScreen = p[3] < 1 && p[0] > -radius && p[0] < W + radius && p[1] > -radius && p[1] < H + radius;
        const visible = presence > 0.5 && onScreen && !behind;
        node.x = round1(p[0]);
        node.y = round1(p[1]);
        node.radius = round1(radius);
        node.depth = Math.round(Math.min(1, Math.max(0, (p[2] - (centerDist - orbitR)) / (2 * orbitR))) * 1000) / 1000;
        node.visible = visible;
        const o = i * 4;
        if (this.prev[o] !== node.x || this.prev[o + 1] !== node.y || this.prev[o + 2] !== node.radius || this.prev[o + 3] !== (visible ? 1 : 0)) {
          changed = true;
          this.prev[o] = node.x;
          this.prev[o + 1] = node.y;
          this.prev[o + 2] = node.radius;
          this.prev[o + 3] = visible ? 1 : 0;
        }
      }
      let hidden = true;
      for (let i = 0; i < NODE_COUNT; i++) if (f.nodes[i].visible) hidden = false;
      this.allHidden = hidden;
    }
    if (!changed || !this.subs.size) return false;
    this.dirty = false;
    this.prevScene = scene;
    this.prevSelected = selected;
    f.scene = scene;
    f.selected = selected;
    this.pending = true;
    return true;
  }

  /** Deliver the frame prepared by update() (after the engine's timed work). */
  flush() {
    if (!this.pending) return;
    this.pending = false;
    this.subs.forEach(this.notifyOne);
  }

  /** CSS px hit test on visible nodes. */
  pick(x, y) {
    let best = 0;
    let bestD = Infinity;
    for (const node of this.frame.nodes) {
      if (!node.visible) continue;
      const d = Math.hypot(x - node.x, y - node.y);
      const limit = Math.max(22, node.radius + 12);
      if (d < limit && d < bestD) {
        bestD = d;
        best = node.n;
      }
    }
    return best;
  }
}
