# Node.js File System Module

### File System Module을 사용하는 방법
require() method를 이용해 사용 
```javascript
var http = require('fs');
```

### Read Files
fs.readFile() method를 이용해 사용  

```javascript
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(3000);
```

참고 링크
* https://www.w3schools.com/nodejs/shownodejs.asp?filename=demo_readfile

### Create Files
