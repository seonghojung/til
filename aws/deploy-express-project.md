# Express로 개발한 웹사이트 AWS EC2에 배포하기
1. EC2 Instance 생성
2. node, git 설치
 - node : [nvm 으로 설치](https://github.com/creationix/nvm)
3. project cloning from git
4. npm install(패키지 설치), .env 등 필요 파일 추가
5. soft path 설정(node, npm, forever 등)
6. npm start(빌드 및 배포 완료)
7. Route 53 - DNS 연결 or 새로운 DNS 구매 후 연결
