# jachwi-sunbae #821

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/821
- 제목: [FE][Fix] 홈 지도 바텀시트 목록 가로 끌림, 접힌 시트 비침, 현재 위치 순간 이동을 고친다
- 브랜치: fix/home-sheet-scroll-and-locate (커밋 d9a23f91)
- 찍은 날: 2026-11-27, 로컬 개발 서버(dev API, dev 익명 계정, 테스트 매물 4개를 한 자리에 심음), 헤드리스 Chromium 390x844, 위치는 서울시청으로 지정

| 파일 | 내용 |
| --- | --- |
| swipe-before.png, swipe-after.png | `이 자리 매물 4개` 시트 목록을 손가락으로 대각선으로 끈 순간. 전에는 목록이 옆으로 56px 밀렸다(scrollLeft 56, 내용 폭 446px > 시트 390px). 후에는 0 |
| peek-before.png, peek-after.png | 시트를 접은 모습(아래 200px). 전에는 높이 88px 중 제목줄 아래 11px로 첫 카드 사진이 비쳤다. 후에는 손잡이와 제목줄(77px)만 |
| locate-before.gif, locate-after.gif | 봉천동에서 현재 위치 버튼(약 10km 떨어진 시청). 전에는 바로 넘어갔고, 후에는 줄였다가 옮기고 다시 확대한다. 헤드리스 소프트웨어 렌더링이라 타일이 늦게 차고 프레임이 실제보다 느리다 |
