# 자취선배 #565

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/565
- 제목: [FE][Feat] 홈 푸터에서 랜딩으로 가는 길을 두고 랜딩 화면을 지금 UI로 맞춘다
- 이슈: #550 (묶음 #552), 브랜치: `feat/550-landing-entry-ui`
- 커밋: 9713bc99, f406b5e9, e1acc124, 1ef0ed2a(마이 카드 뺌), 0be59f1e(푸터 사용 방법 뺌)
- 리뷰 뒤 마이 진입점은 뺐다. `entry-my-*` 두 파일은 처음 안의 기록으로만 남긴다.

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `entry-my-mobile-before.png` | 고치기 전 휴대폰 마이. 생활 날씨, 개인정보 처리방침, 초기화만 있고 랜딩으로 가는 길이 없음 | develop `c3e931c5`, 개발 서버(MSW), 390x844 2배 밀도, Mac 시스템 Chrome(Playwright), 2026-11-04 |
| `entry-my-mobile.gif` | 고친 뒤 휴대폰. 마이의 `자취선배 소개` → 랜딩(웹 바로가기 자리에 `서비스로 돌아가기`, 기능 섹션 위 메뉴 이름) → 돌아가기로 마이 | 개발 서버 + dev API 프록시(익명 회원), 390x844, 1회 녹화, 2026-11-04 |
| `entry-home-desktop-before.png` | 고치기 전 데스크톱 홈 전체. 푸터에 `사용 방법`, `개인정보·광고 측정 안내`만 있음 | develop `c3e931c5`, 개발 서버(MSW), 1440x900 전체 페이지 |
| `entry-home-footer-desktop.gif` | 고친 뒤 데스크톱. 홈 푸터의 `자취선배 소개` → 랜딩 → `서비스로 돌아가기`로 홈 | 개발 서버 + dev API 프록시(익명 회원), 1280x800, 1회 녹화 |
| `landing-mobile-before-after.jpg` | 휴대폰 랜딩 기능 섹션 다섯 개. 위 줄 전, 아래 줄 후. 순서: 동네 찾기, 저렴한 한 끼, 본 방 기록, 체크리스트, 방 비교 | 390x844 2배 밀도로 섹션 요소만 찍어 폭 360px로 줄여 붙임 |
| `landing-desktop-before-after.jpg` | 데스크톱 랜딩 기능 섹션 다섯 개. 왼쪽 전, 오른쪽 후 | 1440x900 섹션 요소를 폭 640px로 줄여 붙임 |
| `footer-before-mobile.png`, `footer-before-desktop.png` | 홈 푸터 전. `자취선배 소개`, `사용 방법`, `개인정보·광고 측정 안내` | 브랜치 `1ef0ed2a`의 HomeFooter, 개발 서버(MSW), 390x844와 1280x800 2배 밀도, 푸터 요소만, 2026-11-04 |
| `footer-after-mobile.png`, `footer-after-desktop.png` | 홈 푸터 후. 홈 맨 위 `사용방법 알아보기` 카드와 겹치는 `사용 방법` 링크를 뺌 | 브랜치 `0be59f1e`, 같은 조건 |

캡처 원본: 기록, 체크리스트, 비교는 MSW 예시 데이터(`npm run dev:mock`), 동네 찾기(판교역, 통근 40분 이내, 환승 1회 이하)와 저렴한 한 끼(판교 주변)는 dev API 익명 회원. 운영 API와 운영 사이트는 쓰지 않음.

용량(WebP): 데스크톱 캡처 다섯 장 합계 705KB → 540KB, 휴대폰 캡처 다섯 장 합계 553KB → 424KB. `cwebp -q 85 -m 6 -metadata none`, 크기는 기존과 같은 1440x900, 780x1688.
