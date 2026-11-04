# 자취선배 #566

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/566
- 제목: [FE][Fix] 동네 찾기 결과 지도와 바텀시트를 덜 다시 그리게 하고 확대, 경로 시점, 시트 끌기를 고친다
- 이슈: #542, #543, #556, 브랜치: `fix/542-neighborhood-map-rendering`
- 커밋: 6a256fa1, 54af3324, cdc48e9a, ed2cb214, 938521a6, debe4f0e, 2f868d25, 66e06c1a, a53aebea, f9385310, 77e244c9, 499ff27e

GIF는 모두 왼쪽이 고치기 전(develop `c3e931c5` 운영 빌드), 오른쪽이 고친 뒤다. 로컬 운영 빌드를 `/api`만 dev API로 넘기는 정적 서버(3031)로 띄우고 Mac 시스템 Chrome(Playwright, 헤드리스)으로 녹화했다. dev API 익명 회원, 목적지는 판교(지도 가운데를 찍음), 통근 40분, 환승 1회, 2026-11-04, 각 1회 녹화. 운영 API와 운영 사이트는 쓰지 않았다.

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `tab-switch.gif` | 동네 시트 탭 전환(정류장 → 공인중개사 → 정류장). 두 쪽 모두 고른 탭 마커만 남는다. 오른쪽은 마커를 다시 붙여 쓴다 | 390x844, CPU 4x는 탭을 누르는 구간만. 오른쪽은 `debe4f0e`(공인중개사 탭을 빼기 전) |
| `result-drag.gif` | 결과 지도 드래그 세 번 | 390x844, CPU 4x, 오른쪽 `debe4f0e`. 6fps로 줄임 |
| `sheet-drag.gif` | 동네 시트를 손잡이로 끌어 올렸다 내리기. 오른쪽은 끄는 동안 `transform`만 바꾼다 | 390x844, CPU 4x, 오른쪽 `debe4f0e` |
| `area-sheet-768.gif`, `area-sheet-1023.gif` | 태블릿 폭에서 동네 시트를 끝까지 끌어 올리기. 왼쪽은 30rem 가운데, 오른쪽은 화면 폭을 채운 페이지 | 768x1024(오른쪽 `debe4f0e`), 1023x768(오른쪽 `77e244c9`) |
| `meal-sheet-390.gif`, `meal-sheet-768.gif`, `meal-sheet-1023.gif` | 저렴한 한 끼 가게 목록 시트를 끝까지 끌어 올리기. 왼쪽은 90%에서 멈추고, 오른쪽은 페이지로 연다 | 각 폭, 오른쪽 `77e244c9` |
| `nearby-sheet-390.gif`, `nearby-sheet-768.gif`, `nearby-sheet-1023.gif` | 주변 분석 시트. 왼쪽은 끌리지 않아 '시설 목록 보기'로 펼치고, 오른쪽은 공용 시트로 끌어 페이지까지 연다 | 삼평동 좌표, 각 폭, 오른쪽 `77e244c9` |
| `station-route.gif` | 휴대폰에서 1위 동네의 첫 출발 정류장을 누름. 왼쪽은 정류장 한 점에 3단계로 다가가 출퇴근 장소가 화면 밖, 오른쪽은 정류장과 출퇴근 장소가 함께 보인다 | 390x844, 오른쪽 `77e244c9` |
| `desktop-station-route.gif` | 데스크탑에서 1위 동네를 고르고 첫 출발 정류장을 누름 | 1280x800, 오른쪽 `77e244c9` |
| `memo-deselect.gif` | 동네를 골랐다 풀어 가까이 본 채 결과 지도로 돌아옴. 왼쪽은 dev의 거리 메모가 보이고 오른쪽은 없다 | 390x844, 오른쪽 `77e244c9` |
| `zoom-buttons.gif` | 고친 뒤만. 결과 지도의 확대 두 번, 축소 한 번 버튼 | 390x844, `77e244c9` |

## 탭 상태별 지도에 올라간 마커 수 (콘티 제보 계측)

