# PR #615 행정동 경계를 색 구간별로 합쳐 그리기

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/615
- 제목: [FE][Refactor] 행정동 경계를 색 구간별로 합쳐 그려 지도 끌기를 가볍게 한다
- 이슈: #613
- 브랜치: `refactor/613-merge-region-polygons`, 커밋 `0b9787a6` (비교 기준 develop `f47a7026`)

| 파일 | 내용 |
| --- | --- |
| `drag-before-after.gif` | 왼쪽 develop, 오른쪽 #615. 동네 찾기 기본 조건(통근 40분, 환승 1회, 경계 148개) 결과 지도를 휴대폰(390x844)에서 같은 끌기 4번. 같은 9초 동안 오른쪽은 4번을 다 끝내고 왼쪽은 따라오지 못한다. |
| `merge-cause.png` | 원인 손그림. 경계 148개가 GL 소스 148개라 매 프레임 소스마다 타일 계산을 하던 것을, 같은 색끼리 MultiPolygon으로 묶어 Data 레이어 feature 6개로 줄였다. 숫자는 아래 측정의 휴대폰 끌기 중앙값. |

숫자 출처: 2026-11-08, 서브 노트북(리눅스, AMD Radeon) Playwright 1.56.1 헤드리스 Chromium, 실제 GPU(Vulkan), CPU 4배 느리게, 휴대폰 390x844 DPR 2. dev API, 개발 빌드(`npm run dev`). develop과 #615를 각각 띄워 회차마다 순서를 바꿔 번갈아 3회, 중앙값.

| 장면 (휴대폰, 끌기 3번) | FPS | long task 합 |
| --- | --- | --- |
| 기본 조건, 경계 148개 | 18 → 48.4 | 11,477ms → 0 |
| 60분, 환승 2회, 경계 399개 | 7.1 → 47.9 | 27,767ms → 51ms |

대표 장면을 기본 조건으로 둔 이유: 운영 검색 156회 중 109회가 기본 조건이었다(사용자 47명, 2026-10-15 ~ 11-08). 옮겨 간 비용(첫 그리기, 월세 필터 다시 묶기, hover, 동 고르기)과 번들(+gzip 약 4.0KB, 지도 청크만)도 같은 조건으로 쟀고, 원자료와 표는 로컬 `~/Documents/jachwi-perf/perf-rendering/2026-11-08-pr615-merge-regions/`에 있다.

녹화: 같은 하네스로 계측 래퍼 없이 녹화(webm), ffmpeg로 두 녹화를 끌기 시작 0.3초 전에 맞춰 나란히 붙인 GIF(10fps, 한쪽 280px).
