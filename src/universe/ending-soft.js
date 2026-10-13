// The film's volumetric light, in two passes:
//
//  · the soft pass (low resolution, blurred): the newborn plasma seen from outside as an
//    incandescent fireball (ray-marched) — white-hot at its heart, ice cyan, a deep-blue limb —
//    the vacuum choosing its state as a few nucleating bubbles; later the dark ages' gas
//    condensing into the first density knots (analytic line integrals of one Gaussian cloud per
//    web node);
//  · the thread pass (near full resolution, no blur): inside the plasma. Inflation drags the
//    eye through a web of incandescent threads — white-hot cores burning out through ice cyan
//    into deep-blue skirts — that thin, split into deep-blue and pale ice strands, break into
//    beads and dissolve. One hue family throughout (ending-glsl.js PALETTE).
//    The threads are anti-aliased iso-lines of a 3D field cut by a few spherical shells around
//    the camera: crisp at any resolution, no ray-march noise, honest parallax.
// Both are added into the HDR scene before the particles.
import * as THREE from 'three';
import { BURN, FULLSCREEN_VERT, HASH, PALETTE, SIMPLEX } from './ending-glsl.js';
import { PLASMA_RADIUS } from './ending-layout.js';

/**
 * The true-vacuum bubbles (comoving centre, nucleation time, wall speed). Few, staggered and of
 * very different sizes, placed on the hemisphere that faces the camera during the birth (+Z),
 * so they read as volumes growing inside the fireball and merge by ~5.5 s.
 */
const BUBBLES = [
  [0.75, 0.5, 1.95, 4.42, 2.25],
  [-1.25, -0.55, 1.75, 4.58, 1.85],
  [0.35, -1.45, 1.6, 4.7, 2.0],
  [-0.55, 1.45, 1.75, 4.86, 1.55],
  [1.65, -0.55, 1.35, 5.0, 1.6],
  [-1.75, 0.95, 0.95, 5.12, 1.35],
];

/** Broad radius of a gas cloud before gravity gathers it (film units). */
const GAS_BROAD = 0.3;

