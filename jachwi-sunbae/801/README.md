# woowacourse-teams/2026-jachwi-sunbae#801

[FE][Refactor] 내 기록 화면의 effect와 타이머를 useTimeout, ref 콜백, 렌더 중 계산으로 줄인다
브랜치 `refactor/design-records-effects`, 전 `8969c7c0`, 후 `aba32c58`. 2026-11-23 노트북에서 잼(fast4g, CPU 4배, MSW 목 300ms, 지도 SDK 스텁, 전후 번갈아 각 5회).

| 파일 | 내용 |
| --- | --- |
| home-verdict.md | / 데스크탑 첫 매물 카드. 2.63 → 2.69초, 같음(문턱 0.10초) |
| search-mobile-verdict.md | /search 휴대폰 내 기록 목록. 1.46 → 1.47초, 같음 |
| *.side.png | 같은 시각 전, 후, 다른 픽셀 |
