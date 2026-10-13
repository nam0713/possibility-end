# v9 “하나의 우주” — 작업 기록 · 2026-10-13

v8.1을 바탕으로 사이트의 UI, 읽기 경험과 원고, 3D, 애니메이션을 다시 만든 기록입니다. 설계 계약은 [V9-BRIEF.md](V9-BRIEF.md), 영역별 상세는 [V9-UNIVERSE.md](V9-UNIVERSE.md)(우주 엔진), [V9-ENDING.md](V9-ENDING.md)(엔딩 필름), [V9-UI.md](V9-UI.md)(화면과 독서기), [V9-PROSE.md](V9-PROSE.md)(원고 윤문)에 있습니다. 영역 문서 일부에는 작업 중의 수치나 문장이 남아 있을 수 있으며, 그때는 코드가 기준입니다.

로컬 작업본이며 **배포하지 않았습니다.** 게임(`game/`, `tests/game-*`)은 이번 범위가 아니어서 손대지 않았습니다.

## v9.1 — 소유자 피드백 · 2026-10-13

소유자가 v9를 보고 요청한 네 가지([V9.1-FEEDBACK.md](V9.1-FEEDBACK.md))를 우주(엔진)·엔딩 필름·화면(UI) 세 담당이 나눠 반영했습니다. 이 절은 화면과 독서기 쪽 기록이며, 아래 1–9절의 v9 기록 중 테마·앰버 색·8장의 HTML 별에 관한 내용은 이 절이 대신합니다. 상세는 [V9-UI.md](V9-UI.md), 우주와 필름은 [V9-UNIVERSE.md](V9-UNIVERSE.md), [V9-ENDING.md](V9-ENDING.md).

