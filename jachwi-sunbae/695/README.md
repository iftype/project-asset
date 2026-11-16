# 자취선배 #695

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/695
- 제목: [FE][Feat] 동네 찾기 지도에 월세 라벨을 붙이고 동네를 눌러도 지도를 옮기지 않는다
- 이슈: #688, 브랜치: `feat/688-neighborhood-map-rent-label`
- 커밋: 6380a45d

| 파일 | 내용 |
| --- | --- |
| `neighborhood-before-after.gif` | 데스크탑(1280x800) 동네 찾기 결과(코엑스 근처, 40분, 환승 1회). 휠로 세 번 확대한 뒤 지도에서 동네를 누른다. 왼쪽 전: 월세 라벨이 없고, 누르면 경로 전체가 보이게 지도가 물러난다. 오른쪽 후: 동 이름 아래 월세 라벨이 붙고, 눌러도 지도가 그대로다 |
| `neighborhood-stills.png` | 위: 전(결과, 동네 누른 뒤), 아래: 후(확대 뒤 라벨, 동네 누른 뒤) |

측정 조건: Playwright(시스템 Chrome), 새 브라우저 문맥이라 dev 익명 회원을 새로 만든 상태. 전: #683 커밋 `90883b3c`(localhost:3097), 후: 7개 PR을 모두 합친 작업 트리(localhost:3099), dev API. 10fps. 2026-11-17. 숫자 측정은 없다.
