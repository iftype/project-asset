# 자취선배 #665

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/665
- 제목: [FE][Chore] 랜딩 소개 영상을 지금 앱 화면에 맞춘 영상으로 바꾼다
- 이슈: #663, 브랜치: `chore/663-landing-intro-video`
- 커밋: 48b14174 (전: develop `01112c2e`)

| 파일 | 내용 | 출처 |
| --- | --- | --- |
| `landing-desktop-before.gif` | 데스크톱 랜딩 첫 화면, 전. 옛 영상 `landing-flyover.mp4`(1440x1152, 5:4), 영상 칸 676x540 | `npm run dev:mock`, Playwright(시스템 Chrome) 1440x900 녹화의 2~12초, 10fps, 폭 800px. 2026-11-12 |
| `landing-desktop-after.gif` | 데스크톱 랜딩 첫 화면, 후. 새 영상 `landing-intro.mp4`(1920x1080, 16:9), 영상 칸 710x399 | 같은 조건 |
| `landing-mobile-before.gif` | 휴대폰 랜딩 첫 화면, 전. 영상 칸 358x286 | 390x844 녹화의 2~12초, 10fps, 폭 390px |
| `landing-mobile-after.gif` | 휴대폰 랜딩 첫 화면, 후. 영상 칸 358x201 | 같은 조건 |

숫자 출처:

- 영상 용량: 1,934,700바이트(1,890KB) → 3,014,315바이트(2,944KB). 30fps 원본(crf 18, 8,066,577바이트)을 libx264 preset slow, crf 28, yuv420p, 소리 없음, faststart로 다시 압축.
- SSIM: `ffmpeg -i crf28.mp4 -i raw.mp4 -lavfi ssim` 전체 891프레임 평균 All 0.9942(가장 낮은 프레임 0.9577). crf 26/27/29/30/32는 3.62/3.31/2.76/2.53/2.16MB, 0.9954/0.9948/0.9935/0.9928/0.9910.
- 영상 칸 크기와 CLS: 위 녹화 때 `getBoundingClientRect`와 `layout-shift` 관찰. 영상 주소를 뺀 상태(readyState 0)와 1.6Mbps로 늦춘 상태에서도 칸 크기가 같고 CLS 0.
- 랜딩 전송량과 Lighthouse는 재지 않았다.
