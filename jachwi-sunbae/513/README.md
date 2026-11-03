# 자취선배 #513

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/513
- 제목: [FE][Fix] 지도 화면 첫 렌더링에서 뼈대를 보기 방식에 맞추고 마커가 옮겨 가지 않게 한다
- 이슈: #511, #496, 브랜치: `fix/511-map-first-render`
- 커밋: 05d52c1b, b4d65cca, 1e6675db, a58894ed, e0d66a11

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `marker-gl-ready.png` | 마커를 GL 준비 전에 넣어 옮겨 가던 흐름과 준비 뒤에 넣는 흐름. 옮겨 간 마커 8가지 조건 모두 3개 → 0개 | rAF 기록 (PR 본문 테스트 항목) |
