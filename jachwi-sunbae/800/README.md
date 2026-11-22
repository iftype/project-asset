# woowacourse-teams/2026-jachwi-sunbae#800

[FE][Refactor] 공용 UI의 effect와 타이머를 ref 콜백, 렌더 중 계산, useTimeout으로 줄인다
브랜치 `refactor/shared-ui-effects`, 전 `8969c7c0`, 후 `6febde15`. 2026-11-23 노트북에서 잼(fast4g, CPU 4배, MSW 목 300ms, 지도 SDK 스텁, 전후 번갈아 각 5회).

| 파일 | 내용 |
| --- | --- |
| home-verdict.md | / 데스크탑 첫 매물 카드. 2.65 → 2.65초, 같음 |
| cheap-meals-mobile-verdict.md | /cheap-meals 휴대폰 가게 수. 2.19 → 2.20초, 같음 |
| home-mobile-verdict.md | / 휴대폰. 순간 선택자가 지도 보기에 없어 판정 못 함(참고) |
| *.side.png | 같은 시각 전, 후, 다른 픽셀 |
