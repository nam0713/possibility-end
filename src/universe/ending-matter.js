// "Matter": the one particle system that carries the whole film's continuity.
// The same instances are the reader's universe at the handover, fall into the
// singularity, burst out as the newborn plasma, condense into the cosmic web,
// ignite as the first stars and spin up into proto-galaxies.
//
// Every particle's position is an analytic function of film time evaluated in
// the vertex shader (twice: at t and t − shutter), so seeking is exact and the
// sprites are drawn as motion-blurred capsules without any per-frame CPU work.
import * as THREE from 'three';
import { HASH, PALETTE, THERMAL } from './ending-glsl.js';
import { gauss, rng, clamp01 } from './ending-math.js';
import { COLLAPSE_AXIS, GAL_E1, GALAXY_NORMAL, GALAXY_RADIUS, HERO, WEB_RADIUS, DIR_STRUCTURE_END } from './ending-layout.js';
import { sampleGalaxyStar } from './ending-galaxy.js';
import { IMPACT, diskAngle, diskRadius, growth, scaleFactor, spinAmount, spinPhase } from './ending-timeline.js';

export const MAX_NODES = 56;

// ------------------------------------------------------------------ web data

/** Deterministic cosmic web: nodes (future galaxies) and the filaments between them. */
function buildWeb(rand, nodeCount) {
  // The hero turns the opposite way round its axis so it matches the galaxy layer's rotation.
  const nodes = [{ p: HERO.slice(), mass: 2.6, r: GALAXY_RADIUS * 0.9, axis: GALAXY_NORMAL.slice(), spin: -0.35 }];
  // Keep the camera corridor clear so no node swallows the lens.
  const camA = [0, 0, 0.6];
  const camB = HERO.map((h, i) => h + DIR_STRUCTURE_END[i] * 0.56);
  const corridor = p => distToSegment(p, camA, camB);
  // A few hand-placed knots so the grand view of the web is well composed.
  for (const p of [[-0.42, -0.3, -0.85], [0.1, 0.42, -1.75], [-0.85, 0.2, -1.45], [0.95, -0.35, -1.6], [-0.2, -0.75, -1.9], [0.62, 0.62, -0.55]]) {
    if (corridor(p) < 0.3) continue;
    nodes.push({ p, mass: 0.7 + rand() * 0.6, r: 0.035 + 0.045 * 1.0, axis: randomDir(rand), spin: rand() < 0.5 ? 1 : -1 });
  }
  let guard = 0;
  while (nodes.length < nodeCount && guard++ < 20000) {
    const r = WEB_RADIUS * 0.92 * Math.cbrt(rand());
    const d = randomDir(rand);
    const p = [d[0] * r, d[1] * r, d[2] * r];
    if (corridor(p) < 0.3) continue;
    if (nodes.some(n => dist(n.p, p) < 0.38)) continue;
    const mass = 0.25 + Math.pow(rand(), 2.6) * 1.6;
    nodes.push({ p, mass, r: 0.035 + 0.045 * mass, axis: randomDir(rand), spin: rand() < 0.5 ? 1 : -1 });
  }
  // Filaments: each node to its nearest neighbours (deduplicated).
  const edges = [];
  const seen = new Set();
  nodes.forEach((n, i) => {
    const order = nodes.map((m, j) => [j, dist(n.p, m.p)]).filter(([j]) => j !== i).sort((a, b) => a[1] - b[1]);
    const k = i === 0 ? 5 : 4;
    for (let q = 0; q < k && q < order.length; q++) {
      const j = order[q][0];
      if (order[q][1] > 1.2) break;
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (seen.has(key)) continue;
      seen.add(key);
      edges.push({ a: i, b: j, len: order[q][1], w: order[q][1] * (nodes[i].mass + nodes[j].mass) });
    }
  });
  return { nodes, edges };
}

function randomDir(rand) {
  return randomDirInto(rand, [0, 0, 0]);
}
function randomDirInto(rand, out) {
  const z = rand() * 2 - 1;
  const a = rand() * Math.PI * 2;
  const s = Math.sqrt(1 - z * z);
  out[0] = s * Math.cos(a); out[1] = z; out[2] = s * Math.sin(a);
  return out;
}
function crossArr(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
function dist(a, b) { return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]); }
function distToSegment(p, a, b) {
  const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  const ap = [p[0] - a[0], p[1] - a[1], p[2] - a[2]];
  const t = clamp01((ap[0] * ab[0] + ap[1] * ab[1] + ap[2] * ab[2]) / (ab[0] ** 2 + ab[1] ** 2 + ab[2] ** 2));
  return Math.hypot(ap[0] - ab[0] * t, ap[1] - ab[1] * t, ap[2] - ab[2] * t);
}
function cdfPick(cdf, x) {
  let lo = 0, hi = cdf.length - 1;
  while (lo < hi) { const mid = (lo + hi) >> 1; if (cdf[mid] < x) lo = mid + 1; else hi = mid; }
  return lo;
}

/**
 * Fill the time-independent attributes: comoving start (q), web target (+node id),
 * star schedule and per-particle randoms. A generator: it yields after every `chunk`
 * particles so the film can be built in idle time (ending-film.js), and returns the web.
 */
