# How to use PostCSS and Parcel

## Parcel
### [참고 링크 : Parcel Website](https://parceljs.org/)
(1) 위 사이트 링크로 접속하면 자세한 방법이 나와있음  
(2) Parcel Plugin 설치 : cmd 창에 아래와 같이 입력
```
npm install -g parcel bundler
```
(3) package.json 파일 생성하기 : cmd창에서 아래와 같이 입력  
```
npm init -y
```
(4) 자동으로 Rebuild하고자 하는 파일명을 포함해 parcel index.html과 같이 입력  
(5) 아래와 같은 결과가 출력되며, 해당 링크로 접속하면 된다.
```
Server running at http://localhost:1234
```
Tip) Package.json 파일 내부에 아래와 같이 객체를 생성한 뒤 npm run start 명령으로 실행하면 코드의 재사용성을 늘릴 수 있다.
```
"scripts": {
    "start": "parcel index.html"
  }
```

## PostCSS
### [참고 링크 : PostCSS Website](https://postcss.org/)
(1) 위 사이트로 접속하면 CSS 호환성 문제를 해결해주는 다양한 플러그인들이 있다.  
(2) 그 중 PostCSS Preset Env 사용법을 소개한다.  
(3) PostCSS Preset Env 설치 : cmd 창에 아래와 같이 입력
```
npm install postcss-preset-env
```
(4) 설치 후 Package.json 확인 시 아래와 같은 객체가 자동으로 생성된다.
```
"dependencies": {
    "postcss-preset-env": "^6.5.0"
  }
```
(5) 사용을 위해서는 추가 설정이 필요하다. Package.json 파일에 아래 코드를 추가한다.  
- stage는 0~3까지 있는데 웹사이트를 참고하여 어느 정도의 범위까지 사용할지 결정
```
"postcss": {
    "plugins": {
      "postcss-preset-env": {
        "stage": 0
      }
    }
  }
  ```
  (6) Parcel 실행 후 localhost:1234로 접속시 자동으로 CSS 파일이 변환되는 것을 볼 수 있다.  
 
 ### Tip) [PostCSS와 관련된 유용한 Plugin Site](https://www.postcss.parts/)
