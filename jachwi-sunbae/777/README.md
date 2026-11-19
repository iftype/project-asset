# #777 랜딩 소개 영상과 화면 캡처를 지금 화면으로 바꾸고 영상을 전체 화면으로 볼 수 있게 한다

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/777
- 이슈: 없음 (전시회 준비)
- 브랜치: `chore/landing-intro-video`
- 커밋: `b5c52d3f`, `a2217e35`, `3dc1944c`, `387cc629`

## 파일

| 파일 | 내용 |
| --- | --- |
| `hero-after.png` | 바뀐 랜딩 첫 화면. 새 소개 영상 1초 지점(2026.08) |
| `before-*.webp` | 바뀌기 전 랜딩 캡처(develop `e6d30b53`, 11/12 #668에서 찍음) |
| `after-*.webp` | 다시 찍은 랜딩 캡처(dev 익명 데모 계정, 1440x900, 2026-11-20) |

캡처 이름: explore(동네 찾기), records(본 방 기록), memo(거리 메모), checklist(체크리스트), compare(방 비교), cheap-meals(저렴한 한 끼).

## 숫자 출처

- 영상 길이 43.3초 → 39.1초: 0~8.5초 구간을 2배속으로 다시 인코딩(ffmpeg, H.264 crf 28), ffprobe로 확인.
- 섹션 높이 800px → 601px: 로컬 개발 서버, 1280x800 창에서 첫 화면 아래 기능 소개 섹션의 `getBoundingClientRect().height`.
