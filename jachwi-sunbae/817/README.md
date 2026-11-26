# PR #817 탭을 오가도 지도를 보던 자리 그대로 둔다

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/817
- 제목: [FE][Fix] 탭을 오가도 지도를 보던 자리 그대로 두고 왼쪽 탭 순서를 바꾼다
- 브랜치: iftype:fix/map-view-on-tab-switch, 커밋 7df2e824
- 전: develop 2187dabc

| 파일 | 내용 |
| --- | --- |
| `desktop-before-after.gif` | 왼쪽 develop, 오른쪽 이 PR. 1440x900. 홈에서 지도를 끌고 한 단계 확대한 뒤 레일로 체크리스트, 내 기록, 저렴한 한 끼, 내 기록 순서로 오간다. develop은 체크리스트에서 지도가 처음 자리로 돌아가고 저렴한 한 끼에서 화면 오류가 난다. |
| `mobile-before-after.gif` | 왼쪽 develop, 오른쪽 이 PR. 390x844. 마이, 체크리스트, 뒤로, 내 기록, 마이, 저렴한 한 끼, 뒤로, 내 기록. develop은 처음 자리와 줌 13으로 돌아간다. |

측정 조건: 로컬 webpack dev 서버(dev API 중계, 실제 네이버 지도 SDK), Playwright Chromium headless, 단계마다 1.5초 대기, 2026-11-26. 지도 가운데와 줌은 Map 생성자를 감싸 읽었다(SDK 내부는 바꾸지 않음). dev 익명 회원의 미리보기 매물만 보인다.
