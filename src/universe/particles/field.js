// ParticleField: the one shared particle system. Owns the GPU attributes for both morph states,
// the morph clock, and
//   - a GPU bake of the displayed state (float render targets) used when a morph is retargeted
//     mid-flight: the "from" side then reads that state by gl_VertexID, so rapid scene changes
//     continue seamlessly from wherever each particle is, at ~1 ms of GPU and no CPU work;
//   - a GPU snapshot of the exact displayed state for the ending film (read back once);
//   - a CPU mirror of the vertex shader: the fallback for both when float render targets are
//     unavailable.

import * as THREE from 'three';
import { HOLE_UNIFORMS, FLOW_T, PACK, SCATTER_SEED, STATE_WIDTH, TIME_PERIOD, bakeFragment, particleFragment, particleVertex, qCycles, qRate, wrapTime } from './shaders.js';
import { clamp, fract, mulberry32, rotateAxis } from '../math.js';
import { C, SCATTER } from '../config.js';

const I16 = 1 / 32767;
const U8 = 1 / 255;
const SIDE = [
  // name, components, array type
  ['look', 4, Uint8Array],
  ['spin', 4, Int16Array],
  ['pivot', 3, Int16Array],
  ['stream', 4, Int16Array],
  ['aux', 4, Uint8Array],
];

function allocSide(n) {
  const side = { pos: new Float32Array(n * 3) };
  for (const [name, k, T] of SIDE) side[name] = new T(n * k);
  return side;
}

const dec16 = (v) => Math.max(v * I16, -1);
const FROM_ATTRS = ['position', 'aFromLook', 'aFromSpin', 'aFromPivot', 'aFromStream', 'aFromAux'];
const TO_ATTRS = ['aTo', 'aToLook', 'aToSpin', 'aToPivot', 'aToStream', 'aToAux'];
const smooth = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};

/** Mirror of evolveGate() in the vertex shader. */
function gateOf(ev, evolve, mode) {
  if (mode > 0.5) return smooth(ev - 0.06, ev, evolve);
  if (mode < -0.5 && ev > 0) return 1 - smooth(1 - ev, 1.06 - ev, evolve);
  return 1;
}

/** Fresh flow envelope at progress p (mirror of kN in the shader). */
function freshEnvelope(p) {
  const k = 4 * p * (1 - p);
  return k * k * (3 - 2 * k);
}

// Scratch (no per-call allocation).
const A = [0, 0, 0];
const B = [0, 0, 0];
const R = [0, 0, 0];

/** Whether this renderer can bake particle state on the GPU (float colour attachments, MRT). */
export function gpuStateSupported(renderer) {
  try {
    return !!(renderer && renderer.capabilities.isWebGL2 !== false && renderer.extensions.has('EXT_color_buffer_float'));
  } catch {
    return false;
  }
}

