# How to synchronize settings of Atom editors

- [x] github 사이트에서 Personal access tokens에 들어가 gist로 토큰을 발급 받는다.
- [x] access token 복사(주의 : token은 최초로 한 번 복사 후 다시 볼 수 없다.)
- [x] atom setting 저장용 gist를 만든다.(gist 생성한 url 중 본인 아이디 뒤에 있는 부분이 gist id가 된다.)
- [x] atom editor에서 sync-setting 패키지를 다운 받은 뒤 Setting에서 token과 gist id 입력
- [x] atom editor 재시작 후 창이 하나 뜨는데 backup을 누른다.
- [x] 동기화하려는 다른 기기에서 마찬가지로 sync-setting 패키지 설정 값 모두 입력
- [x] atom editor에서 `Ctrl + Shift + p`를 누른 뒤 sync라고 입력하면 관련 명령어들이 나오는데 그 중 Restore를 해주면 동기화 완료.
