# 자취선배 #783

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/783
- 제목: [FE][Perf] 시도별 경계 파일을 brotli로도 만들어 받을 수 있는 브라우저에 보낸다
- 이슈: 없음, 브랜치: `perf/boundary-brotli`
- 커밋: 693816b9 (비교 기준 develop 1c8eb058)

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `boundary-transfer-size.png` | 판교 검색이 받는 경계(경기와 서울) 전송 크기 640.0KB에서 393.4KB | PR 본문 결과 표 (로컬 운영 빌드) |
| `first-boundary-waterfall.png` | 첫 경계 표시 17.27초에서 15.93초 | PR 본문 결과 표. Slow 4G(지연 562.5ms, 1.47Mbps)와 CPU 4배, Playwright Chromium, 390x844, 빈 캐시, 전후 번갈아 3회 중앙값 |

화면은 전후가 같고 시간만 달라 GIF는 만들지 않았다.