export class ParticleField {
  constructor(count, { renderer = null, gpuState = false } = {}) {
    this.count = count;
    this.renderer = renderer;
    this.gpu = !!(gpuState && renderer);
    this.from = allocSide(count);
    this.to = allocSide(count);
    this.meta = new Float32Array(count * 2);
    const rng = mulberry32(0xc0ffee);
    for (let i = 0; i < count; i++) this.meta[i * 2] = rng();

    const g = new THREE.BufferGeometry();
    const attr = (array, k, normalized) => new THREE.BufferAttribute(array, k, normalized).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', attr(this.from.pos, 3, false));
    g.setAttribute('aTo', attr(this.to.pos, 3, false));
    for (const [name, k] of SIDE) {
      const cap = name[0].toUpperCase() + name.slice(1);
      g.setAttribute(`aFrom${cap}`, attr(this.from[name], k, true));
      g.setAttribute(`aTo${cap}`, attr(this.to[name], k, true));
    }
    g.setAttribute('aMeta', attr(this.meta, 2, false));
    this.geometry = g;

    this.uniforms = {
      uTime: { value: 0 },
      uFlowTime: { value: 0 },
      uMorph: { value: 1 },
      uStagger: { value: 0.4 },
      uSweep: { value: new THREE.Vector3(0.5, 0, 3) },
      uFlowAmp: { value: 0.6 },
      uSwirl: { value: 0.8 },
      uCarry: { value: new THREE.Vector2(0, 0) },
      uDissolve: { value: 0 },
      uSide: { value: 0 },
      uToExpand: { value: 1 },
      uToSpread: { value: 0 },
      uToDim: { value: 1 },
      uEvolve: { value: 1 },
      uEvolveMode: { value: 0 },
      uFromExpand: { value: 1 },
      uFromSpread: { value: 0 },
      uFromDim: { value: 1 },
      uFromEvolve: { value: 1 },
      uFromEvolveMode: { value: 0 },
      uPixelScale: { value: 1000 },
      uSizeScale: { value: 1 },
      uGain: { value: 1 },
      uFocus: { value: 10 },
      uDof: { value: 1.6 },
      uMinPx: { value: 1.8 },
      uMaxPx: { value: 48 },
      uTwinkle: { value: 1 },
      uFromTex: { value: 0 },
      uState0: { value: null },
      uState1: { value: null },
      uState2: { value: null },
      uState3: { value: null },
      // Reading starfield (see shaders.js; the engine writes these every frame).
      uScatter: { value: 0 },
      uScatterKeep: { value: 0.01 },
      uScatterTravel: { value: 1 },
      uScatterFrame: { value: new THREE.Matrix4() },
      uScatterRay: { value: new THREE.Vector4(1, 1, 0, 0) },
      uScatterCenter: { value: new THREE.Vector4(0, 0, 0, 3) },
      uScatterLook: { value: new THREE.Vector4(10, SCATTER.gain, SCATTER.px, SCATTER.pxBright) },
      uScatterMotion: { value: new THREE.Vector4(SCATTER.flow, SCATTER.outward, SCATTER.twinkle, 1) },
      uScatterTone0: { value: new THREE.Vector3(...C.white) },
      uScatterTone1: { value: new THREE.Vector3(...C.ice) },
      uScatterTone2: { value: new THREE.Vector3(...C.iceHi) },
      uScatterTone3: { value: new THREE.Vector3(...C.deep) },
    };
    const blend = {
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.CustomBlending,
      blendEquation: THREE.AddEquation,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneFactor,
    };
    const gpu = this.gpu ? { GPU_STATE: '' } : {};
    this.material = new THREE.ShaderMaterial({ name: 'UniverseParticles', defines: { ...gpu }, uniforms: this.uniforms, vertexShader: particleVertex, fragmentShader: particleFragment, ...blend });
    // Ghost: the same geometry drawn from the "to" side during reduced-motion cross-dissolves.
    this.ghostMaterial = new THREE.ShaderMaterial({ name: 'UniverseParticlesGhost', defines: { ...gpu }, uniforms: { ...this.uniforms, uSide: { value: 1 } }, vertexShader: particleVertex, fragmentShader: particleFragment, ...blend });
    // Post-bloom re-draw of the particles in front of the ch.7 horizon (lives in the post overlay scene).
    this.overlayMaterial = new THREE.ShaderMaterial({ name: 'UniverseParticlesFront', defines: { OVERLAY: '', ...gpu }, uniforms: { ...this.uniforms, ...HOLE_UNIFORMS }, vertexShader: particleVertex, fragmentShader: particleFragment, ...blend, depthTest: false });
    this.points = new THREE.Points(g, this.material);
    this.ghost = new THREE.Points(g, this.ghostMaterial);
    this.overlay = new THREE.Points(g, this.overlayMaterial);
    for (const p of [this.points, this.ghost, this.overlay]) {
      p.frustumCulled = false;
      p.renderOrder = 10;
    }
    this.ghost.visible = false;

    if (this.gpu) this._initGpuState();

    this.morphing = false;
    this.duration = 1;
    this.formation = null;
    this.drawCount = count;
    this.flowTime = 0;
    this.lastBakeMs = 0;
    this.envDirty = false;
  }

  _initGpuState() {
    const W = STATE_WIDTH;
    const H = Math.ceil(this.count / W);
    const make = () => {
      const rt = new THREE.WebGLRenderTarget(W, H, {
        count: 4,
        type: THREE.FloatType,
        format: THREE.RGBAFormat,
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        depthBuffer: false,
        stencilBuffer: false,
        generateMipmaps: false,
      });
      for (const t of rt.textures) t.generateMipmaps = false;
      return rt;
    };
    this.states = [make(), make()];
    this.stateIndex = 0;
    this.bakeUniforms = { ...this.uniforms, uSnapshot: { value: 0 }, uStateSize: { value: new THREE.Vector2(W, H) } };
    this.bakeMaterial = new THREE.ShaderMaterial({
      name: 'UniverseParticlesBake',
      glslVersion: THREE.GLSL3,
      defines: { GPU_STATE: '', BAKE: '' },
      uniforms: this.bakeUniforms,
      vertexShader: particleVertex,
      fragmentShader: bakeFragment,
      blending: THREE.NoBlending,
      depthTest: false,
      depthWrite: false,
    });
    const bake = new THREE.Points(this.geometry, this.bakeMaterial);
    bake.frustumCulled = false;
    this.bakeScene = new THREE.Scene();
    this.bakeScene.add(bake);
    this.bakeCamera = new THREE.Camera();
    this.readBuffer = null;
    // The film snapshot reads the state back: only where float pixels are readable.
    const caps = this.renderer.capabilities;
    this.gpuRead = !!(caps.textureTypeReadable && caps.textureTypeReadable(THREE.FloatType) && caps.textureFormatReadable(THREE.RGBAFormat));
  }

