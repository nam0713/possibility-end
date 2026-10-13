// AccentManager: creates each formation's accent (all of them up front, hidden, so their programs
// compile before any morph) and cross-fades presence with scene changes. The incoming accent is tied
// to the particles' arrival: it appears as the matter settles into the structure it outlines
// (smoothstep over the last third of the morph clock), never as an overlay laid on top of fog. The
// outgoing one fades in the first ~30 % of the morph. A presence of 0 hides the group. While the
// formation scatters into the reading starfield, every accent leaves with its matter (ctx.solid).

import * as THREE from 'three';
import { CoverAccent } from './cover.js';
import { ComputationAccent, DistanceAccent, IntelligenceAccent, MatterAccent, ProductionAccent, SeedAccent } from './chapters.js';
import { StarAccent } from './star.js';
import { BlackHoleAccent } from './blackhole.js';

const FACTORY = {
  cover: () => new CoverAccent(),
  ch1: () => new IntelligenceAccent(),
  ch2: () => new ComputationAccent(),
  ch3: () => new ProductionAccent(),
  ch4: () => new MatterAccent(),
  ch5: () => new StarAccent(),
  ch6: () => new DistanceAccent(),
  ch7: () => new BlackHoleAccent(),
  ch8: () => new SeedAccent(false),
  seed: () => new SeedAccent(true),
};

const ease = (x) => x * x * (3 - 2 * x);
const smooth = (a, b, x) => ease(Math.min(1, Math.max(0, (x - a) / (b - a))));
/** Morph clock window over which an incoming accent appears. */
const ARRIVE = [0.62, 0.95];

export class AccentManager {
  constructor(scene) {
    this.root = new THREE.Group();
    this.root.name = 'accents';
    scene.add(this.root);
    this.items = new Map();
    this.list = []; // same items as an array: iterated every frame without allocating
    this.activeId = null;
    this.solid = 1; // 1 − the scatter's share (engine: ctx.solid)
  }

  _item(id) {
    let item = this.items.get(id);
    if (item || !FACTORY[id]) return item || null;
    const accent = FACTORY[id]();
    accent.group.visible = false;
    this.root.add(accent.group);
    // reading/evolve/spread/expand: the formation's own reading state, frozen once it is outgoing.
    item = { accent, presence: 0, target: 0, rate: 1, reading: 0, evolve: 1, spread: 0, expand: 1 };
    this.items.set(id, item);
    this.list.push(item);
    return item;
  }

  /** Instantiate every accent now (hidden). */
  createAll() {
    for (const id of Object.keys(FACTORY)) this._item(id);
  }

  get(id) {
    const item = this.items.get(id);
    return item ? item.accent : null;
  }

  /** Accent instance if it is currently visible. */
  visible(id) {
    const item = this.items.get(id);
    return item && item.presence > 0.001 && this.solid > 0.001 ? item.accent : null;
  }

  presence(id) {
    const item = this.items.get(id);
    return item ? ease(item.presence) * this.solid : 0;
  }

  /** Switch the active accent. duration: morph duration (s). instant: no fade. */
  setActive(id, duration, instant = false) {
    this.activeId = id;
    for (const [key, item] of this.items) {
      if (key === id) continue;
      item.target = 0;
      item.rate = 1 / Math.max(0.12, duration * 0.3);
      if (instant) item.presence = 0;
    }
    const item = this._item(id);
    if (!item) return;
    item.target = 1;
    // An accent that was still partly visible (a quick return) holds there until the matter catches up.
    if (instant) item.presence = 1;
  }

  /**
   * Advances fades and updates visible accents. ctx is a reused object (ctx.morph: the particle
   * morph clock, 1 when settled). Returns true while an outgoing accent is still fading.
   */
  update(dt, ctx) {
    let fading = false;
    const reading = ctx.reading, evolve = ctx.evolve, spread = ctx.spread, expand = ctx.expand;
    const solid = (this.solid = ctx.solid === undefined ? 1 : ctx.solid);
    const arrive = smooth(ARRIVE[0], ARRIVE[1], ctx.morph);
    for (let k = 0; k < this.list.length; k++) {
      const item = this.list[k];
      if (item.target === 1) {
        item.reading = reading;
        item.evolve = evolve;
        item.spread = spread;
        item.expand = expand;
        if (arrive > item.presence) item.presence = arrive;
      } else if (item.presence > 0) {
        item.presence = Math.max(0, item.presence - item.rate * dt);
        fading = true;
      }
      const visible = item.presence > 0.001 && solid > 0.001;
      item.accent.group.visible = visible;
      if (!visible) continue;
      ctx.presence = ease(item.presence) * solid;
      ctx.reading = item.reading;
      ctx.evolve = item.evolve;
      ctx.spread = item.spread;
      ctx.expand = item.expand;
      item.accent.update(ctx);
    }
    ctx.reading = reading;
    ctx.evolve = evolve;
    ctx.spread = spread;
    ctx.expand = expand;
    return fading;
  }

  /** Skip any running fades (lab/diagnostics). */
  settle() {
    for (const item of this.items.values()) item.presence = item.target;
  }

  dispose() {
    this.root.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) o.material.dispose();
    });
    this.root.removeFromParent();
    this.items.clear();
    this.list.length = 0;
  }
}
