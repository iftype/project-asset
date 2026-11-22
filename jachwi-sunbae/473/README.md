# 자취선배 #473

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/473
- 제목: [FE][Fix] 빠른 응답에서 로딩 UI가 번쩍이며 화면이 깜빡이지 않게 한다
- 브랜치: `fix/471-loading-flicker`, 머지 커밋: e249a927, 머지일: 2026-10-29
- 소급 추가(2026-11-22): 머지 뒤에 만든 그림이다.

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `loading-ui-visible.png` | 응답 100ms와 600ms에서 네 방식이 로딩 UI를 보여 준 구간(ms) | PR #473 본문 `원인` 절의 표(탭 예제로 잰 값). 새로 재지 않음 |
| `frame-compare.gif` | 왼쪽 고치기 전(develop 01868175), 오른쪽 고친 뒤(머지 e249a927) | Linux chromium 1248, production 빌드를 dev 도메인에 route로 띄움, dev API에 150ms 지연을 걸고 홈을 3번 새로고침, 휴대폰 390x844, dev 익명 계정, 1회, 2026-11-22 |
