// Per-chapter non-particle accents. Each class exposes `group` and `update(ctx)`; ctx carries
// {presence, time, dt, reading, focus, spread, evolve, pixelRatio}. Materials read presence as
// opacity so accents cross-fade with scene changes.

import * as THREE from 'three';
import { C } from '../config.js';
import { kelvin } from '../math.js';
import { intelligenceGraph } from '../formations/intelligence.js';
import { LATTICE } from '../formations/computation.js';
import { FACTORIES, knotPoint } from '../formations/production.js';
import { CRYSTAL, crystalSites, sitePosition } from '../formations/matter.js';
import { GALAXIES, GALAXY_LOOK, THREADS } from '../formations/distance.js';
import { transform } from '../formations/common.js';
import { createGlow, createPulseLines, polylineSegments } from './materials.js';
import { PACK, qRate } from '../particles/shaders.js';

// The crystal particles' angular speed as decoded by the vertex shader.
const SPIN = qRate((Math.round((CRYSTAL.spin / PACK.SPIN_MAX) * 32767) / 32767) * PACK.SPIN_MAX);

/** Presence/time for a list of glow billboards (index loop: no per-frame allocation). */
function setGlows(list, ctx) {
  for (let k = 0; k < list.length; k++) {
    const u = list[k].material.uniforms;
    u.uOpacity.value = ctx.presence;
    u.uTime.value = ctx.gpuTime;
  }
}

const setLines = (lines, ctx, phase) => {
  const u = lines.material.uniforms;
  u.uOpacity.value = ctx.presence;
  u.uFocus.value = ctx.focus;
  // Phases only matter modulo 1 (pulses repeat): keep them small for float32.
  if (phase !== undefined) u.uPhase.value = phase % 1;
};

/** Ch.1 — ice connection lines whose warm (4800 K) pulses accelerate through each cycle (and with reading). */
export class IntelligenceAccent {
  constructor() {
    const { nodes, links } = intelligenceGraph();
    const segs = links.map(([a, b], k) => ({ a: nodes[a].p, b: nodes[b].p, t0: 0, t1: 1, seed: (k * 0.618) % 1 }));
    this.lines = createPulseLines(segs, { base: 0.05, pulse: 0.8, density: 1, width: 0.05, color: C.ice, pulseColor: C.yellow });
    this.core = createGlow({ core: C.core, halo: C.sun, scale: 0.42, intensity: 0.7, flicker: 0.04 });
    this.group = new THREE.Group();
    this.group.add(this.lines, this.core);
    this.phase = 0;
  }

  update(ctx) {
    // Speed ramps up over a 12 s cycle (each improvement arrives sooner), plus reading progress.
    const cycle = (ctx.time / 12) % 1;
    const speed = 0.18 + 0.9 * cycle * cycle + 0.5 * ctx.reading;
    this.phase = (this.phase + ctx.dtLiving * speed) % 1;
    setLines(this.lines, ctx, this.phase);
    this.core.material.uniforms.uOpacity.value = ctx.presence;
    this.core.material.uniforms.uTime.value = ctx.gpuTime;
  }
}

/** Ch.2 — faint lattice lines; ice aisle pulses advance in steps and wait at the white-hot chokepoints. */
export class ComputationAccent {
  constructor() {
    const M = LATTICE.matrix;
    const T = (x, y, z) => transform(M, x, y, z, [0, 0, 0]);
    const { layers, rackCols, rackRows, rack, half } = LATTICE;
    const struct = [];
    const { w, h, d } = rack;
    const edges = [];
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) edges.push([[sx * w / 2, 0, sz * d / 2], [sx * w / 2, h, sz * d / 2]]);
    for (const sy of [0, h]) for (const sz of [-1, 1]) edges.push([[-w / 2, sy, sz * d / 2], [w / 2, sy, sz * d / 2]]);
    for (const sy of [0, h]) for (const sx of [-1, 1]) edges.push([[sx * w / 2, sy, -d / 2], [sx * w / 2, sy, d / 2]]);
    for (const y of layers) {
      for (const x of rackCols) for (const z of rackRows) {
        if (x > 0 && z === 0 && y === 0) continue;
        for (const [a, b] of edges) struct.push({ a: T(x + a[0], y + a[1], z + a[2]), b: T(x + b[0], y + b[1], z + b[2]) });
      }
      const c = [[-half, -half], [half, -half], [half, half], [-half, half]];
      for (let k = 0; k < 4; k++) struct.push({ a: T(c[k][0], y - 0.02, c[k][1]), b: T(c[(k + 1) % 4][0], y - 0.02, c[(k + 1) % 4][1]) });
    }
    for (const [cx, cz] of [[-half, -half], [half, -half], [half, half], [-half, half]]) struct.push({ a: T(cx, layers[0] - 0.02, cz), b: T(cx, layers[2] - 0.02, cz) });
    this.structure = createPulseLines(struct, { base: 0.045, pulse: 0, color: C.steel });

