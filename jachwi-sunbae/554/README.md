# 자취선배 #554

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/554
- 제목: [FE][Fix] 착한가게 지도를 옮기면 그 자리를 바로 다시 찾고 업종 안내 문구가 깨지지 않게 한다
- 이슈: #546 (묶음 #552), 브랜치: `fix/546-cheap-meals-list`
- 커밋: c78af1fd, 83f6f84d

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `before-map-move.gif` | 고치기 전(develop `088b30a4`). 식당 지도를 왼쪽 위로 끌어 옮기면 `이 위치에서 찾기` 버튼만 뜨고 목록은 `판교 주변` 6곳 그대로 | Mac 시스템 Chrome(Playwright), 개발 서버 + dev API 프록시, Naver 지도, iPhone 13 화면(390x664), 같은 끌기(-150px, +90px), 1회, 2026-11-04 |
| `after-map-move.gif` | 고친 뒤. 같은 끌기 뒤 버튼 없이 약 1.2초 만에 `지도에서 선택한 위치` 8곳으로 바뀜 | 같은 조건. 끌기를 놓고 다시 찾는 요청까지 약 1.2초(끌기 0.45초 + idle + 400ms) |
| `desktop-notice.png` | 왼쪽 전, 오른쪽 후. 데스크톱(1024px) 목록 칸의 업종 안내 문구. 글자 간격을 0.03em 넓혀(Windows 대체 글꼴처럼 넓은 글꼴을 흉내) 찍음. 전에는 `주세/요.`로 끊기고 뒤에는 한 줄 | 같은 개발 서버, 1024x700, 칸 너비 286px |
