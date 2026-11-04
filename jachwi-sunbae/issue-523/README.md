# 이슈 #523 앱 OAuth를 네이티브 SDK와 id_token으로 붙이는 설계

- 이슈: https://github.com/woowacourse-teams/2026-jachwi-sunbae/issues/523
- 관련 PR: #570(백엔드 OAuth 연결과 기록 통합), #582(웹과 앱 OAuth 연결)
- 백엔드 기준 커밋: `16a56bde` (`feat/523-oauth-account-linking-backend`)

| 파일 | 내용 |
| --- | --- |
| `app-native-oauth-sequence.png` | 앱에서 Apple 시트나 카카오 SDK로 받은 `id_token`을 브리지로 WebView에 넘기고, WebView가 자기 Bearer와 Refresh 쿠키로 백엔드에 보내는 순서. nonce를 그 기기의 익명 회원에 묶어 일회용으로 쓰므로 이관 대상 회원을 정확히 집어낸다. 마지막은 #570의 `completeOAuth`를 그대로 쓴다. |
| `web-app-oauth-converge.png` | 웹 리다이렉트(#570)와 앱 SDK 경로가 입구만 다르고 같은 `completeOAuth`로 모이는 그림. 이번 제출의 WebView 안 로그인은 RFC 8252가 금지하는 임시 방법이라 빨간색으로 표시했다. |
| `native-login-rollout.png` | 웹과 앱이 모두 출시된 상태에서 앱 로그인을 네이티브로 옮기는 순서. 지금(WebView 안 로그인) → 백엔드 API 추가 → 웹 배포(기능 감지 분기) → 앱 출시. 어느 단계에서 멈춰도 브라우저와 옛 앱은 기존 경로로 로그인한다. |
| `oauth-release-order.png` | 출시 순서 7단계. 1단계(웹 백엔드 #570 → 웹 프론트 #582 → 앱 빌드 → 앱 배포, WebView 안 로그인)와 2단계(웹 백엔드 /nonce, /id-token → 웹 프론트 분기 → 앱 빌드와 배포, 네이티브 로그인). #570 리뷰에 첨부. |
| `oauth-release-order-v2.png` | 바뀐 출시 순서. 1단계(웹 백엔드 #570 → 웹 프론트 #582, 브라우저에만 OAuth를 보이고 앱 WebView에서는 숨김, 이번 앱 제출에는 OAuth 코드 없음)와 2단계(웹 백엔드 /nonce, /id-token, 탈퇴 시 연결 해제 → 웹 프론트 분기 → 앱 빌드 → 앱 배포). #570 코멘트에 첨부. 이전 `oauth-release-order.png`(WebView 안 로그인으로 앱 먼저 출시안)를 대신한다. |
| `*.d2` | 위 그림의 D2 원본(`d2 --sketch`, Pretendard). |

근거: RFC 8252 §8.12, Apple Sign in with Apple 문서(id_token `aud`=client_id, `sub`는 개발 팀 단위로 같음, client secret `sub`=client_id), 카카오 로그인 REST API 문서(ID 토큰 `aud`=요청이나 SDK 초기화에 쓴 앱 키). 측정값 아님. 2026-11-05 작성.
