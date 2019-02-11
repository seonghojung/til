# MongoDB란?
MongoDB는 데이터 객체들이 컬렉션 내부에서 독립된 문서로 저장되는, 문서 모델을 기반으로 하는 NoSQL 데이터베이스다.

# MongoDB 개요
MongoDB는 Cross Platform Document지향 DB System이다. NoSQL 같은 동적 Schema형 문서를 선호함에 따라 전통적인 테이블 기반의 Relational DB 구조를 사용하지 않는다. 이로써 특정한 종류의 Application의 데이터 통합을 더 쉽고 빠르게 가능케 한다. AGPL과 APACHE LICENSE를 결합하여 공개된 MongoDB는 Free-Open source SoftWare이다.

# MongoDB 설치하기
아래 공식 홈페이지에서 다운받아 설치한다.  
[MongoDB 공식 홈페이지](https://www.mongodb.com/)

# 환경변수 path 설정해주기
MongoDB가 설치된 경로를 환경변수에 path로 등록해준다.

# dbpath 설정하기
cmd창으로 mongodb의 dbpath를 설정해주어야한다. 원하는 경로에 data/db 디렉토리를 만들고, 아래와 같은 명령을 입력
```cmd
mongod --dbpath <directory path>
```

# 설치 및 설정 확인
브라우저에 http://localhost:27017라고치면 MongoDB의 로컬호스트로 연결된다.
