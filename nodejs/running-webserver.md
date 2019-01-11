# How to running webserver with node.js

### 간단하게 node.js로 구동되는 웹서버 만들어보기

(1) 아래의 코드로 작성한 js 파일을 만든 후 해당 파일의 경로로 이동  
(2) node file_name.js 실행  
(3) browser에서 localhost:3000로 접속하면 웹서버가 만들어진 걸 확인

```javascript
var http = require("http"); //Use 'http' module

//create a server object:
http.createServer(function(req, res) {
  res.write("Hello World!");
  res.end();
}).listen(3000); //the server object listens on port 3000

```
