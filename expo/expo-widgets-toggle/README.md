# expo-widgets: iOS 위젯에서 Toggle이 그려지지 않음

- 저장소: expo/expo, 패키지 `expo-widgets`(PR2), `@expo/ui`(PR1)
- 이슈: 아직 안 올림(올리면 주소 추가)
- PR: 아직 없음(이슈에서 방향 확인 뒤, PR1 `@expo/ui` → PR2 `expo-widgets` 스택)
- 재현 앱: https://github.com/iftype/expo-widgets-repro (`toggle` 브랜치는 원본, `toggle-fixed` 브랜치는 수정을 patch-package로 적용)
- 브랜치: iftype/expo `feat/expo-ui-toggle-return-value`(PR1), `feat/expo-widgets-toggle`(PR2)

| 파일 | 내용 |
| --- | --- |
| before.png | 고치기 전(`toggle` 브랜치). `enabled: false` 다음에 Toggle이 없고 바로 `count`와 Count 버튼. Count 버튼은 동작(숫자가 바뀌는 중에 찍힘) |
| after-1.png | 고친 뒤. `Enabled` 토글이 보임(꺼짐) |
| after-2.png | 고친 뒤 토글을 누름. 토글 켜짐, `enabled: true` |
| pure-switch.png | 비교: 순수 SwiftUI `Toggle(isOn:intent:)`에 `.toggleStyle(.switch)`("Pure switch")와 Expo Toggle에 `toggleStyle('switch')`("Switch") 모두 노란 금지 표시. iOS가 위젯에서 switch 스타일을 그리지 않음 |

찍은 기기: iPhone 14, iOS 26.5.2, Release 빌드, expo-widgets 58.0.29, @expo/ui 58.0.29, 2026-11-23~24. 홈 화면 캡처에서 위젯 카드만 잘라 냄.
