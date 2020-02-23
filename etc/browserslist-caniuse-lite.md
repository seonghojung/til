Browserslist: caniuse-lite is outdated. Please run next command `npm update` 해결 방법

터미널에 npm ls browserslist 입력시 browserslist 모듈이 종속된 패키지들이 보임

예시
```cmd
├─┬ @babel/preset-env@7.5.5
│ ├── browserslist@4.6.6 
│ └─┬ core-js-compat@3.2.1
│   └── browserslist@4.6.6  deduped
└─┬ autoprefixer@9.6.1
  └── browserslist@4.6.6  deduped
```

패키지들 업데이트 하면 사라짐!
업데이트 후 npm ls browserslist 입력 시 예시
```cmd
├─┬ @babel/preset-env@7.8.4
│ ├─┬ @babel/compat-data@7.8.5
│ │ └── browserslist@4.8.7 
│ ├─┬ @babel/helper-compilation-targets@7.8.4
│ │ └── browserslist@4.8.7 
│ ├── browserslist@4.8.7 
│ └─┬ core-js-compat@3.6.4
│   └── browserslist@4.8.7 
└─┬ autoprefixer@9.7.4
  └── browserslist@4.8.7 
  ```