  /** Render target the next bake writes (never the one the from side currently reads). */
  get spareState() {
    return this.states ? this.states[1 - this.stateIndex] : null;
  }

  /** Show a formation immediately (no morph). */
  setImmediate(formation) {
    this._copy(this.from, formation);
    this._copy(this.to, formation);
    for (let i = 0; i < this.count; i++) this.meta[i * 2 + 1] = 0;
    this.envDirty = false;
    this.formation = formation;
    this._resetFrom();
    this.uniforms.uMorph.value = 1;
    this.uniforms.uDissolve.value = 0;
    this.ghost.visible = false;
    this.morphing = false;
    this._upload();
  }

  /** Start a morph from `from` to `to` with one upload (the load-in: dust streaming in). */
  setPair(from, to, params, dissolve) {
    this._copy(this.from, from);
    this._copy(this.to, to);
    for (let i = 0; i < this.count; i++) this.meta[i * 2 + 1] = 0;
    this.envDirty = false;
    this._resetFrom();
    this.formation = to;
    this._start(params, dissolve);
    this._upload();
  }

  _resetFrom() {
    const u = this.uniforms;
    u.uFromExpand.value = 1;
    u.uFromSpread.value = 0;
    u.uFromDim.value = 1;
    u.uFromEvolve.value = 1;
    u.uFromEvolveMode.value = 0;
    u.uFromTex.value = 0;
    u.uCarry.value.set(0, 0);
  }

  _start(params, dissolve) {
    const u = this.uniforms;
    u.uMorph.value = 0;
    u.uStagger.value = dissolve ? 0 : params.stagger;
    u.uSweep.value.set(params.sweep, params.invert, Math.max(0.5, params.radius || 3));
    u.uFlowAmp.value = params.flow;
    u.uSwirl.value = params.swirl;
    u.uDissolve.value = dissolve ? 1 : 0;
    this.ghost.visible = !!dissolve;
    this.duration = Math.max(0.05, params.duration);
    this.morphing = true;
  }

  /**
   * Start (or retarget) a morph toward `formation`. `time` is the current living-motion clock.
   * params: {duration, stagger, flow, swirl, sweep, invert, radius}; dissolve: reduced-motion mode.
   * Returns true when the displayed state had to be baked (a retarget).
   */
  morphTo(formation, time, params, dissolve) {
    const t0 = performance.now();
    const u = this.uniforms;
    let baked = false;
    if (!this.morphing && u.uMorph.value >= 1) {
      // Settled: what is on screen is exactly the "to" side. Swap the buffers (no bake, no
      // re-upload of the current state; living motion continues uninterrupted) and freeze the
      // outgoing formation's reading controls into the from-side uniforms.
      this._swapSides();
      u.uFromExpand.value = u.uToExpand.value;
      u.uFromSpread.value = u.uToSpread.value;
      u.uFromDim.value = u.uToDim.value;
      u.uFromEvolve.value = u.uEvolve.value;
      u.uFromEvolveMode.value = u.uEvolveMode.value;
      u.uFromTex.value = 0;
      u.uCarry.value.set(0, 0);
      if (this.envDirty) {
        for (let i = 0; i < this.count; i++) this.meta[i * 2 + 1] = 0;
        this.geometry.attributes.aMeta.needsUpdate = true;
        this.envDirty = false;
      }
      this._copy(this.to, formation);
      this._upload(TO_ATTRS);
    } else {
      // Retarget: bake what is displayed (the interrupted flow is carried with its own amplitude).
      u.uTime.value = wrapTime(time);
      if (this.gpu) {
        this._bakeGpu();
        this._upload(TO_ATTRS);
      } else {
        this.bake(time);
        this._upload();
      }
      u.uCarry.value.set(u.uFlowAmp.value, u.uSwirl.value);
      u.uFromExpand.value = 1;
      u.uFromSpread.value = 0;
      u.uFromDim.value = 1;
      u.uFromEvolve.value = 1;
      u.uFromEvolveMode.value = 0;
      this._copy(this.to, formation);
      baked = true;
    }
    this.formation = formation;
    this._start(params, dissolve);
    this.lastBakeMs = performance.now() - t0;
    return baked;
  }

  /** GPU bake of the displayed state into the spare state targets; the from side then reads them. */
  _bakeGpu() {
    const r = this.renderer;
    const rt = this.spareState;
    const range = this.geometry.drawRange;
    const start = range.start, n = range.count;
    this.geometry.setDrawRange(0, this.count);
    this.bakeUniforms.uSnapshot.value = 0;
    const prev = r.getRenderTarget();
    const autoClear = r.autoClear;
    r.autoClear = true;
    r.setRenderTarget(rt);
    r.render(this.bakeScene, this.bakeCamera);
    r.setRenderTarget(prev);
    r.autoClear = autoClear;
    this.geometry.setDrawRange(start, n);
    this.stateIndex = 1 - this.stateIndex;
    const u = this.uniforms;
    u.uState0.value = rt.textures[0];
    u.uState1.value = rt.textures[1];
    u.uState2.value = rt.textures[2];
    u.uState3.value = rt.textures[3];
    u.uFromTex.value = 1;
  }

