# 자취선배 #537

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/537
- 제목: [FE][Refactor] 기록 지도에서 지도 SDK를 미리 받아 첫 마커를 빨리 보여 준다
- 이슈: #534 (로딩 성능 2단계), 브랜치: `refactor/534-start-map-sdk-early`
- 커밋: 50a1d760

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `records-map-load-side.gif` | 왼쪽 고치기 전(develop `baa70c3d`), 오른쪽 SDK 미리 받기. 본 방 기록 지도 주소를 연 순간부터 13초. 오른쪽이 지도 타일과 매물 마커를 약 2초 먼저 그린다 | 로컬 운영 빌드(dev API), Playwright Chromium 156, 412x823, Slow 4G(562.5ms, 1.47Mbps), CPU 4x, dev 익명 계정(측정용 매물 5개), 1회 녹화, 2026-11-03 |
| `records-sdk-waterfall-mobile.png` | 요청 구간. `maps-gl.js`가 `maps.js` 뒤(5.83초)가 아니라 함께(3.72초) 출발. SDK 준비 8.1초 → 6.3초, 첫 매물 마커 11.3초 → 9.4초 | 같은 조건 3회 중 중앙값 실행의 HAR(전 1회차, 후 2회차) |

첫 매물 마커 3회 원값: 11,325 / 11,827 / 10,781ms → 10,023 / 9,449 / 9,330ms. Lighthouse 13.6.0 모바일 5회 중앙값: 점수 57 → 63, LCP 4,273 → 4,093ms, TBT 1,227 → 859ms. SDK를 미리 실행했던 1차 시도는 점수 49, LCP 5,383ms로 나빠져 버렸다.
