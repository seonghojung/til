# React JS S3로 배포하기(정적웹사이트)
1. S3 Bucket 생성
2. npm run build 실행하면 build 디렉터리 내부에 파일들이 생성됨
3. bucket에 업로드(끝..)

## build, deploy 자동화 방법
1. aws cli 설치 [AWS CLI 설치 링크](https://aws.amazon.com/ko/cli/)
2. package.json 아래 script 추가
```javscript
"predeploy": "react-scripts build",
"deploy": "aws s3 cp build s3://<your bucket name> --recursive"
```
3. 이제 ```npm run deploy``` 명령어만으로 빌드, 배포가 가능(S3에 자동으로 빌드 후 업로드 된다.)
