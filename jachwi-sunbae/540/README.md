# 자취선배 #540

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/540
- 제목: [FE][Refactor] 랜딩의 화면 캡처와 소개 영상 용량을 절반으로 줄인다
- 이슈: #534 (로딩 성능), 브랜치: `refactor/534-landing-media`
- 커밋: 9fa1b761

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `landing-mobile-compare.png` | 랜딩 휴대폰 화면의 같은 부분. 왼쪽 전(JPG 436KB), 오른쪽 후(WebP 203KB) | 로컬 운영 빌드, 412x823, 3배 밀도 전체 화면 캡처를 잘라 줄임. 전체 화면 SSIM 0.998. 2026-11-04 |
| `landing-desktop-compare.png` | 랜딩 데스크톱 화면의 같은 부분. 왼쪽 전(JPG), 오른쪽 후(WebP) | 1350x940, 2배 밀도. 전체 화면 SSIM 0.994 |

받는 양(모바일 Slow 4G, CPU 4x, 실측 3회 중앙값): 5,729KB → 2,578KB. 영상 4,454KB → 1,890KB(SSIM 0.994). Lighthouse 13.6.0 모바일, 전후를 번갈아 5회 중앙값: 점수 79 → 83, LCP 4,781 → 4,335ms.
