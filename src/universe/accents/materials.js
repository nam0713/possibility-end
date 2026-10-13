// Reusable accent building blocks: soft glow billboards and hairline "pulse lines" whose light
// travels along each segment (optionally in steps that pause, or revealed by a radial threshold).

import * as THREE from 'three';
import { timeChunk } from '../particles/shaders.js';

export const additive = {
  transparent: true,
  depthWrite: false,
  depthTest: true,
  blending: THREE.CustomBlending,
  blendEquation: THREE.AddEquation,
  blendSrc: THREE.OneFactor,
  blendDst: THREE.OneFactor,
};

const quad = new THREE.PlaneGeometry(2, 2);

const billboardVertex = /* glsl */ `
uniform float uScale;
varying vec2 vUv;
void main() {
  vUv = position.xy;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  mv.xy += position.xy * uScale;
  gl_Position = projectionMatrix * mv;
}
`;

const glowFragment = /* glsl */ `
${timeChunk}
uniform vec3 uCore;
uniform vec3 uHalo;
uniform float uIntensity;
uniform float uOpacity;
uniform float uTime;
uniform float uFlicker;
uniform float uBreath;
uniform float uRays;
varying vec2 vUv;
void main() {
  float r = length(vUv);
  if (r > 1.0) discard;
  float breath = 1.0 + uBreath * sin(uTime * qRate(0.9));
  float flick = 1.0 + uFlicker * (0.45 * sin(uTime * qRate(7.3)) + 0.3 * sin(uTime * qRate(12.9) + 1.0) + 0.25 * sin(uTime * qRate(21.7) + 2.0));
  float core = exp(-r * r * 160.0 / breath);
  float inner = exp(-r * r * 22.0 / breath);
  float halo = exp(-r * 5.0) * (1.0 - r);
  float ang = atan(vUv.y, vUv.x);
  float rays = uRays * pow(abs(cos(ang * 2.0 + 0.4)), 80.0) * exp(-r * 3.5) * (1.0 - r);
  vec3 c = uCore * (core * 4.0 + inner * 0.55) + uHalo * (halo * 0.55 + rays * 0.5);
  gl_FragColor = vec4(c * (uIntensity * uOpacity * flick * breath), 1.0);
}
`;

/** Soft, camera-facing glow with optional flicker/breathing/rays. */
export function createGlow({ core, halo, scale = 0.5, intensity = 1, flicker = 0, breath = 0, rays = 0 }) {
  const uniforms = {
    uScale: { value: scale },
    uCore: { value: new THREE.Vector3(...core) },
    uHalo: { value: new THREE.Vector3(...halo) },
    uIntensity: { value: intensity },
    uOpacity: { value: 0 },
    uTime: { value: 0 },
    uFlicker: { value: flicker },
    uBreath: { value: breath },
    uRays: { value: rays },
  };
  const mesh = new THREE.Mesh(quad, new THREE.ShaderMaterial({ name: 'AccentGlow', uniforms, vertexShader: billboardVertex, fragmentShader: glowFragment, ...additive }));
  mesh.frustumCulled = false;
  mesh.renderOrder = 20;
  return mesh;
}

export const billboard = { vertex: billboardVertex, quad };

const lineVertex = /* glsl */ `
attribute float aT;
attribute float aSeed;
attribute float aR;
varying float vT;
varying float vSeed;
varying float vR;
varying float vDepth;
void main() {
  vT = aT;
  vSeed = aSeed;
  vR = aR;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`;

const lineFragment = /* glsl */ `
uniform float uPhase;
uniform float uOpacity;
uniform float uBase;
uniform float uPulse;
uniform float uDensity;
uniform float uWidth;
uniform float uStep;
uniform float uReveal;
uniform float uFocus;
uniform vec3 uColor;
uniform vec3 uPulseColor;
varying float vT;
varying float vSeed;
varying float vR;
varying float vDepth;
void main() {
  float s = uPhase + vSeed;
  if (uStep > 0.5) s = floor(s) + smoothstep(0.2, 0.8, fract(s));
  float ph = fract(vT * uDensity - s);
  float pulse = exp(-pow((ph - 0.5) / uWidth, 2.0));
  float gate = 1.0 - smoothstep(uReveal - 0.05, uReveal, vR);
  float depth = clamp(1.3 - (vDepth - uFocus) / uFocus * 1.6, 0.3, 1.0);
  vec3 c = uColor * uBase + uPulseColor * (uPulse * pulse);
  gl_FragColor = vec4(c * (uOpacity * gate * depth), 1.0);
}
`;

/**
 * Hairline segments with travelling pulses.
 * segments: array of {a:[x,y,z], b:[x,y,z], t0, t1, seed, r0, r1}; t0/t1 = curve parameter at the
 * ends (pulses travel toward increasing t), r0/r1 = reveal parameter at the ends.
 */
export function createPulseLines(segments, opts = {}) {
  const n = segments.length;
  const pos = new Float32Array(n * 6);
  const t = new Float32Array(n * 2);
  const seed = new Float32Array(n * 2);
  const r = new Float32Array(n * 2);
  segments.forEach((s, i) => {
    pos.set(s.a, i * 6);
    pos.set(s.b, i * 6 + 3);
    t[i * 2] = s.t0 ?? 0;
    t[i * 2 + 1] = s.t1 ?? 1;
    seed[i * 2] = seed[i * 2 + 1] = s.seed ?? 0;
    r[i * 2] = s.r0 ?? 0;
    r[i * 2 + 1] = s.r1 ?? 0;
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aT', new THREE.BufferAttribute(t, 1));
  g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  g.setAttribute('aR', new THREE.BufferAttribute(r, 1));
  const uniforms = {
    uPhase: { value: 0 },
    uOpacity: { value: 0 },
    uBase: { value: opts.base ?? 0.05 },
    uPulse: { value: opts.pulse ?? 0.6 },
    uDensity: { value: opts.density ?? 1 },
    uWidth: { value: opts.width ?? 0.06 },
    uStep: { value: opts.step ? 1 : 0 },
    uReveal: { value: opts.reveal ?? 10 },
    uFocus: { value: 10 },
    uColor: { value: new THREE.Vector3(...(opts.color || [0.6, 0.8, 0.9])) },
    uPulseColor: { value: new THREE.Vector3(...(opts.pulseColor || opts.color || [1, 1, 1])) },
  };
  const lines = new THREE.LineSegments(g, new THREE.ShaderMaterial({ name: 'AccentLines', uniforms, vertexShader: lineVertex, fragmentShader: lineFragment, ...additive }));
  lines.frustumCulled = false;
  lines.renderOrder = 5;
  return lines;
}

/** Splits a sampled polyline into segments with a continuous curve parameter. */
export function polylineSegments(points, { closed = false, seed = 0, tScale = 1, reveal = null } = {}) {
  const segs = [];
  let acc = 0;
  const n = points.length;
  const last = closed ? n : n - 1;
  for (let i = 0; i < last; i++) {
    const a = points[i], b = points[(i + 1) % n];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    segs.push({ a, b, t0: acc * tScale, t1: (acc + len) * tScale, seed, r0: reveal ? reveal(a) : 0, r1: reveal ? reveal(b) : 0 });
    acc += len;
  }
  return segs;
}
