# 자취선배 #698

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/698
- 제목: [FE][Feat] 매물 상세 주소 아래에 주변 환경 지도를 두고 지도에서 위치를 바꾼다
- 이슈: #692, 브랜치: `feat/692-detail-nearby-map`
- 커밋: a63e44ff

| 파일 | 내용 |
| --- | --- |
| `nearby-after.gif` | 휴대폰(390x844) 미리보기 매물 상세, 후만. 주소 아래 주변 지도와 고리 요약, 범례에서 편의점을 누르면 편의점 점만 남고, 초기화, 주소 수정을 누르면 지도에서 새 위치를 고르라는 안내가 뜬다. 전 화면에는 이 지도가 없다 |
| `nearby-stills.png` | 기본, 편의점만, 위치 고르기 |

측정 조건: Playwright(시스템 Chrome), 새 브라우저 문맥이라 dev 익명 회원을 새로 만든 상태. 전: #683 커밋 `90883b3c`(localhost:3097), 후: 7개 PR을 모두 합친 작업 트리(localhost:3099), dev API. 10fps. 2026-11-17. 숫자 측정은 없다.
