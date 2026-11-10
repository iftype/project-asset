# project-asset

PR과 문서(노션 등)에 넣는 그림 보관소. 공개 레포라 개인정보가 보이는 화면은 올리지 않는다.

## 구조

```
<프로젝트>/<PR번호>/
  README.md      # 이 폴더의 색인: PR, 브랜치, 커밋, 이슈, 파일별 설명과 숫자 출처
  <설명>.png|gif
```

- PR 본문에는 `https://raw.githubusercontent.com/iftype/project-asset/main/<경로>`로 넣는다.
- 노션에 옮길 때는 폴더의 `README.md`를 읽고, 파일은 노션 파일 업로드로 다시 올린다.

## 색인

| 프로젝트 | PR | 내용 |
| --- | --- | --- |
| jachwi-sunbae | [509](jachwi-sunbae/509) | 등록 진입을 본 방 기록 지도로 모음 (전후 GIF) |
| jachwi-sunbae | [512](jachwi-sunbae/512) | 첫 방문 흰 화면을 CSS 뼈대로 (첫 페인트 타임라인) |
| jachwi-sunbae | [513](jachwi-sunbae/513) | 첫 렌더링 마커 이동 (GL 준비 순서) |
| jachwi-sunbae | [516](jachwi-sunbae/516) | 수도권 행정동 경계 미리 받기 (워터폴 2장) |
| jachwi-sunbae | [528](jachwi-sunbae/528) | 앱 스토어 스크린샷 새 디자인 (iOS 6장 이어 붙인 미리보기) |
| jachwi-sunbae | [529](jachwi-sunbae/529) | 동네 찾기 시작 때 지도 깜빡임, 헤더 높이 고정 (전후 GIF) |
| jachwi-sunbae | [530](jachwi-sunbae/530) | 결과 지도 확대 축소 때 목록 깜빡임, 동네 고를 때 다가가는 단계 (전후 GIF 3개) |
| jachwi-sunbae | [531](jachwi-sunbae/531) | 첫 번들 크기 줄이기 (번들 구성 전후 막대) |
| jachwi-sunbae | [535](jachwi-sunbae/535) | 행정동 경계 좌표 자릿수 줄이기 (워터폴, 전후 스크린샷과 픽셀 차이) |
| jachwi-sunbae | [537](jachwi-sunbae/537) | 기록 지도 SDK 미리 받기 (전후 GIF, 워터폴) |
| jachwi-sunbae | [539](jachwi-sunbae/539) | 지도 마커용 서버 렌더러 하나만 싣기 (번들 구성 전후) |
| jachwi-sunbae | [540](jachwi-sunbae/540) | 랜딩 캡처 WebP, 영상 재압축 (전후 화면 비교) |
| jachwi-sunbae | [issue-542](jachwi-sunbae/issue-542) | 이슈 #542 동네 찾기 지도 확대 축소 중 하얗게 빔 (화면 기록 GIF) |
| jachwi-sunbae | [553](jachwi-sunbae/553) | 본 방 기록 통근 버튼, 메뉴 닫기, 리스트 선택 지도 이동, 새 매물 정보 탭 (전후 GIF) |
| jachwi-sunbae | [554](jachwi-sunbae/554) | 저렴한 한 끼 지도 이동 자동 재검색, 업종 안내 문구, 식당 탭 위쪽 여백 (전후 GIF, 데스크톱 문구 전후, 화면 폭별 여백 전후) |
| jachwi-sunbae | [555](jachwi-sunbae/555) | 방 비교 매물 1개 상태, 마이 버전 표기 (전후 캡처) |
| jachwi-sunbae | [559](jachwi-sunbae/559) | 저렴한 한 끼 탭 경로, 새로고침해도 고른 동네와 가게 상세 유지 (전후 GIF, 탭 이동 GIF) |
| jachwi-sunbae | [561](jachwi-sunbae/561) | 저렴한 한 끼 마지막 탭 기억, 업종 칩, 지도 위 검색창, 상품 사진 잘림, 공용 빈 상태와 오류 (전후 캡처, GIF) |
| jachwi-sunbae | [562](jachwi-sunbae/562) | 본 방 기록 지도 레일에서 중개, 통근 빼기, 체크리스트 수정 뒤 매물 재적용, 첫 안내 닫기, 시설 화면 채우기, 리스트 통근 시간 버튼 빼기 (레일, 체크리스트, 안내, 시설, 통근 버튼 전후 GIF) |
| jachwi-sunbae | [564](jachwi-sunbae/564) | 날씨 알림 토글 위치 일시 실패, 오류 문구 정리 (전후 나란히 GIF) |
| jachwi-sunbae | [565](jachwi-sunbae/565) | 홈 푸터에서 랜딩으로 가는 길, 랜딩 캡처를 지금 화면으로 (진입 전후, 랜딩 섹션 전후, 푸터 전후) |
| jachwi-sunbae | [566](jachwi-sunbae/566) | 동네 찾기 결과 지도 렌더링, 확대 버튼과 경로 시점, 바텀시트 페이지 열기 (전후 GIF 15개, 탭별 마커 수 표, 사용자 확인 뒤 전후 캡처 12개) |
| jachwi-sunbae | [579](jachwi-sunbae/579) | 매물 등록 주소 대기와 주소 없음 안내, 위치 바꾸면 기록 지도 이동, 본 방 기록 삭제 버튼, 마이 문구, 홈 카드 문구와 글자 맞추기, 가격 입력 전 표기 (전후 나란히 GIF 2개, 전후 캡처 3개) |
| jachwi-sunbae | [590](jachwi-sunbae/590) | 방 비교 PDF를 카드형 디자인으로 다시 그리기 (표지와 매물 쪽 전후, 매물 1, 2, 4개) |
| jachwi-sunbae | [597](jachwi-sunbae/597) | 본 방 기록에서 고른 매물을 바텀시트와 상세 칸에서 이전, 다음으로 넘기기 (휴대폰, 데스크탑 GIF) |
| jachwi-sunbae | [615](jachwi-sunbae/615) | 행정동 경계를 색 구간별로 합쳐 그려 지도 끌기 가볍게 (전후 나란히 끌기 GIF, 원인 손그림) |
| jachwi-sunbae | [622](jachwi-sunbae/622) | 지도 사용자 지정 스타일을 빼서 GL 끄기 (전후 지도 배경 비교 이미지) |
| jachwi-sunbae | [issue-523](jachwi-sunbae/issue-523) | 이슈 #523 앱 OAuth 네이티브 SDK와 id_token 설계 (시퀀스, 웹과 앱 경로, 전환 순서 그림) |
| jachwi-sunbae | [628](jachwi-sunbae/628) | 화면 최종 다듬기 (등록 후 사진 카드 마커 GIF) |
| jachwi-sunbae | [645](jachwi-sunbae/645) | 앱 심사 전 헤더 알림 받기, 동네 시트, 계정 연결 버튼 (전후 나란히 GIF 3개) |
