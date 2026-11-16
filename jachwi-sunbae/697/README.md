# 자취선배 #697

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/697
- 제목: [FE][Feat] 본 방 기록 빠른 등록 뒤 지도를 그대로 두고 리스트 카드 호버를 더한다
- 이슈: #690, 브랜치: `feat/690-records-quick-create-stay`
- 커밋: 102ffd92

| 파일 | 내용 |
| --- | --- |
| `records-before-after.gif` | 데스크탑(1280x800) 본 방 기록 지도에서 빈 곳을 찍어 `여기에 매물 등록`. 왼쪽 전: 지도가 새 매물 자리로 크게 다가간다. 오른쪽 후: 지도 배율과 중심이 그대로이고, 저장 중 핀이 반투명하게 깜빡인 뒤 상세가 열린다. 후는 미리보기 매물이 있어 처음 위치가 코엑스 근처다 |
| `records-stills.png` | 위: 전(등록 직후, 4초 뒤), 아래: 후(등록 직후, 4초 뒤) |

측정 조건: Playwright(시스템 Chrome), 새 브라우저 문맥이라 dev 익명 회원을 새로 만든 상태. 전: #683 커밋 `90883b3c`(localhost:3097), 후: 7개 PR을 모두 합친 작업 트리(localhost:3099), dev API. 10fps. 2026-11-17. 숫자 측정은 없다.
