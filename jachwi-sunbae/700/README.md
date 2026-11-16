# 자취선배 #700

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/700
- 제목: [FE][Feat] 첫 방을 기록하기 전에 미리보기 매물을 보여 준다
- 이슈: #691, 브랜치: `feat/691-preview-properties`
- 커밋: e86c50c9

| 파일 | 내용 |
| --- | --- |
| `preview-before-after.gif` | 휴대폰(390x844) 본 방 기록 리스트, 등록한 방 0개. 왼쪽 전: 빈 안내. 오른쪽 후: 미리보기 매물 카드를 눌러 상세를 열고, 월세를 고치면 `미리보기 매물은 저장되지 않아요` 토스트가 뜬다 |
| `preview-stills.png` | 전 리스트, 후 리스트, 후 상세, 후 토스트 |

측정 조건: Playwright(시스템 Chrome), 새 브라우저 문맥이라 dev 익명 회원을 새로 만든 상태. 전: #683 커밋 `90883b3c`(localhost:3097), 후: 7개 PR을 모두 합친 작업 트리(localhost:3099), dev API. 10fps. 2026-11-17. 숫자 측정은 없다.
