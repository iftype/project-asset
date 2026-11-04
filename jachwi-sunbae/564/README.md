# 자취선배 #564

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/564
- 제목: [FE][Fix] 날씨 알림 토글이 위치 일시 실패에도 움직이고 오류 문구를 지금 말투로 맞춘다
- 이슈: #544, #549 (묶음 #552), 브랜치: `fix/544-weather-toggle-error-messages`
- 커밋: e145ad51, b8b7f4a3

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `weather-toggle-before-after.gif` | 왼쪽 고치기 전(develop `c3e931c5`), 오른쪽 고친 뒤. 마이 화면에서 위치가 답하지 않을 때(iOS `kCLErrorLocationUnknown` 흉내) 알림 받기를 누름. 왼쪽은 15초 동안 토글이 잠긴 채 안내가 없고, 오른쪽은 토글 옆 진행 표시 뒤 12초에 토글이 풀리고 "지금 위치를 확인하지 못했어요. 잠시 뒤 다시 시도해 주세요."가 보임 | Mac 시스템 Chrome(Playwright), 로컬 개발 서버(`dev:mock`, MSW, 익명 계정), 앱 브리지(`push`)와 `navigator.geolocation`을 init script로 흉내, 390x844, 각 1회, 2026-11-04 |

- #549 오류 문구는 그림 없이 PR 본문의 전후 표로 남겼다.
