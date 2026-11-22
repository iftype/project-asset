# PR 789 화면 판정 시험 증거

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/789 `[FE][Chore] 화면 판정 기반(갈 수 있는 화면, 판정 범위, 전후 판정)을 만든다`
- 브랜치: `chore/verify-jachwi-skill`, 관련: #784, #787
- 측정: 2026-11-22, 로컬 Linux 노트북, verify-jachwi 스킬 `measure.mjs`(운영 빌드, MSW 목 300ms 고정, 실제 네이버 지도, 홈, 390x844, 보통 4G 지연 70ms 9Mbps, CPU 4배, 빈 캐시, 전후 번갈아 각 5회)

| 파일 | 내용 |
| --- | --- |
| 784-vs-develop-verdict.md | #784(d18eea47) 대 develop(1c8eb058) 판정: 첫 매물 카드 나빠짐(+0.30초, 흩어짐 0.06초) |
| 784-vs-develop-2s.png, 784-vs-develop-3s.png | 같은 시각 전(develop), 후(#784), 다른 픽셀 나란히 보기 |
| 784-vs-develop-runs.jsonl | 회차별 값 |
| develop-vs-develop-verdict.md | 같은 코드 두 빌드 판정: 같음(-0.03초, 흩어짐 0.06초) |
| develop-vs-develop-3s.png | 같은 시각 나란히 보기 |
| develop-vs-develop-runs.jsonl | 회차별 값 |