- **화면 하나(어둡게).** 종이·밝게를 없앴습니다. 설정의 `화면` 줄, 테마 CSS(불투명 페이지와 가장자리, 견본, 테마별 색), 테마 저장, 페이지가 덮는 동안 우주를 멈추던 처리(`setVisible(false)`), 상단 막대와 `theme-color`의 테마 색 전환이 모두 빠졌고 `theme-color`는 `#04070b` 하나입니다. 저장된 `paper`/`light`는 읽을 때 조용히 버리며(크기·줄 간격·서체·소리·움직임·위치·진행은 그대로), 그 기록은 처음 한 번 테마 없이 다시 저장합니다. v8.1 기록을 옮길 때도 테마는 옮기지 않습니다.
- **색 하나.** `--ember`/`--ember-hi`를 없애고 한 계열로 바꿨습니다: `--accent #a9e7f2`(선택·현재 표시, 진행, 초점), `--accent-hi #e6fbff`(가장 밝은 빛), `--accent-deep #4f8fb0`, `--deepest #1b3a52`. 바뀐 곳: 작품 표시와 파비콘의 점, `읽기 시작`의 점(밝은 버튼 위라 깊은 청색), 선택한 노드의 HTML 고리와 번호, 목차·열거·목차 시트의 현재 번호와 점, 엔딩 타임라인의 현재 구간, WebGL이 없을 때의 하늘·고리의 핵·장별 도판의 빛점·선택 노드·CSS 필름(흰 중심 → 아이스 → 깊은 청색, 흰 구름과 청회색 땅의 작은 행성).
- **읽는 동안은 흩어진 별.** 독서기는 스크롤 프레임마다(rAF 하나) `Universe.setScatter(v)`를 보냅니다. v는 스크롤 위치만의 함수입니다: 표지가 화면의 주인인 동안 0(도입 높이의 10%까지) → smoothstep → 첫 문단의 윗변이 화면 높이의 60%에 닿을 때 1(1440×900에서 약 90 → 477px), 본문 내내 1, 장 끝에서는 다음 장의 형상(8장은 씨앗)이 흩어진 상태에서 먼저 지정된 뒤(다음 장 카드가 화면 아래에서 8분의 1쯤 올라왔을 때) 카드 윗변이 화면 가운데에 닿을 때(휴대폰에서 거기까지 못 오면 페이지 끝) 0. 그래서 위로 올리면 모두 거꾸로 일어나 표지의 형상이 다시 모입니다. 본문 내내 장 도입의 ‘chapter’ 구도를 유지하므로 형상은 언제나 표지와 같은 자리에 모이고, 저장된 위치로 들어오는 경우(새로고침, 이어서 읽기, 책갈피, ←/→)는 라우터가 장면을 지정하는 순간부터 1이라 모였다 흩어지는 일이 없습니다. 본문의 베일은 0(별밭이 스스로 고요함)이고, 가독성은 본문 단 뒤의 부드러운 스크림(`rgba(4,7,11,.75)`, 단 양옆·위아래로 흐려짐, 휴대폰은 화면 폭)이 맡습니다: 순백의 점 위에서도 본문 대비 7.6:1, 별이 없는 곳 16:1. `setScatter`가 없는 엔진에서는 v9.0의 본문 구성(‘reading’ 구도 + 베일 0.74)으로 돌아가고, WebGL이 없으면 대체 하늘의 도판이 같은 값으로 흐려지며 별밭만 남습니다.
- **빛은 하나.** 8장 끝의 HTML 별·점·후광과 누를 때 부풀던 HTML ‘공유된 빛’을 없앴습니다. 트리거는 “단 하나의 가능성.”이라는 접근 가능한 버튼이고, 누를 수 있는 영역에 든 빈 64px 정사각형이 `frame.anchor`로 씨앗 위에 놓입니다. 마우스를 올리거나 키보드 초점을 주면 `Universe.ending.arm(true)`, 떠나거나 초점이 빠지면 `arm(false)`(필름이 도는 동안에는 보내지 않고, 돌아오면 그때의 상태로 다시 정함). 누르면 페이지와 조작부가 흐려지고 `Universe.ending.start({origin})`의 `origin`은 씨앗의 화면 좌표입니다. WebGL이 없을 때만 트리거에 차가운 CSS 씨앗 하나가 그려지고(대체 하늘에는 씨앗 없음), CSS 필름의 빛이 그 자리에서 같은 크기·밝기로 이어집니다.
- **검사.** `test:site`에 세 그룹을 더했습니다: `dark-only`(새 프로필의 어두운 페이지, v9.0의 `paper`와 v8.1의 `light` 기록 → 어둡게·나머지 설정 유지·기록 정리), `scatter`(표지 ≈0 · 본문 ≈1 · 장 끝 ≈0과 다음 형상 · 본문과 표지로 되돌아가기 · 8장 씨앗 · 이어서 읽기와 ←/→로 저장된 위치에 들어올 때 0을 한 번도 보내지 않음; 엔진의 `getState().scatter`로 확인), `palette`(핵심 UI 요소 13곳의 계산된 색과 `site.css`·`shell.html`·`app.js`의 색 값에 따뜻한 색상 없음, 8장 끝 트리거에 빛 요소 없음, 씨앗 정사각형과 `frame.anchor` 차이 1px 미만, 가리킴·키보드 초점의 arm/disarm, 누를 때 페이지에 HTML 빛 없음). `reading`(설정에 화면 없음, 새로고침하면 흩어진 채로, 테마 저장 안 함)과 `nowebgl`(CSS 씨앗 하나, 차가운 하늘과 CSS 필름)도 고쳤습니다.
- **확인**(엔진·필름 번들 18:46과 함께). `npm run check` 통과, `npm run build` 경고 없음, `npm run test:content` 96/96, `npm run test:site` 172/172(SwiftShader 449초, `--gpu` 430초). 실제 GPU 헤드리스 스크린숏으로 1440×900·390×844·320×568에서 표지(노드 선택)·목차·설정 시트(화면 없음)·장 도입 → 흩어지는 중 → 본문 → 넘겨받기 → 장 끝 → 다시 도입·8장 끝·마우스를 올린 씨앗·누른 뒤 첫 1초(0.25·0.7·1.2초)와 3.8초·엔딩 마무리, 1–8장 도입의 형상을 보았고, `?nowebgl=1`에서 대체 하늘·흩어지는 도판·CSS 씨앗 하나·CSS 필름의 첫 0.15–0.65초와 마무리를 보았습니다. UI 원본(`site.css`·`shell.html`·`app.js`·`audio.js`·`build.mjs`)의 모든 색 값은 189–213° 또는 무채색입니다. 엔진과 필름의 원본은 각 담당이 확인합니다.

