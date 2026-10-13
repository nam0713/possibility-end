# v9 ending film — “단 하나의 가능성.”

Owner: ending-film. Code: `src/universe/ending-film.js` + helpers `src/universe/ending-*.js`.
Lab: `tools/lab/ending-lab.html` (synthetic handover) and `tools/lab/ending-lab.engine.html` (the real
engine handing over its `ending-ready` seed). Contract: `design/V9-BRIEF.md` §3, the v9.1 additions in
`design/V9.1-FEEDBACK.md` and the engine/film contract (`createEndingFilm({renderer, quality})` →
`begin/update/render/resize/state/pause/seek/skipToEnd/replay/setPointer/setReducedMotion/end/dispose`,
plus `ready`, `handover` and `info()` for labs).

v9.1 (owner feedback): **one cold hue family** for the whole film (no orange, amber, gold, red, pink,
yellow or green anywhere) and **exactly one light at the entry** (the film continues the seed the
reader pressed). The timing contract is unchanged.

## What it shows (following the end of ch.8)

Each UI caption (`ENDING_CAPTIONS` in `src/app.js`, copied from these times) arrives with the image it names.

| time | phase · caption | image |
|---|---|---|
| 0–3.6 | `collapse` · 0 “남아 있던 모든 물질이 한 점으로 결집했고,” | The reader's exact universe (every handed-over particle, drawn exactly as the engine drew it, and the seed's own glow at its exact place and brightness) begins to fall, the sweep starting from the trigger point. The seed — the one light on screen — flares as it is pressed (0–0.6 s), then gathers into a tighter, hotter point. Matter spirals in with free-fall easing into an inclined, Doppler-beamed accretion disk (white-hot inside, ice cyan through the middle, a saturated deep blue at the rim); the camera pans from the engine's view onto the point and pushes in; space darkens; a gravitational lens bends the background near the point; a 0.25 s inhale. |
| 3.6 | impact | One soft ice-white flash (exposure/bloom spike, τ ≈ 0.09 s, never a white screen), a refracting shockwave with a faint, smoothly broken ice-blue front, a short camera shake. |
| 3.6–5.85 | `birth` · 3.6 “‘시간’이라는 차원이 막 태동하고 있었다.” | “공간이 번져나갔고”: a white-hot fireball expands with radial jets while the camera backs away. “진공이 고유의 상태를 선택”: the false vacuum sinks to a saturated cerulean while bubbles of the true vacuum nucleate in it, white-hot and threaded inside, walls lit ice-white, and merge. |
| 5.85–9.6 | `birth` | “폭발적인 인플레이션”: the fireball resolves into incandescent threads and engulfs the camera; inflation drags us through a dense web of them (a short zoom blur, 5.94–6.8 s). Each thread burns by its own brightness — white-hot cores, electric cerulean bodies, deep-blue skirts — on true black. “장과 입자들로 분화”: the web thins, cools, and every bundle splits into deep-blue and pale ice strands; by ~8 s they break into beads; dust condenses; by 9.6 s the plasma is gone: the universe has turned transparent. |
| 9.2–12.4 | `structure` · caption at 8.2 (arrives as the plasma clears, so it stays whole ≥2 s) “처음에는 원자도, 별도, 정보를 새길 구조도 없었다.” | The dark ages: a dim, nearly uniform haze of cold deep-blue dust and faint gas. The camera pushes slowly in. The gas condenses into the first density knots (one cloud per web node, the most massive first, brightening as they collapse), and the dust follows them. |
| 12.4–19.4 | `structure` · 12.4 “중력이 물질을 끌어모아 첫 번째 별들의 불을 켰다.” | The first stars flare blue-white in the densest knots (ignitions 11.95–15.3 s, the earliest the brightest) and their light whitens their gas; the dust is drawn along the filaments into the cosmic web (Zel'dovich-style: each particle moves from its blurred Lagrangian position to its filament/node) while the camera pulls back for the grand view, then flies in. A third of the first stars die as supernovae (a white-hot flash, a slow deep-blue afterglow); heavy elements brighten and pale the gas, a second, paler generation follows; nodes flatten and spin into proto-galaxies. |
| 19.4–24.6 | `world` · 19.4 “수십억 년이 지났다.” | The filaments dissolve (19.5–21.3 s); the hero node becomes “어느 평범한 은하”, a grand-design spiral seen inclined (its proto-disk is sampled from the galaxy's own distribution, so the handover matches) with a white-ice bulge, ice-blue arms with star clouds and small bright cyan-white star-forming knots, patchy dark blue-grey dust lanes, while the camera closes in with a slow orbit until it fills the frame (21–22.5 s). Then the dive to its outskirts: down toward the disk, which brightens into a band as we near its plane, the arms resolving into stars streaming past; the blue-white star is found as a beacon point (21.8–24.6 s). |
| 24.6–31 | `world` · 25 “어느 평범한 은하의 변두리에서 작은 암석 행성 하나가 식어 갔다.” | Inside the disk: the galaxy is the band of the sky. The blue-white star, then a small rocky planet that cools from fissures glowing white-hot to deep blue (the film's colours of heat) to deep-blue oceans over slate and blue-grey land, white clouds, a thin ice-blue atmosphere; life darkens the moist lowlands and blooms faintly cyan in the shallow seas. Final composition: planet centred (portrait too), lit from the left, the galaxy's band diagonal behind it, calm space in the upper and lower thirds for the UI's text. |
| > 31 | finished | Keeps living: clouds and planet rotate, stars twinkle, a slow camera drift (none under reduced motion). |

Everything is a pure function of film time (`ending-timeline.js` scalar curves, `ending-camera.js`
monotone-cubic camera tracks, per-particle motion evaluated in the vertex shader, the thread and gas
fields evaluated per pixel), so `seek`, `skipToEnd`, `replay` and stills are exact. Only the pointer
parallax is smoothed outside film time.

The phase/time contract is unchanged: impact 3.6 s, phases 0 / 3.6 / 9.2 / 19.4, duration 31, `PHASE_STILLS`.
Within it, two beats moved to meet their captions: the first stars now ignite from 11.95 s (was 11.3) so
they flare with the 12.4 s line, and the camera pushes in through the dark ages (9.4–12.3 s) before the
pull back to the grand view of the web (14.6 s).

## Palette (v9.1): one cold hue family

Every colour the film draws lies in the family of `design/V9.1-FEEDBACK.md` (hue ~190–210°): it
varies luminance and saturation, never hue. The tints live in one GLSL chunk, `PALETTE` in
`ending-glsl.js` (linear RGB, largest channel 1): `P_WHITE` white-hot (a breath of ice), `P_HI`
accent-hi #e6fbff, `P_ICE` accent #a9e7f2, `P_BLUE` accent-deep #4f8fb0, `P_DEEP` deepest #1b3a52,
`P_ABYSS` the deepest blue a fading skirt reaches. In this film **temperature reads as brightness and
pallor**: white-hot cores, ice cyan, then a saturated deep blue as light cools into black.

- `burn(k)` (was `fire()`): k = 0 dim saturated deep blue … 0.3 deep blue … 0.52 electric cerulean …
  0.72 bright cerulean-cyan … 0.9 ice … 1.1 white-hot; saturated through the middle (as the old fire's
  orange was), pale only at the top; each stop keeps about the old luminance there, so exposures stay
  as tuned. `thermal(k)`: deepest → accent-deep → cerulean → ice → accent-hi.

| phase | colour |
|---|---|
| seed / collapse | the seed's own ice glow (engine colours); infalling matter heats ice → white-hot; settled matter white near the point, deep blue further out; accretion disk white-hot → ice → deep-blue rim (no ember skirt); background lift ice (#a9e7f2 × 0.018) |
| impact | flash `(0.85, 0.96, 1)` ice-white; shock front ice-blue, smoothly broken (48 seamless angular cells; the old direction-grid hash drew rectangles on tall screens) |
| fireball | white-hot core burning out through cerulean into a deep-blue limb; supercooling (0.3) sinks the false vacuum to a deeper blue, the true-vacuum bubbles burn paler and brighter, walls `P_HI` |
| threads | `burn()` by each strand's brightness: white-hot cores, cerulean bodies, deep-blue skirts; differentiation: cooling deep-blue strands vs pale ice strands `(0.36, 0.82, 1)` |
| sparks / fields | thermal() blue-white → deep; fields ice / cold white `(0.82, 0.94, 1)` / deep `P_DEEP` |
| dark ages | dust `(0.16, 0.48, 1)` tints, gas knots `P_DEEP` → pale ice by mass |
| first stars | blue-white `(0.6, 0.86, 1)`; second generation ice-white `(0.88, 0.97, 1)`; supernova `P_WHITE` flash + `P_BLUE` afterglow; enrichment and starlight brighten the gas toward `P_HI` (cold brightening) |
| galaxy | bulge `P_HI × 0.86`, arms `(0.5, 0.8, 1)`, knots `(0.68, 0.94, 1)`, dust lanes multiply by `(0.34, 0.41, 0.47)` (dark blue-grey); stars bulge white-ice, young ice-blue, old field pale |
| star | photosphere white-hot at the centre limb-darkening into ice, corona ice `(0.6, 0.86, 1)`, beacon `(0.85, 0.96, 1)`, glare ice |
| planet | sunlight `(0.9, 0.96, 1)`; oceans deep blue; land slate `(0.035, 0.045, 0.056)` → blue-grey `(0.1, 0.12, 0.14)`, dry belts `(0.17, 0.2, 0.23)`, ranges, snow; life: deeper slate lowlands + faint cyan blooms on the shelves; clouds `(0.86, 0.91, 0.95)`; atmosphere day `(0.18, 0.55, 1)`, limb pales to ice (no sunset tones); molten youth: fissures `P_ABYSS` → `P_HI` |
| sky | stars cold white / ice / blue; the galactic band paler and whiter toward the centre |
| post | ACES; hue-preserving shoulder through the birth keeps the cold fire chromatic; shadows graded `(0.92, 0.99, 1.05)`; neutral grain (hue-preserving); **lens dispersion is cold**: light displaced from nearer the centre adds an ice fringe, from further out a deep-blue one (an RGB split always puts a warm fringe on one side, so there is none) |

Verified on dense real-GPU stills (0–32 s, 1440×900 and 390×844) with an off-palette pixel count
(chromatic pixels — value > 0.12, saturation > 0.18 — whose hue is outside 180–224°): the v9 film had
up to 46 % of its pixels warm through the birth; v9.1 has ≤ 0.24 %, all of them adjacent blues
(220–240°) or JPEG edge noise (170°), none warm.

## Entry: one light (v9.1)

At the end of ch.8 the only light is the seed. The film's first frames continue it, at the same place,
size and brightness, so the reader sees one light that flares and becomes the collapse core:

- **`focus`** (engine → `begin`): the seed's world position, in the same (sheared) space as `positions`.
  The film builds its space on it: everything collapses exactly onto it, and the core sprite, the
  seed's glow, the disk, the lens, the background lift, the flash and the shockwave are all centred on
  it. Without `focus` the film falls back to its light-weighted, twice-trimmed centroid (v9; it can sit
  a few pixels off the seed). `info().build.focus` reports which.
- **`focusLight`** (engine → `begin`, `engine.js focusLight()`): `{ glows: [{scale (world half-size),
  intensity, core, halo (linear rgb), breath, rays}], dim, … }` — the seed's glow billboards as drawn
  (armed or not) and the light's dim. The film draws the same profile (`accents/materials.js`
  glowFragment) at `focus`, intensity × dim. `null` means no seed glow is showing (none is drawn); an
  absent field uses `DEFAULT_SEED_LIGHT` (`ending-core.js`: the engine's armed SEED_GLOW / SEED_HALO at
  the reading layout's dim 0.5). `info().build.light` = `'handover' | 'none' | 'default'`.
- **Exact particles.** The film now opts in to the engine's exact sprite sizes **with** their energies
  (`film.handover = { energies: true, focus: true, focusLight: true }`; `src/universe/film-host.js`
  sends `sizes` + `energies` when `handover.energies` is set): each particle's first frame is its
  engine sprite (colour / energy is the centre pixel). Sizes without energies are ignored (they would
  draw 1.9–4× too bright); without both the film estimates them from the colours as before.
  `info().build.exact` reports it.
- **The press.** `press` = smoothstep(0, 0.14 s) · exp(−(t − 0.14)/0.42): the seed's glow flares
  (× 1.7 at 0.14 s, its profile 25 % wider, the billboards 12 % larger), then gathers (profile 40 %
  tighter, fading out 0.3–1.5 s) while the film's own core sprite — concentric, ice-tinted, white-hot
  toward the impact — ramps in from 0 (0.04–0.9 s, flaring with the press too) and brightens as
  everything falls in. The broad glow the v9 core sprite painted (`coreGlow`) is gone: the engine's
  halo billboard is that glow now.
- **Calibration.** The engine's UnrealBloom (threshold 0.48, tight mips) concentrates more light
  around the glow's bright core than the film's wider normalised bloom; `seedBloom` (`SEED_BLOOM` 1.3,
  fading 0.15–2.2 s like the engine's tone curve) stands in for it, and `SEED_GAIN` 1.12 places the
  first frame inside the seed's breathing (the engine glow breathes ±16 %, ±26 % armed; its phase is
  not handed over). Measured on the real engine lab (mean sRGB luminance in rings of 8 px around the
  seed; the engine over six breath phases, the film's first frame):

  | case | engine seed, exhale … inhale | film, first frame |
  |---|---|---|
  | 1440×900 | 252 217 159 121 93 76 … 254 241 194 151 118 95 | 248 214 168 132 105 85 |
  | 1440×900, armed | 253 223 167 128 100 82 … 254 251 225 181 144 117 | 252 235 196 160 131 107 |
  | 390×844 (rings of 5.6 px) | 240 180 120 92 73 59 … 250 211 151 114 91 73 | 239 182 131 96 75 60 |

  Same centre (±1 px) in every case.

Checked for a second light over 0–3.6 s (synthetic lab with and without `focus` / `focusLight` /
sizes, the real-engine lab at 1440×900, 390×844 and 844×390, armed and not, and the real site: ch.8's
trigger hovered then clicked, or tapped): none — the core sprite, the seed glow, the disk's hot centre,
the lens, the lift, the flash and the shock all share the one centre, which stays within ±2 px of the
waiting seed from the press through the flare into the disk's core.

## Contract notes

- `state().phase` is the phase **index** (0–3); `state().phaseKey` adds the key. `phases` is a frozen
  shared array; `impact` = 3.6; `duration` = 31. `finished` latches once `time >= duration` and the
  last composition keeps living while time advances.
- `begin(handover)`: `{ positions, colors, count, camera: {position, target, fov}, origin: [nx, ny],
  width, height, pixelRatio }` plus, optional and backward-compatible: `focus: [x, y, z]`,
  `focusLight`, `sizes` + `energies` (see above).
- **Non-blocking construction.** `createEndingFilm()` returns in < 1 ms. The content (≈ 0.2–0.4 s of
  data generation and GPU-object setup on the high tier) is a generator run in `requestIdleCallback`
  slices (one or more resumable steps per callback, each step ≤ ~10 ms: particle data in chunks of
  4 000, galaxy stars in chunks of 8 000, sky stars in chunks of 3 000, then one module per step).
  When it is done, `ready` resolves and the ~19 programs are compiled in idle time **one at a time**
  (`compileAsync` per drawable / pass; each waits until the previous one has linked through
  `KHR_parallel_shader_compile`), so the GPU process never holds a queue of heavy shader translations
  that the page's next frame would wait on — compiling them all at once caused a 150–200 ms main-thread
  stall. `begin()` finishes whatever is left synchronously (build steps, then any program the idle
  compile has not reached), so the film is always complete when it plays; the engine prewarms it while
  the reader is still in ch.8, so normally nothing is left. `info().build` reports `createMs`, `steps`,
  `longestMs`, `buildMs`, `beganBeforeBuild`, `compileMs` (wall time of the idle compile chain),
  `beginMs`, `beginCompileMs`, `beginPending`, `centreMs`, `handoverMs`, `heldMs`, and (v9.1) `focus`,
  `exact`, `light`.
- **Context loss.** The film listens to `webglcontextlost/restored` on the renderer's canvas. On loss
  it stops rendering and strips three's `dispose` hooks from every GL resource it owns (render targets
  and their textures, geometries, materials, the 1×1 texture): those hooks belong to the lost context
  and would otherwise delete foreign objects (“object does not belong to this context”) when `end()`
  releases the targets or `dispose()` runs. After the restore three re-creates everything from the
  film's data on first use, and the programs are recompiled in idle time. Verified: lose/restore
  mid-film, then `end()`/`dispose()` (lab) and close/replay (site) → no warnings.
- `begin()` saves and `end()` restores tone mapping, exposure, clear colour/alpha, autoClear, output
  colour space and the bound render target. `end()` releases the per-run render targets.
- Reduced motion: no shake, no drift, no strobe (flash × 0.2, no shock distortion, no zoom blur), static
  grain. When paused at a phase start, the film shows that phase's composed still: collapse 2.7 s,
  birth 4.95 s, structure 15.8 s, world 31 s (`PHASE_STILLS`; the UI's `STILL_TIMES` mirror them);
  `state().time` still reports the seeked time.
- Continuity: the film starts on the engine's tone curve (exponential shoulder), bloom style (additive
  glow, plus the seed-glow bloom stand-in), background (#04070b screen-blended in display space with the
  seed's ice lift), exact particles and the seed's own glow, and blends into its own ACES look by ~2 s,
  while space darkens. Through the birth (3.6–~11 s) a hue-preserving shoulder keeps the cold fire
  chromatic.
- Zero per-frame allocations in `update/render` (scratch objects, preallocated `frame`; `state()`
  returns a fresh small object by design).

## How the hard parts are drawn

- **Inside the plasma (thread pass, `ending-soft.js`).** Not a ray-march: a few (4–6) spherical shells
  around the camera, geometrically spaced from 0.13 to 1.45 film units, each cutting a warped 3D noise
  field; the threads are its iso-lines, anti-aliased with `fwidth` (a Gaussian core one pixel-footprint
  wide plus a short exponential skirt), so they are crisp at any resolution and never show a sampling
  pattern. Bundles are iso-lines at several levels (braids while the plasma is dense, single strands
  later); the deep-blue/ice split is two level sets. Colour comes from `burn()` of each strand's own
  brightness (white-hot → cerulean → deep blue), so there are no muddy mid-tones; between threads is
  true black. Rendered at 0.6–0.85 of the internal resolution (≥ 480 px on the short side), never
  blurred; a two-pass, 64-sample zoom blur (no noise) streaks it during the violent stretch.
- **The fireball from outside (soft pass).** The original low-resolution ray-march (7 steps on high)
  + separable blur, used only until the threads take over (5.84–5.98 s). Its temperature varies with
  the turbulence (0.24 × fbm) so hotter, paler and cooler, deeper-blue regions alternate.
- **The dark ages' gas (soft pass).** One Gaussian cloud per web node, integrated analytically along each
  ray (a dense core and a wider halo; distant nodes are skipped early), collapsing from 0.3 film units to
  the node's radius on its own schedule. Cheap and perfectly smooth, then blurred like the plasma.
- **The galaxy (`ending-galaxy.js`).** Star points (shared distribution with the hero proto-galaxy; the
  rare far tail folds back into the outer disk instead of piling into a ring) over a diffuse disk shader:
  arms born out of the bulge, spurs, patchy dark blue-grey dust lanes on the inner edge of the arms, star
  clouds and cyan-white knots; the sheet brightens at grazing angles (a longer path through a thin disk)
  and fades into the resolved stars when the camera is close to it.

## GPU cost knobs (`ENDING_TIERS` in `ending-film.js`)

| knob | high | medium | low | what it costs |
|---|---|---|---|---|
| `matter` (max particles; also capped by `quality.particles`, floor 50 % of the tier) | 160 000 | 90 000 | 38 000 | 4 vertices × 2 position evaluations each (motion-blurred capsules); fill is small (quads trimmed to the visible Gaussian). Skipped entirely once the web has faded (> 24 s). Fewer particles get a little more light each. Also the idle-build time (≈ 70 % of it). |
| `nodes` (web nodes / proto-galaxies / gas knots, ≤ 56) | 56 | 48 | 36 | CPU at creation; the gas pass loops over them (2 uniform vec4 each). |
| `galaxy` (star points) | 90 000 | 52 000 | 24 000 | point sprites, 19–31 s only. |
| `sky` (background stars; new sky = 3×) | 4 200 | 3 000 | 2 000 | negligible. |
| `bloomLevels` | 6 | 5 | 4 | 13-tap downsample + tent upsample per level (`quality.bloom === false` skips bloom). |
| `softScale` (fireball / gas resolution) | 0.5 | 0.42 | 0.34 | the ray-marched fireball (3.6–5.98 s) and the gas (9.2–21 s); + a separable blur. Small screens keep ≥ 300 px. |
| `plasmaSteps` / `plasmaOctaves` | 7 / 4 | 6 / 4 | 4 / 3 | fireball ray-march samples × noise octaves (vacuum bubbles: first 2 samples only). |
| `shells` / `threadScale` | 6 / 0.85 | 5 / 0.72 | 4 / 0.6 | the thread pass (5.84–9.6 s): ~5 simplex evaluations per shell per pixel, at this fraction of the internal resolution (≥ 480 px on the short side). |
| `planetSegments` | 128 | 96 | 64 | the planet/atmosphere spheres (shading is per pixel). |
| `maxPixels` (internal HDR resolution cap) | 3.4 MP | 2.1 MP | 1.1 MP | everything is rendered into a half-float target ≤ this size and upscaled in the composite. |

v9.1 adds two seed-glow billboards (0–1.6 s only, a few hundred pixels each), one `aEnergy` float per
particle and three extra luminance taps in the composite where the lens disperses (they replace two
of the three RGB-split taps): no measurable cost. Entry knobs (`ending-timeline.js`): `PRESS_RISE` 0.14 s,
`PRESS_DECAY` 0.42 s, `SEED_GAIN` 1.12, `SEED_BLOOM` 1.3.

Measured on the dev machine (RTX 2060 via ANGLE/D3D11, headless Chrome, lab stills, each frame forced
to completion with a 1-pixel readback, so ≈ 0.8 ms of sync overhead is included; the GPU is shared with
other work, ±30 %): high at 1440×900 — collapse 1.7–3.9 ms, impact/fireball 2.2–4 ms, inside the plasma
(6.2–8.5 s, the heaviest stretch) 3.2–3.9 ms, dark ages and web 1.3–1.9 ms, galaxy and planet 1.2–1.8 ms.
The old inside-plasma ray-march measured 3.7–5.5 ms with the same probe, so the cleaner threads cost the
same or less. Medium at 1440×900: 1.1–4.5 ms everywhere. Low at 390×844: 0.8–3.5 ms. A mid laptop iGPU is
roughly 10–15× slower than this GPU: high ≈ 25–35 fps in the plasma and 45–60 elsewhere; medium ≈ 30–60;
the engine's quality detection picks the tier.

CPU: `createEndingFilm()` < 1 ms (was 150–165 ms in one task). The idle build takes 0.2–0.4 s of idle
time on the high tier, in ~70 steps whose longest is typically 6–13 ms (a rare GC outlier up to ~45 ms
was seen once). The idle compile chain then runs for ~4–5 s of wall time on the dev machine (ANGLE/D3D11
translation is slow: the planet's fragment shader alone takes ~2 s, the fireball's ~0.8 s), off the main
thread. Profiled on the real site (CPU profile + long-task observer, scrolling to the end of ch.8 where
the engine prewarms the film, triggering 14 s later): no long task (> 50 ms) before the trigger in 6 of
6 runs (the original code: one 168–175 ms task, `createEndingFilm`, sometimes plus a ~70–120 ms shader
stall); at the trigger one ~110 ms task, as before (the engine's snapshot + `begin()` ≈ 55–60 ms, most of
it `loadHandover` placing ~150 000 particles). If the reader triggers within ~5 s of reaching the end of
ch.8 the compile chain may still be running: `begin()` then finishes it, and a second ~70 ms task follows
the trigger.

## Files

| file | role |
|---|---|
| `ending-film.js` | contract, tiers, idle build, context-loss handling, renderer state save/restore, handover (focus, focusLight, sizes + energies) → film space, per-frame orchestration |
| `ending-timeline.js` | phases, duration, every time curve (scale factor, temperature, plasma, threads, gas, fades, post, the press and the seed's glow) |
| `ending-camera.js` | the continuous camera (engine view → push-in → fireball → through the threads → dark-ages push → web flight → galaxy orbit and dive → star → planet) |
| `ending-layout.js` | geometry of the new universe in film space (hero galaxy, star, planet, final composition) |
| `ending-matter.js` | the particles: handover (exact sizes/energies), collapse, birth, dust, web, first stars, proto-galaxies (vertex-shader motion); resumable data build |
| `ending-core.js` | the seed's own glow billboards (engine profile, `DEFAULT_SEED_LIGHT`), the core sprite and the accretion disk |
| `ending-soft.js` | the fireball and vacuum bubbles (low-res ray-march), the gas knots (analytic), the thread pass (iso-lines on shells) |
| `ending-sky.js` | parent and new star fields (resumable data build), the galaxy's band seen from inside |
| `ending-galaxy.js` | the spiral galaxy (star points + diffuse disk) |
| `ending-planet.js` | the blue-white star, the planet (cooling crust, oceans, clouds, life) and its atmosphere |
| `ending-post.js` | HDR targets, bloom chain, thread zoom blur, lens + shockwave + cold dispersion, tone curves, grade, grain |
| `ending-glsl.js`, `ending-math.js` | shared GLSL (the `PALETTE`, simplex noise, hashes, `thermal()` and `burn()` ramps) and JS helpers |

Lab: `node tools/build-universe.mjs --entry tools/lab/ending-lab.entry.js --out tools/lab/ending-lab.bundle.js --dev`,
then `tools/lab/ending-lab.html?t=13&paused=1` (`?tier=low|medium`, `?reduced=1`, `?hud=1`, `?build=sync` to
begin before the idle build finishes, `?delay=ms` to begin later; `window.__lab.info.build` has the build
timings and `focus` / `exact` / `light`; keys: space, ←/→, r, e, x = end()). The default scene is a
realistic `ending-ready` handover: the v9.1 seed formation (core, corona, faint orbiting arcs, infalling
threads, dust) in the reader's composition (the engine rig's distance and pitch, reading layout, dim
0.5), with `focus`, `focusLight` (the armed seed glow) and exact `sizes` + `energies`, like the engine.
`?focus=0`, `?light=0`, `?sizes=0` drop each (the fallbacks); `?seedAt=0.62,0.4` puts the seed
off-centre with a one-sided infalling stream; `?scene=ring` hands over the cover ring instead.
`?pre=1` (or `?pre=hold` until `__lab.release()`) first shows the handover the way the engine draws it
(its sprites, the glow billboards, UnrealBloom 0.55/0.08/0.48 and the engine's finish curve) for a
continuity check. Like the engine, the lab begins once the idle build is done. Real handover: build
`src/universe/index.js` into `tools/lab/ending-lab.engine.bundle.js` and open
`tools/lab/ending-lab.engine.html?layout=reading&start=1` (`&arm=1` arms the seed first, as the trigger's
hover/focus does).
