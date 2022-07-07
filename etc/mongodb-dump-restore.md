# mongoDB 데이터베이스 전체를 복사하기 [백업 또는 테스트용 DB 생성 시 사용]

### 1. 사용 중인 컴퓨터에 homebrew 설치하기  
- [링크](https://brew.sh/index_ko)로 접속하여 설치 후 마지막에 나오는 줄을 복사해서 한 번 더 실행해야 함 [path 설정]  

### 2. Database Tools 설치하기  
- [링크](https://www.mongodb.com/docs/database-tools/installation/installation-macos/)로 접속하여 순서대로 진행하여 설치  

### 3. mongoDump
```cmd
mongodump --uri="" --db=test
```

### 4. mongoRestore
```cmd
mongorestore --uri="" --nsFrom="test.*" --nsTo="test2.*"
```
