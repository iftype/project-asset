# 자취선배 #516

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/516 (#514를 공동 저자 줄 없이 다시 올림)
- 제목: [FE][Fix] 동네 찾기에서 장소를 고르는 동안 수도권 행정동 경계를 미리 받는다
- 이슈: #388 (1단계), 브랜치: `fix/388-prefetch-metro-boundary-files`
- 커밋: f0b94d32, b1686c8e, 970aa5eb

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `search-compare-4g.gif` | 왼쪽 고치기 전(develop `517ea699`), 오른쪽 미리 받기. 찾기 클릭 1초 전부터 9초, 결과 목록까지 6.38초 → 2.88초. 미리 받기는 진입 7.6~10.3초에 서울, 경기, 인천을 받고 검색 뒤 경계 파일 재요청 없음 | Mac 헤드리스 Chrome, 개발 서버(webpack dev), 4G 흉내(9Mbps, 지연 70ms), CPU 4배 느리게, 1280x800, dev 익명 계정, 1회, 2026-11-03 |
| `prefetch-entry-to-search.png` | 진입부터 찾기까지: 지도 6.30초, 미리 받기 6.30~8.36초(시작은 추정), 찾기 22초, 완료 2.75초 | 서브노트북 `~/Documents/jachwi-bench/results.json`, dev, 4G, 5회 중앙값 |
| `prefetch-after-search.png` | 찾기 뒤: A 4.49초, 미리 받기 2.75초(39% 감소), B 3.13초. API, 경계 파일, 그리기 구간 | 같은 파일의 `table` (4g, pick 22) |
