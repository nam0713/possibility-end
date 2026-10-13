// HDR pipeline of the ending film:
//   scene (half-float) ← soft layer (low-res fireball and gas knots; blurred) ← threads (near full
//   resolution, anti-aliased in their shader; zoom-blurred while inflating) ← particles, stars, planet
//   bloom: 13-tap downsample chain (Karis-averaged first level) + tent upsample (additive)
//   composite: gravitational lens + impact shockwave refraction, cold lens dispersion,
//              exposure, ACES filmic, cool-shadow grade, vignette, film grain, sRGB.
// Everything here stays inside the film's one cold hue family (ending-glsl.js PALETTE): the flash,
// the shock front and the star's glare are ice-white, and the lens disperses light into ice and
// deep-blue fringes (an RGB split would always put a warm fringe on one side).
import * as THREE from 'three';
import { FULLSCREEN_VERT, HASH, PALETTE } from './ending-glsl.js';

const DOWN_FRAG = /* glsl */ `
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uKaris;
varying vec2 vUv;
vec3 s(vec2 o) { return texture2D(tSrc, vUv + o * uTexel).rgb; }
float kw(vec3 c) { return 1.0 / (1.0 + dot(c, vec3(0.2126, 0.7152, 0.0722))); }
void main() {
  vec3 a = s(vec2(-2.0, 2.0)), b = s(vec2(0.0, 2.0)), c = s(vec2(2.0, 2.0));
  vec3 d = s(vec2(-2.0, 0.0)), e = s(vec2(0.0)), f = s(vec2(2.0, 0.0));
  vec3 g = s(vec2(-2.0, -2.0)), h = s(vec2(0.0, -2.0)), i = s(vec2(2.0, -2.0));
  vec3 j = s(vec2(-1.0, 1.0)), k = s(vec2(1.0, 1.0)), l = s(vec2(-1.0, -1.0)), m = s(vec2(1.0, -1.0));
  vec3 g0 = (j + k + l + m) * 0.25;
  vec3 g1 = (a + b + d + e) * 0.25;
  vec3 g2 = (b + c + e + f) * 0.25;
  vec3 g3 = (d + e + g + h) * 0.25;
  vec3 g4 = (e + f + h + i) * 0.25;
  vec3 col;
  if (uKaris > 0.5) {
    // Karis average on the first level suppresses single-pixel fireflies.
    float w0 = kw(g0) * 0.5, w1 = kw(g1) * 0.125, w2 = kw(g2) * 0.125, w3 = kw(g3) * 0.125, w4 = kw(g4) * 0.125;
    col = (g0 * w0 + g1 * w1 + g2 * w2 + g3 * w3 + g4 * w4) / (w0 + w1 + w2 + w3 + w4);
  } else {
    col = g0 * 0.5 + (g1 + g2 + g3 + g4) * 0.125;
  }
  gl_FragColor = vec4(col, 1.0);
}
`;

const UP_FRAG = /* glsl */ `
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uRadius;
varying vec2 vUv;
vec3 s(vec2 o) { return texture2D(tSrc, vUv + o * uTexel * uRadius).rgb; }
void main() {
  vec3 col = s(vec2(0.0)) * 4.0;
  col += (s(vec2(-1.0, 0.0)) + s(vec2(1.0, 0.0)) + s(vec2(0.0, -1.0)) + s(vec2(0.0, 1.0))) * 2.0;
  col += s(vec2(-1.0, -1.0)) + s(vec2(1.0, -1.0)) + s(vec2(-1.0, 1.0)) + s(vec2(1.0, 1.0));
  gl_FragColor = vec4(col / 16.0, 1.0);
}
`;

// 9-tap Gaussian in 5 bilinear fetches (separable); smooths the soft layer's ray-march noise.
const BLUR_FRAG = /* glsl */ `
uniform sampler2D tSrc;
uniform vec2 uStep;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(tSrc, vUv).rgb * 0.227027;
  c += texture2D(tSrc, vUv + uStep * 1.384615).rgb * 0.316216;
  c += texture2D(tSrc, vUv - uStep * 1.384615).rgb * 0.316216;
  c += texture2D(tSrc, vUv + uStep * 3.230769).rgb * 0.070270;
  c += texture2D(tSrc, vUv - uStep * 3.230769).rgb * 0.070270;
  gl_FragColor = vec4(c, 1.0);
}
`;

