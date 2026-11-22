# woowacourse-teams/2026-jachwi-sunbae#798

[FE][Refactor] 지도 기능의 effect를 렌더 중 계산, useSyncExternalStore, 공용 Esc 훅으로 줄인다
브랜치 `refactor/map-effects`, 전 `8969c7c0`(refactor/effect-cleanup-integration), 후 `84507a98`. 2026-11-23 노트북에서 잼.

| 파일 | 내용 |
| --- | --- |
| verdict.md | ci-verdict.mjs 판정(홈, 데스크탑, fast4g, CPU 4배, MSW 목 300ms, 지도 SDK 스텁, 전후 번갈아 각 5회). 같음 |
| home-desktop-stub-3s.side.png | 첫 회 3초 프레임(64.8% 차이, 스텁 SDK 실패 안내 시각 어긋남). 다시 찍은 두 번은 0% |
| realmap-verdict.md | 실제 네이버 지도로 잰 것(지도 순간은 mapTiming 없음으로 판정 못 함, LCP 3.60 → 3.58초) |
| home-desktop-realmap-4s/8s.side.png | 실제 지도 같은 시각 전후. 4초 2.83%(지도 타일), 8초 0% |
