# 자취선배 #210

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/210
- 제목: [FE][Refactor] 로그인 첫 화면의 초기 번들을 줄인다
- 브랜치: `refactor/208-reduce-initial-bundle`, 머지 커밋: 482987ab, 머지일: 2026-09-15
- 소급 추가(2026-11-22): 머지 뒤에 만든 그림이다. 머지 직전 커밋(`머지커밋^1`)과 머지 커밋을 각각 빌드해 녹화했다.

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `size-compare.png` | 첫 화면 JS와 CSS 크기 전후 (새로 쟀음: 머지 직전 커밋과 머지 커밋을 각각 production 빌드, 압축 전 609.9 → 311.5 KiB, gzip 190.5 → 99.3 KiB) | Linux, Node 22.22.2, 머지 직전 커밋(머지커밋^1)과 머지 커밋을 각각 npm ci 뒤 production 빌드(PostHog 토큰 비움, dev API 주소), index.html이 가리키는 파일 크기, 1회, 2026-11-22. PR 본문에는 없던 숫자라 새로 쟀음 |
