# AWS SSL(보안인증서) 연결하기

### 1. EC2 Instance 생성
- 인스턴스 생성 시 Step 6: Configure Security Group에서 Inbound Rule 아래와 같이 세팅
 ```terminal
HTTP 80 0.0.0.0/0, ::/0
SSH 22 0.0.0.0/0, ::/0
HTTPS 443 0.0.0.0/0, ::/0
```

### 2. AWS Certificate Manager 에서 무료 인증서 발급받기
- Provision certificates
- Add domain names에서 [domain.com], [www.domain.com] 추가
- Select validation method 단계는 도메인이 AWS Route53으로 구입했다면 도메인 인증, 아니면 이메일 인증 진행
- 인증 완료 후 발급 완료

### 3. Target Group 지정
- Type : Instance
- Target Group Name 지정
- Protocol : HTTP, Port : 80

### 4. Load Balancer 생성
- Application Load Balancer 생성
- 로드밸런서 Name 지정
- Network mapping에서 ap-northeast-2a, 2b 2개 선택
- Security Groups에서 EC2 생성시 만들었던 그룹 지정 [기본 그룹은 빼도되고 안빼도 됨]
- 리스너에 생성해둔 타겟그룹 지정 [리스너는 HTTP 80, HTTPS 443 두가지로 생성]
- HTTPS 리스너 만들 때 발급받은 무료 인증서 선택
- 로드밸런서 생성 후 Listeners 탭에서 Edit를 하여 HTTP 80일 경우 HTTPS 443으로 리다이렉트 하는걸로 변경

### 5. Route53 도메인에 로드밸런서 연결
- Create Record를 하여 Alias 활성화 후 생성한 로드밸런서 연동
- Record는 www가 없는 경우와 있는 경우 2가지로 만들어서 생성
