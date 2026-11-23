# woowacourse-teams/2026-jachwi-sunbae#808

[FE][Refactor] 로딩 표시 지연과 겹쳐 남겨 둔 effect를 정리한다
브랜치 `refactor/effects-after-loading`, 전 `e6fff38a`(#794 위에 #793을 merge한 커밋), 후 `29a22e76`. 2026-11-23 노트북에서 잼(fast4g, CPU 4배, MSW 목 300ms, 지도 SDK 스텁, 전후 번갈아 각 5회, 데우기 1회).

| 파일 | 내용 |
| --- | --- |
| property-detail-desktop-verdict.md | /properties/11 제목, 데스크탑. 2.82 → 2.85초, 흩어짐 0.06초, 같음 |
| property-detail-desktop-2s.side.png | 같은 시각 전, 후, 다른 픽셀(0.00%) |
| property-nearby-mobile-verdict.md | /properties/11 주변 시설 수 목록, 휴대폰. 2.95 → 2.96초, 흩어짐 0.04초, 같음 |
| property-nearby-mobile-3s.side.png | 같은 시각 전, 후, 다른 픽셀(0.00%) |
| neighborhoods-desktop-verdict.md | /neighborhoods 출퇴근 장소 입력 칸, 데스크탑. 1.95 → 1.95초, 같음 |
| neighborhoods-desktop-2s.side.png | 같은 시각 전, 후, 다른 픽셀(0.00%) |
| nearby-loading-delay.json | 주변 미리보기 로딩 문구가 보인 시각. 지도 API 즉시, 300ms, 300ms+1.5초에서 전후 각 3회(스로틀 없음, 휴대폰 폭) |
| nearby-loading-delay.mjs | 위 숫자를 낸 Playwright 스크립트 |
