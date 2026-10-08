# 디자인 참조 이력 — v3부터 v7까지

## 사용자가 지정한 페이지

https://openai.com/ko-KR/index/gpt-6-astra/

### 확인된 범위

공식 페이지 검색 결과의 이미지 설명은 검은 배경에서 빛나는 입자가 나선을 그리며 숫자 6을 이루는 이미지로 설명합니다. 페이지 콘텐츠 추출에서도 해당 글을 확인했습니다. 브라우저 시각 조사에서는 poster.webp 이미지의 검정 배경, 나선형으로 밀집한 광점, 밝기와 크기가 다른 입자, 밝은 중심부, 차가운 흰색·푸른색과 소량의 따뜻한 색이 보고되었습니다.

### 확인하지 못한 범위

직접 페이지 탐색은 Cloudflare 확인 화면에 막혔습니다. 따라서 원래 페이지의 정확한 서체, 글자 크기, 화면별 여백 수치, 모바일 배치, 스크롤 전환 애니메이션은 검증하지 못했습니다. 이 항목들을 실제로 확인했다고 주장하지 않습니다. 제공된 새로운 웹사이트의 중앙 정렬, 여백, 버튼, 독서 화면 구성은 별도의 설계입니다.

## 이번 웹사이트에 적용한 것

- 평면적인 장식 대신 광점이 밀집해 형태를 만드는 실시간 공간을 중심 시각 요소로 사용합니다.
- 넓은 검정 배경에서 빛의 밀도와 명암으로 형태를 구분합니다. 특정 브랜드의 숫자나 로고는 사용하지 않습니다.
- 큰 주황색 태양이 표지를 지배하던 구도에서, 작은 밝은 별과 입자 구조가 함께 보이는 표지로 바꿉니다.
- 사용자가 좋아한 행성/은하 탐색은 별도의 '은하' 모드로 남깁니다.
- 제목과 설명은 구조 주변의 여백에 놓고, 조작 시에는 제목을 숨겨 탐색 공간을 넓힙니다.

고리의 좌표와 셰이더는 `src/cosmos.js`에 직접 작성했습니다. OpenAI 사이트의 이미지, 동영상, 폰트 파일, 소스 코드, 로고를 번들에 넣지 않았습니다. 고리는 천문학 관측 데이터나 과학적으로 정확한 시뮬레이션이 아닌 소설용 추상 시각화입니다.

## 이전 버전과의 관계

이전 리디자인의 Emergence Magazine / The Pudding / NASA Eyes 참조에 따른 이야기-탐색-독서 구조는 바탕으로 유지됩니다. 이번 수정의 직접적인 새 시각 참조는 사용자가 지정한 Astra 페이지의 입자 이미지입니다. 이전 버전의 명조 표지나 거대한 천체가 이번의 기본 표지 미술 방향은 아닙니다.

## v7 — 디자인을 유지한 수정

새 외부 디자인 자료나 브랜드 자산을 추가하지 않았습니다. 기존 우주·입자 표현을 유지하면서 모바일 크기, 조작 버튼 배치, 스크롤 경계와 엔딩 재생을 수정했습니다. 엔딩은 현재 문서 위로 확장되는 모달이며 별도 ending.html이나 별도 페이지 경로가 아닙니다.


## V8 기술 검토

2026-09-27. 이번 수정은 새 시각 레퍼런스를 도입하지 않고 승인된 우주 표현을 유지하며, 제목 배치와 모바일 입력·렌더링을 조정합니다.

- MDN, touch-action: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/touch-action
- MDN, Pointer events: https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
- Chrome for Developers, Forced reflow: https://developer.chrome.com/docs/performance/insights/forced-reflow
- web.dev, Debounce your input handlers: https://web.dev/articles/debounce-your-input-handlers

수정은 실제 CSS Grid 영역 분리, pan-y pinch-zoom, 입력 방향을 확인한 뒤의 pointer capture, passive 스크롤 처리, 스크롤 중 캔버스 갱신 유예로 구현했습니다. 위 문서는 사용자 실기기에서 끊김 원인을 재현했다는 증거가 아닙니다.
