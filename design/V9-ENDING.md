# v9 ending film — “단 하나의 가능성.”

Owner: ending-film. Code: `src/universe/ending-film.js` + helpers `src/universe/ending-*.js`.
Lab: `tools/lab/ending-lab.html` (synthetic handover) and `tools/lab/ending-lab.engine.html` (the real
engine handing over its `ending-ready` seed). Contract: `design/V9-BRIEF.md` §3, the v9.1 additions in
`design/V9.1-FEEDBACK.md` and the engine/film contract (`createEndingFilm({renderer, quality})` →
`begin/update/render/resize/state/pause/seek/skipToEnd/replay/setPointer/setReducedMotion/end/dispose`,
plus `ready`, `handover` and `info()` for labs).

v9.1 (owner feedback): **exactly one light at the entry** (the film continues the seed the reader
pressed) and, after the owner's **amendment 2** (design/V9.1-FEEDBACK.md, “three.js colour is free —
make it physically right”, which replaces the four-hue palette), **physically motivated colour**:
every thermal emitter by blackbody temperature, gas and dust in astrophotography colours, a young
planet that cools like a real one into 작고 푸른 행성. The timing contract is unchanged.

## What it shows (following the end of ch.8)

Each UI caption (`ENDING_CAPTIONS` in `src/app.js`, copied from these times) arrives with the image it names.

