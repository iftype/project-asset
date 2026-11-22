# woowacourse-teams/2026-jachwi-sunbae#803

[FE][Refactor] 매물 상세의 effect와 타이머를 useTimeout, autoFocus, 렌더 중 계산으로 줄인다
브랜치 `refactor/property-detail-effects`, 전 `8969c7c0`, 후 `99438e3b`. 2026-11-23 노트북에서 잼(fast4g, CPU 4배, MSW 목 300ms, 지도 SDK 스텁, 전후 번갈아 각 5회).

| 파일 | 내용 |
| --- | --- |
| home-verdict.md | / 데스크탑 첫 매물 카드. 2.65 → 2.65초, 같음 |
| property-detail-desktop-verdict.md | /properties/11 제목. 2.92 → 2.93초, 같음 |
| property-detail-mobile-verdict.md | /properties/11 휴대폰. 2.55 → 2.58초, 같음 |
| property-detail-mobile-2s.side.png | 같은 시각 전, 후, 다른 픽셀 |
