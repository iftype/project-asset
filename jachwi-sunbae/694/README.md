# 자취선배 #694

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/694
- 제목: [ALL][Feat] 매물 하나만 골라도 기록 PDF를 받을 수 있게 한다
- 이슈: #687, 브랜치: `feat/687-single-property-pdf`
- 커밋: 216e55df

| 파일 | 내용 |
| --- | --- |
| `compare-before-after.gif` | 휴대폰(390x844) 방 비교, 매물 1개. 왼쪽 전: 하나 더 등록하라는 바만 있고 PDF 버튼이 없다. 오른쪽 후: 필터가 생기고, 매물을 고르면 `선택한 1개 PDF 받기`가 켜진다. 본 방 기록 지도에서 빈 곳을 찍어 매물 하나를 만든 뒤 `/compare`로 갔다 |
| `compare-stills.png` | 같은 녹화의 정지 화면 4장(전 고르기 전, 전 고른 뒤, 후 고르기 전, 후 고른 뒤) |

측정 조건: Playwright(시스템 Chrome), 새 브라우저 문맥이라 dev 익명 회원을 새로 만든 상태. 전: #683 커밋 `90883b3c`(localhost:3097), 후: 7개 PR을 모두 합친 작업 트리(localhost:3099), dev API. 10fps. 2026-11-17. 숫자 측정은 없다.