## 1. 목표

- 사이트 전체를 **하나의 연속된 입자 우주**로 만든다. 고정된 three.js 캔버스 한 장이 모든 화면 뒤에 있고, 같은 입자들이 표지·목차·장마다 다른 형상으로 흘러간다.
- 문학 사이트답게 절제하고, 읽기 쉽고, 빠르게. 장식 문구·가짜 수치·글래스모피즘 없이 모든 레이블이 사실이어야 한다.
- 원고는 다시 쓰지 않고 윤문한다. 사건·순서·장면·숫자·과학은 그대로.
- 8장의 끝(“단 하나의 가능성.”)을 31초 엔딩 필름으로 만들고, 기존 음악(`first-light.mp3`, 충격 3.6초)과 맞춘다.
- v8.1의 약속은 유지한다. 해시 주소, 이어서 읽기, 스크립트 없이 읽히는 원고, 동작 줄이기, 44px 터치 영역, 320px부터 가로 넘침 없음, WebGL이 없어도 동작.

## 2. 구조

```
src/manuscript.txt ─┐                    ┌─ #novel-data (장 데이터)
src/shell.html ─────┤                    ├─ site.css
src/site.css ───────┤   build.mjs        ├─ audio.js (+ #sound-data: 음원 base64)
src/app.js ─────────┼──────────────────→ ├─ universe.js (three.js 번들)
src/audio.js ───────┤   index.html       ├─ app.js
src/generated/      │   dist/index.html  └─ 스크립트 없는 원고(fallback)
  universe.js ──────┘   src/chapters.json
        ↑
src/universe/*.js ── tools/build-universe.mjs (esbuild, three r186)
```

**우주 (`src/universe/`, `window.Universe`).** 전체 화면 고정 캔버스 하나, `THREE.Points` 하나. 입자 수는 품질 단계마다 고정입니다(높음 163,840 · 중간 65,536 · 낮음 24,576). 입자마다 출발·도착 두 상태를 GPU에 두고, 형상이 바뀔 때 입자별 시차와 curl-noise 흐름으로 물질이 흘러가게 합니다(동작 줄이기에서는 0.24초 교차 페이드). 형상은 표지의 가능성 고리(8개 장 노드), 1장 재귀 루프, 2장 연산 격자, 3장 닫히는 생산 고리(삼엽 매듭), 4장 스스로 자라는 결정, 5장 항성을 두른 다이슨 스웜, 6장 서로 멀어지는 은하들, 7장 식어 가는 우주와 증발하는 블랙홀, 8장 한 점으로 모이는 빛, 그리고 엔딩 직전의 씨앗입니다. 장 본문을 읽어 내려가면 `setReading`으로 형상이 천천히 변합니다(3장의 고리가 닫히고, 7장이 어두워짐). 블룸·필름 곡선·비네트·그레인은 후처리 한 줄기로 처리하고, 프레임 시간에 따라 DPR·그리는 입자 수·블룸 해상도를 스스로 낮춥니다. 숨겨지거나 불투명한 페이지에 덮이면 렌더링을 멈추고, 컨텍스트 손실과 복구를 처리합니다. WebGL이 없으면 모든 메서드가 무동작이 되고 `data-universe="none"`이 됩니다.

