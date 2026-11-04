# 자취선배 #561

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/561
- 제목: [FE][Refactor] 저렴한 한 끼 탭을 경로로 나누고 새로고침해도 고른 동네를 되살린다
- 이슈: #557, #573 (묶음 #552), 브랜치: `refactor/557-cheap-meals-tab-routes-ui`
- 커밋: 이 폴더는 #573 추가분(ea7d62e5, d90d9b70, 6509d99a, 4cbfcbf3). 탭 경로와 동네 유지 그림은 [559](../559) 폴더를 그대로 쓴다

| 파일 | 내용 |
| --- | --- |
| `tab-memory-chips.gif` | 고친 뒤. 홈 카드로 식당 탭에 들어와 업종 칩(한식)을 골랐다 풀고, 배달 탭을 연 뒤 홈으로 나갔다가 홈 카드로 다시 들어오면 배달 탭이 열림. 앞 15초와 마지막 4.5초만 이어 붙임(중간은 dev 배달 응답과 홈 로딩 대기) |
| `before-`/`after-mobile-restaurant.png` | 식당 탭 휴대폰. 전: 검색창 줄과 업종 안내가 흰 띠로 지도 위를 차지, 현재 위치는 글자 버튼. 후: 검색창과 업종 칩을 지도 위에 띄우고 현재 위치는 공용 동그란 버튼 |
| `before-`/`after-desktop-restaurant.png` | 식당 탭 데스크탑(1280x800). 후: 목록 칸 위에 업종 칩, 현재 위치 버튼은 지도 오른쪽 아래 |
| `before-`/`after-mobile-seven-sale.png` | 세븐일레븐 할인. 전: 세로로 긴 사진이 칸을 넘어 위아래가 잘림. 후: 사진을 받은 그대로 칸 안에 통째로 넣음 |
| `before-`/`after-tablet-convenience.png` | 편의점 태블릿 폭(820px). 전: 2열 고정. 후: 4열 |
| `before-`/`after-mobile-restaurant-error.png` | 식당 조회 오류. 전: 글자와 파란 버튼만. 후: 다른 탭과 같은 공용 오류 화면 |
| `before-`/`after-mobile-*-empty.png` | 식당, 편의점, 배달 빈 결과. 전: 상자 아이콘. 후: 공용 빈 상태(오리 그림) |
| `before-`/`after-mobile-convenience-error.png` | 편의점 오류. 원래 공용 오류 화면이라 전후가 같음(비교 기준) |

측정 조건: Mac 시스템 Chrome(Playwright), 개발 서버(포트 3041) + dev API 프록시, Naver 지도, iPhone 13 화면(390x664), PostHog 토큰 비움, 2026-11-04. 빈 결과와 오류 화면은 dev 응답을 브라우저 안에서만 빈 목록이나 500으로 바꿔 띄움. 배달 탭은 이날 dev 응답이 실제로 0건이었음.
