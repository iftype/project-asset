# 자취선배 #279

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/279
- 제목: [FE][Perf] 프로덕션 CSS 압축을 적용한다
- 브랜치: `codex/css-minimizer`, 머지 커밋: 7229feb1, 머지일: 2026-09-29
- 소급 추가(2026-11-22): 머지 뒤에 만든 그림이다. 머지 직전 커밋(`머지커밋^1`)과 머지 커밋을 각각 빌드해 녹화했다.

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `size-compare.png` | CSS 크기 전후 (새로 쟀음: 첫 화면 CSS 17.5 → 13.5 KiB, 빌드 전체 CSS 215.0 → 166.3 KiB, 압축 전 기준) | Linux, Node 22.22.2, 머지 직전 커밋(머지커밋^1)과 머지 커밋을 각각 npm ci 뒤 production 빌드(PostHog 토큰 비움, dev API 주소), index.html이 가리키는 파일 크기, 1회, 2026-11-22. PR 본문에는 없던 숫자라 새로 쟀음 |
