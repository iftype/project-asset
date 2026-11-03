# 자취선배 #512

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/512
- 제목: [FE][Fix] 회원 화면을 처음 열 때 빈 화면과 준비 문구 없이 바로 뼈대를 보여 준다
- 이슈: #510, 브랜치: `fix/510-first-visit-skeleton`
- 커밋: 8df0a0e4 ~ b6372955 (16개)

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `first-paint-timeline.png` | 첫 페인트: 고치기 전 흰 화면 168~432ms 뒤 +300ms 지연, 고친 뒤 52~80ms CSS 뼈대 | 운영 빌드 첫 진입 측정, 1440px과 390px (PR 본문 테스트 항목) |
