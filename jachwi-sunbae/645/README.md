# PR #645 앱 심사 전 헤더 알림 안내, 동네 시트, 계정 연결 버튼을 다듬는다

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/645
- 제목: [FE][Fix] 앱 심사 전 헤더 알림 안내, 동네 시트, 계정 연결 버튼을 다듬는다
- 이슈: https://github.com/woowacourse-teams/2026-jachwi-sunbae/issues/644
- 브랜치: `fix/644-app-review-ui-polish`
- 커밋: `af2c2a02` (전: develop `cdf46cbc`)

모두 왼쪽이 develop(localhost:3099), 오른쪽이 PR(localhost:3075)이다. dev API, 익명 계정, 휴대폰 390x844 터치. 2026-11-10 Playwright(시스템 Chrome) 화면 녹화를 10fps GIF로 바꿨다. 측정값은 아니다.

| 파일 | 내용 |
| --- | --- |
| `header-before-after.gif` | 홈 헤더 11초. 앱 WebView를 흉내 내려고 가짜 브리지(`__JACHWI_NATIVE_APP__`, push 기능, 알림 꺼짐)를 넣었고 위치 권한은 주지 않았다. 전은 `위치 허용하기`와 `알림 켜기`가 번갈아 나오고, 후는 `알림 받기`만 나온다. |
| `oauth-before-after.gif` | 마이 계정 연결 8초. 카카오 버튼을 누르면 전은 확인 창이 뜨고 `연결하기`를 눌러야 카카오 화면으로 가고, 후는 공식 모양 버튼(`카카오 로그인`)을 누르자마자 카카오 로그인 화면으로 간다. |
| `sheet-before-after.gif` | 동네 찾기 결과(기본 조건 40분, 환승 1회)에서 지도의 야탑3동을 누르고 시트를 닫는 6.5초. 전은 40% 높이에 손잡이가 없고 닫으면 동네 선택이 풀린다. 후는 30%로 낮게 열리고 손잡이가 있으며, 닫아도 선택(강조)이 남는다. |
