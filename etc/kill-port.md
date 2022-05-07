이미 사용중인 포트 찾아서 끄기 [mac]

1. 사용중인 포트 찾아내기
```cmd
sudo lsof -i tcp:[PORT]
```

2. PID 값으로 해당 포트 끄기
```cmd
sudo kill -9 <PID>
```
