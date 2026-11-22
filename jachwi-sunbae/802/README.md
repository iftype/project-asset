# woowacourse-teams/2026-jachwi-sunbae#802

[FE][Refactor] 저렴한 한 끼의 effect를 렌더 중 계산과 ref 콜백으로 줄인다
브랜치 `refactor/cheap-meals-effects`, 전 `8969c7c0`, 후 `2fa2e820`. 2026-11-23 노트북에서 잼(fast4g, CPU 4배, MSW 목 300ms, 지도 SDK 스텁, 전후 번갈아 각 5회).

| 파일 | 내용 |
| --- | --- |
| cheap-meals-desktop-verdict.md | 데스크탑 가게 수. 2.29 → 2.28초, 같음 |
| cheap-meals-mobile-verdict.md | 휴대폰 가게 수. 2.19 → 2.20초, 같음 |
| cheap-meals-mobile-2s.side.png | 같은 시각 전, 후, 다른 픽셀 |