    // Aisles: pulses travel from both ends toward the centre, stepping and pausing.
    const aisles = [];
    layers.forEach((y, li) => {
      for (const s of [-1, 1]) {
        const pts = [];
        for (let k = 0; k <= 12; k++) pts.push(T(0, y + 0.03, s * half * (1 - k / 12)));
        aisles.push(...polylineSegments(pts, { seed: li * 0.37 + (s > 0 ? 0.5 : 0), tScale: 1 / half }));
      }
    });
    const column = [];
    for (let k = 0; k <= 16; k++) column.push(T(0, -0.95 + (k / 16) * 2.4, 0));
    aisles.push(...polylineSegments(column, { seed: 0.2, tScale: 1 / 2.4 }));
    this.aisles = createPulseLines(aisles, { base: 0.03, pulse: 0.75, density: 3, width: 0.05, step: true, color: C.ice, pulseColor: C.iceHi });

    this.gates = layers.map((y) => {
      // The chokepoints: the floor's brightest light (white-hot core in a warm 4800 K halo of heat).
      const g = createGlow({ core: C.core, halo: C.yellow, scale: 0.36, intensity: 0.55, flicker: 0.08 });
      const p = T(0, y + 0.02, 0);
      g.position.set(p[0], p[1], p[2]);
      return g;
    });
    this.group = new THREE.Group();
    this.group.add(this.structure, this.aisles, ...this.gates);
  }

  update(ctx) {
    setLines(this.structure, ctx);
    setLines(this.aisles, ctx, ctx.time * 0.45);
    setGlows(this.gates, ctx);
  }
}

/** Ch.3 — the conveyor spine with flowing light (its gap closes with reading), furnace glows at the factories. */
export class ProductionAccent {
  constructor() {
    const pts = [];
    for (let k = 0; k < 360; k++) {
      const p = knotPoint(k / 360, [0, 0, 0]);
      pts.push([p[0], p[1], p[2]]);
    }
    const segs = polylineSegments(pts, { closed: true, tScale: 1 });
    // Reveal parameter mirrors the particle evolve thresholds of the open stretch.
    segs.forEach((s, k) => {
      const t0 = k / 360, t1 = (k + 1) / 360;
      const ev = (t) => (t > 0.8 ? 0.42 + ((t - 0.8) / 0.2) * 0.56 : 0);
      s.r0 = ev(t0);
      s.r1 = ev(Math.min(t1, 0.9999));
    });
    this.spine = createPulseLines(segs, { base: 0.05, pulse: 0.5, density: 0.9, width: 0.04, color: C.steel, pulseColor: C.white });
    this.factories = FACTORIES.map((t) => {
      const g = createGlow({ core: C.sun, halo: C.orange, scale: 0.34, intensity: 0.45, flicker: 0.12 });
      const p = knotPoint(t, [0, 0, 0]);
      g.position.set(p[0], p[1], p[2]);
      return g;
    });
    this.group = new THREE.Group();
    this.group.add(this.spine, ...this.factories);
  }

  update(ctx) {
    setLines(this.spine, ctx, ctx.time * 0.32);
    this.spine.material.uniforms.uReveal.value = ctx.evolve;
    setGlows(this.factories, ctx);
  }
}

/** Ch.4 — bonds between neighbouring lattice sites, revealed outward with the crystal; the warm seed's glow. */
export class MatterAccent {
  constructor() {
    const sites = crystalSites();
    const key = (s) => s.join(',');
    const set = new Map(sites.map((s) => [key(s), s]));
    const maxD = Math.hypot(11, 1, 0);
    const ev = (s) => Math.min(0.97, 0.04 + (Math.hypot(...s) / maxD) * 0.92);
    const segs = [];
    for (const s of sites) {
      for (const d of [[1, 0, 0], [0, 1, 0], [0, 0, 1]]) {
        const n = set.get(key([s[0] + d[0], s[1] + d[1], s[2] + d[2]]));
        if (!n) continue;
        segs.push({ a: sitePosition(s, [0, 0, 0]), b: sitePosition(n, [0, 0, 0]), t0: 0, t1: 1, seed: (segs.length * 0.618034) % 1, r0: ev(s), r1: ev(n) });
      }
    }
    this.bonds = createPulseLines(segs, { base: 0.16, pulse: 0.22, density: 1, width: 0.2, color: C.ice, pulseColor: C.white });
    this.seed = createGlow({ core: C.hot, halo: C.yellow, scale: 0.5, intensity: 0.34, flicker: 0.05, breath: 0.05 });
    this.spinner = new THREE.Group();
    this.spinner.add(this.bonds);
    this.group = new THREE.Group();
    this.group.add(this.spinner, this.seed);
    this.axis = new THREE.Vector3(...CRYSTAL.axis).normalize();
  }