**엔딩 필름 (`src/universe/ending-*.js`).** 독자가 보던 입자들을 그대로 넘겨받아 한 점으로 모읍니다. 0–3.6초 붕괴, 3.6초 충격과 탄생, 약 9–19초 첫 구조·별·은하, 약 19–31초 평범한 은하의 가장자리와 작은 푸른 행성, 그 뒤에도 마지막 장면이 천천히 살아 있습니다. 모든 것이 필름 시간의 함수라서 멈춤·건너뛰기·다시·정지 장면이 정확합니다. 동작 줄이기에서는 단계마다 정지 장면 넷을 넘겨 봅니다.

**화면과 독서기 (`src/shell.html`, `src/site.css`, `src/app.js`, `src/audio.js`).** 옛 CSS 일곱 층을 `site.css` 하나로 바꿨습니다. 표지(제목, 고리 위의 실제 HTML 장 버튼, 읽기 시작·이어서 읽기·우주 탐색), 목차(장을 가리키면 우주가 그 장의 형상을 미리 보여 줌), 3장 막간 인용, 7장 병목 열거, 작은 푸터. 독서기는 장 도입(그 장의 형상 위) → 본문(어둡게·종이·밝게, 고딕·명조, 16–26px, 줄 간격 셋), 원문에서만 끌어낸 조판(‘…’ 전송 문장, 대화, ✦ 장면 구분, 열거, `10^{25}` 위 첨자, 8장 마지막 장면의 간격), 진행선·장 레일·책갈피·←/→·문단 단위 위치 복원, 장 끝의 다음 장 카드, 8장 끝의 트리거와 엔딩 대화상자입니다. 장 소개 문장(덱)은 `build.mjs`가 원고에서 문장 첫머리로 찾아 그대로 복사하고, 엔딩 자막은 8장 원문 조각(`app.js`의 `ENDING_CAPTIONS`)이라 원고와 어긋나면 빌드가 경고합니다. 저장소 키는 `possibility-end-v9`이며 v8.1의 `possibility-end-edition-v2`를 한 번 옮겨 옵니다. 음향은 v8.1의 `audio.js`를 유지하고 필름 시간에 맞춰 동기화합니다.

**원고.** `src/manuscript.txt`를 윤문했습니다(215개 문단 중 142개 손봄, 글자 수 −3.3%). 원문은 `src/manuscript.original.txt`에 그대로 있습니다. 상세와 통계는 [V9-PROSE.md](V9-PROSE.md).

## 3. 빌드

| 명령 | 하는 일 | 필요 |
|---|---|---|
| `npm run dev` | `http://localhost:5173/` 로컬 서버(캐시 없음) | Node 18+ |
| `npm run build` | `index.html`, `dist/index.html`(약 4.6 MB, 음원 포함 한 파일), `src/chapters.json`, `dist/game/` | 추가 패키지 없음 |
| `npm run build:universe` | `src/universe/*.js` → `src/generated/universe.js`(약 780 KB, 압축·트리 셰이킹) | `tools/`에서 `npm install` 한 번(esbuild 0.28.2, three 0.186.1, playwright-core 1.64.0) |
| `npm run check` | 사이트 스크립트 구문 검사 | — |

우주 소스를 고쳤다면 `npm run build:universe` 다음에 `npm run build`를 실행합니다. 번들 파일(`src/generated/universe.js`)은 프로젝트에 포함되어 있어 사이트 빌드만 할 때는 `tools/` 설치가 필요 없습니다. 번들이 없으면 빌드는 계약과 같은 모양의 무동작 스텁을 넣습니다. `node build.mjs --universe <파일> --out <파일>`로 다른 번들을 넣은 QA용 파일만 따로 만들 수 있습니다.

## 4. 테스트와 도구