const FRAG = (steps, octaves, knots) => /* glsl */ `
#define STEPS ${steps}
#define OCTAVES ${octaves}
#define BUBBLES ${BUBBLES.length}
#define KNOTS ${knots}
uniform vec3 uCamPos, uCamRight, uCamUp, uCamFwd;
uniform vec2 uTan;
uniform float uTime, uA, uAPrev, uTemp, uEmit, uKappa, uBubble, uBubbleDone, uFill, uPlasma;
uniform float uSupercool, uWall;
uniform float uGas, uCondense, uGasLit;
uniform vec4 uBub[BUBBLES];    // comoving centre, nucleation time
uniform float uBubV[BUBBLES];  // wall speed, comoving units per second
uniform vec4 uKnot[KNOTS];     // centre, condensed radius
uniform vec4 uKnotB[KNOTS];    // light, collapse delay (0..1), tint, -
varying vec2 vUv;
${HASH}
${SIMPLEX}
${PALETTE}
${BURN}

float fbm(vec3 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < OCTAVES; i++) { v += a * snoise(p); p = p * 2.03 + vec3(1.7, 9.2, 3.1); a *= 0.5; }
  return v;
}

// True-vacuum bubbles; returns (inside, wall). wob: a low-frequency noise shared with the
// fireball's edge, so no wall is a perfect circle.
vec2 bubbles(vec3 c, float wob) {
  float ins[BUBBLES];
  float dist[BUBBLES];
  float inside = 0.0;
  for (int i = 0; i < BUBBLES; i++) {
    float R = max(0.0, uTime - uBub[i].w) * uBubV[i];
    dist[i] = length(c - uBub[i].xyz) + wob * 0.2 * min(R, 1.4) - R;
    ins[i] = R > 0.0 ? smoothstep(0.03, -0.03, dist[i]) : 0.0;
    inside = max(inside, ins[i]);
  }
  // Walls are thin and bright; where two bubbles have merged the wall between them is gone.
  float wall = 0.0;
  for (int i = 0; i < BUBBLES; i++) {
    float R = max(0.0, uTime - uBub[i].w) * uBubV[i];
    float w = 0.035 + 0.012 * R;
    float x = dist[i] / w;
    float others = 0.0;
    for (int j = 0; j < BUBBLES; j++) if (j != i) others = max(others, ins[j]);
    wall = max(wall, R > 0.0 ? exp(-x * x) * smoothstep(0.0, 0.3, R) * (1.0 - others) : 0.0);
  }
  return vec2(inside, wall);
}

// The fireball seen from outside (the camera is engulfed at ~6 s; the thread pass takes over).
vec3 plasma(vec3 ro, vec3 rd) {
  float rho = uA * ${PLASMA_RADIUS.toFixed(2)};
  // The ragged edge reaches a little past rho.
  float rb = rho * 1.1;
  float b = dot(ro, rd);
  float c = dot(ro, ro) - rb * rb;
  float disc = b * b - c;
  bool outside = c > 0.0;
  // The fireball's light spills into the dark around its limb.
  vec3 halo = vec3(0.0);
  if (outside && b < 0.0) {
    float miss = sqrt(max(dot(ro, ro) - b * b, 0.0));
    float h = max(miss - rho * 0.92, 0.0) / max(rho, 1e-4);
    halo = burn(0.6 * uTemp - 0.3 * uSupercool) * exp(-h * 6.0) * 0.006 * smoothstep(0.7 * rho, 0.98 * rho, miss);
  }
  if (disc <= 0.0) return halo * uEmit;
  float sq = sqrt(disc);
  float t0 = max(-b - sq, outside ? 0.0 : 0.3);
  float t1 = -b + sq;
  if (t1 <= 0.0) return halo * uEmit;
  bool bubbling = uBubble > 0.0 && uBubbleDone < 1.0;
  // March a limited depth: nearer structure dominates, far layers do not fog the view.
  float span = min(t1 - t0, min(2.6 / (uKappa * (bubbling ? 0.55 : 1.0)), 1.6));
  // Interleaved gradient noise: low-discrepancy and static; the soft-layer blur smooths it.
  float jitter = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
  float dt = span / float(STEPS);
  vec3 acc = vec3(0.0);
  float trans = 1.0;
  // Sight lines through the middle reach the hot core; toward the limb they only graze the
  // cooler outer layers: a white-hot core burning out through ice cyan into deep blue.
  float mu = 1.0;
  if (outside) {
    float miss = sqrt(max(dot(ro, ro) - b * b, 0.0)) / max(rho, 1e-5);
    mu = sqrt(max(1.0 - miss * miss, 0.0));
  }
  float coreHeat = outside ? 0.55 * pow(1.0 - mu, 1.3) : 0.0;
  for (int i = 0; i < STEPS; i++) {
    float fi = (float(i) + jitter) / float(STEPS);
    vec3 p = ro + rd * (t0 + fi * span);
    // Motion blur along the expansion: each sample sees a slightly earlier scale factor.
    float ai = max(mix(uA, uAPrev, fi), 1e-4);
    vec3 cpos = p / ai;
    float rn = length(p) / max(rho, 1e-5);
    vec3 q = cpos * 1.45 + vec3(0.0, 0.0, uTime * 0.14);
    float warp = snoise(q * 0.6 + 5.0);
    float n = fbm(q + warp * 0.75);
    // Filaments: where two noise zero-sets meet (curves in 3D, crisp in projection).
    float s1 = snoise(q * 1.25 + 3.1 + n * 0.8);
    float s2 = snoise(q * 1.25 - 5.7 - n * 0.8);
    float fil = pow(1.0 - abs(s1), 8.0) * pow(1.0 - abs(s2), 8.0) * smoothstep(-0.15, 0.45, n);
    float wob = snoise(cpos * 1.1 + 7.3);
    // A soft, torn edge rather than the hard limb of a solid ball.
    float edge = smoothstep(1.08 + 0.09 * wob, 0.66 + 0.09 * wob, rn);
    vec2 bw = bubbling ? bubbles(cpos, wob) : vec2(0.0);
    float phase = max(bw.x, uBubbleDone);
    // False vacuum: a turbulent, smooth glow. True vacuum: bright threads in a clear medium.
    float glow = 0.3 + 0.7 * smoothstep(-0.55, 0.6, n);
    float threads = fil * 4.0 + smoothstep(0.3, 0.9, n) * 0.1;
    float dens = mix(glow, mix(threads, glow, uFill), phase) * edge;
    // The supercooled false vacuum sinks to a dimmer, deeper blue; the reheated true vacuum inside
    // the bubbles burns hotter (paler, brighter).
    float k = uTemp + 0.24 * n - coreHeat - 0.22 * smoothstep(0.8, 1.08, rn) - uSupercool * (1.0 - phase) + 0.14 * min(fil * 3.0, 1.0);
    float fresh = bw.x * (1.0 - uBubbleDone);
    vec3 src = burn(k) * (1.0 + 0.9 * fresh);
    float kap = uKappa * mix(1.0, 0.3, fresh);
    float front = exp(-fi * 1.2);
    // The bubble walls: a thin, bright, ice-white front where the latent heat is released.
    vec3 wall = P_HI * bw.y * uWall * edge;
    acc += trans * (src * dens + wall) * dt * front;
    trans *= exp(-kap * dens * dt);
    if (trans < 0.02) break;
  }
  return (acc + halo) * uEmit;
}

// The dark ages' gas: one Gaussian cloud per web node, integrated analytically along the ray.
// Each starts broad and faint (an almost uniform haze) and collapses on its own schedule —
// massive knots first — conserving its light, so it brightens as it condenses.
vec3 gas(vec3 ro, vec3 rd) {
  vec3 acc = vec3(0.0);
  for (int i = 0; i < KNOTS; i++) {
    vec4 ka = uKnot[i];
    vec4 kb = uKnotB[i];
    float x = clamp((uCondense - kb.y) / (1.0 - kb.y + 1e-3), 0.0, 1.0);
    x = x * x * (3.0 - 2.0 * x);
    float sig = mix(${GAS_BROAD.toFixed(3)}, ka.w, x);
    vec3 v = ka.xyz - ro;
    float tc = dot(v, rd);
    float b2 = max(dot(v, v) - tc * tc, 0.0);
    float s2 = sig * sig;
    // Most knots are far from most sight lines (or behind the camera): skip them early.
    if (b2 > 40.0 * s2 || tc < -2.5 * sig) continue;
    // Column density of a normalised 3D Gaussian (erf by tanh): a dense core in a wider halo.
    // (Normalised as 1/σ^1.5, not 1/σ²: the gas also heats as it collapses, so the broad clouds
    // already glow and the knots do not blind.)
    float col = (exp(-b2 / s2) * 0.62 + exp(-b2 / (s2 * 6.0)) * 0.38 / 6.0) * (0.5 + 0.5 * tanh(1.15 * tc / sig)) * sqrt(sig) * 2.5 / s2;
    // Not over the lens: a cloud the camera is inside only lifts the haze.
    col *= smoothstep(sig * 0.6, sig * 2.2, length(v));
    // Cold gas: deep blue in the small knots, paler ice in the massive ones.
    vec3 tint = mix(P_DEEP, vec3(0.5, 0.82, 1.0), kb.z);
    // The first stars light the densest knots once they ignite: their gas brightens toward ice-white.
    tint = mix(tint, P_HI * 1.15, uGasLit * x * kb.z);
    acc += tint * col * kb.x * (0.35 + 0.65 * x);
  }
  return acc;
}

void main() {
  vec2 ndc = vUv * 2.0 - 1.0;
  vec3 rd = normalize(uCamFwd + ndc.x * uTan.x * uCamRight + ndc.y * uTan.y * uCamUp);
  vec3 col = vec3(0.0);
  if (uPlasma > 0.001) col += plasma(uCamPos, rd) * uPlasma;
  if (uGas > 0.001) col += gas(uCamPos, rd) * uGas;
  gl_FragColor = vec4(col, 1.0);
}
`;