// Zoom blur toward the centre of view (inflation drags everything outward past the eye). Two
// passes of 8 taps (fine, then coarse) make 64 evenly spaced samples: smooth streaks, no noise.
const ZOOM_FRAG = /* glsl */ `
uniform sampler2D tSrc;
uniform vec2 uCenter;
uniform float uAmount, uFade;
varying vec2 vUv;
void main() {
  vec2 dir = vUv - uCenter;
  vec3 acc = vec3(0.0);
  float wsum = 0.0;
  for (int i = 0; i < 8; i++) {
    float f = float(i) / 8.0;
    float w = 1.0 - uFade * f;
    acc += texture2D(tSrc, uCenter + dir * (1.0 - uAmount * f)).rgb * w;
    wsum += w;
  }
  gl_FragColor = vec4(acc / wsum, 1.0);
}
`;

const BLIT_FRAG = /* glsl */ `
uniform sampler2D tSrc;
varying vec2 vUv;
void main() { gl_FragColor = vec4(texture2D(tSrc, vUv).rgb, 1.0); }
`;

const COMPOSITE_FRAG = /* glsl */ `
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform float uBloom, uBloomAdd, uBloomNorm, uExposure, uFlash, uGrain, uVignette, uAberration, uTime, uAspect, uCurveMix;
uniform float uHue;         // weight of the hue-preserving curve (the birth)
uniform float uScrim;       // graduated darkening of the lower band (UI captions and controls)
uniform vec2 uScrimBand;    // its full-strength top and its fade-out height (screen heights)
uniform vec2 uCenter;      // uv of the singularity
uniform float uLensR;      // Einstein radius, in screen heights
uniform float uShockR, uShockAmp;
uniform vec3 uBg;
uniform vec2 uResolution;
uniform vec3 uGlare;       // xy: sun position in uv (may lie off-screen), z: strength
uniform vec3 uLift;        // display-space background lift around the singularity
uniform float uLiftRadius;
varying vec2 vUv;
${HASH}
${PALETTE}

vec3 aces(vec3 x) {
  const mat3 ACESIn = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777);
  const mat3 ACESOut = mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602);
  x = ACESIn * x;
  vec3 a = x * (x + 0.0245786) - 0.000090537;
  vec3 b = x * (0.983729 * x + 0.4329510) + 0.238081;
  return clamp(ACESOut * (a / b), 0.0, 1.0);
}
// The engine's curve (linear darks, exponential shoulder, hot highlights drift to white):
// the film starts on it so the handover frame matches, then blends into its own ACES look.
vec3 shoulder(vec3 c) {
  vec3 m = 1.0 - exp(-c);
  float peak = max(c.r, max(c.g, c.b));
  float top = max(m.r, max(m.g, m.b));
  return mix(m, vec3(top), smoothstep(1.0, 5.0, peak) * 0.55);
}
// Hue-preserving shoulder for the birth: the peak channel is compressed and the others follow in
// proportion, so the cold fire keeps its ice and deep blue instead of greying out; only light far
// past the shoulder burns through to white.
vec3 incandescent(vec3 x) {
  float m = max(x.r, max(x.g, x.b));
  float mt = 1.0 - exp(-m);
  vec3 c = x * (mt / max(m, 1e-6));
  return mix(c, vec3(mt), smoothstep(2.0, 12.0, m) * 0.7);
}
vec3 toSRGB(vec3 c) {
  return mix(c * 12.92, 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));
}

void main() {
  vec2 asp = vec2(uAspect, 1.0);
  vec2 p = (vUv - uCenter) * asp;
  float r = length(p);
  float shockEdge = 0.0;
  // Point-mass lens (the image at θ shows the source at θ − θE²/θ), faded out inside
  // the Einstein radius so the bright core itself is never magnified.
  if (uLensR > 0.0) {
    float defl = uLensR * uLensR / max(r, 1e-5) * smoothstep(1.2 * uLensR, 3.0 * uLensR, r);
    p -= (p / max(r, 1e-5)) * defl;
  }
  // Impact shockwave: a refracting shell racing outward (derivative-of-Gaussian profile).
  if (uShockAmp > 0.0) {
    float x = (r - uShockR) / (0.045 + 0.05 * uShockR);
    float wave = x * exp(-x * x);
    shockEdge = exp(-x * x) * uShockAmp;
    p += (p / max(r, 1e-5)) * wave * uShockAmp * 0.035;
  }
  vec2 suv = uCenter + p / asp;
  vec2 fromC = suv - 0.5;
  float ca = (uAberration * 0.0035 + shockEdge * 0.006) * (0.3 + dot(fromC, fromC) * 3.0);
  // Lens dispersion, cold: light displaced from nearer the centre adds an ice fringe, light from
  // further out a deep-blue one (energy is only added, never split out of white into warm).
  vec3 col = texture2D(tScene, suv).rgb;
  if (ca > 0.0) {
    const vec3 Y = vec3(0.2126, 0.7152, 0.0722);
    float l0 = dot(col, Y);
    float lIn = dot(texture2D(tScene, suv - fromC * ca).rgb, Y);
    float lOut = dot(texture2D(tScene, suv + fromC * ca).rgb, Y);
    col += P_ICE * max(lIn - l0, 0.0) * 0.45 + P_BLUE * max(lOut - l0, 0.0) * 0.4;
  }
  vec3 bloom = texture2D(tBloom, suv).rgb * uBloomNorm;
  // Energy-conserving bloom, plus (only at the handover) the engine's additive glow.
  col = mix(col, bloom, uBloom) + bloom * uBloomAdd;
  // Vignette on the light only; the background below stays exact.
  vec2 vq = (vUv - 0.5) * asp;
  float vig = 1.0 - uVignette * smoothstep(0.3, 1.25, length(vq));
  col *= vig;
  // The shock front itself: a faint, irregular shell of ice-blue light, broken by a smooth noise
  // around the circle (48 cells, seamless; a hash of the direction grid drew rectangles where the
  // front is wide).
  if (shockEdge > 0.0) {
    float around = (atan(p.y, p.x) * 0.15915494 + 0.5) * 48.0;
    float cell = floor(around), fc = fract(around);
    float breakup = mix(hash11(mod(cell, 48.0)), hash11(mod(cell + 1.0, 48.0)), fc * fc * (3.0 - 2.0 * fc)) * 0.6 + 0.4;
    col += vec3(0.5, 0.85, 1.0) * shockEdge * shockEdge * breakup * 0.05;
  }
  // Veiling glare from the blue-white star just outside the frame: a soft ice wash, no ghosts.
  if (uGlare.z > 0.0) {
    vec2 gd = (vUv - uGlare.xy) * asp;
    col += vec3(0.62, 0.87, 1.0) * uGlare.z * (0.05 / (0.06 + dot(gd, gd)));
  }
  col *= uExposure;
  // The impact's light: ice-white, concentrated at the singularity (the bloom spreads it); the
  // blacks stay deep.
  col += uFlash * vec3(0.85, 0.96, 1.0) * 1.3 * exp(-r * r * 60.0);
  vec3 lin = col;
  col = mix(shoulder(lin * 1.12), aces(lin * 1.35), uCurveMix);
  if (uHue > 0.0) col = mix(col, incandescent(lin * 1.25), uHue);
  // Grade: cool the shadows a touch (less through the birth, whose deep blues are already
  // saturated), keep highlights clean.
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col *= mix(mix(vec3(0.92, 0.99, 1.05), vec3(1.0), smoothstep(0.0, 0.5, l)), vec3(1.0), 0.6 * uHue);
  col = toSRGB(col);
  // Graduated filter over the lower band, applied to the light only (the background stays exact).
  col *= 1.0 - uScrim * pow(1.0 - smoothstep(uScrimBand.x, uScrimBand.y, vUv.y), 1.6);
  // Deep-space background composed in display space (screen blend), as the engine does,
  // so #04070b stays exact under any tone curve.
  vec2 lg = (vUv - uCenter) * asp / uLiftRadius;
  vec3 bg = (uBg + uLift * exp(-dot(lg, lg) * 1.6)) * (0.78 + 0.22 * vig);
  col = 1.0 - (1.0 - bg) * (1.0 - col);
  // Film grain (luminance-aware), also dithering the gradients.
  vec2 fc = gl_FragCoord.xy;
  float seed = floor(uTime * 24.0);
  float g = hash12(fc + seed * vec2(37.0, 17.0)) + hash12(fc * 1.37 + seed * vec2(11.0, 53.0)) - 1.0;
  col += g * uGrain * mix(0.55 + col.g, 0.35 + 0.65 * (1.0 - l), uCurveMix);
  gl_FragColor = vec4(col, 1.0);
}
`;

