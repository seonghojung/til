# AWS SSL(보안인증서) 연결하기

1. EC2 Instance 생성
- 인스턴스 생성 시 Step 6: Configure Security Group에서 Inbound Rule 아래와 같이 세팅
 ```terminal
HTTP 80 0.0.0.0/0, ::/0
SSH 22 0.0.0.0/0, ::/0
HTTPS 443 0.0.0.0/0, ::/0
```

2. AWS Certificate Manager 에서 무료 인증서 발급받기
- Provision certificates
- Add doomain names에서 [domain.com], [*.domain.com] 추가
- Select validation method 단계는 도메인이 AWS Route53으로 구입했다면 도메인 인증, 아니면 이메일 인증 진행
- 인증 완료 후 발급 완료

3. 로드밸런서 생성
- Classic Load Balancer 생성
- Load Balancer Protocol HTTPS로 지정
- Certificate type : Choose a certificate from ACM(recommended) 선택 후 발급받은 ACM 인증서 선택
- Configure Health Check 에서 Ping Protocol을 TCP로 설정
- Add EC2 Instances에서 연결할 인스턴스 선택
- Listeners 세팅값
```terminal
TCP 22 TCP 22
HTTPS 443 HTTP 80
HTTP 80 HTTP 80
```
