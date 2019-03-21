# Express로 개발한 웹사이트 AWS EC2에 배포하기
1. EC2 Instance 생성
2. node, git 설치
 - node : [nvm 으로 설치](https://github.com/creationix/nvm)
 - git : [git install](https://git-scm.com/book/ko/v1/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98)
3. project cloning from git
4. npm install(패키지 설치), .env 등 필요 파일 추가
5. soft path 설정(node, npm, forever 등)
```terminal
sudo ln -s ~/.nvm/versions/node/v10.15.3/bin/node /usr/local/bin
sudo ln -s ~/.nvm/versions/node/v10.15.3/bin/npm /usr/local/bin
sudo ln -s ~/.nvm/versions/node/v10.15.3/bin/forever /usr/local/bin
```
6. secure_path 설정
 - sudo visudo 입력 후 "/" 누른 뒤 secure_path 검색
 - secure_path에 :/usr/local/bin 폴더 추가 해줌
7. npm start(빌드 및 배포 완료)
8. Route 53 - DNS 연결 or 새로운 DNS 구매 후 연결
