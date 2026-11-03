# 자취선배 #531

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/531
- 제목: [FE][Refactor] 첫 화면에 쓰지 않는 코드를 첫 번들에서 빼 크기 한도에 여유를 만든다
- 이슈: #517, 브랜치: `refactor/517-initial-bundle-size`
- 커밋: 5e20ca32, 48ca2839, 718f84f8

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `bundle-composition.png` | entrypoint main을 패키지와 기능 폴더별로 나눈 전후 막대. 전체 352,354B에서 349,137B(-3,217B), 한도 358,400B까지 여유 6,046B에서 9,263B. react-router -1,309B, src/features/auth -1,337B, src/shared/lib -594B, 나머지는 그대로 | 운영 빌드(`npm run build`) webpack stats의 entrypoint main 모듈 크기(minify 뒤 파싱 크기 합), 전은 develop `97091814`, 후는 이 브랜치 rebase 전 커밋, 2026-11-03. #512 머지 전 기준 |

## 첫 화면 시간 측정 (그림에는 넣지 않음)

운영 빌드를 gzip 정적 서버로 띄우고 `/api`를 dev API에 프록시, 헤드리스 Chromium, 로그인 없음, 조건마다 전후를 번갈아 15회, 중앙값 [사분위 범위].

| 조건 | 첫 페인트 | FCP | 홈 첫 화면 |
| --- | --- | --- | --- |
| 1440px, 스로틀 없음 | 64 [60-68] → 64 [60-68]ms | 528 [504-576] → 528 [500-576]ms | 462 [444-525] → 459 [444-517]ms |
| 390px, CPU 4배, 150ms RTT, 1.6Mbps | 988 [980-1008] → 1008 [984-1020]ms | 1428 [1384-1524] → 1472 [1380-1552]ms | 1742 [1698-1841] → 1785 [1695-1864]ms |

차이는 모두 사분위 범위 안이라 잡음 수준이다. main 전송량(gzip)은 113,817B에서 112,845B.
