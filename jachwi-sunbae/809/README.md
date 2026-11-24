# PR #809 휴대폰 경로를 iPhone(WebKit) 조건으로 검증한다

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/809
- 브랜치: chore/iphone-webkit-qa (base chore/verification-integration), 검증 코드 커밋 95449571
- 찍은 앱: develop 1c8eb058 운영 빌드(build-variant.sh, API 주소 http://localhost:4311)
- 조건: `cd qa && npm run test:iphone -- --dist <develop dist> --port 4311`. Playwright 1.63 WebKit 26.6(리눅스 WPE), devices['iPhone 15'](393x659, 배율 3, 터치, 모바일 UA), serve.mjs --api mock --delay 300, 실제 네이버 지도 SDK. 2026-11-25 로컬 노트북.
- 결과: 5개 경로 모두 통과, 테스트 22.4초(빌드 제외). 각 경로 끝 화면이다. 목 데이터 화면이라 개인정보가 없다.

| 파일 | 내용 |
| --- | --- |
| `iphone-paths-develop.png` | 아래 9장을 한 장에 모은 것 |
| `neighborhood-finder.png` | 동네 찾기: 시청을 출퇴근 장소로 찾은 뒤 역삼1동 뱃지를 눌러 연 동네 시트 |
| `neighborhood-finder-sheet-closed.png` | 동네 시트를 아래로 끌어 닫은 뒤. 역삼1동은 고른 채로 남는다 |
| `home-map-sheet-expanded.png` | 홈 지도: 망원동 투룸 마커를 누르고 시트 손잡이를 위로 끈 뒤(expanded) |
| `home-list.png` | 하단 탭 내 기록으로 바꾼 리스트 |
| `home-tab-my.png` | 하단 탭 마이 |
| `property-detail-photo-viewer.png` | 매물 상세: 대표 사진 크게 보기에서 2 / 2로 넘긴 화면 |
| `property-detail-info.png` | 사진 보기를 닫은 뒤 정보 탭 |
| `checklist.png` | 체크리스트: 주차 항목을 괜찮음으로 누른 뒤 집계(괜찮음 2, 주의 1, 미확인 0) |
| `compare.png` | 방 비교: 두 매물을 골라 PDF를 받은 뒤 |
