# expo-widgets: dynamic enum 기본값이 이름 대신 값으로 보임

- 저장소: expo/expo, 패키지 `expo-widgets`
- 이슈: 아직 안 올림(올리면 주소 추가)
- PR: 아직 없음(메인테이너가 방향을 고른 뒤)
- 재현 앱: https://github.com/iftype/expo-widgets-repro (`fixed` 브랜치가 방향 1)
- 브랜치: iftype/expo `fix/expo-widgets-dynamic-enum-default-name`(방향 1), `feat/expo-widgets-dynamic-enum-entity`(방향 2)

| 파일 | 내용 |
| --- | --- |
| before-default-value.png | 고치기 전, 위젯 편집 화면 Desk 칸이 `auto`(값)로 보임 |
| before-picked-name.png | 고치기 전, 목록에서 고른 뒤에는 "Work desk"(이름)로 보임 |
| after-default-name.png | 고친 뒤, 새 위젯 Desk 칸이 "Automatic (from app)" |
| update-choice-cleared.png | 고친 버전으로 덮어 설치한 뒤 기존 위젯의 Desk 칸이 비어 다시 골라야 함 |

찍은 기기: iPhone 14, iOS 27.2, expo-widgets 58.0.29, 2026-11-22~23.
| pr-before.png | PR용: before-default-value.png에서 편집 카드만 잘라 냄 |
| pr-after.png | PR용: after-default-name.png에서 같은 영역을 잘라 냄 |
