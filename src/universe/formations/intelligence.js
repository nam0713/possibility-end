// Ch.1 지능 INTELLIGENCE — a recursive feedback structure: a core, a great loop carrying five
// nodes, loops threaded on those nodes, and smaller loops on those. Every loop flows about its
// own axis, faster at each level of recursion (better AI speeds the next AI). Pulses stream along
// the connections from the core outward and back (accent lines repeat them with accelerating pulses).

import { C, HEX } from '../config.js';
import { TAU, basisFromNormal } from '../math.js';
import { circlePoint, cluster, connection, keep, mix } from './common.js';

const nrm = (x, y, z) => {
  const l = Math.hypot(x, y, z);
  return [x / l, y / l, z / l];
};

/** The node graph is shared with the accent (connection lines). */
export function intelligenceGraph() {
  const loops = [];
  const nodes = [{ p: [0, 0, 0], level: 0 }];
  const links = [];
  const L0 = { c: [0, 0, 0], n: nrm(0.18, 1, 0.32), r: 2.05, level: 1, w: 0.09 };
  const Li = { c: [0, 0, 0], n: nrm(-0.62, 0.55, 0.58), r: 1.18, level: 1, w: -0.16 };
  loops.push(L0, Li);
  const tmp = [0, 0, 0];
  const basis = new Float64Array(6);
  // Five nodes on the great loop, each carrying a threaded loop with three sub-nodes.
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * TAU + 0.3;
    circlePoint(tmp, 0, 0, 0, L0.n[0], L0.n[1], L0.n[2], L0.r, a);
    const p = [tmp[0], tmp[1], tmp[2]];
    const ni = nodes.push({ p, level: 1 }) - 1;
    links.push([0, ni]);
    // Tangent of the great loop at this node = the threaded loop's normal (tilted a little).
    basisFromNormal(basis, L0.n[0], L0.n[1], L0.n[2]);
    const tx = -Math.sin(a) * basis[0] + Math.cos(a) * basis[3];
    const ty = -Math.sin(a) * basis[1] + Math.cos(a) * basis[4];
    const tz = -Math.sin(a) * basis[2] + Math.cos(a) * basis[5];
    const n2 = nrm(tx + 0.25 * L0.n[0], ty + 0.25 * L0.n[1], tz + 0.25 * L0.n[2]);
    const r2 = 0.58;
    // The threaded loop is centred slightly outward so it wraps the node.
    const out = nrm(p[0], p[1], p[2]);
    const c2 = [p[0] + out[0] * r2 * 0.92, p[1] + out[1] * r2 * 0.92, p[2] + out[2] * r2 * 0.92];
    loops.push({ c: c2, n: n2, r: r2, level: 2, w: 0.42 * (k % 2 ? 1 : -1) });
    for (let j = 0; j < 3; j++) {
      const a2 = (j / 3) * TAU + k;
      circlePoint(tmp, c2[0], c2[1], c2[2], n2[0], n2[1], n2[2], r2, a2);
      const q = [tmp[0], tmp[1], tmp[2]];
      const nj = nodes.push({ p: q, level: 2 }) - 1;
      links.push([ni, nj]);
      const n3 = nrm(Math.sin(k * 3 + j), Math.cos(k + j * 2), Math.sin(j * 5 + 1));
      loops.push({ c: q, n: n3, r: 0.17, level: 3, w: 1.15 * (j % 2 ? 1 : -1) });
    }
  }
  // Three nodes on the inner loop, linked to the core and to the great loop's nodes (chords).
  for (let k = 0; k < 3; k++) {
    circlePoint(tmp, 0, 0, 0, Li.n[0], Li.n[1], Li.n[2], Li.r, (k / 3) * TAU + 0.9);
    const ni = nodes.push({ p: [tmp[0], tmp[1], tmp[2]], level: 1 }) - 1;
    links.push([0, ni]);
    links.push([ni, 1 + ((k * 2) % 5) * 4]);
  }
  // Chords between non-adjacent great-loop nodes: the loop feeding back on itself.
  for (let k = 0; k < 5; k++) links.push([1 + k * 4, 1 + ((k + 2) % 5) * 4]);
  return { loops, nodes, links };
}

