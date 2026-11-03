# 자취선배 #539

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/539
- 제목: [FE][Refactor] 지도 화면에서 쓰지 않는 스트리밍 서버 렌더러를 뺀다
- 이슈: #534 (로딩 성능 3단계), 브랜치: `refactor/534-marker-without-server-renderer`
- 커밋: cd3e58a8

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `bundle-before.png` | 고치기 전 운영 빌드 번들(parsed). 오른쪽 위 `848` 청크에 `react-dom-server.browser`와 `react-dom-server-legacy.browser` 두 렌더러 | webpack-bundle-analyzer, develop `baa70c3d`, 2026-11-03 |
| `bundle-after.png` | 고친 뒤. `47` 청크에 legacy 렌더러 하나. 압축 전 187,770B → 89,531B, gzip 56,755B → 27,338B | 같은 도구, 커밋 cd3e58a8, 2026-11-04 |

기록 지도 모바일 Lighthouse 13.6.0 5회 중앙값(Slow 4G, CPU 4x 시뮬레이션): 점수 57 → 69, LCP 4,273 → 3,971ms, TBT 1,227 → 625ms. 마커 화면 픽셀 차이 8px / 1,269,000px(같은 빌드끼리 0px).
