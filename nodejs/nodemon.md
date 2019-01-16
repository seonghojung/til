# Node.js Nodemon

### What is Nodemon?
* [Nodemon Website Link](https://www.npmjs.com/package/nodemon)  

#### Nodemon 웹사이트에서 발췌한 내용
`nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.`  

쉽게 말해서 nodemon은 개발자의 편의를 위해 개발된 것이며, nodejs로 작업시에 파일이 수정되거나 생성되면 재실행해야하는 불편함을 해결해주는 패키지다.  

### nodemon 설치

nodemon을 설치하기 전 알아두어야할 것이 nodemon 패키지는 개발자의 편의를 돕기위한 것이지 유저들을 위한 것이 아니다.  
따라서 development dependency로 설치하는 방법이 권장된다.  
아래 두가지 방법 모두 동일한 기능이니 아무거나 쓰면 됨.
```
npm install --save-dev nodemon
npm install nodemon -D
```

### package.json 파일 확인
package.json 파일을 확인시 아래와 같은 코드가 추가 되었다면 잘 설치된 것이다.
```javascript
"devDependencies": {
    "nodemon": "^1.18.9"
  }
```

### 파일 실행
이제 js 파일을 실행할 때 아래와 같이 실행해보자.
```javascript
nodemon --exec node index.js
```
Awesome!!! 이제 파일을 수정, 작성, 삭제해도 껐다 킬 필요없이 자동으로 재실행 해준다!
