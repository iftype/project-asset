# PR #622 지도 사용자 지정 스타일을 빼서 GL 끄기

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/622
- 제목: [FE][Refactor] 지도 사용자 지정 스타일을 빼서 GL을 끄고 경계와 마커 끌기를 가볍게 한다
- 이슈: #613, #614 (#615 경계 합치기를 대체)
- 브랜치: `iftype/refactor-613-map-gl-off`, 커밋 `5cdc790e` (비교 기준 develop `f47a7026`)

| 파일 | 내용 |
| --- | --- |
| `map-style-before-after.png` | 왼쪽 develop(GL, 테마색 사용자 지정 스타일), 오른쪽 GL 끔(기본 네이버 지도). 동네 찾기 기본 조건(통근 40분, 환승 1회, 경계 148개) 결과 지도, 휴대폰 390px. |

숫자 출처: 2026-11-08, 서브 노트북(리눅스, AMD Radeon) Playwright 헤드리스 Chromium, 실제 GPU(Vulkan), CPU 4배 느리게, 휴대폰 390x844 DPR 2, dev API, 개발 빌드(`npm run dev`). 하네스 `~/Documents/jachwi-bench/mapperf/measure.cjs`, 각 1회.

| 장면 (휴대폰) | develop (GL) | GL 끔 |
| --- | --- | --- |
| 기본 조건 경계 148개, 끌기 | 19.3fps, long task 10.8초 | 48.8fps, 0.1초 |
| 같은 장면, 휠 확대 축소 | 21.9fps, 2.4초 | 43.5fps, 0.8초 |
| 같은 장면, 핀치 | 30.5fps, 1.6초 | 38.5fps, 1.4초 |
| `my` 매물 150개, 끌기 | 13fps, 12.0초, 마커 draw 9,513회 | 35fps, 1.7초, draw 151회 |

결과 파일: 경계는 `mapperf/out/gl.jsonl`(devgl, devraster 0회차), 마커는 `mapperf/out/gl613-my.jsonl`. 같은 조건에서 #615 합치기는 끌기 48, 휠 50, 핀치 54fps.
