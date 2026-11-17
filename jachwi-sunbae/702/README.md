# 목록·지도 사진 썸네일 전환

- PR: https://github.com/woowacourse-teams/2026-jachwi-sunbae/pull/702
- 제목: [FE][Feat] 목록·지도 사진을 썸네일로 표시한다
- 이슈: #677, 백엔드 선행 PR #684
- 브랜치: feat/677-photo-thumbnail-frontend
- 구현 커밋: 4e0950bdd59fbcff7ecfcdabd728dadc0d6e12b2
- 기준 커밋: 변경 전 작업 브랜치 HEAD (git archive로 분리)

| 파일 | 내용 |
| --- | --- |
| before.gif | 원본 사진을 사용하는 목록·지도 네이버 지도·mock 매물 화면 |
| after.gif | 썸네일 사진을 사용하는 목록·지도 네이버 지도·mock 매물 화면 |

2026-11-17 시스템 Chrome, Playwright, 1280×800 viewport에서 실제 네이버 지도 키를 적용한 로컬 dev:mock의 /properties를 녹화했다. 온보딩 건너뛰기 후 화면 끝 3초를 GIF로 변환했고 개인정보는 없다. 첫 프레임과 중간 프레임을 확인했다. mock은 두 엔드포인트에 같은 이미지를 반환하므로 화면 배치 유지 확인용이며, 실제 전송량·속도 비교 자료가 아니다. 프론트 성능 수치는 측정하지 않았다. 백엔드 #684의 수치를 이 자료의 측정치로 사용하지 않는다.
