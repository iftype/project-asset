# 자취선배 #590

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/590
- 제목: [ALL][Fix] 방 비교 PDF를 지금 카드형 디자인에 맞춰 다시 그린다
- 이슈: #545 (묶음 #552), 브랜치: `fix/545-comparison-pdf-design`
- 커밋: 553dec0c

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `cover-before.png` | 고치기 전 PDF 첫 쪽. 왼쪽부터 매물 1개, 2개, 4개. 가로 쪽인데 표가 폭의 2/3만 차고, 옛 초록 색이다 | `PropertyComparisonPdfRenderTest`로 그린 PDF를 PDFBox로 110dpi PNG로 바꿈, 기준 커밋 e3271447(템플릿만 옛 것), 높이 900px로 줄여 나란히 붙임(ffmpeg hstack). 2026-11-05 |
| `cover-after.png` | 고친 뒤 같은 세 경우. 로고, 매물 카드(사진 없는 매물은 오리 로고), 한눈에 비교 표, 단계별 진행 막대와 색 숫자 | 같은 조건, 커밋 553dec0c |
| `property-before.png` | 고치기 전 매물 2개 PDF의 첫 매물 쪽(2~4쪽). 사진이 한 쪽에 한 장씩 크게 들어간다 | 같은 조건 |
| `property-after.png` | 고친 뒤 같은 매물 쪽(2~3쪽). 요약 카드, 기본 정보, 사진 두 장씩, 메모, 단계별 체크 카드 | 같은 조건, 커밋 553dec0c |

예시 데이터는 모두 지어낸 매물 이름과 주소(번지 00)이고, 사진은 테스트 코드가 그린 도형이다. 개인정보는 없다.
