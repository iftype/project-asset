# woowacourse-teams/2026-jachwi-sunbae#799

[FE][Refactor] 동네 찾기의 effect와 타이머를 useTimeout, 렌더 중 계산, ref 콜백으로 줄인다
브랜치 `refactor/neighborhood-preview-effects`, 전 `8969c7c0`, 후 `6fe3cc90`. 2026-11-23 노트북에서 잼(데스크탑, fast4g, CPU 4배, MSW 목 300ms, 지도 SDK 스텁, 전후 번갈아 각 5회).

| 파일 | 내용 |
| --- | --- |
| neighborhoods-verdict.md | /neighborhoods 출퇴근 장소 칸. 2.01 → 2.02초, 같음 |
| home-verdict.md | / 첫 매물 카드. 2.64 → 2.63초, 같음 |
| home-map-error-moment-verdict.md | 지도 오류 안내가 뜨는 순간. 3.03 → 3.02초, 같음(3초 프레임 차이의 원인 확인) |
| *.side.png | 같은 시각 전, 후, 다른 픽셀 |
