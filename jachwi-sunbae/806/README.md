# PR #806 지도 마커를 서버 렌더러 없이 만들고 react-dom 비공개 파일 별칭을 지운다

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/806
- 제목: [FE][Refactor] 지도 마커를 서버 렌더러 없이 만들고 react-dom 비공개 파일 별칭을 지운다
- 브랜치: `refactor/map-marker-without-server-renderer` → `refactor/effect-cleanup-integration`
- 커밋: 전 `a2b31e8e`(통합 브랜치), 후 `9d50e932`
- 측정일: 2026-11-23, 리눅스 노트북. 운영 빌드, mock(MSW, 응답 300ms), 실제 네이버 지도 SDK와 타일. dev API 안 씀.

| 파일 | 내용 |
| --- | --- |
| `layer-hospital.side.png` | `/properties/11`에서 병원 레이어를 켠 화면(마커 25개). 왼쪽 전, 가운데 후, 오른쪽 다른 픽셀. 다른 픽셀 0.00% |
| `property-detail-desktop.side.png` | `baseline.mjs`의 매물 상세 데스크탑 기준 스크린샷 전후(사진 매물 마커). 0.00% |
| `drag-before.gif`, `drag-after.gif` | 매물 상세에서 병원 레이어를 켜고 지도를 끈 뒤 확대. Playwright 녹화(1440x900)를 GIF(폭 720, 10fps)로 |
| `verdict-<화면>.md`, `runs-<화면>.jsonl` | verify-jachwi `measure.mjs` 전후 판정(데스크탑, fast4g, CPU 4배, 번갈아 각 5회, 문턱 max(흩어짐, 0.1초)). 다섯 화면 모두 같음 |
| `bench/entry.ts`, `bench/run.mjs`, `bench/runs.jsonl` | 마커 성능 측정. 앱의 `naverEngine`과 `createMapMarkerLayer`를 그대로 쓰고 마커 만드는 함수만 전후로 바꿔 끼운 페이지. CPU 4배, 번갈아 각 5회 |
| `bench/sizes-*.json`, `bench/sizes.mjs`, `bench/screenjs.mjs` | 번들 파일별 크기 `[raw, gzip9, brotli11]`와 화면별로 받은 JS 합을 낸 스크립트 |
