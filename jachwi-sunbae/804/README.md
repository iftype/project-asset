# woowacourse-teams/2026-jachwi-sunbae#804

[FE][Refactor] 사진 크게 보기의 마운트 effect를 ref 콜백으로 옮긴다
브랜치 `refactor/property-effects`, 전 `8969c7c0`, 후 `8f9bac51`. 2026-11-23 노트북에서 잼(데스크탑, fast4g, CPU 4배, MSW 목 300ms, 지도 SDK 스텁, 전후 번갈아 각 5회).

| 파일 | 내용 |
| --- | --- |
| home-verdict.md | / 첫 매물 카드. 2.65 → 2.63초, 같음 |
| property-detail-desktop-verdict.md | /properties/11 제목. 2.94 → 2.93초, 같음 |
| property-detail-desktop-2s.side.png | 같은 시각 전, 후, 다른 픽셀 |