  update(ctx) {
    setLines(this.bonds, ctx, ctx.time * 0.2);
    this.bonds.material.uniforms.uReveal.value = ctx.evolve;
    // Rotate with the lattice particles: their orbit speed exactly as the shader sees it (int16
    // encoded, quantised to the clock period) on the same wrapped clock.
    this.spinner.quaternion.setFromAxisAngle(this.axis, ctx.gpuTime * SPIN);
    this.seed.material.uniforms.uOpacity.value = ctx.presence;
    this.seed.material.uniforms.uTime.value = ctx.gpuTime;
  }
}

/** Ch.6 — ice signal threads crawling between the galaxies; the galaxy cores glow in their stars' light. */
export class DistanceAccent {
  constructor() {
    this.group = new THREE.Group();
    this.threads = THREADS.map(([ia, ib], k) => {
      const A = GALAXIES[ia].c, B = GALAXIES[ib].c;
      const pts = [];
      for (let s = 0; s <= 24; s++) {
        const t = s / 24;
        pts.push([A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t]);
      }
      return createPulseLines(polylineSegments(pts, { seed: k * 0.31, tScale: 1 / Math.hypot(B[0] - A[0], B[1] - A[1], B[2] - A[2]) }), {
        base: 0.018, pulse: 0.42, density: 2, width: 0.03, color: C.steel, pulseColor: C.ice,
      });
    });
    this.scaler = new THREE.Group();
    this.scaler.add(...this.threads);
    this.cores = GALAXIES.map((G) => {
      const L = GALAXY_LOOK[G.kind];
      return createGlow({ core: L.core, halo: L.halo, scale: G.r * 0.42, intensity: L.glow, breath: 0.03 });
    });
    this.group.add(this.scaler, ...this.cores);
  }

  update(ctx) {
    const s = 1 + ctx.spread;
    this.scaler.scale.setScalar(s);
    for (let k = 0; k < this.threads.length; k++) setLines(this.threads[k], ctx, ctx.time * 0.04);
    for (let k = 0; k < this.cores.length; k++) {
      const c = GALAXIES[k].c;
      this.cores[k].position.set(c[0] * s, c[1] * s, c[2] * s);
    }
    setGlows(this.cores, ctx);
  }
}

/**
 * Ch.8 and the ending-ready seed: a white-hot glow (a slightly warm white core in a sun-warm halo),
 * fragile (ch.8) or strong and breathing (ready). Both are
 * centred on the formation's centre — the anchor — so the seed is one light. While the UI arms the
 * trigger (hover/focus: Universe.ending.arm), the ready seed brightens and breathes a little deeper
 * (ctx.arm, eased by the engine). light(): the glow as drawn, for the film's handover.
 */
export const SEED_GLOW = { core: C.core, halo: kelvin(5400), scale: 0.72, intensity: 0.85, breath: 0.16, rays: 0.3, flicker: 0.02 };
export const SEED_HALO = { core: [0, 0, 0], halo: C.yellow, scale: 2.2, intensity: 0.085, breath: 0.1 };
const ARM = { intensity: 0.4, breath: 0.1, scale: 0.1, halo: 0.6 };

export class SeedAccent {
  constructor(strong) {
    this.strong = strong;
    this.glow = strong ? createGlow(SEED_GLOW) : createGlow({ core: C.core, halo: C.sun, scale: 0.5, intensity: 0.8, flicker: 0.22 });
    this.halo = strong ? createGlow(SEED_HALO) : null;
    this.glows = this.halo ? [this.glow, this.halo] : [this.glow];
    this.group = new THREE.Group();
    this.group.add(...this.glows);
    this.presence = 0;
    this.arm = 0;
  }

  update(ctx) {
    setGlows(this.glows, ctx);
    this.presence = ctx.presence;
    let scale = ctx.expand;
    if (this.strong) {
      const arm = (this.arm = ctx.arm || 0);
      const g = this.glow.material.uniforms;
      g.uIntensity.value = SEED_GLOW.intensity * (1 + ARM.intensity * arm);
      g.uBreath.value = SEED_GLOW.breath + ARM.breath * arm;
      this.halo.material.uniforms.uIntensity.value = SEED_HALO.intensity * (1 + ARM.halo * arm);
      scale = 1 + ARM.scale * arm;
    }
    this.group.scale.setScalar(scale);
  }

  /**
   * The glow exactly as drawn this frame (world units, linear colours; see materials.js glowFragment):
   * per billboard {scale (world radius of r = 1), intensity (uIntensity × presence), core, halo,
   * breath (amplitude), rays}. The film continues this light at the collapse point.
   */
  light() {
    const out = [];
    for (const m of this.glows) {
      const u = m.material.uniforms;
      out.push({
        scale: u.uScale.value * this.group.scale.x,
        intensity: u.uIntensity.value * u.uOpacity.value,
        core: [u.uCore.value.x, u.uCore.value.y, u.uCore.value.z],
        halo: [u.uHalo.value.x, u.uHalo.value.y, u.uHalo.value.z],
        breath: u.uBreath.value,
        rays: u.uRays.value,
      });
    }
    return out;
  }
}