function* fillCosmos(count, nodeCount, arrays, chunk) {
  const rand = rng(90417);
  const { nodes, edges } = buildWeb(rand, nodeCount);
  const nodeCdf = [];
  let acc = 0;
  nodes.forEach(n => { acc += n.mass; nodeCdf.push(acc); });
  const edgeCdf = [];
  let eacc = 0;
  edges.forEach(e => { eacc += e.w; edgeCdf.push(eacc); });
  yield;

  const { q, web, star, rnd } = arrays;
  const heroSample = { r: 0, ang: 0, h: 0, kind: 0 };
  const heroZ = crossArr(GAL_E1, GALAXY_NORMAL);
  const nodeOf = new Int16Array(count).fill(-1);
  const firstSN = new Float32Array(nodes.length).fill(99);
  const dir = [0, 0, 0];
  for (let i = 0; i < count; i++) {
    if (i > 0 && i % chunk === 0) yield;
    const kind = rand();
    let wx, wy, wz;
    let sigma = 0.2;
    let node = -1;
    if (kind < 0.3) {
      node = cdfPick(nodeCdf, rand() * acc);
      const n = nodes[node];
      if (node === 0) {
        // The hero: the galaxy-to-be, sampled from the galaxy's own distribution in its frame
        // (X = e1, Z = X × normal), puffed up until it spins.
        sampleGalaxyStar(rand, heroSample);
        const r = heroSample.r * GALAXY_RADIUS, a = heroSample.ang;
        const h = heroSample.h * GALAXY_RADIUS + gauss(rand) * GALAXY_RADIUS * 0.12;
        const ca = Math.cos(a) * r, sa = Math.sin(a) * r;
        wx = n.p[0] + GAL_E1[0] * ca + heroZ[0] * sa + n.axis[0] * h;
        wy = n.p[1] + GAL_E1[1] * ca + heroZ[1] * sa + n.axis[1] * h;
        wz = n.p[2] + GAL_E1[2] * ca + heroZ[2] * sa + n.axis[2] * h;
      } else {
        // Concentrated core with an extended halo.
        const rr = n.r * (rand() < 0.7 ? 0.45 : 1.1);
        wx = n.p[0] + gauss(rand) * rr; wy = n.p[1] + gauss(rand) * rr; wz = n.p[2] + gauss(rand) * rr;
      }
      sigma = 0.24;
    } else if (kind < 0.84) {
      const e = edges[cdfPick(edgeCdf, rand() * eacc)];
      const A = nodes[e.a].p, B = nodes[e.b].p;
      const s = rand();
      // Filaments are thicker near the nodes and beaded along their length.
      const width = 0.014 + 0.03 * (1 - Math.sin(Math.PI * s)) + 0.012 * Math.max(0, Math.sin(s * 23 + e.len * 7));
      wx = A[0] + (B[0] - A[0]) * s + gauss(rand) * width;
      wy = A[1] + (B[1] - A[1]) * s + gauss(rand) * width;
      wz = A[2] + (B[2] - A[2]) * s + gauss(rand) * width;
      sigma = 0.2;
    } else {
      randomDirInto(rand, dir);
      const r = WEB_RADIUS * Math.cbrt(rand());
      wx = dir[0] * r; wy = dir[1] * r; wz = dir[2] * r;
      sigma = 0.06;
    }
    // Lagrangian (pre-clustering) position: the web blurred by primordial displacement.
    let qx = wx + gauss(rand) * sigma, qy = wy + gauss(rand) * sigma, qz = wz + gauss(rand) * sigma;
    const ql = Math.sqrt(qx * qx + qy * qy + qz * qz);
    if (ql > WEB_RADIUS * 1.04) { const k = (WEB_RADIUS * 1.04) / ql; qx *= k; qy *= k; qz *= k; }
    q[i * 3] = qx; q[i * 3 + 1] = qy; q[i * 3 + 2] = qz;
    web[i * 4] = wx; web[i * 4 + 1] = wy; web[i * 4 + 2] = wz;
    // w: node index + 1; 0 for filament matter, −1 for the sparse voids.
    web[i * 4 + 3] = kind >= 0.84 ? -1 : node + 1;
    nodeOf[i] = node;
    rnd[i * 4] = rand(); rnd[i * 4 + 1] = rand(); rnd[i * 4 + 2] = rand(); rnd[i * 4 + 3] = rand();

    // First stars ignite in the dense nodes first; a third die as supernovae.
    let ignite = 99, death = 99, bright = 0;
    const pStar = node === 0 ? 0.03 : node > 0 ? 0.05 : kind < 0.84 ? 0.012 : 0;
    if (rand() < pStar) {
      const m = node >= 0 ? nodes[node].mass : 0.3;
      // The first ignite with the line that names them (12.4 s), the most massive knots first.
      ignite = 11.95 + Math.pow(rand(), 1.5) * 2.4 + (1 - Math.min(1, m / 1.8)) * 0.9;
      bright = 0.45 + Math.pow(rand(), 3) * 2.4;
      // The very first stars were huge, hot and blue: the earliest blaze brightest.
      if (ignite < 12.8) bright *= 2.0;
      if (rand() < 0.34) {
        death = ignite + 1.0 + rand() * 2.2;
        if (death > 17.6) death = 99;
        else if (node >= 0) firstSN[node] = Math.min(firstSN[node], death);
      }
    }
    star[i * 4] = ignite; star[i * 4 + 1] = death; star[i * 4 + 3] = bright;
  }
  yield;
  // Heavy elements spread from the first supernovae; a second, paler generation follows.
  for (let i = 0; i < count; i++) {
    if (i > 0 && i % (chunk * 4) === 0) yield;
    const node = nodeOf[i];
    const enrich = node >= 0 ? firstSN[node] : 99;
    star[i * 4 + 2] = enrich < 99 ? enrich + rnd[i * 4 + 2] * 1.6 : 99;
    if (star[i * 4 + 3] === 0 && enrich < 99 && rand() < 0.045) {
      star[i * 4] = enrich + 0.5 + rand() * 2.2;
      star[i * 4 + 1] = 99;
      star[i * 4 + 3] = -(0.4 + Math.pow(rand(), 3) * 1.4);
    }
  }
  return { nodes, edges };
}

