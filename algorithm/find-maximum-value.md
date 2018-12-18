# Find Maximum Value

파이썬의 리스트를 활용해 최댓값을 찾는 알고리즘
```python
def find_max(a):
  n = len(a)
  max_v = a[0]
  
  for i in range(1, n):
    if a[i] > max_v:
      max_v = a[i]
      
  return max_v
```
반복문 내부에 크기를 비교하는 조건문이 있기 때문에 n개 중에서 최댓값을 찾으려면 비교를 (n-1)번 해야한다.

따라서 계산복잡도는 O(n)이다. 여기서 n-1이 아니라 n으로 표기하는 이유는 n의 숫자가 무한대에 가까워질수록 차이가 무의미하기 때문!
