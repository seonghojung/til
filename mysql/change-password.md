# MySQL root 비밀번호를 분실했을 때 재설정하는 방법
## Windows
(1) MySQL을 종료한 뒤 관리자 권한으로 cmd를 실행 후 다음과 같이 입력
```cmd
C:\> cd (mysql 실행 파일이 설치되어 있는 경로)
C:\> start mysqld.exe --skip-grant-tables
C:\> mysql
```
(2) Password를 변경
```mysql
UPDATE mysql.user SET password=password('your-password') WHERE user = 'root';
FLUSH PRIVILEGES;
```
(3) MySQL 5.7 version 이상에서는 column 이름이 아래와 같이 바뀌었으니 참고!
```mysql
UPDATE mysql.user SET authentication_string=password('your-password') WHERE user = 'root';
FLUSH PRIVILEGES;
```
(4) mySQL 재실행 후 접속 완료
