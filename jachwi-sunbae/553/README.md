# 자취선배 #553

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/553
- 제목: [FE][Fix] 본 방 기록의 통근 버튼, 삭제 메뉴, 목록 선택 지도 이동, 새 매물 첫 탭을 고친다
- 이슈: #548 (묶음 #552), 브랜치: `fix/548-records-map-actions`
- 커밋: c9e08296, 972fabb0, 8666607d, d2d361f8, 57169a29

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `desktop-list.gif` | 왼쪽 고치기 전(develop `088b30a4`), 오른쪽 고친 뒤. 전에는 필터 줄에 `필터 준비 중`만 있고, ⋮ 메뉴가 리스트 빈 곳을 눌러도 남고, 신림역 원룸을 눌러도 지도가 망원동에 머묾. 뒤에는 `통근 시간`으로 카드마다 통근 시간이 붙고, 메뉴가 닫히고, 지도가 신림역 원룸 핀으로 옮겨 감 | Mac 시스템 Chrome(Playwright), 개발 서버 목 모드(MSW), 1280x800, 통근 장소 `신림역`을 localStorage에 미리 둠, 빨간 점은 마우스 위치, 1회, 2026-11-04 |
| `desktop-new-property.gif` | 왼쪽 전, 오른쪽 후. 마지막 탭을 체크리스트로 둔 채 지도 빈 곳에서 매물을 등록. 전에는 새 매물 상세가 체크리스트 탭으로, 뒤에는 정보 탭으로 열림 | 같은 조건, sessionStorage `jachwi:property-detail-tab=checklist` |
| `mobile-menu.gif` | 왼쪽 전, 오른쪽 후. 휴대폰 리스트에서 ⋮ 메뉴를 열고 아래 빈 곳을 누름. 전에는 메뉴가 남고 뒤에는 닫힘 | 같은 조건, 390x844 |