const THREAD_FRAG = shells => /* glsl */ `
#define SHELLS ${shells}
uniform vec3 uCamPos, uCamRight, uCamUp, uCamFwd;
uniform vec2 uTan;
uniform float uTime, uA, uTemp, uDiff, uGain, uOpen, uBead, uDense, uRho, uCool;
uniform float uNear, uRatio;
varying vec2 vUv;
${SIMPLEX}
${PALETTE}
${BURN}

// The second family of strands (differentiation): pale ice, white at the core.
const vec3 ICE = vec3(0.36, 0.82, 1.0);

// A strand's cross-section: a thin core and a short skirt (fainter, so it burns a deeper blue).
float strand(float x, float wc, float hw) {
  return exp(-x * x / (wc * wc)) * 0.82 + exp(-x / hw) * 0.18;
}

void main() {
  vec2 ndc = vUv * 2.0 - 1.0;
  vec3 rd = normalize(uCamFwd + ndc.x * uTan.x * uCamRight + ndc.y * uTan.y * uCamUp);
  vec3 col = vec3(0.0);
  float d = uNear;
  // Incandescence: a strand's temperature follows its brightness — white-hot where it blazes,
  // ice cyan, then deep blue toward its faint parts and edges. The whole web cools with time.
  float kBase = mix(0.24, 0.04, uCool);
  float kSpan = mix(0.98, 0.7, uCool);
  // Strands run in braided bundles (iso-lines of one field at a few levels); as the plasma thins
  // the outer strands fade, and pale ice strands appear between the cooling deep-blue ones
  // (differentiation).
  const float LEVEL = 0.1;
  for (int k = 0; k < SHELLS; k++) {
    float fk = float(k);
    vec3 p = uCamPos + rd * d;
    vec3 q = p / uA * 1.5 + vec3(0.0, 0.0, uTime * 0.05);
    // Large-scale field (which regions carry strands); a two-field warp stretches the iso-lines
    // into long flowing filaments; a third field sets each strand's brightness along its length.
    float n = snoise(q * 0.4 + 5.3);
    float w1 = snoise(q * 0.62 - 2.1);
    float w2 = snoise(q * 0.62 + 7.7);
    vec3 off = vec3(w1, w2, w1 - w2) * 0.62;
    float s = snoise(q + off);
    float m = snoise(q * 1.6 + off * 1.4 + 3.3);
    float fw = max(fwidth(s), 1e-4);
    // The nearest shell is a little out of focus.
    float bpx = 2.2 * exp(-fk * 1.8);
    float wc = fw * (1.05 + bpx);
    float focus = 1.05 / (1.05 + bpx);
    float hw = fw * (2.4 + bpx);
    float dense = uDense * smoothstep(0.5, 2.0, fk);
    float hotV = strand(abs(s), wc, hw)
      + dense * (0.62 * (strand(abs(s - LEVEL), wc, hw) + strand(abs(s + LEVEL), wc, hw))
               + 0.34 * (strand(abs(s - 2.0 * LEVEL), wc, hw) + strand(abs(s + 2.0 * LEVEL), wc, hw)));
    float iceV = uDiff > 0.0 ? strand(abs(s - 0.5 * LEVEL), wc, hw) + 0.55 * strand(abs(s + 1.5 * LEVEL), wc, hw) : 0.0;
    // Where strands would crowd below a few pixels apart they fade instead of aliasing.
    float crowd = 1.0 - smoothstep(0.035, 0.09, fw);
    float gate = smoothstep(uOpen, uOpen + 0.45, n);
    float along = 0.22 + 0.78 * smoothstep(-0.55, 0.75, m);
    float bead = 1.0;
    if (uBead > 0.0) bead = mix(1.0, smoothstep(0.1, 0.62, snoise(q * 3.4 + off * 2.0 + 9.1)), uBead);
    float edge = smoothstep(1.08, 0.82, length(p) / uRho);
    float att = gate * edge * crowd * bead * focus * (1.0 - 0.08 * fk);
    float lum = min(hotV, 1.6) * along;
    // Farther strands are a little cooler (the eye reads them as deeper).
    vec3 hot = burn(kBase + kSpan * min(lum, 1.15) - 0.03 * fk) * lum;
    float li = iceV * along;
    vec3 ice = (ICE + vec3(0.6) * li * li) * li * 1.25;
    col += (hot * (1.0 - 0.35 * uDiff) + ice * uDiff * smoothstep(-0.4, 0.4, 0.15 - n)) * att;
    d *= uRatio;
  }
  gl_FragColor = vec4(col * uGain, 1.0);
}
`;