| time | phase · caption | image |
|---|---|---|
| 0–3.6 | `collapse` · 0 “남아 있던 모든 물질이 한 점으로 결집했고,” | The reader's exact universe (every handed-over particle, drawn exactly as the engine drew it, and the seed's own glow at its exact place and brightness) begins to fall, the sweep starting from the trigger point. The seed — the one light on screen, white-hot as the engine hands it over — flares as it is pressed (0–0.6 s), then gathers into a tighter, whiter point. Matter spirals in with free-fall easing, heating (blackbody) from orange through yellow to white, into an inclined accretion disk whose temperature falls as r^-3/4 — white-hot inside (~7 500 K), yellow, orange, an ember-red rim (~1 650 K) — relativistically Doppler-beamed (the approaching side brighter and bluer, the receding side dimmer and redder); the reader's far stars stream in blueshifted. The camera pans from the engine's view onto the point and pushes in; space darkens; a gravitational lens bends the background near the point; a 0.25 s inhale. |
| 3.6 | impact | One soft flash, the hottest light of the film (white with a breath of blue, τ ≈ 0.09 s, never a white screen), a refracting shockwave whose faint, smoothly broken front is blue-white on its inner edge and reddened outward, a short camera shake. |
| 3.6–5.85 | `birth` · 3.6 “‘시간’이라는 차원이 막 태동하고 있었다.” | “공간이 번져나갔고”: a fireball, white-hot at its heart and cooling through yellow and orange into a dull red limb (blackbody), expands with radial jets while the camera backs away. “진공이 고유의 상태를 선택”: the false vacuum supercools (dimmer, redder) while bubbles of the true vacuum nucleate in it, reheated (paler, brighter) and threaded inside, their walls a thin white-hot front, and merge. |
| 5.85–9.6 | `birth` | “폭발적인 인플레이션”: the fireball resolves into incandescent threads and engulfs the camera; inflation drags us through a dense web of them (a short zoom blur, 5.94–6.8 s). Each thread burns by its own temperature — white cores, orange bodies, deep red skirts; about a third of the bundles hotter (blue-white cores, yellow-white bodies) — on true black. “장과 입자들로 분화”: the web thins and cools; every bundle splits into dull red strands and the hottest blue-white ones; by ~8 s they break into beads; dust condenses; by 9.6 s the plasma is gone: the universe has turned transparent. |
| 9.2–12.4 | `structure` · caption at 8.2 (arrives as the plasma clears, so it stays whole ≥2 s) “처음에는 원자도, 별도, 정보를 새길 구조도 없었다.” | The dark ages — literally dark: a dim, nearly uniform haze of grey dust and faint blue-grey neutral gas. The camera pushes slowly in. The gas condenses into the first density knots (one cloud per web node, the most massive first, brightening as they collapse), and the dust follows them. |
| 12.4–19.4 | `structure` · 12.4 “중력이 물질을 끌어모아 첫 번째 별들의 불을 켰다.” | The first stars — Population III, massive and metal-free (~40 000 K) — flare blue-white in the densest knots (ignitions 11.95–15.3 s, the earliest the brightest) and ionise their gas: HII regions glowing H-alpha pink-red, with a teal O-III core in the most massive knots. The dust is drawn along the filaments into the cosmic web as surveys render it (neutral-blue filaments, dark voids, yellowish-white nodes) (Zel'dovich-style: each particle moves from its blurred Lagrangian position to its filament/node) while the camera pulls back for the grand view, then flies in. A third of the first stars die as supernovae (a blue-white flash, then the remnant's slow afterglow: H-alpha filaments around a faint O-III interior); heavy elements brighten and pale the gas; a second, sun-like (yellow-white) generation follows; nodes flatten and spin into proto-galaxies. |
| 19.4–24.6 | `world` · 19.4 “수십억 년이 지났다.” | The filaments dissolve (19.5–21.3 s); the hero node becomes “어느 평범한 은하”, a grand-design spiral seen inclined (its proto-disk is sampled from the galaxy's own distribution, so the handover matches), coloured as galaxies photograph: a yellowish bulge of old stars (~4 200 K), blue-white arms of young stars (O/B/A, 9 000–25 000 K) in a blue haze, pink HII knots, patchy brown-grey dust lanes, a dim white-to-yellow inter-arm field — while the camera closes in with a slow orbit until it fills the frame (21–22.5 s). Then the dive to its outskirts: down toward the disk, which brightens into a band as we near its plane, the arms resolving into stars streaming past; the sun-like star is found as a beacon point (21.8–24.6 s). |
| 24.6–31 | `world` · 25 “어느 평범한 은하의 변두리에서 작은 암석 행성 하나가 식어 갔다.” | Inside the disk: the galaxy is the band of the sky (the neutral, faintly warm white of ordinary stars, yellower toward the centre, brown-grey dust rifts, a few faint pink knots). The sun-like star (5 800 K, limb-darkened: yellow-white), then a small rocky planet that cools like a real one: a molten magma ocean, orange-yellow with brighter churning seams, while it is a point beside the star (24.6–26 s) → a dark basalt crust closing over it in plates, its fissures dimming from orange to dull red (26–28.2 s, put out as the seas rise) → steam rising into broken, streaky bands (27.2–28.4 s) → deep-blue seas filling its basins (27.5–29.2 s) and the steam breaking into weather (28–29.8 s) over grey-brown rock, tan dry belts and snow on the highest peaks, a thin Rayleigh-blue rim with a faint sunset thread at the terminator; life greens the moist lowlands and blooms faintly teal in the shallow seas (29.2–30.8 s) — 작고 푸른 행성: about two thirds ocean, roughly a third cloud. Final composition: planet centred (portrait too), lit from the left, the galaxy's band diagonal behind it, calm space in the upper and lower thirds for the UI's text. |
| > 31 | finished | Keeps living: clouds and planet rotate, stars twinkle, a slow camera drift (none under reduced motion). |

Everything is a pure function of film time (`ending-timeline.js` scalar curves, `ending-camera.js`
monotone-cubic camera tracks, per-particle motion evaluated in the vertex shader, the thread and gas
fields evaluated per pixel), so `seek`, `skipToEnd`, `replay` and stills are exact. Only the pointer
parallax is smoothed outside film time.

The phase/time contract is unchanged: impact 3.6 s, phases 0 / 3.6 / 9.2 / 19.4, duration 31, `PHASE_STILLS`.
Within it, two beats moved to meet their captions: the first stars now ignite from 11.95 s (was 11.3) so
they flare with the 12.4 s line, and the camera pushes in through the dark ages (9.4–12.3 s) before the
pull back to the grand view of the web (14.6 s).

## Colour (amendment 2): physically motivated

The four-hue palette is gone (design/V9.1-FEEDBACK.md, amendment 2: “three.js colour is free — make it
physically right”). Every colour in the film now follows from what emits or scatters the light:

- **Thermal light is a blackbody.** `blackbody(T)` (GLSL, `ending-glsl.js`) and `blackbody(T)` /
  `blackbodyExact(T)` (JS, `ending-math.js`) are Planck's law integrated against the CIE 1931 2°
  colour-matching functions (the Wyman–Sloan–Shirley multi-lobe fit), XYZ → linear sRGB (D65),
  out-of-gamut negatives clipped, largest channel 1; the GLSL side samples a 32-entry table
  (800–40 000 K, log-spaced, interpolated in log T) generated from the same integral. 1 000 K is a
  deep red, 2 000 K orange, 3 000 K yellow-orange, 5 800 K a pale yellow-white, 6 500 K white, 10 000 K+
  blue-white. No hand-picked hexes for heat.
- **Heat index.** The film's scalar temperature k (the timeline's `temp`, a thread's brightness …)
  maps to kelvin as `T = 800 · 8.75^k` (k = 0 → 800 K, 0.5 → 2 400 K, 0.8 → 4 500 K, 1 → 7 000 K,
  1.15 → 9 700 K). `burn(k)` = `blackbody(T(k))` × a radiance that rises steeply with temperature
  (a stand-in for Stefan–Boltzmann over the exposure range); `burnHot(k)` is a hotter population at the
  same radiance (its colour 0.25 further up the scale); `thermal(k)` the same colour at unit-ish
  brightness.
- **Gas and dust in astrophotography colours** (`PALETTE` constants, linear RGB): `H_ALPHA` (1, 0.1,
  0.14) pink-red, `O_III` (0.06, 0.78, 0.72) teal, `REFLECTION` blue, `DUST_LANE` (0.42, 0.33, 0.25)
  brown-grey transmission, `WEB` (0.6, 0.7, 1) the neutral blue of a survey render; named temperatures
  `K_SUN` 5 800 K, `K_POP3` 40 000 K, `K_BULGE` 4 200 K, `K_YOUNG` 11 000 K, `K_WHITE` 6 500 K.

| phase | colour |
|---|---|
| seed / collapse | the seed's own light in the colours the engine hands over (`focusLight`; now white-hot: the 5 900 K blackbody bleached toward white, a 5 400 K glow, a 4 800 K outer halo); the film's core sprite takes its tints from that glow and heats toward the impact to white in a faint ~12 000 K blue-white glow; infalling matter heats 2 200 → 7 000 K, the reader's far stars blueshift (6 500 → 16 000 K); settled matter and the accretion disk follow the thin-disk law T ∝ r^-3/4 (disk: 7 500 K inner edge → ~1 650 K rim; settled matter 6 500 K → ~1 700 K by orbit), Doppler-shifted and beamed: δ = 1/(1 − β cos θ) with β = 0.42 (r/r_in)^-1/2, observed T × δ, brightness × δ³; background lift in the seed's colour |
| impact | flash white with a breath of blue (the hottest light of the film); shock front blue-white inside, reddened outside (48 seamless angular cells) |
| fireball | `burn()`: white-hot core, yellow, orange, a dull red limb; the turbulence (0.24 × fbm) alternates hotter and cooler regions; supercooling sinks the false vacuum dimmer and redder, the reheated true-vacuum bubbles burn paler and brighter, their walls a thin white-hot (~8 000 K, bleached) front; handing over to the threads it fades by cooling |
| threads | each strand by its own temperature, T steeper than its brightness (k = base + span · lum^1.6): white cores, orange bodies, deep red skirts (`burn`); a third of the bundles hotter (`burnHot`: blue-white cores); differentiation: cooling red strands vs the hottest blue-white ones (~20 000 K) |
| sparks / fields | `thermal()` white → orange → red; fields: blue-white (~20 000 K), white (~6 000 K), a cooled dull red (~1 100 K) |
| dark ages | dust a dim neutral grey, gas knots a dim blue-grey (cold neutral gas only scatters faint light) |
| first light / web | Population III stars ~40 000 K blue-white (bleached 25 %); the gas they ionise glows H-alpha with an O-III core in the most massive knots; filaments `WEB` neutral blue, nodes yellowish white `(1, 0.84, 0.64)`, voids dim; supernovae a ~15 000 K flash and an H-alpha + O-III remnant; enrichment pales the gas (a touch of teal); the second generation 5 400 K |
| galaxy | diffuse disk: bulge `K_BULGE` (bleached), arms `K_YOUNG` + blue reflection haze, HII knots H-alpha pink, dust lanes × `DUST_LANE`; stars by blackbody: bulge 3 800–5 200 K, young arm stars 9 000–25 000 K, old field 4 500–7 500 K, a few pink knots |
| star | photosphere `blackbody(4 500 → 6 100 K)` from limb to centre (limb darkening is cooler gas), corona and halo between 5 800 and 4 800 K, beacon and glare `K_SUN` |
| planet | sunlight `K_SUN` half white-balanced (a camera's daylight balance: yellow-white, clouds stay white); molten: magma 1 650–2 700 K by churn and seam, self-luminous; crust: basalt albedo ~0.02, fissures 1 500 → 950 K, dimming until the seas rise; steam and clouds `(0.86, 0.87, 0.88)` albedo; oceans deep blue (Earth-like linear albedo), shelves lighter; land: grey-brown rock, tan dry belts, grey ranges, snow, green lowlands with life; atmosphere Rayleigh blue `(0.16, 0.42, 1)` paling at the limb, a thin sunset band (orange) at the terminator, a faint blue twilight |
| sky | stars by blackbody (58 % 4 600–7 000 K, 26 % 7 000–15 000 K, 16 % 3 300–4 500 K), 40 % desaturated toward white (a bright star's core saturates the sensor); the band neutral warm white, yellower toward the centre, brown-grey rifts, faint pink knots |
| post | ACES; through the birth a *partly* (45 %) hue-preserving shoulder keeps the fire's orange and red from washing out while its brightest parts still roll through yellow into white, like film; a breath of cool in the deepest shadows `(0.97, 0.985, 1.03)` (none through the birth); the camera lens's chromatic aberration adds faint blue inner / red outer fringes (gravitational lensing itself is achromatic); neutral grain |

Verified on real-GPU stills (RTX 2060, ANGLE/D3D11): cold lab stills through `tools/shot.mjs --gpu
--wait 3500` every 0.5 s for 0–6 s and every 1 s for 6–32 s at 1440×900 and `--mobile` (390×844),
reviewed as contact sheets — no blank frame anywhere — and the real site (ch.8, trigger scrolled into
view, 4 s, clicked; `Universe.ending.seek(t)` + `pause(true)` at 0.2, 1, 2.5, 4.5, 7, 12, 17, 22, 25,
26.5, 28, 31 s) at both sizes: one warm-white light from the waiting seed into the collapse core; an
ember-orange disk with a white-hot centre; a white-hot fireball with an orange-red limb (no magenta);
orange and blue-white threads; a dark, neutral dark age; a neutral-blue web with pink HII knots; a
yellow-bulged, blue-armed galaxy; a yellow-white sun; the planet molten orange → red-fissured basalt →
steam → blue (never lilac, never a grey moon); the final 작고 푸른 행성 centred with the UI's last line
below it in the clear lower third.

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
  absent field uses `DEFAULT_SEED_LIGHT` (`ending-core.js`: the engine's armed SEED_GLOW / SEED_HALO —
  amendment 2's white-hot seed: a bleached 5 900 K core, a 5 400 K glow, a 4 800 K outer halo — at the
  reading layout's dim 0.5). `info().build.light` =
  `'handover' | 'none' | 'default'`.
- **Colour follows the handover.** The film's core sprite takes its tints from the first glow (core and
  halo, normalised), and the background lift around the seed takes the glow's halo colour in display
  space (`setSeedLift`, `ending-timeline.js`; the engine tints its lift by the formation tint, the same
  colour), so whatever colour the engine's seed has — white-hot now, white-gold or ice before — the light that flares
  and gathers into the collapse core is that colour (checked with the lab's `?seedHue=ice`).
- **Exact particles.** The film now opts in to the engine's exact sprite sizes **with** their energies
  (`film.handover = { energies: true, focus: true, focusLight: true }`; `src/universe/film-host.js`
  sends `sizes` + `energies` when `handover.energies` is set): each particle's first frame is its
  engine sprite (colour / energy is the centre pixel). Sizes without energies are ignored (they would
  draw 1.9–4× too bright); without both the film estimates them from the colours as before.
  `info().build.exact` reports it.
- **The press.** `press` = smoothstep(0, 0.14 s) · exp(−(t − 0.14)/0.42): the seed's glow flares
  (× 1.7 at 0.14 s, its profile 25 % wider, the billboards 12 % larger), then gathers (profile 40 %
  tighter, fading out 0.3–1.5 s) while the film's own core sprite — concentric, in the seed's tint,
  whitening toward the impact — ramps in from 0 (0.04–0.9 s, flaring with the press too) and brightens as
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

Re-checked after the amendment-2 regrade on the real site with the engine's white-hot seed (ch.8,
trigger scrolled into view, 4 s, clicked; 1440×900 and 390×844; frames ~0.15 and 0.5 s after the click,
then `Universe.ending.seek(t)` + `pause(true)` at 0.2 / 1 / 2.5 s): one light throughout — the waiting
seed, its press flare and the collapse core are one warm-white point at the same place; no second light,
no rose aura (the core heats to white in a faint blue-white glow only as the impact nears).

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
  `beginMs`, `beginCompileMs`, `beginPending`, `centreMs`, `handoverMs`, `heldMs`, `firstFrameMs`, and
  (v9.1) `focus`, `exact`, `light`.
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
  seed's lift, in its colour), exact particles and the seed's own glow, and blends into its own ACES look by ~2 s,
  while space darkens. Through the birth (3.6–~11 s) a partly (45 %) hue-preserving shoulder keeps the
  fire's orange and red from washing out while its brightest parts still roll into yellow and white.
- **Jumps and the compile chain (the black lab still at 31 s).** The lab begins the film the moment its
  idle build is done, so a still like `?t=31&paused=1` jumped to a time whose programs had not been
  compiled: the film held its last frame (`linkedBy`, up to `HOLD_MAX_MS` 2.5 s) — in the lab, which has
  drawn nothing yet, a black canvas — and the chain was still working through the collapse and birth
  programs in order; the planet's fragment shader alone took 2–4.5 s to link (ANGLE/D3D11). Lab-only in
  effect: on the site the engine prewarms the film while the reader is in ch.8 and the canvas keeps the
  engine's frame during a hold. Fixed for both: every compile unit now also has an `until` (the last
  film second it draws), `linkedBy(t)` only waits for the units drawn at t, and the chain always serves
  the not-yet-compiled units drawn at the film's current time first (after a `seek`/`skipToEnd` too) —
  while the film is holding for them, all of them at once (their translations run in parallel in the
  GPU process) and without idle-time gaps — then the rest in order, one at a time as before; and the
  planet's noise fields are baked (below), so its shader links in ~0.17 s. `info().build.firstFrameMs`
  (new) is the time from `begin()` to the first drawn frame. Cold lab stills (`?t=T&paused=1`, a fresh
  browser each, 1440×900): first frame 0.4 s after `begin()` at t = 0, 0.6 s at 31, 1.0–1.15 s at 6, 9
  and 21 — 2.0–2.7 s after navigation (was: a black frame at 31, ~3.9 s at 6 even with the queue fix);
  `tools/shot.mjs --wait 3500` stills are complete at every T from 0 to 32, at both sizes, even with two
  shot runs competing for the GPU.
- Zero per-frame allocations in `update/render` (scratch objects, preallocated `frame`; `state()`
  returns a fresh small object by design).

## How the hard parts are drawn

- **Inside the plasma (thread pass, `ending-soft.js`).** Not a ray-march: a few (4–6) spherical shells
  around the camera, geometrically spaced from 0.13 to 1.45 film units, each cutting a warped 3D noise
  field; the threads are its iso-lines, anti-aliased with `fwidth` (a Gaussian core one pixel-footprint
  wide plus a short exponential skirt), so they are crisp at any resolution and never show a sampling
  pattern. Bundles are iso-lines at several levels (braids while the plasma is dense, single strands
  later); the red/blue-white split is two level sets. Colour comes from `burn()` (or, region by region,
  `burnHot()`) of each strand's temperature, which follows its brightness (white → orange → deep red), so there are no muddy mid-tones; between threads is
  true black. Rendered at 0.6–0.85 of the internal resolution (≥ 480 px on the short side), never
  blurred; a two-pass, 64-sample zoom blur (no noise) streaks it during the violent stretch.
- **The fireball from outside (soft pass).** The original low-resolution ray-march (7 steps on high)
  + separable blur, used only until the threads take over (5.84–5.98 s). Its temperature varies with
  the turbulence (0.24 × fbm) so hotter, yellow-white and cooler, orange regions alternate.
- **The dark ages' gas (soft pass).** One Gaussian cloud per web node, integrated analytically along each
  ray (a dense core and a wider halo; distant nodes are skipped early), collapsing from 0.3 film units to
  the node's radius on its own schedule. Cheap and perfectly smooth, then blurred like the plasma.
- **The planet's surface (`ending-planet.js`, `bakePlanetSurface`).** Its noise fields are functions of
  direction that do not change over the film (or turn too slowly to matter), so the idle build bakes
  them once on the CPU (3D simplex, `ending-math.js createSimplex3`) into three equirectangular
  half-float textures — terrain height / ridges / rock grain / moisture (768×384), polar-cap edge /
  plankton / convection cells / fine seams (512×256), cloud pattern / streaks / magma churn (512×256) —
  instead of evaluating ~30 simplex noises per pixel. Heights and cloud pattern are normalised by
  area-weighted quantiles (sea level at the 63rd percentile: about two thirds ocean; the cover threshold
  clear below the median, its midpoint at the 76th percentile: roughly a third cloud), so the finished
  world's proportions do not depend on the noise's statistics. The convection cells and the magma churn
  turn slowly (rotated lookups), the clouds rotate with `uCloudSpin`.
- **The galaxy (`ending-galaxy.js`).** Star points (shared distribution with the hero proto-galaxy; the
  rare far tail folds back into the outer disk instead of piling into a ring) over a diffuse disk shader:
  arms born out of the bulge, spurs, patchy brown-grey dust lanes on the inner edge of the arms, star
  clouds and pink HII knots; the sheet brightens at grazing angles (a longer path through a thin disk)
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

CPU: `createEndingFilm()` < 1 ms (was 150–165 ms in one task). The idle build takes ~0.6 s of CPU in
idle slices on the high tier (~1.0 s of wall time in the lab, ~225 steps whose longest is 14–17 ms);
~0.25 s of it is the planet's surface bake (amendment 2), which replaced 2–4.5 s of shader translation
in the GPU process and ~30 noise evaluations per planet pixel per frame. (Before the bake: 0.2–0.4 s,
~70 steps.) The idle compile chain then runs for ~4–5 s of wall time on the dev machine (ANGLE/D3D11
translation is slow: the fireball's shader takes ~0.9 s, the threads' ~0.7 s; the planet's, ~2–4.5 s
while it evaluated its noise per pixel, ~0.17 s since its fields are baked), off the main
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
| `ending-planet.js` | the sun-like star, the planet (magma, crust, steam, oceans, clouds, life; its fields baked by `bakePlanetSurface`) and its atmosphere |
| `ending-post.js` | HDR targets, bloom chain, thread zoom blur, lens + shockwave + lens chromatic aberration, tone curves, grade, grain |
| `ending-glsl.js`, `ending-math.js` | shared GLSL (`PALETTE`: `blackbody()` and the astrophotography constants; simplex noise, hashes, `thermal()`, `burn()` and `burnHot()`) and JS helpers (`blackbody()` / `blackbodyExact()`, the table, `createSimplex3`) |

Lab: `node tools/build-universe.mjs --entry tools/lab/ending-lab.entry.js --out tools/lab/ending-lab.bundle.js --dev`,
then `tools/lab/ending-lab.html?t=13&paused=1` (`?tier=low|medium`, `?reduced=1`, `?hud=1`, `?build=sync` to
begin before the idle build finishes, `?delay=ms` to begin later; `window.__lab.info.build` has the build
timings and `focus` / `exact` / `light`; keys: space, ←/→, r, e, x = end()). The default scene is a
realistic `ending-ready` handover: the v9.1 seed formation (core, corona, faint orbiting arcs, infalling
threads, dust) in the reader's composition (the engine rig's distance and pitch, reading layout, dim
0.5), with `focus`, `focusLight` (the armed seed glow) and exact `sizes` + `energies`, like the engine.
`?focus=0`, `?light=0`, `?sizes=0` drop each (the fallbacks); `?seedAt=0.62,0.4` puts the seed
off-centre with a one-sided infalling stream; `?scene=ring` hands over the cover ring instead.
The synthetic seed is the engine's amendment-2 white-hot seed (`?seedHue=ice` hands over the older ice seed:
the film's light follows the handover's colour). `?pre=1` (or `?pre=hold` until `__lab.release()`) first shows the handover the way the engine draws it
(its sprites, the glow billboards, UnrealBloom 0.55/0.08/0.48 and the engine's finish curve) for a
continuity check. Like the engine, the lab begins once the idle build is done. Real handover: build
`src/universe/index.js` into `tools/lab/ending-lab.engine.bundle.js` and open
`tools/lab/ending-lab.engine.html?layout=reading&start=1` (`&arm=1` arms the seed first, as the trigger's
hover/focus does).
