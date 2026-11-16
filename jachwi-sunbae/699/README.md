# 자취선배 #699

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/699
- 제목: [FE][Feat] 홈과 마이 화면을 다듬고 데스크탑 헤더 메뉴를 하나로 통일한다
- 이슈: #693, 브랜치: `feat/693-home-my-polish`
- 커밋: 5d9d1703

| 파일 | 내용 |
| --- | --- |
| `home-desktop-before-after.gif` | 데스크탑(1280x800) 홈, 등록한 방 0개. 왼쪽 전(#683): 첫 방 기록 안내 카드, 헤더 메뉴 2개. 오른쪽 후: 미리보기 매물 카드, 파란 그라데이션 동네 찾기, 떠 있는 방 기록하기, 헤더 메뉴 3개 |
| `home-my-mobile-before-after.gif` | 휴대폰(390x844) 홈을 본 뒤 마이로 간다. 왼쪽 전(#683), 오른쪽 후 |
| `home-my-mobile-stills.png` | 전 홈, 후 홈, 전 마이, 후 마이 |

측정 조건: Playwright(시스템 Chrome), 새 브라우저 문맥이라 dev 익명 회원을 새로 만든 상태. 전: #683 커밋 `90883b3c`(localhost:3097), 후: 7개 PR을 모두 합친 작업 트리(localhost:3099), dev API. 10fps. 2026-11-17. 숫자 측정은 없다.