| 명령 | 내용 |
|---|---|
| `npm run test:content` | `tests/verify-content.mjs`. 원고 ↔ `chapters.json` ↔ `index.html`(독서 데이터와 스크립트 없는 원고)을 `build.mjs`와 같은 방식으로 글자 단위 대조, 8개 장, 브리프 §5 고정 문장 12개, 덱·강조 문장·엔딩 자막·열거·인용, 원문과 같은 문단 구조, 내장 음원. 통과하면 `tests/content-integrity.json`(원고·원문·HTML·음원 SHA-256)을 씁니다. 96개 항목 |
| `npm run test:site` | `tests/site-smoke.mjs`. 개발 서버와 `tools/` 설치가 필요합니다. 헤드리스 Chrome(기본 SwiftShader, `--gpu`는 실제 GPU)으로 모든 해시 경로, 장마다 본문 전체, ←/→와 뒤로, 새로고침 후 위치 복원과 이어서 읽기, 설정 유지, 엔딩 열기·진행·닫기 후 스크롤·초점 복원, 1440×900·390×844·320×568의 가로 넘침과 잘린 글자, `?nowebgl=1`과 WebGL이 아예 없는 브라우저, 동작 줄이기, 그리고 v9.1의 어둡게 하나(`dark-only`)·흩어지는 별(`scatter`)·색 하나와 빛 하나(`palette`)를 확인하고, 모든 그룹에서 콘솔·페이지 오류가 0이어야 합니다. 이동할 때마다 3.5초 기다립니다. 172개 항목, 약 7.5분(v9.0은 140개). `--only routes,scatter`, `--url`, `--settle` 지원 |
| `node tests/prose-stats.mjs` | 원문 → 교정본 통계(V9-PROSE 3절) |
| `node tools/shot.mjs --gpu --url … --out x.png [--mobile] [--steps s.json] [--reduced]` | 헤드리스 스크린숏과 콘솔 오류. 스크롤·이동 뒤에는 3초 이상 기다린 다음 찍어야 합니다(등장 효과·구도·형상 변화) |
| `node tools/perf.mjs <url> [초] [w] [h]` | 실제 GPU(ANGLE)에서 프레임 시간 |
| `/tools/lab/universe-lab.html` | 우주 API를 모두 조작하는 실험실(`?scene=&chapter=&layout=&settle=1&nowebgl=1` 등) |
| `/tools/lab/ending-lab.html?t=S&paused=1` | 엔딩 필름의 임의 시점 정지 화면. `ending-lab.engine.html`은 실제 엔진이 넘겨주는 경우 |

페이지 안의 시험용 창구: `Universe.getState()`, `Universe.ending.state()/seek(t)/pause(true)`, `window.NovelUI`(`state`, `route`, `section`, `ending`, `openEnding`, `closeEnding`). 모두 읽기 전용이거나 화면 조작만 하며 아무것도 전송하지 않습니다.

## 5. 확인한 것

2026-10-13 마지막 점검(이 문서와 함께):

- `npm run check` 통과, `npm run build:universe`·`npm run build` 경고 없음(8개 장, 215개 블록).
- `npm run test:content` 96/96 통과. 원고·`chapters.json`·`index.html`·`dist/index.html`이 글자 단위로 일치하고, 음원 두 개의 해시는 v8.1과 같습니다.
- `npm run test:site` 140/140 통과, 기본 SwiftShader(374초)와 `--gpu` 실제 GPU(342초) 모두. 다른 담당의 마무리 작업과 병렬로 진행되어, 테스트 도중 다시 빌드된 페이지에 대해서도 통과했습니다.
- 실제 GPU 프레임 시간(RTX 2060, ANGLE/D3D11, 헤드리스, 프레임 제한 없음, DPR 1, 높음 단계 163,840 입자): 표지 1440×900 p50 0.4 ms·p95 1.3 ms, 5장 p95 1.1 ms, 표지 390×844 p95 1.9 ms. 성능 여유를 보는 값이지 실제 화면의 fps가 아닙니다.
- 각 영역 담당이 헤드리스 Chrome 스크린숏으로 1440×900, 1920×1080, 390×844, 320×568, 844×390, 동작 줄이기, WebGL 끔에서 표지·노드 선택·탐색·목차·인용·열거·장 도입·본문(세 테마, 두 서체)·전송 문장·8장 끝·엔딩 각 단계·대화상자를 보았습니다(V9-UI.md, V9-ENDING.md).