/**
 * The matter's time-independent data, built resumably: `yield* buildMatterData(...)` inside a
 * generator (ending-film.js runs it in idle slices) returns the data createMatter() takes.
 */
export function* buildMatterData(count, nodeCount, chunk = 6000) {
  const arrays = {
    start: new Float32Array(count * 3),
    color: new Float32Array(count * 3),
    size: new Float32Array(count),
    energy: new Float32Array(count),
    q: new Float32Array(count * 3),
    web: new Float32Array(count * 4),
    star: new Float32Array(count * 4),
    rnd: new Float32Array(count * 4),
  };
  const { nodes, edges } = yield* fillCosmos(count, Math.min(nodeCount, MAX_NODES), arrays, chunk);
  return { count, arrays, nodes, edges };
}

// ------------------------------------------------------------------ shaders

const VERT = /* glsl */ `
#define IMPACT ${IMPACT.toFixed(3)}
#define MAX_NODES ${MAX_NODES}
#define QUAD_EXTENT 0.78
attribute vec3 aStart;   // handover position (engine world space; film space for the haze)
attribute vec3 aColor;   // handover colour (linear, sprite energy folded in)
attribute float aSize;   // handover sprite diameter (world units); < 0: estimate it from the colour
attribute float aEnergy; // the sprite energy folded into aColor (handed over with the sizes); < 0: estimate
attribute vec3 aQ;       // comoving position after inflation (pre-clustering)
attribute vec4 aWeb;     // web target xyz, w: node index + 1 (0 = filament, −1 = void)
attribute vec4 aStar;    // ignition, death (supernova), enrichment time, brightness (<0: second generation)
attribute vec4 aRnd;

uniform vec4 uS[2];      // per time sample: (t, a, growth, spin phase)
uniform vec4 uC[2];      // per time sample: (disk radius, disk angle, spin amount, 0)
uniform vec3 uAxis;
uniform vec4 uNodes[MAX_NODES];     // centre, radius
uniform vec4 uNodeAxes[MAX_NODES];  // axis, spin direction
uniform float uTemp, uDiff, uWebFade, uHeroFade, uFilFade, uGain, uEngineMaxPx;
uniform vec2 uHalfView;  // half viewport in px
uniform float uProjScale; // px per world unit at depth 1
uniform float uSize;      // base world radius
uniform float uMinPx, uMaxPx, uMaxStreak;
uniform float uFocus, uAperture, uNearFade;
// The handover (set once per run, see loadHandover): world → film space, the engine's view
// (rows: right, up, forward, from its eye) to measure each particle's distance on the reader's
// screen from the trigger, (kx, ky, trigger x, trigger y), (aspect, 1 / diagonal, radius scale,
// world → film scale).
uniform mat4 uHandover;
uniform mat4 uEngineView;
uniform vec4 uHandA;
uniform vec4 uHandB;

varying vec2 vUv;
varying float vHalf;
varying vec3 vColor;

${HASH}
${PALETTE}
${THERMAL}

// The handover, placed: film-space start, colour, and the collapse schedule
// (x: collapse start, y: arrival, z: settle orbit (< 0: far matter in front), w: engine sprite
// diameter in film units). Evaluated per vertex from the raw engine state, so starting the film
// costs the main thread nothing but one copy of that state.
vec3 hStart;
vec3 hColor;
vec4 hMeta;
float hEnergy;
void placeHandover() {
  hStart = (uHandover * vec4(aStart, 1.0)).xyz;
  // Screen position in the engine view (y down) → distance from the trigger.
  vec3 q = (uEngineView * vec4(aStart, 1.0)).xyz;
  float depth = max(1e-3, q.z);
  float ex = (q.x * uHandA.x / depth + 0.5 - uHandA.z) * uHandB.x;
  float ey = 0.5 - q.y * uHandA.y / depth - uHandA.w;
  float delay = min(1.4, sqrt(ex * ex + ey * ey) * uHandB.y);
  float r = length(hStart);
  // The engine hands over linear colours with the sprite energy folded in. Matter behind the
  // reader's camera was never on screen: it falls dimmed, so it does not scratch the frame as
  // it sweeps past the lens.
  vec3 c = clamp(aColor, 0.0, 6.0);
  hColor = c * (hStart.z > 1.0 && r > 1.2 ? 0.12 : 1.0);
  // The engine folds a sprite energy (∝ size, saturating at 4) into the colour. With the engine's
  // sprite sizes and energies handed over the first frame is exact (colour / energy is the sprite's
  // centre pixel as the engine drew it); otherwise both are estimated back from the colour (palette
  // maxima ~0.9).
  hEnergy = aEnergy > 0.0 ? aEnergy : clamp(max(c.r, max(c.g, c.b)) / 0.9, 0.25, 4.0);
  float size = aSize;
  if (size < 0.0) {
    // Below saturation the energy is linear in size; saturated sprites get a modest size
    // (the seed's broad glow is its own glow's job, see ending-core.js).
    size = hEnergy > 3.8 ? 0.03 : clamp(0.0032 * (hEnergy - 0.25) * 2.2, 0.004, 0.03);
  }
  float rn = min(1.2, r / uHandB.z);
  // Free-fall: the inner matter arrives first, everything is in by the impact.
  // Most matter reaches the disk by ~3.3 s; the farthest threads (and stars) fall in last.
  float arrive = rn > 1.05 ? 3.42 + (rn - 1.05) + aRnd.y * 0.06 : 2.25 + pow(min(1.0, rn), 0.7) + (aRnd.y - 0.5) * 0.12;
  arrive = min(IMPACT - 0.03, arrive);
  // The gathering sweeps across the screen from where the reader pressed. The far matter (the
  // reader's stars) falls longest: it starts drifting early and streams in, accelerating, over
  // the last two seconds.
  float st = min(0.04 + 0.95 * min(1.0, delay) + aRnd.z * 0.16, rn > 1.05 ? arrive - 2.3 : arrive - 1.05);
  // Settle orbit; negative for far matter in front of the reader's camera (see collapsePos).
  float orbit = 0.3 + 0.7 * pow(aRnd.w, 0.7);
  hMeta = vec4(max(0.0, st), arrive, rn > 1.05 && hStart.z < 0.9 ? -orbit : orbit, size * uHandB.w);
}

vec3 rotateAxis(vec3 v, vec3 k, float a) {
  float c = cos(a), s = sin(a);
  return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c);
}

// The old universe falls into one point, spiralling with accelerating, gravity-like easing.
vec3 collapsePos(float t, float diskR, float diskAng) {
  float ts = hMeta.x, ta = hMeta.y;
  float u = clamp((t - ts) / (ta - ts), 0.0, 1.0);
  float f = pow(1.0 - u * u, 0.8);
  vec3 start = hStart;
  if (hMeta.z < 0.0) {
    // Far matter in front of the reader (its stars): a straight fall would hardly move on
    // screen until the last instant, so it is drawn toward the line of sight first — the sky
    // visibly streams toward the point, its streaks lengthening — and plunges at the end.
    start.xy *= 1.0 - 0.8 * smoothstep(0.0, 0.9, u);
  }
  float h0 = dot(start, uAxis);
  vec3 pl = start - uAxis * h0;
  float rp = length(pl);
  vec3 pd = rp > 1e-6 ? pl / rp : vec3(1.0, 0.0, 0.0);
  float orbit = abs(hMeta.z);
  float settled = 1.0 - f;
  float R = rp * f + diskR * orbit * settled;
  float h = h0 * pow(f, 1.7) + diskR * 0.06 * (aRnd.x - 0.5) * settled;
  float wind = (1.0 / (1.0 - 0.88 * settled) - 1.0) * 0.42 * (0.7 + aRnd.z * 0.6);
  float ang = wind + settled * diskAng / pow(orbit, 1.5);
  // The far matter comes straight in — radial streaks converging on the point — instead of
  // being whirled round the camera by the disk's Keplerian spin.
  if (hMeta.z < 0.0) ang = 0.0;
  return rotateAxis(pd, uAxis, ang) * R + uAxis * h;
}

float clusterOf(float g) {
  float x = clamp((g - aRnd.x * 0.3) / 0.7, 0.0, 1.0);
  return x * x * (3.0 - 2.0 * x);
}

// The newborn universe: Hubble flow of the comoving position, then gravitational clustering.
vec3 cosmosPos(float t, float a, float g, float spinPh, float spinAmt) {
  vec3 x = mix(aQ, aWeb.xyz, clusterOf(g));
  int ni = int(aWeb.w + 0.5) - 1;
  if (ni >= 0 && spinAmt > 0.0) {
    vec4 node = uNodes[ni];
    vec4 ax = uNodeAxes[ni];
    vec3 rel = x - node.xyz;
    float hh = dot(rel, ax.xyz);
    vec3 pl = rel - ax.xyz * hh;
    float rn = length(pl) / node.w;
    pl *= mix(1.0, 0.8, spinAmt);
    hh *= mix(1.0, 0.12, spinAmt);
    float ang = spinPh * ax.w * 0.9 / (rn + 0.22);
    pl = rotateAxis(pl, ax.xyz, ang);
    x = node.xyz + pl + ax.xyz * hh;
  }
  // The first sparks jet ahead of the expansion, then rejoin the Hubble flow.
  float spark = step(0.95, aRnd.y);
  float age = max(0.0, t - IMPACT);
  float boost = spark * 0.42 * age / (age + 0.35) * (1.0 - smoothstep(5.0, 6.9, t));
  return x * (a + boost * (0.55 + 0.45 * aRnd.z));
}

// (Single exit and constant uniform indices: HLSL translators otherwise warn about
// potentially uninitialised results.)
vec3 positionAt(vec4 s, vec4 c) {
  vec3 p;
  if (s.x < IMPACT) p = collapsePos(s.x, c.x, c.y);
  else p = cosmosPos(s.x, s.y, s.z, s.w, c.z);
  return p;
}

// The new universe's matter, physically coloured (ending-glsl.js): thermal light by temperature
// (blackbody), the gas and its web in survey / astrophotography colours.
const vec3 ICE = vec3(0.41, 0.54, 1.0);   // the hottest field matter, ~20 000 K blue-white
const vec3 COLD = vec3(1.0, 0.95, 0.92);  // ~6 000 K white
const vec3 DEEP = vec3(0.6, 0.07, 0.0);   // cooled to a dull red glow (~1 100 K)
const vec3 GAS = vec3(0.45, 0.5, 0.66);   // cold neutral gas: a dim blue-grey
const vec3 NODE = vec3(1.0, 0.84, 0.64);  // dense nodes: old, yellowish starlight and hot gas

// Colour (intensity included) and size factor of this particle at time t.
// Before the impact: the reader's matter falling in.
vec3 collapseLook(float t, float rad, out float size) {
  float u = clamp((t - hMeta.x) / (hMeta.y - hMeta.x), 0.0, 1.0);
  float heat = u * u;
  // Falling matter accelerates and heats (blackbody): orange → yellow → white, brighter as it
  // plunges. The reader's far stars fall from furthest and are blueshifted as they fall.
  vec3 hot = hMeta.z < 0.0 ? blackbody(mix(6500.0, 16000.0, heat)) : blackbody(mix(2200.0, 7000.0, heat));
  // Settled matter glows by its orbit, like the disk (T ∝ r^-3/4): white-hot near the point,
  // yellow, orange, a dull orange-red further out.
  float ro = smoothstep(0.35, 1.0, abs(hMeta.z));
  vec3 orbitCol = blackbody(6500.0 * pow(1.0 + 5.0 * ro, -0.75));
  float diskR = uC[0].x;
  // Each parcel keeps its light until it crosses into the disk, then gives it to the disk
  // (ending-core.js), so the swirl stays legible: space darkens because matter leaves it.
  // (Gated by the fall's progress: at the handover every parcel is exactly as the engine drew it.)
  float keep = 1.0 - (1.0 - smoothstep(diskR * 1.1, diskR * 2.8, rad)) * smoothstep(0.1, 0.7, u);
  vec3 hot2 = mix(hot, orbitCol, (1.0 - keep) * smoothstep(0.5, 1.0, heat));
  // The reader's stars (far matter) brighten most: their streaks lengthen and whiten as they fall.
  float beam = hMeta.z < 0.0 ? 4.0 : 1.6;
  vec3 col = mix(hColor, hot2 * max(0.35, dot(hColor, vec3(0.33))), heat * 0.9) * mix(0.06, 1.0, keep) * (1.0 + beam * heat * keep);
  col *= 1.0 - 0.85 * smoothstep(0.86, 1.0, u);
  size = mix(1.0, 0.75, heat);
  return col;
}

// After the impact: the new universe's matter.
vec3 cosmosLook(float t, float g, out float size) {
  size = 1.0;
  // Birth: sparks materialise out of the flash, white-hot, cooling through yellow and orange to a
  // dull red, then differentiating into fields (the hottest blue-white, white, a cooled red).
  float sp = aRnd.w;
  float age = t - IMPACT;
  vec3 hot = thermal(0.12 + 0.88 * uTemp + (sp - 0.5) * 0.12);
  vec3 field = sp < 0.34 ? ICE : sp < 0.67 ? COLD : DEEP;
  // A third of the matter jets out at once as streaks; the rest condenses later as fine dust.
  float spark = step(0.95, aRnd.y);
  float jet = spark * (0.55 * exp(-age * 5.0) + 0.035) * smoothstep(0.0, 0.02, age) * (1.0 - smoothstep(5.6, 7.0, t));
  float dust = 0.15 * smoothstep(7.2, 8.8, t);
  float bright = (jet + dust) * mix(0.35, 1.0, uTemp);
  vec3 col = mix(hot, field * 0.8, uDiff * 0.8) * bright;
  // Structure: cold gas glows where gravity gathers it; nodes glow brighter.
  float c = clusterOf(g);
  float isNode = step(0.5, aWeb.w);
  float voidDim = mix(1.0, 0.3, step(aWeb.w, -0.5));
  // The dark ages are a dim neutral grey; as gravity gathers the gas the filaments light a neutral
  // blue (the cosmic web as surveys render it) and the nodes a yellowish white (voids stay dim).
  float isVoid = step(aWeb.w, -0.5);
  vec3 webTint = mix(mix(WEB, GAS, 0.25 + 0.4 * aRnd.z), mix(WEB, NODE, 0.7 + 0.3 * aRnd.z), isNode);
  vec3 gasTint = mix(GAS, mix(webTint, GAS, isVoid), smoothstep(0.15, 0.85, c));
  // Dim while spread out, brightening as gravity gathers it: dark voids, legible knots.
  vec3 gas = gasTint * (0.14 + 0.82 * c + 0.08 * c * isNode) * (0.5 + aRnd.y) * voidDim;
  col = mix(col, gas, smoothstep(8.4, 11.0, t));
  // Heavy elements from the first supernovae enrich the gas: it brightens and pales toward white,
  // a touch of O-III teal in it.
  float enr = smoothstep(aStar.z, aStar.z + 2.4, t);
  col = mix(col, vec3(0.78, 0.92, 0.95) * dot(col, vec3(0.45)), enr * 0.5);
  // Stars.
  if (aStar.w != 0.0 && t > aStar.x) {
    float age = t - aStar.x;
    float ign = smoothstep(0.0, 0.18, age);
    float b = abs(aStar.w);
    // The first generation (Population III: massive, metal-free, ~40 000 K) burns blue-white; the
    // second (enriched, lighter) sun-like, a yellow-white.
    vec3 sc = aStar.w > 0.0 ? mix(K_POP3, vec3(1.0), 0.25) : blackbody(5400.0);
    // Ignition: a short, bright flare (the first light of the first stars), then a steady glow.
    vec3 st = sc * b * (1.4 + 11.0 * exp(-age * 2.2)) * ign;
    float twinkle = 0.85 + 0.15 * sin(t * (2.0 + aRnd.z * 3.0) + aRnd.y * 6.28);
    st *= twinkle;
    if (t > aStar.y) {
      float sa = t - aStar.y;
      // A supernova: a blue-white flash (~15 000 K), then a slow afterglow — its remnant's H-alpha
      // filaments (pink-red) around a faint O-III (teal) interior.
      st = blackbody(15000.0) * b * 16.0 * exp(-sa * 2.6) + (H_ALPHA * 0.26 + O_III * 0.07) * b * exp(-sa * 0.5);
      size *= 1.0 + 1.5 * exp(-sa * 1.5);
    }
    col = col * 0.25 + st;
    size *= 1.0 + ign * (0.7 + 1.2 * exp(-age * 2.0));
  }
  return col;
}

void main() {
  // (Both time samples share the handover; it only matters before the impact.)
  if (uS[1].x < IMPACT) placeHandover();
  else { hStart = vec3(0.0); hColor = vec3(0.0); hMeta = vec4(0.0, 1.0, 1.0, 0.0); hEnergy = 1.0; }
  vec3 p1 = positionAt(uS[0], uC[0]);
  vec3 p0 = positionAt(uS[1], uC[1]);
  float t = uS[0].x;
  // Across the impact the previous sample is the singularity itself.
  if (uS[1].x < IMPACT && t >= IMPACT) p0 = vec3(0.0);

  float size = 1.0;
  vec3 col;
  if (t < IMPACT) col = collapseLook(t, length(p1), size);
  else col = cosmosLook(t, uS[0].z, size);
  if (t >= IMPACT) {
    col *= mix(1.0, uWebFade, smoothstep(9.0, 10.0, t));
    // Billions of years: the filaments dissolve first, the other galaxies linger a while.
    if (aWeb.w < 0.5) col *= uFilFade;
    if (aWeb.w > 0.5 && aWeb.w < 1.5) col *= uHeroFade * 0.7;
  }

  vec4 v1 = modelViewMatrix * vec4(p1, 1.0);
  vec4 v0 = modelViewMatrix * vec4(p0, 1.0);
  float depth = -v1.z;
  if (depth < uNearFade * 0.25 || dot(col, col) < 1e-8) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    vHalf = 0.0; vUv = vec2(0.0); vColor = vec3(0.0);
    return;
  }
  col *= smoothstep(uNearFade * 0.25, uNearFade, depth);
  if (-v0.z < uNearFade * 0.25) v0 = v1;
  vec4 c1 = projectionMatrix * v1;
  vec4 c0 = projectionMatrix * v0;
  vec2 s1 = c1.xy / c1.w * uHalfView;
  vec2 s0 = c0.xy / c0.w * uHalfView;

  // The web era: a skewed (log-normal-like) spread of sizes — many sub-pixel dust motes, a few
  // larger and dimmer glows — instead of uniform discs.
  float webEra = t > IMPACT ? smoothstep(8.5, 11.0, t) : 0.0;
  float sr = fract(aRnd.y * 7.31 + aRnd.x * 3.71);
  float spread = mix(0.65 + 0.7 * aRnd.y, 0.4 + 2.3 * sr * sr * sr * sr, webEra);
  // A tenth of the filament and node matter is drawn as wide, faint, energy-conserving gas
  // sprites: continuous luminous gas along the filaments under the points.
  float gas = webEra * step(0.9, aRnd.z) * step(-0.5, aWeb.w) * smoothstep(0.35, 0.8, depth);
  // Some of the rest is drawn as large, faint sprites: a soft glow under the points.
  float soft = t > IMPACT ? step(0.86, aRnd.z) * smoothstep(0.5, 0.9, depth) * (1.0 - gas) : 0.0;
  float grow = (1.0 + 1.6 * soft) * (1.0 + 4.0 * gas);
  float rFilm = uSize * size * spread * grow * uProjScale / depth;
  float r = rFilm;
  float filmLook = 1.0;
  if (t < IMPACT) {
    // Until a particle starts to fall it is drawn exactly as the engine drew it (its own sprite
    // size; the colour with the engine's folded-in sprite energy taken back out). As it falls it
    // morphs into the film's sprite with its light conserved.
    filmLook = smoothstep(0.0, 0.9, t - hMeta.x);
    float rEng = 0.5 * hMeta.w * uProjScale / depth;
    r = mix(rEng, rFilm, filmLook);
    col *= (0.84 / hEnergy) * (rEng * rEng) / max(r * r, 1e-8);
  } else {
    // Larger motes are dimmer per pixel; gas spreads its light over its whole sprite.
    // (Finer sprites carry less light: the web era gets some of it back.)
    col *= uGain * mix(1.0, 1.8 / spread, webEra) * mix(1.0, 1.5 / (grow * grow), gas);
  }
  float coc = uAperture * abs(1.0 / depth - 1.0 / uFocus) * uProjScale;
  float rt = sqrt(r * r + coc * coc);
  float energy = (r * r) / (rt * rt + 1e-6);
  rt = min(rt, mix(uEngineMaxPx, uMaxPx * (1.0 + 1.3 * soft) * (1.0 + 4.0 * gas), filmLook));
  if (rt < uMinPx) { energy *= (rt * rt) / (uMinPx * uMinPx); rt = uMinPx; }

  vec2 d = s1 - s0;
  float L = length(d);
  vec2 dir = L > 1e-4 ? d / L : vec2(1.0, 0.0);
  L = min(L, uMaxStreak);
  energy *= rt / (rt + L * 0.85);
  vec2 n = vec2(-dir.y, dir.x);
  float half_ = 0.5 * L;
  vec2 mid = s1 - dir * half_;
  vec2 corner = position.xy;
  // The quad covers only the visible core of the Gaussian (|d| < QUAD_EXTENT radii): less overdraw.
  vec2 sp = mid + dir * corner.x * (half_ + rt * QUAD_EXTENT) + n * corner.y * rt * QUAD_EXTENT;
  gl_Position = vec4(sp / uHalfView * c1.w, c1.z, c1.w);
  vUv = vec2(corner.x * (half_ + rt * QUAD_EXTENT) / rt, corner.y * QUAD_EXTENT);
  vHalf = half_ / rt;
  vColor = col * energy;
}
`;

