# PR #597 본 방 기록 매물 이전, 다음 넘기기

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/597
- 제목: [FE][Feat] 본 방 기록에서 매물 뱃지를 고르면 바텀시트로 보이고 이전, 다음 매물로 넘긴다
- 이슈: #596
- 브랜치: `feat/596-records-sheet-navigation`, 커밋 `1d6b9c99`

| 파일 | 내용 |
| --- | --- |
| `mobile-after.gif` | 휴대폰(390x844) `/properties` 지도. 망원동 투룸 뱃지를 누르면 `선택한 매물` 바텀시트가 뜨고, `다음 매물`로 신림역 원룸에 넘어가며 지도와 뱃지 선택이 따라간다. 마지막에서 `다음 매물`이 막히고, `이전 매물`로 돌아온 뒤 지도 빈 곳을 눌러 닫는다. |
| `desktop-after.gif` | 데스크탑(1280x800) 같은 흐름. 상세 칸 머리의 화살표로 넘기고 지도 위 닫기로 칸을 접는다. |

녹화 조건: 2026-11-05, 로컬 개발 서버(`npm run dev:mock`, MSW 예시 매물 2개, 포트 3041), Playwright 시스템 Chrome 녹화를 ffmpeg로 GIF(10fps)로 바꿨다. 측정값 없음. 바뀌기 전 화면은 화살표가 없는 것만 달라 따로 찍지 않았다.
