# 가능성의 끝 — v9

## v9.1 — 소유자 피드백 · 2026-10-13

v9를 본 소유자의 요청 네 가지를 반영했습니다([design/V9.1-FEEDBACK.md](design/V9.1-FEEDBACK.md)).

- **색 하나.** 주황·호박색 강조를 모두 없애고 차가운 한 계열(아이스 시안 `#a9e7f2`, 가장 밝은 `#e6fbff`, 깊은 `#4f8fb0`, 가장 깊은 `#1b3a52`)로 통일합니다. 화면의 표시와 WebGL이 없을 때의 그림은 UI에서, 우주의 형상·빛과 엔딩 필름은 각 담당이 바꿨습니다([V9-UNIVERSE](design/V9-UNIVERSE.md), [V9-ENDING](design/V9-ENDING.md)).
- **읽는 동안은 흩어진 별.** 형상은 장 도입과 홈에만 있습니다. 본문으로 내려가면 형상의 입자가 성긴 별밭으로 흩어지고, 올라가면 다시 모이며, 장 끝에서는 다음 장의 형상으로(8장은 씨앗으로) 모입니다. 스크롤을 따라 끊김 없이, 양방향으로 움직입니다.
- **빛은 하나.** 8장 끝의 빛은 우주의 씨앗 하나뿐입니다. 글자 “단 하나의 가능성.”이 씨앗 위의 버튼이고, 가리키면 씨앗이 밝아지며, 누르면 씨앗 자체가 타올라 엔딩 필름이 됩니다.
- **화면은 어둡게 하나.** 종이·밝게 테마를 없앴습니다. 예전에 저장된 선택은 조용히 버리고 나머지 설정과 위치는 그대로 둡니다.

검사: `test:content` 96/96, `test:site` 172/172(SwiftShader와 실제 GPU 각각; 새 그룹 `dark-only`, `scatter`, `palette`). 상세는 [design/V9-NOTES.md](design/V9-NOTES.md)의 v9.1 절과 [V9-UI](design/V9-UI.md). 로컬 작업본이며 **배포하지 않았습니다.**

## v9 — 하나의 우주 · 2026-10-13

사이트 전체가 하나의 입자 우주가 되었습니다. 모든 화면 뒤에 고정된 three.js 캔버스 한 장이 있고, 같은 입자들이 표지의 가능성 고리에서 장마다의 형상으로 흘러갑니다. 1장 재귀 루프, 2장 연산 격자, 3장 닫히는 생산 고리, 4장 스스로 자라는 결정, 5장 항성을 두른 구조물, 6장 서로 멀어지는 지성, 7장 식어 가는 우주, 8장 한 점으로 모이는 빛입니다. 본문을 읽어 내려가면 형상도 천천히 변합니다(v9.1부터는 본문에서 형상이 별로 흩어졌다가 장 끝에서 다시 모입니다).

표지에는 제목과 고리 위의 여덟 개 장, 읽기 시작·이어서 읽기·우주 탐색이 있습니다. 목차에서 장을 가리키면 우주가 그 장의 형상을 미리 보여 주고, 이어서 3장의 인용과 7장의 병목 열거가 나옵니다. 독서 화면은 장 도입과 본문으로 이루어지며, 어둡게·종이·밝게 세 테마(v9.1부터 어둡게 하나), 고딕(기본)·명조, 글자 크기와 줄 간격, 책갈피, ←/→ 장 이동, 문단 단위 위치 복원을 지원합니다. 8장 끝의 “단 하나의 가능성.”을 누르면 31초 엔딩 필름이 기존 음악과 맞춰 재생됩니다. 동작 줄이기 설정에서는 정지 장면 넷으로, WebGL이 없으면 CSS로 그린 하늘과 필름으로 대신합니다.

원고는 다시 쓰지 않고 윤문했습니다. 사건·장면·숫자·과학은 그대로이며 원문은 `src/manuscript.original.txt`에 보존했습니다. 음원은 v8.1과 같습니다.

로컬 작업본이며 **배포하지 않았습니다.** 기존 운영 주소는 변경하지 않았습니다.

### 실행 및 빌드

```sh
npm run dev              # http://localhost:5173/  (#home #contents #about #chapter-1…8)
npm run build            # index.html, dist/index.html (음원·원고를 포함한 한 파일)
npm run check            # 구문 검사
```

`index.html`을 브라우저에서 바로 열거나 `dist/index.html`을 정적 호스팅에 올릴 수 있습니다. Node.js 18 이상. 사이트 빌드에는 추가 npm 의존성이 필요 없습니다. 우주 번들 `src/generated/universe.js`는 프로젝트에 포함되어 있습니다. Google Fonts를 불러오지 못하면 시스템 서체를 사용하며, 폰트 파일은 포함하지 않습니다.

우주 소스(`src/universe/`)를 고친 경우에만 번들을 다시 만듭니다. `tools/`에서 `npm install`을 한 번 실행해 두어야 합니다(esbuild, three, playwright-core; 개발용).

```sh
cd tools && npm install && cd ..
npm run build:universe   # src/universe/*.js → src/generated/universe.js
npm run build
```

### 검사

```sh
npm run test:content     # 원고 ↔ chapters.json ↔ index.html 글자 단위 대조 → tests/content-integrity.json
npm run test:site        # 헤드리스 Chrome 종단 시험 (tools/ 설치와 npm run dev 실행 필요)
```

