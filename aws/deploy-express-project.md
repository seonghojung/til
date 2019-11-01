# Express로 개발한 웹사이트 AWS EC2에 배포하기
1. EC2 Instance 생성
2. node, git 설치
 - node : [nvm 으로 설치](https://github.com/creationix/nvm)
 ```terminal
 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
 ```
 source ~/.bashrc 입력 후 nvm install xx.xx.x(버전) 설치한 뒤  node -v 으로 버전 맞는지 확인
 - git : [git install](https://git-scm.com/book/ko/v1/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98)
 git 설치시 sudo 붙여줘야 함..
 ```terminal
 sudo yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel
 ```
3. project cloning from git
```terminal
https://github.com/seonghojung/{repository name}.git
```
git --version 으로 버전 맞는지 
4. npm install(패키지 설치), .env 등 필요 파일 추가
5. soft path 설정(node, npm, forever 등)
 - 그 전에 forever global로 다시 한 번 설치
```terminal
npm i -g forever
```
```terminal
sudo ln -s ~/.nvm/versions/node/{version of node}/bin/node /usr/local/bin
sudo ln -s ~/.nvm/versions/node/{version of node}/bin/npm /usr/local/bin
sudo ln -s ~/.nvm/versions/node/{version of node}/bin/forever /usr/local/bin
```
6. secure_path 설정
 - sudo visudo 입력 후 "/" 누른 뒤 secure_path 검색
 - secure_path에 :/usr/local/bin 폴더 추가 해줌
7. npm start(빌드 및 배포 완료)
8. Route 53 - DNS 연결 or 새로운 DNS 구매 후 연결

9. node-sass 설치 에러시 아래 명령어 입력
```terminal
sudo rm -rf node_modules && npm rebuild node-sass && npm i
```
