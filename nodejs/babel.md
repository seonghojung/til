# Node.js Babel

### What is Babel?
Babel은 JavaScript Compiler로써 다음 세대의 JavaScript(ES6와 같은) 코드를 기존의 JavaScript 문법으로 변환해주는 패키지다.  
* [Babel Website Link](https://babeljs.io/)  

nodejs에서 사용할 Babel 설치하기 위한 명령(3개 한 번에 설치)
```
npm install @babel/core @babel/node @babel/preset-env
```

### Preset
Babel Preset은 JavaScript 스펙으로 확정되지 않은 Proposal 스펙들을 구분하는 5개의 Stage로 구성되어있다.
babel-preset-stage-0 부터 babel-preset-stage-3 까지 있고, 이들을 모두 한 번에 사용할 수 있는 babel-preset-env가 있다.
babel-preset-env를 사용하기로 함.

### .babelrc 파일 생성
아무런 옵션없이 위 과정만 진행한 뒤 babel을 실행하면 아무런 결과도 얻을 수 없다.  
babel에게 설정 정보를 전달하기 위한 3가지 방법이 있지만 babel 홈페이지에서도 추천하는 .babelrc 파일을 생성하는 방식으로 진행한다.  
.babelrc file 생성 후 아래와 같이 입력(preset-env를 기본 preset으로 사용하겠다라는 뜻)
```
{
  "presets": ["@babel/preset-env"]
}
```
### 파일 실행
이제 js 파일을 실행 시에 아래와 같은 명령을 사용하면 babel이 자동으로 JavaScript 문법을 변환해 실행해준다.
```
babel-node index.js
```