`test:content`는 원고와 생성 데이터, 스크립트 없는 대체 원고, 고정 문장·장 소개·엔딩 자막의 원문 일치, 내장 음원을 확인합니다. `test:site`는 모든 주소, 장마다 본문, ←/→, 새로고침 후 위치 복원과 이어서 읽기, 설정 유지, 엔딩 열기·닫기 후 위치와 초점 복원, 1440×900·390×844·320×568의 가로 넘침, WebGL 없음, 동작 줄이기를 확인하고 콘솔 오류가 하나라도 있으면 실패합니다. 기본은 SwiftShader이며 `--gpu`로 실제 GPU를 쓸 수 있습니다(`--only routes,ending`, `--url` 지원). 그 밖에 `tools/shot.mjs`(스크린숏), `tools/perf.mjs`(실제 GPU 프레임 시간), `tools/lab/universe-lab.html`, `tools/lab/ending-lab.html` 실험실이 있습니다.

### 확인한 범위

구문 검사, 빌드(경고 없음), `test:content` 96개 항목, `test:site` 140개 항목(SwiftShader와 실제 GPU 각각)을 통과했습니다. 휴대폰 화면은 Chrome의 모바일 에뮬레이션으로만 확인했고, 실제 휴대폰·Safari·저사양 GPU의 성능과 스크린리더는 검증하지 않았습니다.

전체 기록은 [design/V9-NOTES.md](design/V9-NOTES.md)에 있습니다. 설계 계약 [V9-BRIEF](design/V9-BRIEF.md), 우주 엔진 [V9-UNIVERSE](design/V9-UNIVERSE.md), 엔딩 필름 [V9-ENDING](design/V9-ENDING.md), 화면과 독서기 [V9-UI](design/V9-UI.md), 원고 윤문 [V9-PROSE](design/V9-PROSE.md).

v9가 쓰지 않게 된 v8 소스(`src/cosmos.js`, `src/ending.js`, 옛 CSS 일곱 층 등)와 v8 검사 파일은 정리했습니다. v9 작업 직전의 전체 상태는 `site-v8.1-pre-v9.tar`에 그대로 있습니다.

## LAST LIGHT · 3D 게임 · 2026-10-11

원작을 바탕으로 만든 3D 생존 액션 게임을 `game/`에 추가했습니다. `npm run game` 후 **[LAST LIGHT 플레이](http://localhost:5173/game/)** 를 열면 됩니다. 이동 WASD, 마우스 조준·누르고 사격, Space 돌진, Q/우클릭 충격파, E 작동입니다. 세 릴레이를 충전하고 최종 보스를 해체한 뒤 중앙에서 마지막 빛을 보내면 완주합니다.

게임 상세와 실행 방법은 [game/README.md](game/README.md), 조사 근거는 [design/GAME-REFERENCES.md](design/GAME-REFERENCES.md)에 있습니다. `npm run check:game`, `npm run test:game`, `npm run build:game`을 지원하며 전체 빌드에도 포함됩니다. 게임 실행에 추가 npm 설치는 필요 없습니다. 로컬 제작본입니다. v9 작업에서는 게임을 수정하지 않았습니다.

## 이전 기록 (v8.1까지)

아래는 v9 이전의 기록입니다. 여기에 나오는 `src/observatory.css`, `src/ui.css`, `src/cosmos.js`, `src/mobile.css`와 v8 검사 보고서는 v9에서 정리되었고 `site-v8.1-pre-v9.tar`에 남아 있습니다.

### 로컬 SF UI 개편 · 2026-10-03

표지는 좌측 산세리프 제목, 우측 우주 링, 8개 장의 선택 목록으로 구성했습니다. 번호와 선택 표시는 실제 3D 노드에 연결되며 장 선택은 목차의 미리보기와 동기화됩니다. 목차·장 도입·설정 화면에도 같은 서체와 색을 적용했습니다. 조사 자료와 적용 기록은 `design/SCI-FI-REFERENCES.md`, `design/SF-REVISION.md`에 있습니다.

브라우저 코멘트 반영: 큰 작품 소개를 간결한 푸터로 합쳤습니다. 본문 기본 서체를 고딕으로 통일하고, 장 도입과 강조 문장의 색을 현재 독서 테마에 맞췄습니다. 강조 문장의 색 테두리는 제거했습니다. 이 결정들은 v9에서도 유지합니다. 실제 휴대폰·Safari 검증은 수행하지 않았고, **배포하지 않았습니다**.

### 로컬 UI 개편 · 2026-10-03

표지와 장 목록의 서체·여백을 정리하고, 설명 문구·중복 레이블·장식 화살표를 줄였습니다. 탐색 및 독서 설정은 테두리 없는 텍스트 컨트롤로 바꿨습니다(`design/UI-REVISION.md`). 운영 사이트에 반영하지 않았습니다.

### v8.1 · 표지 구도 복원

v8에서 변경한 표지 구도를 되돌린 소규모 수정본입니다. 제목·구조물 분리 그리드를 제거하고 v7의 제목 위치, 전체 화면 구조물 구도와 크기를 복원했으며, 기본 표지에서만 구조물의 중심을 아래로 24 CSS px 옮겼습니다. v8의 네이티브 세로 스크롤 우선 처리와 스크롤 중 렌더링 일시중단은 유지했습니다. 320×568, 390×844, 844×390, 1440×900에서 v7과 비교해 33개 항목을 통과했습니다(Chromium + Xvfb + SwiftShader). `design/restored-*.png`는 당시의 실제 렌더링입니다.
