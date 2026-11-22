# PR #787 남아 있는 화면 위 로딩 표시를 늦춘다

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/787
- 제목: [FE][Feat] 남아 있는 화면 위 로딩 표시를 늦춰 빠른 응답에서 깜빡이지 않게 한다
- 브랜치: `feat/delayed-loading-coverage` (기준 `develop` 1c8eb058, 커밋 6a88e503)
- 이슈: 없음 (블로그 글 https://iftype.tistory.com/30 의 로딩 규칙 적용)

| 파일 | 내용 |
| --- | --- |
| `nearby-150ms-before.gif` | 고치기 전(develop 1c8eb058). `/explore/nearby` 강남역 좌표. 지도 위에 "주변 시설을 분석하는 중이에요."가 약 0.24초 번쩍인다. |
| `nearby-150ms-after.gif` | 고친 뒤. 같은 조건에서 안내가 뜨지 않고 바로 결과가 들어온다. |
| `nearby-1200ms-after.gif` | 고친 뒤. 응답을 1.2초로 늦추면 0.3초 뒤 안내가 뜨고 결과가 오면 사라진다. |

## 측정 조건

- 2026-11-22, 노트북 로컬 dev 서버(webpack dev, dev API 프록시), Chrome for Testing 158 headless, 1280x800, Playwright 녹화를 20fps GIF(폭 640)로 변환.
- 첫 방문에서 `/api/maps/**` 실제 응답을 받아 두고, 새로고침한 두 번째 방문에서 받아 둔 응답을 정해진 시간(150ms, 1200ms) 뒤에 돌려줘 응답 시간을 고정했다. 실제 dev 응답은 약 0.55초였다.
- 안내가 뜬 시각(MutationObserver 기록, 새로고침 후 요청 시작 기준): 전 150ms 응답에서 요청보다 먼저 뜸, 후 150ms 응답에서 뜨지 않음, 후 1200ms 응답에서 요청 시작 약 0.24초 뒤(요청 전 pending 포함 0.3초) 뜸.
- 지도 타일은 headless에서 그려지지 않아 바탕만 보인다. 각 1회 녹화.