`useNaverMap`의 마커 동기화 끝에 임시 계측을 넣어(커밋하지 않고 측정 뒤 지움) 지도에 붙은 오버레이를 종류별로 세고, 같은 순간 지도 DOM의 마커 수와 요청된 마커 목록을 함께 적었다. 개발 서버 3031, dev API, 2026-11-04, 브랜치 커밋 `ed2cb214`(지도 마커 코드는 develop과 같음). 삼평동 화면 안에 dev 거리 메모 3~5개가 있다.

## 휴대폰 390x844

| 상태 | 탭 | 지도에 붙은 마커(종류별) | 합계 | 지도 DOM | 요청된 마커 |
| --- | --- | --- | ---: | ---: | --- |
| 0 없음(결과 전체) | 없음 | area-rank 5, destination 1 | 6 | 6 | area-rank 5, destination 1 |
| 1 정류장 탭(삼평동) | 정류장 43(선택), 공인중개사 45 | bus-stop 151, destination 1 | 152 | 152 | bus-stop 151, destination 1 |
| 2 정류장 탭(메모 자리가 화면 안) | 정류장 43(선택), 공인중개사 45 | bus-stop 151, destination 1 | 152 | 152 | bus-stop 151, destination 1 |
| 3 공인중개사 탭 | 정류장 43, 공인중개사 45(선택) | agency 45, destination 1 | 46 | 46 | agency 45, destination 1 |
| 3-1 다시 정류장 탭 | 정류장 43(선택), 공인중개사 45 | bus-stop 151, destination 1 | 152 | 152 | bus-stop 151, destination 1 |
| 4 없음(동네 선택 해제) | 없음 | bus-stop 151, agency 45, street-memo 3, destination 1 | 200 | 200 | bus-stop 151, agency 45, street-memo 3, destination 1 |

## 데스크탑 1440x900

| 상태 | 탭 | 지도에 붙은 마커(종류별) | 합계 | 지도 DOM | 요청된 마커 |
| --- | --- | --- | ---: | ---: | --- |
| 0 없음(결과 전체) | 없음 | area-rank 5, destination 1 | 6 | 6 | area-rank 5, destination 1 |
| 1 정류장 탭(삼평동) | 정류장 43(선택), 공인중개사 45 | bus-stop 249, destination 1 | 250 | 250 | bus-stop 249, destination 1 |
| 2 정류장 탭(메모 자리가 화면 안) | 정류장 43(선택), 공인중개사 45 | bus-stop 249, destination 1 | 250 | 250 | bus-stop 249, destination 1 |
| 3 공인중개사 탭 | 정류장 43, 공인중개사 45(선택) | agency 45, destination 1 | 46 | 46 | agency 45, destination 1 |
| 3-1 다시 정류장 탭 | 정류장 43(선택), 공인중개사 45 | bus-stop 249, destination 1 | 250 | 250 | bus-stop 249, destination 1 |
| 4 없음(동네 선택 해제) | 없음 | bus-stop 385, agency 45, street-memo 5, destination 1 | 436 | 436 | bus-stop 385, agency 45, street-memo 5, destination 1 |
결론: 모든 상태에서 지도에 붙은 수, DOM 수, 요청된 수가 같다(이전 탭 마커 0). 메모는 동네를 고르지 않은 상태(4)에서 메모 레이어로만 들어왔다. 그래서 #543에서 메모 레이어를 뺐다.

## 숫자 출처

성능 숫자는 PR 본문과 `frontend/docs/rendering-performance-report.md`에 있다. 원본 트레이스, React 커밋 기록, 회차별 값은 측정한 Mac의 `~/Documents/jachwi-perf/perf-rendering/`(`2026-11-04-ab-sheets-markers`, `2026-11-04-ab-zoom`, `2026-11-04-tab-marker-count` 등) README에 있다. 측정 조건은 390x844 DPR 3, CPU 4x, develop `c3e931c5`와 같은 시간대에 번갈아 3회.