  /** Advance the morph clock. Returns true while morphing. */
  update(dt) {
    const u = this.uniforms;
    this.flowTime = wrapTime(this.flowTime + dt);
    u.uFlowTime.value = this.flowTime;
    if (!this.morphing) return false;
    u.uMorph.value = Math.min(1, u.uMorph.value + dt / this.duration);
    if (u.uMorph.value >= 1) {
      this.morphing = false;
      u.uDissolve.value = 0;
      this.ghost.visible = false;
    }
    return this.morphing;
  }

  /** Jump to the end of the current morph (lab/diagnostics). */
  settle() {
    this.uniforms.uMorph.value = 1;
    this.update(0);
    this.morphing = false;
    this.uniforms.uDissolve.value = 0;
    this.ghost.visible = false;
  }

  setDrawCount(n) {
    this.drawCount = Math.max(1, Math.min(this.count, Math.round(n)));
    this.geometry.setDrawRange(0, this.drawCount);
  }

  // ---- CPU mirror of the vertex shader -------------------------------------------------------

  /** Living motion of one side; writes the position into out, returns the stream fade. */
  _living(side, i, time, seed, out) {
    const P = side.pos, St = side.stream, Sp = side.spin, Pv = side.pivot;
    let x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2];
    let fade = 1;
    const rate = dec16(St[i * 4 + 3]) * PACK.RATE_MAX;
    if (rate > 0) {
      const ph = fract(time * qCycles(rate) + seed * 7.31);
      const s = PACK.STREAM_MAX * ph;
      x += dec16(St[i * 4]) * s;
      y += dec16(St[i * 4 + 1]) * s;
      z += dec16(St[i * 4 + 2]) * s;
      fade = smooth(0, 0.16, ph) * (1 - smooth(0.74, 1, ph));
    }
    const w = qRate(dec16(Sp[i * 4 + 3]) * PACK.SPIN_MAX);
    if (w !== 0) {
      let ax = dec16(Sp[i * 4]), ay = dec16(Sp[i * 4 + 1]), az = dec16(Sp[i * 4 + 2]);
      const l = Math.sqrt(ax * ax + ay * ay + az * az) || 1;
      ax /= l; ay /= l; az /= l;
      const cx = dec16(Pv[i * 3]) * PACK.PIVOT_MAX, cy = dec16(Pv[i * 3 + 1]) * PACK.PIVOT_MAX, cz = dec16(Pv[i * 3 + 2]) * PACK.PIVOT_MAX;
      rotateAxis(out, 0, x - cx, y - cy, z - cz, ax, ay, az, time * w);
      out[0] += cx; out[1] += cy; out[2] += cz;
    } else {
      out[0] = x; out[1] = y; out[2] = z;
    }
    return fade;
  }

  /** Staggered progress for particle i: returns p, writes the eased value into this._e. */
  _progress(i) {
    const u = this.uniforms;
    if (u.uDissolve.value > 0.5) {
      this._e = u.uMorph.value >= 0.5 ? 1 : 0;
      return 1;
    }
    const seed = this.meta[i * 2];
    const r1 = fract(seed * 91.3458);
    const T = this.to.pos;
    const tx = T[i * 3], ty = T[i * 3 + 1], tz = T[i * 3 + 2];
    let radial = clamp(Math.sqrt(tx * tx + ty * ty + tz * tz) / u.uSweep.value.z, 0, 1);
    if (u.uSweep.value.y > 0.5) radial = 1 - radial;
    const stagger = u.uStagger.value;
    const delay = stagger * (r1 + (radial - r1) * u.uSweep.value.x);
    const p = clamp((u.uMorph.value - delay) / (1 - stagger), 0, 1);
    this._e = p * p * p * (p * (p * 6 - 15) + 10);
    return p;
  }

  /** Evaluates particle i into A (from), B (to), R (blended position); colours into this._c. */
  _evaluate(i, time) {
    const u = this.uniforms;
    const seed = this.meta[i * 2];
    const p = this._progress(i);
    const e = this._e;
    // Particles entirely on one side (the common case at a morph start) skip the other side.
    let fadeA = 0;
    let fadeB = 0;
    if (e < 1) {
      fadeA = this._living(this.from, i, time, seed, A);
      const Pa = this.from.pivot;
      const fs = u.uFromSpread.value * PACK.PIVOT_MAX, fe = u.uFromExpand.value;
      if (fs !== 0 || fe !== 1) {
        A[0] = (A[0] + dec16(Pa[i * 3]) * fs) * fe;
        A[1] = (A[1] + dec16(Pa[i * 3 + 1]) * fs) * fe;
        A[2] = (A[2] + dec16(Pa[i * 3 + 2]) * fs) * fe;
      }
      fadeA *= gateOf(this.from.aux[i * 4] * U8, u.uFromEvolve.value, u.uFromEvolveMode.value) * u.uFromDim.value;
    }
    if (e > 0) {
      fadeB = this._living(this.to, i, time, seed, B);
      const Pv = this.to.pivot;
      const spread = u.uToSpread.value * PACK.PIVOT_MAX, expand = u.uToExpand.value;
      B[0] = (B[0] + dec16(Pv[i * 3]) * spread) * expand;
      B[1] = (B[1] + dec16(Pv[i * 3 + 1]) * spread) * expand;
      B[2] = (B[2] + dec16(Pv[i * 3 + 2]) * spread) * expand;
    }
    const gate = gateOf(this.to.aux[i * 4] * U8, u.uEvolve.value, u.uEvolveMode.value);
    const LA = this.from.look, LB = this.to.look;
    const kb = fadeB * gate * u.uToDim.value;
    const c = this._c;
    for (let k = 0; k < 3; k++) {
      const ca = LA[i * 4 + k] * U8, cb = LB[i * 4 + k] * U8;
      const va = ca * ca * fadeA, vb = cb * cb * kb;
      c[k] = e <= 0 ? va : e >= 1 ? vb : va + (vb - va) * e;
    }
    const sa = LA[i * 4 + 3] * U8, sb = LB[i * 4 + 3] * U8;
    c[3] = sa * sa + (sb * sb - sa * sa) * e;
    if (e <= 0) {
      R[0] = A[0]; R[1] = A[1]; R[2] = A[2];
    } else if (e >= 1) {
      R[0] = B[0]; R[1] = B[1]; R[2] = B[2];
    } else {
      R[0] = A[0] + (B[0] - A[0]) * e;
      R[1] = A[1] + (B[1] - A[1]) * e;
      R[2] = A[2] + (B[2] - A[2]) * e;
    }
    return p;
  }

  /**
   * CPU bake (fallback without float render targets) of the displayed state into the "from"
   * side: positions re-expressed in the dominant side's orbit so the particle keeps living,
   * streams folded into the position, fades/gates folded into the colour, and the flow carried
   * over (aMeta.y, in units of the interrupted morph's amplitude) so turbulence never pops.
   */
  bake(time) {
    if (!this._c) this._c = new Float32Array(4);
    const t = wrapTime(time);
    const N = this.count;
    const F = this.from, T = this.to, M = this.meta;
    const u = this.uniforms;
    const dissolve = u.uDissolve.value > 0.5;
    const ratio = u.uFlowAmp.value > 1e-4 ? u.uCarry.value.x / u.uFlowAmp.value : 0;
    let envDirty = false;
    for (let i = 0; i < N; i++) {
      const p = this._evaluate(i, t);
      const e = this._e;
      const carried = dissolve ? 0 : freshEnvelope(p) + ratio * M[i * 2 + 1] * (1 - p) * (1 - p);
      const D = e >= 0.5 ? T : F;
      // Copy the dominant side's orbit (from may alias D; read before write).
      const s0 = D.spin[i * 4], s1 = D.spin[i * 4 + 1], s2 = D.spin[i * 4 + 2], s3 = D.spin[i * 4 + 3];
      const p0 = D.pivot[i * 3], p1 = D.pivot[i * 3 + 1], p2 = D.pivot[i * 3 + 2];
      const tw = D.aux[i * 4 + 1], gl = D.aux[i * 4 + 2];
      const w = qRate(dec16(s3) * PACK.SPIN_MAX);
      let x = R[0], y = R[1], z = R[2];
      if (w !== 0) {
        let ax = dec16(s0), ay = dec16(s1), az = dec16(s2);
        const l = Math.sqrt(ax * ax + ay * ay + az * az) || 1;
        ax /= l; ay /= l; az /= l;
        const cx = dec16(p0) * PACK.PIVOT_MAX, cy = dec16(p1) * PACK.PIVOT_MAX, cz = dec16(p2) * PACK.PIVOT_MAX;
        rotateAxis(A, 0, x - cx, y - cy, z - cz, ax, ay, az, -t * w);
        x = A[0] + cx; y = A[1] + cy; z = A[2] + cz;
      }
      const c = this._c;
      F.pos[i * 3] = x; F.pos[i * 3 + 1] = y; F.pos[i * 3 + 2] = z;
      F.spin[i * 4] = s0; F.spin[i * 4 + 1] = s1; F.spin[i * 4 + 2] = s2; F.spin[i * 4 + 3] = s3;
      F.pivot[i * 3] = p0; F.pivot[i * 3 + 1] = p1; F.pivot[i * 3 + 2] = p2;
      F.stream[i * 4] = 0; F.stream[i * 4 + 1] = 0; F.stream[i * 4 + 2] = 0; F.stream[i * 4 + 3] = 0;
      F.aux[i * 4] = 0; F.aux[i * 4 + 1] = tw; F.aux[i * 4 + 2] = gl; F.aux[i * 4 + 3] = 0;
      F.look[i * 4] = Math.round(Math.sqrt(clamp(c[0], 0, 1)) * 255);
      F.look[i * 4 + 1] = Math.round(Math.sqrt(clamp(c[1], 0, 1)) * 255);
      F.look[i * 4 + 2] = Math.round(Math.sqrt(clamp(c[2], 0, 1)) * 255);
      F.look[i * 4 + 3] = Math.round(Math.sqrt(clamp(c[3], 0, 1)) * 255);
      M[i * 2 + 1] = carried;
      if (carried > 0) envDirty = true;
    }
    this.envDirty = envDirty;
  }

  /**
   * Current displayed state for the ending handover: world positions (including the flow
   * displacement), linear colours (brightness folded in) and sprite diameters (world units,
   * before depth of field). Writes `n` particles.
   */
  snapshot(time, positions, colors, n, sizes) {
    if (this.gpu && this.gpuRead && this._snapshotGpu(positions, colors, n, sizes)) return;
    if (!this._c) this._c = new Float32Array(4);
    const t = wrapTime(time);
    const u = this.uniforms;
    const c = this._c;
    const ft = u.uFlowTime.value;
    const gain = u.uGain.value;
    if (u.uFromTex.value > 0.5) {
      // The from side lives on the GPU only; without a GPU read-back, show the destination.
      this.settle();
    }
    const scatter = u.uScatter.value;
    const travel = u.uScatterTravel.value > 0.5;
    const SC = u.uScatterCenter.value;
    for (let i = 0; i < n; i++) {
      const p = this._evaluate(i, t);
      let x = R[0], y = R[1], z = R[2];
      const seed = this.meta[i * 2];
      if (u.uDissolve.value < 0.5) {
        const kN = freshEnvelope(p);
        const kC = this.meta[i * 2 + 1] * (1 - p) * (1 - p);
        if (kN + kC > 0.001) {
          const r1 = fract(seed * 91.3458), r2 = fract(seed * 47.853);
          flowField(x * 0.55, y * 0.55, z * 0.55, ft, A);
          const amp = (u.uFlowAmp.value * kN + u.uCarry.value.x * kC) * (0.85 + 0.3 * r2);
          x += A[0] * amp; y += A[1] * amp; z += A[2] * amp;
          const ang = (u.uSwirl.value * kN + u.uCarry.value.y * kC) * (0.8 + 0.4 * r1);
          const cs = Math.cos(ang), sn = Math.sin(ang);
          const nx = cs * x - sn * z, nz = sn * x + cs * z;
          x = nx; z = nz;
          const boost = 1 + 0.15 * Math.min(1, kN + kC);
          c[0] *= boost; c[1] *= boost; c[2] *= boost;
        }
      }
      // Brightness: colour × sprite energy (size² relative to a typical particle).
      const energy = gain * Math.min(4, c[3] / 0.02 + 0.25);
      let cr = c[0] * energy, cg = c[1] * energy, cb = c[2] * energy;
      let size = c[3] * PACK.SIZE_MAX * u.uSizeScale.value;
      if (scatter > 0) {
        // Mirror of the reading starfield block (shaders.js).
        const st = this._star(i, t, STAR);
        let keepCol = 1; // share of the formation's light that remains
        let starLight = 0; // share of the star's light
        let starSize = 0; // share of the star's sprite size
        if (travel) {
          const rx = x - SC.x, ry = y - SC.y, rz = z - SC.z;
          const rl = Math.sqrt(rx * rx + ry * ry + rz * rz);
          const order = 0.45 * (1 - clamp(rl / SC.w, 0, 1)) + 0.33 * blobs(x, y, z) + 0.22 * fract(seed * 91.3458);
          const sp = clamp((scatter - SCATTER.stagger * order) / (1 - SCATTER.stagger), 0, 1);
          flowField(x * 0.42 + 2.3, y * 0.42 + 2.3, z * 0.42 + 2.3, ft, B);
          const ox = rl > 1e-4 ? rx / rl : 0, oy = rl > 1e-4 ? ry / rl : 1, oz = rl > 1e-4 ? rz / rl : 0;
          const M = u.uScatterMotion.value;
          const dx = (ox * M.y + B[0] * M.x) * SC.w, dy = (oy * M.y + B[1] * M.x) * SC.w, dz = (oz * M.y + B[2] * M.x) * SC.w;
          const f = smooth(0, 0.62, sp), g = smooth(0.42, 1, sp);
          x += dx * f + (st.x - x - dx) * g;
          y += dy * f + (st.y - y - dy) * g;
          z += dz * f + (st.z - z - dz) * g;
          const se = st.kept * smooth(0.5, 0.92, sp);
          keepCol = st.kept > 0.5 ? 1 - se : 1 - smooth(0.45, 0.95, sp);
          starLight = se;
          starSize = se;
        } else if (st.kept > 0.5 && scatter >= 0.5) {
          // Reduced motion: the star appears where it is (no travel).
          x = st.x; y = st.y; z = st.z;
          keepCol = 0;
          starLight = smooth(0.4, 1, scatter);
          starSize = 1;
        } else {
          keepCol = 1 - smooth(0, 0.6, scatter);
        }
        cr = cr * keepCol + st.r * starLight;
        cg = cg * keepCol + st.g * starLight;
        cb = cb * keepCol + st.b * starLight;
        size += ((st.px * st.depth) / u.uPixelScale.value - size) * starSize;
      }
      positions[i * 3] = x; positions[i * 3 + 1] = y; positions[i * 3 + 2] = z;
      colors[i * 3] = cr; colors[i * 3 + 1] = cg; colors[i * 3 + 2] = cb;
      if (sizes) sizes[i] = size;
    }
  }

  /** GPU snapshot: render the displayed state into the spare targets and read it back once. */
  _snapshotGpu(positions, colors, n, sizes) {
    try {
      const r = this.renderer;
      const rt = this.spareState;
      const W = STATE_WIDTH;
      const rows = Math.ceil(n / W);
      const range = this.geometry.drawRange;
      const start = range.start, cnt = range.count;
      this.geometry.setDrawRange(0, this.count);
      this.bakeUniforms.uSnapshot.value = 1;
      const prev = r.getRenderTarget();
      r.setRenderTarget(rt);
      r.render(this.bakeScene, this.bakeCamera);
      r.setRenderTarget(prev);
      this.bakeUniforms.uSnapshot.value = 0;
      this.geometry.setDrawRange(start, cnt);
      const buf = this.readBuffer && this.readBuffer.length >= W * rows * 4 ? this.readBuffer : (this.readBuffer = new Float32Array(W * rows * 4));
      r.readRenderTargetPixels(rt, 0, 0, W, rows, buf, undefined, 0);
      for (let i = 0; i < n; i++) {
        positions[i * 3] = buf[i * 4];
        positions[i * 3 + 1] = buf[i * 4 + 1];
        positions[i * 3 + 2] = buf[i * 4 + 2];
      }
      r.readRenderTargetPixels(rt, 0, 0, W, rows, buf, undefined, 1);
      for (let i = 0; i < n; i++) {
        colors[i * 3] = buf[i * 4];
        colors[i * 3 + 1] = buf[i * 4 + 1];
        colors[i * 3 + 2] = buf[i * 4 + 2];
      }
      if (sizes) {
        r.readRenderTargetPixels(rt, 0, 0, W, rows, buf, undefined, 2);
        for (let i = 0; i < n; i++) sizes[i] = buf[i * 4];
      }
      return true;
    } catch (e) {
      console.warn('Universe: GPU snapshot failed, using the CPU mirror', e);
      return false;
    }
  }

  /**
   * Mirror of scatterStar() in the vertex shader: particle i's star at living time t (wrapped) —
   * world position, light (linear colour × energy, twinkle omitted), sprite px, depth, kept.
   */
  _star(i, t, out) {
    const u = this.uniforms;
    let h = (i ^ SCATTER_SEED) >>> 0;
    const next = () => (h = pcg(h)) >>> 8;
    out.kept = next() / 16777216 < u.uScatterKeep.value ? 1 : 0;
    const u0 = next() / 16777216, v0 = next() / 16777216, dz = next() / 16777216;
    const mag = Math.pow(next() / 16777216, SCATTER.steep);
    const tone = next() / 16777216;
    next();
    const near = 1 - dz;
    const cycles = 1 + Math.floor(near * (SCATTER.drift - 0.001));
    const su = (fract(u0 - t * (cycles / TIME_PERIOD)) * 2 - 1) * SCATTER.margin;
    const sv = (v0 * 2 - 1) * SCATTER.margin;
    const L = u.uScatterLook.value, Ry = u.uScatterRay.value;
    const depth = L.x * (SCATTER.near + (SCATTER.far - SCATTER.near) * dz);
    const vx = (depth * (su + Ry.z)) / Ry.x, vy = (depth * (sv + Ry.w)) / Ry.y, vz = -depth;
    const m = u.uScatterFrame.value.elements;
    out.x = m[0] * vx + m[4] * vy + m[8] * vz + m[12];
    out.y = m[1] * vx + m[5] * vy + m[9] * vz + m[13];
    out.z = m[2] * vx + m[6] * vy + m[10] * vz + m[14];
    const T = tone < 0.55 ? u.uScatterTone0.value : tone < 0.85 ? u.uScatterTone1.value : u.uScatterTone2.value;
    const D = u.uScatterTone3.value;
    const w = 0.45 * dz * (1 - mag);
    const edge = 1 - smooth(1, SCATTER.margin, Math.abs(su));
    const calm = u.uScatterMotion.value.w + (1 - u.uScatterMotion.value.w) * smooth(SCATTER.column, SCATTER.column + 0.25, Math.abs(su));
    const e = L.y * (0.08 + 0.92 * mag) * (0.6 + 0.4 * near) * edge * calm;
    out.r = (T.x + (D.x - T.x) * w) * e;
    out.g = (T.y + (D.y - T.y) * w) * e;
    out.b = (T.z + (D.z - T.z) * w) * e;
    out.px = L.z + (L.w - L.z) * mag;
    out.depth = depth;
    return out;
  }

  _copy(side, f) {
    side.pos.set(f.pos);
    side.look.set(f.look);
    side.spin.set(f.spin);
    side.pivot.set(f.pivot);
    side.stream.set(f.stream);
    side.aux.set(f.aux);
  }

  _upload(names) {
    const attrs = this.geometry.attributes;
    if (names) for (const name of names) attrs[name].needsUpdate = true;
    else for (const name in attrs) attrs[name].needsUpdate = true;
  }

  /** Exchange the from/to buffers (CPU arrays and GPU attributes) without copying data. */
  _swapSides() {
    const t = this.from;
    this.from = this.to;
    this.to = t;
    const g = this.geometry;
    for (let k = 0; k < FROM_ATTRS.length; k++) {
      const a = g.attributes[FROM_ATTRS[k]];
      g.setAttribute(FROM_ATTRS[k], g.attributes[TO_ATTRS[k]]);
      g.setAttribute(TO_ATTRS[k], a);
    }
  }

  /**
   * After a context restore every buffer must be re-sent. A baked from-state lived only in GPU
   * memory: an interrupted morph completes instead.
   */
  markDirty() {
    if (this.uniforms.uFromTex.value > 0.5) {
      this.uniforms.uFromTex.value = 0;
      this.settle();
    }
    this._upload();
  }

  dispose() {
    this.overlay.removeFromParent();
    this.geometry.dispose();
    this.material.dispose();
    this.ghostMaterial.dispose();
    this.overlayMaterial.dispose();
    if (this.states) {
      for (const rt of this.states) rt.dispose();
      this.bakeMaterial.dispose();
    }
  }
}