const FRAG = /* glsl */ `
varying vec2 vUv;
varying float vHalf;
varying vec3 vColor;
void main() {
  float dx = max(abs(vUv.x) - vHalf, 0.0);
  float d2 = dx * dx + vUv.y * vUv.y;
  if (d2 > 0.6084) discard;
  float a = exp(-d2 * 4.0) * (1.0 - d2);
  gl_FragColor = vec4(vColor * a, 1.0);
}
`;

// ------------------------------------------------------------------ system

/**
 * @param {{count:number, arrays:object, nodes:Array, edges:Array}} data  from buildMatterData()
 */
export function createMatter(data) {
  const { count, arrays, nodes, edges } = data;
  const geometry = new THREE.InstancedBufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0], 3));
  geometry.setIndex([0, 1, 2, 0, 2, 3]);
  geometry.instanceCount = count;
  const attr = (name, array, size) => {
    const a = new THREE.InstancedBufferAttribute(array, size);
    geometry.setAttribute(name, a);
    return a;
  };
  const startAttr = attr('aStart', arrays.start, 3);
  const colorAttr = attr('aColor', arrays.color, 3);
  const sizeAttr = attr('aSize', arrays.size, 1);
  const energyAttr = attr('aEnergy', arrays.energy, 1);
  attr('aQ', arrays.q, 3);
  attr('aWeb', arrays.web, 4);
  attr('aStar', arrays.star, 4);
  attr('aRnd', arrays.rnd, 4);
  // Everything moves in the shader; never let three cull the instances.
  geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e6);

  const nodeUniform = [];
  const axisUniform = [];
  for (let i = 0; i < MAX_NODES; i++) {
    const n = nodes[i];
    nodeUniform.push(n ? new THREE.Vector4(n.p[0], n.p[1], n.p[2], n.r) : new THREE.Vector4(0, 0, 0, 1));
    axisUniform.push(n ? new THREE.Vector4(n.axis[0], n.axis[1], n.axis[2], n.spin) : new THREE.Vector4(0, 1, 0, 1));
  }

  const uniforms = {
    uS: { value: [new THREE.Vector4(), new THREE.Vector4()] },
    uC: { value: [new THREE.Vector4(), new THREE.Vector4()] },
    uAxis: { value: new THREE.Vector3(...COLLAPSE_AXIS) },
    uNodes: { value: nodeUniform },
    uNodeAxes: { value: axisUniform },
    uTemp: { value: 1 },
    uDiff: { value: 0 },
    uWebFade: { value: 1 },
    uHeroFade: { value: 1 },
    uFilFade: { value: 1 },
    uGain: { value: 1 },
    uEngineMaxPx: { value: 23 },
    uHalfView: { value: new THREE.Vector2(720, 450) },
    uProjScale: { value: 1000 },
    uSize: { value: 0.0016 },
    uMinPx: { value: 0.8 },
    uMaxPx: { value: 26 },
    uMaxStreak: { value: 260 },
    uFocus: { value: 1 },
    uAperture: { value: 0 },
    uNearFade: { value: 0.02 },
    uHandover: { value: new THREE.Matrix4() },
    uEngineView: { value: new THREE.Matrix4() },
    uHandA: { value: new THREE.Vector4(0.5, 0.5, 0.5, 0.5) },
    uHandB: { value: new THREE.Vector4(1, 1, 1, 1) },
  };
  const material = new THREE.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    uniforms,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.frustumCulled = false;

  /**
   * Load the engine's handover. This runs on the click that opens the film, so the main thread
   * only copies the engine's state (position, colour, sprite size and energy) into the particles'
   * attributes; the vertex shader places it (placeHandover: film space, dimming, sizes, collapse
   * schedule). `xf` (ending-film.js) holds the world → film transform and the engine's view; without
   * an engine state (labs) the matter starts as a faint, centred haze. Sizes are used only together
   * with their energies (the colours carry the energy folded in: sizes alone would draw 1.9–4× too
   * bright); without both, both are estimated from the colour.
   */
  function loadHandover(positions, colors, srcCount, xf, worldToFilm = 1, srcSizes = null, srcEnergies = null) {
    const { start, color, size, energy } = arrays;
    if (!srcSizes || !srcEnergies) { srcSizes = null; srcEnergies = null; }
    const u = uniforms;
    if (!(srcCount > 0 && positions && xf)) {
      loadHaze();
      return;
    }
    const fill = srcCount < count;
    const ratio = srcCount / count;
    if (!fill && colors) {
      // The usual case (the engine hands over at least as many particles): an even subsample.
      for (let i = 0, i3 = 0; i < count; i++, i3 += 3) {
        const j3 = ((i * ratio) | 0) * 3;
        start[i3] = positions[j3]; start[i3 + 1] = positions[j3 + 1]; start[i3 + 2] = positions[j3 + 2];
        color[i3] = colors[j3]; color[i3 + 1] = colors[j3 + 1]; color[i3 + 2] = colors[j3 + 2];
      }
      if (srcSizes) {
        for (let i = 0; i < count; i++) {
          const j = (i * ratio) | 0;
          size[i] = srcSizes[j];
          energy[i] = srcEnergies[j];
        }
      } else { size.fill(-1); energy.fill(-1); }
    } else {
      // A small engine state is filled with near copies (sub-pixel jitter, in film units).
      const jitter = rng(5521);
      const jit = 0.012 / xf.scale;
      for (let i = 0; i < count; i++) {
        const j = fill ? i % srcCount : (i * ratio) | 0;
        const i3 = i * 3, j3 = j * 3;
        start[i3] = positions[j3]; start[i3 + 1] = positions[j3 + 1]; start[i3 + 2] = positions[j3 + 2];
        if (fill && i >= srcCount) {
          start[i3] += (jitter() - 0.5) * jit; start[i3 + 1] += (jitter() - 0.5) * jit; start[i3 + 2] += (jitter() - 0.5) * jit;
        }
        if (colors) { color[i3] = colors[j3]; color[i3 + 1] = colors[j3 + 1]; color[i3 + 2] = colors[j3 + 2]; }
        else { color[i3] = 0.7; color[i3 + 1] = 0.85; color[i3 + 2] = 1.0; }
        size[i] = srcSizes ? srcSizes[j] : -1;
        energy[i] = srcEnergies ? srcEnergies[j] : -1;
      }
    }
    // World → film: translate to the collapse point, rotate into the film basis, scale.
    const m = u.uHandover.value, X = xf.x, Y = xf.y, Z = xf.z, P = xf.p0, k = xf.scale;
    m.set(
      X[0] * k, X[1] * k, X[2] * k, -(X[0] * P[0] + X[1] * P[1] + X[2] * P[2]) * k,
      Y[0] * k, Y[1] * k, Y[2] * k, -(Y[0] * P[0] + Y[1] * P[1] + Y[2] * P[2]) * k,
      Z[0] * k, Z[1] * k, Z[2] * k, -(Z[0] * P[0] + Z[1] * P[1] + Z[2] * P[2]) * k,
      0, 0, 0, 1,
    );
    // The engine's view: (right, up, forward) from its eye.
    const v = u.uEngineView.value, R = xf.right, V = xf.up, F = xf.forward, E = xf.eye;
    v.set(
      R[0], R[1], R[2], -(R[0] * E[0] + R[1] * E[1] + R[2] * E[2]),
      V[0], V[1], V[2], -(V[0] * E[0] + V[1] * E[1] + V[2] * E[2]),
      F[0], F[1], F[2], -(F[0] * E[0] + F[1] * E[1] + F[2] * E[2]),
      0, 0, 0, 1,
    );
    u.uHandA.value.set(xf.kx, xf.ky, xf.ox, xf.oy);
    // Robust radius scale: the 97th percentile of the film-space radii (sampled).
    const e = m.elements;
    const rRef = radiusScale((i) => {
      const x = start[i * 3], y = start[i * 3 + 1], z = start[i * 3 + 2];
      const fx = e[0] * x + e[4] * y + e[8] * z + e[12];
      const fy = e[1] * x + e[5] * y + e[9] * z + e[13];
      const fz = e[2] * x + e[6] * y + e[10] * z + e[14];
      return Math.sqrt(fx * fx + fy * fy + fz * fz);
    });
    u.uHandB.value.set(xf.aspect, xf.invDiag, rRef, worldToFilm);
    startAttr.needsUpdate = true;
    colorAttr.needsUpdate = true;
    sizeAttr.needsUpdate = true;
    energyAttr.needsUpdate = true;

    /** No engine state (labs): a faint, centred haze, already in film space. */
    function loadHaze() {
      const jitter = rng(5521);
      const d = [0, 0, 0];
      for (let i = 0; i < count; i++) {
        randomDirInto(jitter, d);
        const r = 0.15 + 0.6 * Math.cbrt(jitter());
        start[i * 3] = d[0] * r; start[i * 3 + 1] = d[1] * r * 0.4; start[i * 3 + 2] = d[2] * r;
        color[i * 3] = 0.7; color[i * 3 + 1] = 0.88; color[i * 3 + 2] = 1.0;
        size[i] = 0.003;
        energy[i] = -1;
      }
      u.uHandover.value.identity();
      // A unit 'view' that makes the sweep delay half the distance from the axis.
      u.uEngineView.value.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1);
      u.uHandA.value.set(0.5, 0.5, 0.5, 0.5);
      const rRef = radiusScale(i => Math.hypot(start[i * 3], start[i * 3 + 1], start[i * 3 + 2]));
      u.uHandB.value.set(1, 1, rRef, 1);
      startAttr.needsUpdate = true;
      colorAttr.needsUpdate = true;
      sizeAttr.needsUpdate = true;
      energyAttr.needsUpdate = true;
    }
  }

  /** The 97th percentile of radius(i) over ~4 000 sampled particles. */
  function radiusScale(radius) {
    const every = Math.max(1, Math.floor(count / 4000));
    const sample = new Float32Array(Math.ceil(count / every));
    let n = 0;
    for (let i = 0; i < count; i += every) sample[n++] = radius(i);
    sample.sort();
    return Math.max(1e-4, sample[Math.floor(n * 0.97)] || 1);
  }

  /** Per-frame uniforms: the two time samples for motion blur and the view constants. */
  function update(frame, view) {
    const t = frame.t;
    const tp = Math.max(0, t - frame.shutter);
    setSample(uniforms.uS.value[0], uniforms.uC.value[0], t);
    setSample(uniforms.uS.value[1], uniforms.uC.value[1], tp);
    uniforms.uTemp.value = frame.temp;
    uniforms.uDiff.value = frame.diff;
    uniforms.uWebFade.value = frame.webFade;
    uniforms.uHeroFade.value = frame.heroFade;
    uniforms.uFilFade.value = frame.filFade;
    uniforms.uGain.value = frame.matterGain * view.gain;
    uniforms.uHalfView.value.set(view.width * 0.5, view.height * 0.5);
    uniforms.uProjScale.value = view.projScale;
    uniforms.uMinPx.value = 0.75 * view.pixelRatio;
    uniforms.uMaxPx.value = 4 * view.pixelRatio;
    uniforms.uEngineMaxPx.value = 23 * view.pixelRatio;
    uniforms.uMaxStreak.value = 0.22 * view.height;
    uniforms.uFocus.value = view.focus;
    uniforms.uAperture.value = view.aperture;
    uniforms.uNearFade.value = view.nearFade;
    uniforms.uSize.value = view.size;
  }

  function setSample(s, c, t) {
    s.set(t, scaleFactor(t), growth(t), spinPhase(t));
    c.set(diskRadius(t), diskAngle(t), spinAmount(t), 0);
  }

  function dispose() {
    geometry.dispose();
    material.dispose();
  }

  return { mesh, loadHandover, update, dispose, nodes, edges, count };
}
