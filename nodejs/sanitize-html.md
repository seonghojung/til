# How to use Sanitize-HTML module

## Sanitize-HTML
### [참고 링크 : Sanitize-HTML npm Website](https://www.npmjs.com/package/sanitize-html)
(1) 위 사이트 링크로 접속하면 자세한 방법이 나와있음  
(2) package.json 파일 생성하기 : cmd창에서 아래와 같이 입력  
```
npm init -y
```
(3) Sanitize-HTML Plugin 설치 : cmd 창에 아래와 같이 입력
```
npm install -S sanitize-html
```
(4) 설치 후 Package.json 확인 시 아래와 같은 객체가 자동으로 생성된다.
```
"dependencies": {
    "sanitize-html": "^1.20.0"
  }
```
(5) 플러그인을 사용하려고하는 파일에 모듈 추가 코드를 입력
```
var sanitizeHtml = require("sanitize-html");
```
(6) 필터하고자하는 코드를 아래와 같이 사용하면 된다.
```
var dirtyCode = 'some really tacky HTML';
var cleanCode = sanitizeHtml(dirtyCode);
```