const STAR = { x: 0, y: 0, z: 0, r: 0, g: 0, b: 0, px: 0, depth: 1, kept: 0 };

/** PCG hash (mirror of scHash() in the vertex shader). */
function pcg(v) {
  const s = (Math.imul(v, 747796405) + 2891336453) >>> 0;
  const w = Math.imul(((s >>> ((s >>> 28) + 4)) ^ s) >>> 0, 277803737) >>> 0;
  return ((w >>> 22) ^ w) >>> 0;
}

/** Mirror of scBlobs() in the vertex shader. */
function blobs(x, y, z) {
  return 0.5 + 0.25 * (Math.sin(1.9 * x + 1.0 * y - 1.4 * z + 1.6 * Math.sin(-0.9 * x + 1.5 * y + 0.8 * z + 1.0))
                     + Math.sin(0.7 * x - 1.6 * y + 1.7 * z + 1.4 * Math.sin(1.3 * x + 0.6 * y + 1.4 * z + 2.0)));
}

/** JS mirror of flowField() in the vertex shader (same quantised time multipliers). */
function flowField(x, y, z, t, out) {
  const T = FLOW_T;
  let vx = 2.7 * Math.cos(2.7 * y + T[0] * t) - 1.7 * Math.cos(1.7 * z + T[1] * t + 2.0);
  let vy = 2.1 * Math.cos(2.1 * z - T[2] * t) - 1.9 * Math.cos(1.9 * x - T[3] * t + 3.0);
  let vz = 2.3 * Math.cos(2.3 * x + T[4] * t) - 1.3 * Math.cos(1.3 * y + T[5] * t + 1.0);
  const qx = (y + z) * 1.9 + 4, qy = (z - x) * 1.9 + 4, qz = (x + y) * 1.9 + 4;
  vx += 0.5 * (3.1 * Math.cos(3.1 * qy - T[6] * t) - 2.6 * Math.cos(2.6 * qz + T[7] * t));
  vy += 0.5 * (2.9 * Math.cos(2.9 * qz + T[8] * t) - 3.3 * Math.cos(3.3 * qx - T[9] * t));
  vz += 0.5 * (2.4 * Math.cos(2.4 * qx - T[10] * t) - 2.8 * Math.cos(2.8 * qy + T[11] * t));
  out[0] = vx * 0.16; out[1] = vy * 0.16; out[2] = vz * 0.16;
  return out;
}
