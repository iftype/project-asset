# PR #787 남아 있는 화면 위 로딩 표시를 늦춘다

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/787
- 제목: [FE][Feat] 남아 있는 화면 위 로딩 표시를 늦춰 빠른 응답에서 깜빡이지 않게 한다
- 브랜치: `feat/delayed-loading-coverage` (기준 `develop` 1c8eb058, 커밋 9e9adc57)
- 이슈: 없음 (블로그 글 https://iftype.tistory.com/30 의 로딩 규칙 적용)

화면: 매물 상세(`/properties/10`)의 주변 고리 요약 `PropertyNearbyPreview`. 지도와 매물 정보가 이미 보이는 채로 아래 칸에 "주변을 살펴보는 중이에요…"가 뜨는 곳이다.

| 파일 | 내용 |
| --- | --- |
| `ring-150ms-before.gif` | 고치기 전(develop 1c8eb058). 응답 150ms. 안내 문구가 바로 떴다가 약 0.2초 뒤 사라진다. |
| `ring-150ms-after.gif` | 고친 뒤(9e9adc57). 같은 조건에서 안내 없이 결과가 바로 들어온다. |
| `ring-1200ms-after.gif` | 고친 뒤. 응답을 1.2초로 늦추면 0.3초 뒤 안내가 뜨고 결과가 오면 사라진다. |

## 측정 조건

- 2026-11-22, 노트북 로컬 dev 서버(MSW mock 모드, 실제 네이버 지도 키), Chrome for Testing 158 headless, 390x960, Playwright 녹화를 20fps GIF(폭 390)로 변환. 각 1회 녹화.
- `/api/maps/nearby` mock 응답에 정해진 지연(150ms, 1200ms)을 걸었다. 지도 SDK와 서비스 워커를 데우려고 다른 매물(11번)을 먼저 열고 3초 뒤 앱 안에서 10번 매물로 옮겨 간 구간만 잘랐다. 지연 코드는 녹화용 임시 변경이라 커밋하지 않았다.
- 안내 문구가 화면에 있던 시간(MutationObserver, 이동 시점부터): 전 150ms 응답 약 205ms, 후 150ms 응답 표시 없음, 후 1200ms 응답 약 0.98초(요청 시작 후 0.3초 뒤 표시, 표시 뒤 응답이 와도 250ms 유지 규칙 포함).
- 매물 상세가 바뀌는 순간 뼈대와 이전 매물이 잠깐 보이는 것은 이 PR이 바꾼 부분이 아니다.
