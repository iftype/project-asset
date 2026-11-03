# 자취선배 #535

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/535
- 제목: [FE][Refactor] 행정동 경계 좌표 자릿수를 줄여 동네 찾기 결과를 빨리 보여 준다
- 이슈: #534 (로딩 성능 1단계), 브랜치: `refactor/534-boundary-coordinate-precision`
- 커밋: ed7b4031

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `boundary-waterfall-mobile.png` | 동네 결과(강남역 40분)를 연 뒤 요청 구간. 경기 경계 1,064KB 12.5초 → 532KB 9.2초, 첫 순위 마커 23.1초 → 19.7초 | 로컬 운영 빌드(dev API), Playwright Chromium 156, 412x823, Slow 4G(562.5ms, 1.47Mbps), CPU 4x. 3회 중 중앙값 실행의 HAR(전 1회차, 후 3회차). 2026-11-03 |
| `results-before.png`, `results-after.png` | 같은 결과 화면의 전후 스크린샷(dev 익명 계정) | 1350x940, 순위 마커가 뜨고 4초 뒤, reduced motion |
| `results-pixel-diff.png` | 두 스크린샷의 다른 픽셀(빨강). 41px / 1,269,000px(0.003%), 같은 빌드끼리는 0px | 채널 차이 합 48 초과를 다른 픽셀로 셈 |

전후 3회 원값(첫 순위 마커, 모바일): 23,118 / 23,358 / 23,052ms → 20,153 / 19,646 / 19,713ms. Lighthouse 13.6.0 모바일 3회 중앙값: LCP 15,299 → 12,640ms, TBT 6,011 → 4,560ms.