/**
 * @param {{steps:number, octaves:number, shells:number, nodes:Array}} opts
 * nodes: the cosmic web's nodes (ending-matter.js), each {p, mass, r}.
 */
export function createSoft({ steps, octaves, shells, nodes }) {
  const knots = Math.max(1, nodes.length);
  const knotA = [];
  const knotB = [];
  let maxMass = 0;
  for (const n of nodes) maxMass = Math.max(maxMass, n.mass);
  for (let i = 0; i < knots; i++) {
    const n = nodes[i];
    if (!n) { knotA.push(new THREE.Vector4(0, 0, 0, 1)); knotB.push(new THREE.Vector4(0, 1, 0, 0)); continue; }
    const m = n.mass / maxMass;
    // Massive knots collapse first and condense furthest.
    knotA.push(new THREE.Vector4(n.p[0], n.p[1], n.p[2], Math.max(0.035, n.r * (i === 0 ? 0.5 : 0.75))));
    knotB.push(new THREE.Vector4(0.0011 * (0.35 + n.mass), 0.42 * (1 - Math.sqrt(m)), Math.sqrt(m), 0));
  }
  const uniforms = {
    uCamPos: { value: new THREE.Vector3() },
    uCamRight: { value: new THREE.Vector3() },
    uCamUp: { value: new THREE.Vector3() },
    uCamFwd: { value: new THREE.Vector3() },
    uTan: { value: new THREE.Vector2(1, 1) },
    uTime: { value: 0 }, uA: { value: 0 }, uAPrev: { value: 0 },
    uTemp: { value: 1 }, uEmit: { value: 0 }, uKappa: { value: 1 },
    uBubble: { value: 0 }, uBubbleDone: { value: 0 }, uFill: { value: 0.2 }, uPlasma: { value: 0 },
    uSupercool: { value: 0 }, uWall: { value: 0 },
    uGas: { value: 0 }, uCondense: { value: 0 }, uGasLit: { value: 0 },
    uBub: { value: BUBBLES.map(b => new THREE.Vector4(b[0], b[1], b[2], b[3])) },
    uBubV: { value: BUBBLES.map(b => b[4]) },
    uKnot: { value: knotA },
    uKnotB: { value: knotB },
  };
  const material = new THREE.ShaderMaterial({
    vertexShader: FULLSCREEN_VERT,
    fragmentShader: FRAG(steps, octaves, knots),
    uniforms,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  });

  const threadUniforms = {
    uCamPos: uniforms.uCamPos,
    uCamRight: uniforms.uCamRight,
    uCamUp: uniforms.uCamUp,
    uCamFwd: uniforms.uCamFwd,
    uTan: uniforms.uTan,
    uTime: uniforms.uTime, uA: uniforms.uA, uTemp: uniforms.uTemp,
    uDiff: { value: 0 }, uGain: { value: 0 }, uOpen: { value: 0 }, uBead: { value: 0 }, uDense: { value: 0 },
    uRho: { value: 1 }, uCool: { value: 0 },
    // Shell radii: uNear · uRatio^k (film units), from a little past the lens to the plasma's depth.
    uNear: { value: 0.13 }, uRatio: { value: Math.pow(1.45 / 0.13, 1 / Math.max(1, shells - 1)) },
  };
  const threads = new THREE.ShaderMaterial({
    vertexShader: FULLSCREEN_VERT,
    fragmentShader: THREAD_FRAG(shells),
    uniforms: threadUniforms,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  });

  const flags = { soft: false, threads: false };

  /**
   * Per-frame uniforms. cam: the camera (ending-camera.js); aPrev: the scale factor one shutter
   * earlier (the fireball's motion blur). Returns which passes have anything to draw.
   */
  function update(frame, cam, aspect, aPrev) {
    uniforms.uCamPos.value.set(cam.position[0], cam.position[1], cam.position[2]);
    uniforms.uCamRight.value.set(cam.right[0], cam.right[1], cam.right[2]);
    uniforms.uCamUp.value.set(cam.up[0], cam.up[1], cam.up[2]);
    uniforms.uCamFwd.value.set(-cam.dir[0], -cam.dir[1], -cam.dir[2]);
    const tanH = Math.tan((cam.fov * Math.PI) / 360);
    uniforms.uTan.value.set(tanH * aspect, tanH);
    uniforms.uTime.value = frame.t;
    uniforms.uA.value = Math.max(frame.a, 1e-4);
    uniforms.uAPrev.value = Math.max(aPrev, 1e-4);
    uniforms.uTemp.value = frame.temp;
    uniforms.uEmit.value = frame.plasmaEmit;
    uniforms.uKappa.value = frame.plasmaKappa;
    uniforms.uBubble.value = frame.bubble;
    uniforms.uBubbleDone.value = frame.bubbleDone;
    uniforms.uFill.value = frame.plasmaFill;
    uniforms.uSupercool.value = frame.supercool;
    uniforms.uWall.value = frame.bubbleWall;
    uniforms.uPlasma.value = frame.plasma * (frame.plasmaEmit > 0.001 ? 1 : 0);
    uniforms.uGas.value = frame.gas;
    uniforms.uCondense.value = frame.condense;
    uniforms.uGasLit.value = frame.gasLit;
    flags.soft = uniforms.uPlasma.value > 0.001 || frame.gas > 0.001;

    threadUniforms.uGain.value = frame.threads;
    flags.threads = frame.threads > 0.001;
    if (flags.threads) {
      threadUniforms.uDiff.value = frame.diff;
      threadUniforms.uOpen.value = frame.threadOpen;
      threadUniforms.uBead.value = frame.threadBead;
      threadUniforms.uDense.value = frame.threadDense;
      threadUniforms.uCool.value = frame.threadCool;
      threadUniforms.uRho.value = Math.max(1e-3, frame.a * PLASMA_RADIUS * 1.1);
    }
    return flags;
  }

  return {
    material, threads, update,
    dispose: () => { material.dispose(); threads.dispose(); },
  };
}
