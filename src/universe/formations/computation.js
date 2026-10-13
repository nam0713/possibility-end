// Ch.2 컴퓨터 COMPUTATION — a crystalline compute lattice: three stacked datacenter floors of
// racks drawn as precise point lattices, status lights, and data packets running down the aisles
// toward a single white-hot chokepoint per floor (the brightest light of each floor: luminance marks
// the bottleneck), where they queue and crawl upward through one shared column. Waiting for GPUs,
// power, buildings.

import { C, HEX } from '../config.js';
import { TAU, eulerMatrix } from '../math.js';
import { mix, transform } from './common.js';

export const LATTICE = {
  matrix: eulerMatrix(0, 0.62, 0),
  layers: [-0.92, 0, 0.92],
  half: 1.5,
  rackCols: [-0.72, 0.72],
  rackRows: [-1.1, -0.55, 0, 0.55, 1.1],
  rack: { w: 0.9, h: 0.46, d: 0.3 },
};

const v = [0, 0, 0];

export default {
  id: 'ch2',
  seed: 2202,
  radius: 2.55,
  center: [0, 0.05, 0],
  view: { yaw: 0.0, pitch: 0.5 },
  tint: HEX.ice,
  morph: 'chapter',
  reading: { preview: 0.6 },
  *build(b) {
    const M = LATTICE.matrix;
    const put = (x, y, z, col, br, size) => {
      transform(M, x, y, z, v);
      return b.point(v[0], v[1], v[2], col, br, size);
    };
    const flowL = (i, x, y, z, rate) => {
      transform(M, x, y, z, v);
      b.flow(i, v[0], v[1], v[2], rate);
    };
    const { layers, rackCols, rackRows, rack, half } = LATTICE;
    const racks = [];
    for (const y of layers) for (const x of rackCols) for (const z of rackRows) if (!(x > 0 && z === 0 && y === 0)) racks.push([x, y, z]);

    // Rack edges: crisp luminous wireframes.
    const edgeBudget = b.quota(0.3);
    const perRack = Math.floor(edgeBudget / racks.length);
    const { w, h, d } = rack;
    const edges = [];
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) edges.push([[sx * w / 2, 0, sz * d / 2], [sx * w / 2, h, sz * d / 2]]);
    for (const sy of [0, h]) for (const sz of [-1, 1]) edges.push([[-w / 2, sy, sz * d / 2], [w / 2, sy, sz * d / 2]]);
    for (const sy of [0, h]) for (const sx of [-1, 1]) edges.push([[sx * w / 2, sy, -d / 2], [sx * w / 2, sy, d / 2]]);
    const lens = edges.map(([a, c]) => Math.hypot(c[0] - a[0], c[1] - a[1], c[2] - a[2]));
    const total = lens.reduce((s, l) => s + l, 0);
    for (const [rx, ry, rz] of racks) {
      for (let k = 0; k < perRack; k++) {
        if (b.tick()) yield;
        let pick = b.rng() * total, e = 0;
        while (pick > lens[e] && e < edges.length - 1) pick -= lens[e++];
        const [a, c] = edges[e];
        const t = b.rng();
        const i = put(rx + a[0] + (c[0] - a[0]) * t, ry + a[1] + (c[1] - a[1]) * t, rz + a[2] + (c[2] - a[2]) * t, mix(C.white, C.ice, 0.5), 0.14 + 0.08 * b.rng(), 0.011 + 0.006 * b.rng());
        b.twinkle(i, 0.05);
      }
    }

    // Rack faces: a quantised lattice of faint points (blades), denser on the aisle-facing face.
    const faceBudget = b.quota(0.17);
    const step = 0.042;
    for (let k = 0; k < faceBudget; k++) {
      if (b.tick()) yield;
      const [rx, ry, rz] = racks[Math.floor(b.rng() * racks.length)];
      const face = b.rng();
      let x, y, z;
      const q = (val, span) => Math.round(val / step) * step - (span % step) / 2;
      if (face < 0.5) {
        // Aisle-facing face (x toward the centre aisle).
        x = rx - Math.sign(rx) * w / 2;
        y = Math.min(h, Math.max(0, q(b.rng() * h, h)));
        z = Math.max(-d / 2, Math.min(d / 2, q((b.rng() - 0.5) * d, d)));
      } else if (face < 0.8) {
        x = Math.max(-w / 2, Math.min(w / 2, q((b.rng() - 0.5) * w, w))) + rx;
        y = h;
        z = Math.max(-d / 2, Math.min(d / 2, q((b.rng() - 0.5) * d, d)));
      } else {
        x = Math.max(-w / 2, Math.min(w / 2, q((b.rng() - 0.5) * w, w))) + rx;
        y = Math.min(h, Math.max(0, q(b.rng() * h, h)));
        z = (b.rng() < 0.5 ? -1 : 1) * d / 2;
      }
      put(x, ry + y, rz + z, C.steel, 0.05 + 0.05 * b.rng(), 0.011);
    }

    // Status lights on the aisle faces.
    const leds = b.quota(0.05);
    for (let k = 0; k < leds; k++) {
      if (b.tick()) yield;
      const [rx, ry, rz] = racks[Math.floor(b.rng() * racks.length)];
      const hot = b.rng() < 0.08;
      const y = Math.round(b.rng() * 9) / 9 * h * 0.9 + h * 0.05;
      const z = Math.round((b.rng() - 0.5) * 6) / 6 * d * 0.85;
      const i = put(rx - Math.sign(rx) * (w / 2 + 0.006), ry + y, rz + z, hot ? C.iceHi : C.ice, hot ? 0.8 : 0.45, 0.014);
      b.twinkle(i, 1);
    }

    // Floor lattices (faint), with corner pillars joining the floors.
    const floor = b.quota(0.07);
    const fstep = 0.15;
    const nf = Math.round((2 * half) / fstep);
    for (let k = 0; k < floor; k++) {
      if (b.tick()) yield;
      const y = layers[Math.floor(b.rng() * layers.length)] - 0.02;
      const gx = -half + Math.floor(b.rng() * (nf + 1)) * fstep;
      const gz = -half + Math.floor(b.rng() * (nf + 1)) * fstep;
      put(gx, y, gz, C.deep, 0.05 + 0.03 * b.rng(), 0.012);
    }
    const pillars = b.quota(0.025);
    for (let k = 0; k < pillars; k++) {
      if (b.tick()) yield;
      const cx = (k & 1 ? 1 : -1) * half, cz = (k & 2 ? 1 : -1) * half;
      put(cx, -0.94 + b.rng() * 1.9, cz, C.steel, 0.1, 0.012);
    }

    // Chokepoints: a white-hot aperture at the centre of each floor.
    const gates = b.quota(0.03);
    for (let k = 0; k < gates; k++) {
      if (b.tick()) yield;
      const y = layers[k % 3];
      const a = b.rng() * TAU;
      const r = 0.13 + b.gauss() * 0.006;
      const i = put(r * Math.cos(a), y + 0.02 + b.gauss() * 0.006, r * Math.sin(a), C.iceHi, 0.6, 0.014);
      transform(M, 0, 1, 0, v);
      b.orbit(i, v[0], v[1], v[2], 0.6);
    }

    // Queues: packets bunched in the aisle before each chokepoint, crawling forward.
    const queue = b.quota(0.08);
    for (let k = 0; k < queue; k++) {
      if (b.tick()) yield;
      const y = layers[k % 3] + 0.03;
      const side = b.rng() < 0.5 ? -1 : 1;
      const dist = 0.15 + Math.pow(b.rng(), 1.6) * 0.6;
      const near = 1 - dist / 0.75;
      const i = put(b.gauss() * 0.035, y + Math.abs(b.gauss()) * 0.02, side * dist, mix(C.ice, C.iceHi, near * near), 0.16 + 0.36 * near, 0.013);
      flowL(i, 0, 0, -side * 0.07, 0.05 + 0.04 * b.rng());
    }

    // Packets: running down the centre aisle and the cross-aisles toward the queue.
    const packets = b.quota(0.1);
    for (let k = 0; k < packets; k++) {
      if (b.tick()) yield;
      const y = layers[k % 3] + 0.03;
      const side = b.rng() < 0.5 ? -1 : 1;
      let i;
      if (b.rng() < 0.6) {
        i = put(b.gauss() * 0.012, y, side * half, C.white, 0.26, 0.013);
        flowL(i, 0, 0, -side * (half - 0.72), 0.22 + 0.08 * b.rng());
      } else {
        const zr = (rackRows[Math.floor(b.rng() * 4)] + 0.275) * 1;
        const sx = b.rng() < 0.5 ? -1 : 1;
        i = put(sx * half, y, zr, C.ice, 0.22, 0.012);
        flowL(i, -sx * half, 0, 0, 0.16 + 0.06 * b.rng());
      }
    }

    // The shared column: data squeezing upward through the chokepoints.
    const column = b.quota(0.05);
    for (let k = 0; k < column; k++) {
      if (b.tick()) yield;
      const i = put(b.gauss() * 0.02, -0.95, b.gauss() * 0.02, mix(C.iceHi, C.white, b.rng() * 0.6), 0.26, 0.012);
      flowL(i, 0, 2.4, 0, 0.12 + 0.04 * b.rng());
    }
  },
};