## 6. 확인하지 않은 것

- **실제 휴대폰과 Safari/WebKit.** iOS Safari, Android Chrome, Firefox에서 실행해 보지 않았습니다. 휴대폰 화면은 Chrome의 모바일 에뮬레이션(터치, 390×844·320×568)으로만 보았고, safe-area 배치는 코드로만 확인했습니다.
- **성능 예산.** 브리프의 목표(중급 노트북 내장 GPU 60 fps, 중급 휴대폰 30 fps 이상)는 해당 기기에서 재지 않았습니다. 실측은 데스크톱 RTX 2060뿐이고, 저사양 기기에서는 적응 품질 조절에 의존합니다.
- **보조 기술.** 스크린리더(NVDA, VoiceOver)로 읽어 보지 않았습니다. 랜드마크, `aria-live`, 초점 이동, 대화상자의 초점 복귀는 코드와 자동 시험으로만 확인했습니다.
- **소리.** 자동 시험은 소리를 끄고 실행합니다. 필름과 음악의 동기는 코드와 상태값으로만 확인했습니다.
- **웹 서체를 받지 못하는 환경.** Google Fonts가 없을 때의 시스템 대체 서체는 이번에 따로 보지 않았습니다.
- **배포.** 운영 사이트에 반영하지 않았습니다.

## 7. 소유자 결정 (유지 사항)

- 최소한의 문구. 설명 문구·중복 레이블·장식 화살표를 쓰지 않습니다(UI-REVISION.md).
- 조작은 테두리 없는 글자 버튼과 짧은 밑줄로 상태를 표시합니다.
- 본문 기본 서체는 고딕. 명조는 독자가 고른 경우에만 저장되어 유지됩니다(v8.1 저장값은 명조를 명시적으로 고른 경우만 옮김).
- 강조 문장은 굵기와 간격으로만 강조하고, 색 테두리나 들여쓰기를 쓰지 않습니다(SF-REVISION.md).
- 작품 소개는 작은 푸터 하나로 줄였습니다(`#about`은 푸터로 이동).
- 7장의 ‘양성자 붕괴’(원문 ‘양자 붕괴’)는 작가가 맞다고 확인했습니다.
- 게임 `game/`은 이번 범위에서 제외합니다.
- 배포는 별도 요청이 있을 때만 합니다.

## 8. 정리한 파일

v9 빌드가 더 이상 쓰지 않는 v8 파일을 지웠습니다. 모두 `site-v8.1-pre-v9.tar`에 바이트 단위로 같은 사본이 있습니다(`tar -xf site-v8.1-pre-v9.tar src/cosmos.js`처럼 꺼낼 수 있음).

- 옛 렌더링과 스타일: `src/cosmos.js`, `src/ending.js`, `src/cinematic.js`, `src/styles.css`, `src/immersive.css`, `src/sound.css`, `src/cinematic.css`, `src/mobile.css`, `src/ui.css`, `src/observatory.css`
- 옛 검사와 보고: `tests/check_v8_regression.py`, `tests/verify_content.py`(→ `tests/verify-content.mjs`), `tests/patch-checks.json`, `tests/patch-scope.json`, `tests/changes-from-v8.diff`, `tests/copyedits.json`(v7 교정 내역은 `design/COPYEDITS.md`에 남아 있음)

## 9. 남은 일

- 실제 기기(iPhone Safari, 중급 Android, 내장 GPU 노트북)에서 성능과 배치 확인.
- 스크린리더 통독.
- 배포 여부 결정과 배포 전 점검.
