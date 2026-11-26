# PR 820

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/820
- 제목: [FE][Fix] 리스트에 다녀오면 지도 타일이 왼쪽 위에만 그려지는 문제를 고친다
- 브랜치: fix/map-tile-size, 커밋: faf76f7f

## 파일

| 파일 | 내용 |
| --- | --- |
| before-list-to-map.png | develop 빌드. 지도 보기에서 리스트로 바꾸고 창 높이를 844에서 760으로 줄였다 되돌린 뒤 지도로 돌아온 화면. 타일이 왼쪽 위에만 있다. |
| after-list-to-map.png | 이 PR 빌드, 같은 순서. 지도가 칸 전체에 그려진다. |

측정 조건: 2026-11-27, 헤드리스 Chromium, 390x844 iPhone 13 UA, 지연 150ms와 4Mbps, dev API와 실제 네이버 지도. 로컬 빌드를 dev 주소로 끼워 넣어(Playwright route) 같은 계정 상태에서 찍었다.