export default {
  id: 'ch1',
  seed: 2101,
  radius: 3.2,
  center: [0, 0, 0],
  view: { yaw: 0.0, pitch: 0.26 },
  tint: HEX.ice,
  morph: 'chapter',
  reading: { preview: 0.7 },
  // The outer loops reach the framing circle: a little smaller beside the contents list.
  compose: { contents: { wide: { scale: 0.93 } } },
  *build(b) {
    const { loops, nodes, links } = intelligenceGraph();
    const tmp = [0, 0, 0];
    // Recursion reads in luminance: the great loops ice cyan, the threaded loops paler, the fastest
    // tiny loops white-hot.
    const levelColor = [C.white, C.ice, keep(C.ice, C.white, 0.5), keep(C.iceHi, C.white, 0.35)];

    // Loops: dashed rings (density modulated) that flow about their own axes.
    const totalLen = loops.reduce((s, l) => s + l.r * (l.level === 1 ? 1.5 : 1), 0);
    const loopBudget = b.quota(0.56);
    for (const L of loops) {
      const n = Math.round((loopBudget * L.r * (L.level === 1 ? 1.5 : 1)) / totalLen);
      const dashes = L.level === 1 ? 23 : L.level === 2 ? 9 : 4;
      const thick = L.level === 1 ? 0.022 : L.level === 2 ? 0.015 : 0.009;
      for (let k = 0; k < n; k++) {
        if (b.tick()) yield;
        // Rejection-sample the dash pattern so rotation is visible.
        let a = 0;
        for (let tries = 0; tries < 6; tries++) {
          a = b.rng() * TAU;
          if (b.rng() < 0.22 + 0.78 * Math.pow(0.5 + 0.5 * Math.sin(a * dashes), 3)) break;
        }
        circlePoint(tmp, L.c[0], L.c[1], L.c[2], L.n[0], L.n[1], L.n[2], L.r + b.gauss() * thick, a);
        const i = b.point(tmp[0] + b.gauss() * thick * 0.4, tmp[1] + b.gauss() * thick * 0.4, tmp[2] + b.gauss() * thick * 0.4, levelColor[L.level], (L.level === 3 ? 0.3 : 0.2) * (0.5 + b.rng() * 0.9), 0.01 + b.rng() * 0.009);
        b.orbit(i, L.n[0], L.n[1], L.n[2], L.w, L.c[0], L.c[1], L.c[2]);
      }
    }

    // Nodes: bright clusters; the core is white with a white-hot heart.
    cluster(b, b.quota(0.025), 0, 0, 0, 0.06, C.white, 0.34, 0.016, { falloff: 1.6, spin: 0.5 });
    cluster(b, b.quota(0.006), 0, 0, 0, 0.03, C.iceHi, 0.9, 0.02, { spin: 0.8 });
    const perNode = b.quota(0.075) / (nodes.length - 1);
    for (let k = 1; k < nodes.length; k++) {
      yield; // one node per step: time-sliced builds never overrun their slot
      const nd = nodes[k];
      cluster(b, Math.round(perNode * (nd.level === 1 ? 1.7 : 0.75)), nd.p[0], nd.p[1], nd.p[2], nd.level === 1 ? 0.036 : 0.022, C.white, 0.3, 0.014, { falloff: 1.4, twinkle: 0.3 });
    }

    // Connections: pulses streaming outward from the core and between nodes; deeper links run faster.
    const perLink = b.quota(0.17) / links.length;
    for (const [ia, ib] of links) {
      yield;
      const A = nodes[ia].p, B = nodes[ib].p;
      const deep = nodes[ib].level;
      const rate = deep === 2 ? 0.55 : 0.3;
      connection(b, Math.round(perLink * (deep === 2 ? 0.7 : 1.3)), A[0], A[1], A[2], B[0], B[1], B[2], mix(C.white, C.ice, 0.4), 0.32, 0.016, rate, 0.012);
    }

    // Glia: a faint cloud of sparks around the structure.
    const glia = b.quota(0.1);
    for (let k = 0; k < glia; k++) {
      if (b.tick()) yield;
      const r = 0.5 + Math.pow(b.rng(), 0.6) * 2.8;
      const z = b.rng() * 2 - 1, a = b.rng() * TAU, s = Math.sqrt(1 - z * z);
      const i = b.point(r * s * Math.cos(a), r * z * 0.7, r * s * Math.sin(a), mix(C.deep, C.ice, b.rng() * 0.6), 0.006 + 0.014 * b.rng(), 0.01 + b.rng() * 0.008);
      b.orbit(i, 0.18, 1, 0.32, 0.04);
      b.twinkle(i, 0.9);
    }
  },
};