function makeTarget(w, h) {
  return new THREE.WebGLRenderTarget(Math.max(1, w), Math.max(1, h), {
    type: THREE.HalfFloatType,
    format: THREE.RGBAFormat,
    depthBuffer: false,
    stencilBuffer: false,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    generateMipmaps: false,
    wrapS: THREE.ClampToEdgeWrapping,
    wrapT: THREE.ClampToEdgeWrapping,
  });
}

export function createPost(renderer, { bloomLevels, softScale, threadScale = 0.8, bloom }) {
  const quadGeometry = new THREE.BufferGeometry();
  quadGeometry.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
  const quadCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const quadScene = new THREE.Scene();
  const quad = new THREE.Mesh(quadGeometry);
  quad.frustumCulled = false;
  quadScene.add(quad);

  const mat = (fragmentShader, uniforms, blending = THREE.NoBlending) => new THREE.ShaderMaterial({
    vertexShader: FULLSCREEN_VERT, fragmentShader, uniforms, blending,
    depthTest: false, depthWrite: false, toneMapped: false, transparent: blending !== THREE.NoBlending,
  });
  const downMat = mat(DOWN_FRAG, { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uKaris: { value: 0 } });
  const upMat = mat(UP_FRAG, { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uRadius: { value: 1 } }, THREE.AdditiveBlending);
  const blitAddMat = mat(BLIT_FRAG, { tSrc: { value: null } }, THREE.AdditiveBlending);
  const blurMat = mat(BLUR_FRAG, { tSrc: { value: null }, uStep: { value: new THREE.Vector2() } });
  const zoomMat = mat(ZOOM_FRAG, { tSrc: { value: null }, uCenter: { value: new THREE.Vector2(0.5, 0.5) }, uAmount: { value: 0 }, uFade: { value: 0 } });
  const black = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1);
  black.needsUpdate = true;
  const compositeUniforms = {
    tScene: { value: null }, tBloom: { value: black },
    uBloom: { value: 0 }, uBloomAdd: { value: 0 }, uBloomNorm: { value: 1 }, uExposure: { value: 1 }, uFlash: { value: 0 },
    uHue: { value: 0 }, uScrim: { value: 0 }, uScrimBand: { value: new THREE.Vector2(0, 0.42) },
    uGrain: { value: 0.04 }, uVignette: { value: 0.3 }, uAberration: { value: 0 }, uTime: { value: 0 }, uAspect: { value: 1 }, uCurveMix: { value: 1 },
    uCenter: { value: new THREE.Vector2(0.5, 0.5) }, uLensR: { value: 0 }, uShockR: { value: 0 }, uShockAmp: { value: 0 },
    uBg: { value: new THREE.Vector3() }, uResolution: { value: new THREE.Vector2(1, 1) },
    uGlare: { value: new THREE.Vector3() },
    uLift: { value: new THREE.Vector3() }, uLiftRadius: { value: 0.55 },
  };
  const compositeMat = mat(COMPOSITE_FRAG, compositeUniforms);

  let sceneRT = null;
  let softRT = null;
  let softRT2 = null;
  let threadRT = null;
  let threadRT2 = null;
  const mips = [];
  let width = 1, height = 1;

  function allocate(w, h) {
    release();
    width = w; height = h;
    sceneRT = makeTarget(w, h);
    // Small screens keep a minimum plasma resolution (cheap there), so a full-frame plasma never
    // shows its blocks; large screens use the tier's fraction.
    const ss = Math.max(softScale, Math.min(0.75, 300 / Math.max(1, Math.min(w, h))));
    softRT = makeTarget(Math.round(w * ss), Math.round(h * ss));
    softRT2 = makeTarget(Math.round(w * ss), Math.round(h * ss));
    const ts = Math.max(threadScale, Math.min(1, 480 / Math.max(1, Math.min(w, h))));
    threadRT = makeTarget(Math.round(w * ts), Math.round(h * ts));
    threadRT2 = makeTarget(Math.round(w * ts), Math.round(h * ts));
    if (bloom) {
      let mw = w, mh = h;
      for (let i = 0; i < bloomLevels; i++) {
        mw = Math.max(1, Math.round(mw / 2));
        mh = Math.max(1, Math.round(mh / 2));
        mips.push(makeTarget(mw, mh));
        if (mw <= 4 || mh <= 4) break;
      }
    }
  }

  function release() {
    sceneRT?.dispose(); sceneRT = null;
    softRT?.dispose(); softRT = null;
    softRT2?.dispose(); softRT2 = null;
    threadRT?.dispose(); threadRT = null;
    threadRT2?.dispose(); threadRT2 = null;
    while (mips.length) mips.pop().dispose();
  }

  function pass(material, target) {
    quad.material = material;
    renderer.setRenderTarget(target);
    renderer.render(quadScene, quadCamera);
  }

  /**
   * Render one frame. `softMaterial` / `threadMaterial`: the two volumetric passes (or null when
   * empty this frame), `params` the post parameters of this frame.
   */
  function render(scene, camera, softMaterial, threadMaterial, params) {
    if (!sceneRT) return;
    renderer.setClearColor(0x000000, 0);
    if (softMaterial) {
      pass(softMaterial, softRT);
      blurMat.uniforms.tSrc.value = softRT.texture;
      // A little wider inside the plasma, where the ray-march's step pattern would show.
      const blur = params.softBlur || 0.8;
      blurMat.uniforms.uStep.value.set(blur / softRT.width, 0);
      pass(blurMat, softRT2);
      blurMat.uniforms.tSrc.value = softRT2.texture;
      blurMat.uniforms.uStep.value.set(0, blur / softRT.height);
      pass(blurMat, softRT);
    }
    let threads = null;
    if (threadMaterial) {
      pass(threadMaterial, threadRT);
      threads = threadRT;
      if (params.threadZoom > 0.001) {
        const z = zoomMat.uniforms;
        z.uCenter.value.set(params.centerX, params.centerY);
        // Fine pass: 8 taps over an eighth of the streak, even weights.
        z.tSrc.value = threadRT.texture;
        z.uAmount.value = params.threadZoom / 8;
        z.uFade.value = 0;
        pass(zoomMat, threadRT2);
        // Coarse pass: 8 taps over the whole streak, fading along it (a trail).
        z.tSrc.value = threadRT2.texture;
        z.uAmount.value = params.threadZoom;
        z.uFade.value = 0.7;
        pass(zoomMat, threadRT);
      }
    }
    renderer.setRenderTarget(sceneRT);
    renderer.clear(true, false, false);
    if (softMaterial) {
      blitAddMat.uniforms.tSrc.value = softRT.texture;
      pass(blitAddMat, sceneRT);
    }
    if (threads) {
      blitAddMat.uniforms.tSrc.value = threads.texture;
      pass(blitAddMat, sceneRT);
    }
    renderer.setRenderTarget(sceneRT);
    renderer.render(scene, camera);

    // Bloom chain.
    if (mips.length) {
      let src = sceneRT;
      for (let i = 0; i < mips.length; i++) {
        downMat.uniforms.tSrc.value = src.texture;
        downMat.uniforms.uTexel.value.set(1 / src.width, 1 / src.height);
        downMat.uniforms.uKaris.value = i === 0 ? 1 : 0;
        pass(downMat, mips[i]);
        src = mips[i];
      }
      for (let i = mips.length - 1; i > 0; i--) {
        upMat.uniforms.tSrc.value = mips[i].texture;
        upMat.uniforms.uTexel.value.set(1 / mips[i].width, 1 / mips[i].height);
        upMat.uniforms.uRadius.value = 1.0;
        pass(upMat, mips[i - 1]);
      }
      compositeUniforms.tBloom.value = mips[0].texture;
      compositeUniforms.uBloomNorm.value = 1 / mips.length;
      compositeUniforms.uBloom.value = params.bloom;
      compositeUniforms.uBloomAdd.value = params.bloomAdd;
    } else {
      compositeUniforms.tBloom.value = black;
      compositeUniforms.uBloom.value = 0;
      compositeUniforms.uBloomAdd.value = 0;
    }

    compositeUniforms.tScene.value = sceneRT.texture;
    compositeUniforms.uExposure.value = params.exposure;
    compositeUniforms.uFlash.value = params.flash;
    compositeUniforms.uCurveMix.value = params.curveMix;
    compositeUniforms.uHue.value = params.hueCurve;
    compositeUniforms.uScrim.value = params.scrim;
    compositeUniforms.uScrimBand.value.set(params.scrimLow || 0, params.scrimHeight || 0.42);
    compositeUniforms.uGrain.value = params.grain;
    compositeUniforms.uVignette.value = params.vignette;
    compositeUniforms.uAberration.value = params.aberration;
    compositeUniforms.uTime.value = params.time;
    compositeUniforms.uAspect.value = width / height;
    compositeUniforms.uCenter.value.set(params.centerX, params.centerY);
    compositeUniforms.uLensR.value = params.lensR;
    compositeUniforms.uShockR.value = params.shockRadius;
    compositeUniforms.uShockAmp.value = params.shockAmp;
    compositeUniforms.uBg.value.set(params.bg[0], params.bg[1], params.bg[2]);
    compositeUniforms.uResolution.value.set(width, height);
    compositeUniforms.uGlare.value.set(params.glareX, params.glareY, params.glare);
    compositeUniforms.uLift.value.set(params.lift[0], params.lift[1], params.lift[2]);
    compositeUniforms.uLiftRadius.value = params.liftRadius;
    pass(compositeMat, null);
  }

  /**
   * Every pass as a compile unit, under the conditions it runs in (intermediate passes into a
   * half-float target, `screen: false`; the composite to the screen), so no program links mid-film.
   * `at`: the film time a pass first runs (the bloom chain and the composite from the first frame,
   * the soft layer's blur and blit from `impact`, the thread zoom blur from `threadsAt`).
   * `passMaterials`: the film's own full-screen passes as [material, at] (soft layer, threads).
   */
  let units = null;
  const compileScene = new THREE.Scene();
  function compileUnits(passMaterials, impact = 3.6, threadsAt = 5.8) {
    if (!units) {
      const unit = (material, at, screen = false) => {
        const mesh = new THREE.Mesh(quadGeometry, material);
        mesh.frustumCulled = false;
        return { object: mesh, camera: quadCamera, scene: compileScene, screen, at };
      };
      units = [unit(downMat, 0), unit(upMat, 0), unit(compositeMat, 0, true), unit(blitAddMat, impact), unit(blurMat, impact), unit(zoomMat, threadsAt)];
      for (const [material, at] of passMaterials) units.push(unit(material, at));
    }
    return units;
  }

  function dispose() {
    release();
    quadGeometry.dispose();
    downMat.dispose(); upMat.dispose(); blitAddMat.dispose(); blurMat.dispose(); zoomMat.dispose(); compositeMat.dispose();
    black.dispose();
  }

  /** After a context loss: strip the old context's dispose hooks from every GL resource here. */
  function forget(strip) {
    for (const rt of [sceneRT, softRT, softRT2, threadRT, threadRT2, ...mips]) if (rt) strip(rt);
    for (const r of [quadGeometry, downMat, upMat, blitAddMat, blurMat, zoomMat, compositeMat, black]) strip(r);
  }

  return { allocate, release, render, compileUnits, forget, dispose, get allocated() { return !!sceneRT; } };
}
