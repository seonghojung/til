# Find Same Name

## 리스트를 활용한 동명이인을 찾는 알고리즘
```python
def find_same_name(a):
  n = len(a)
  result = []

  for i in range(0, n - 1):
    for j in range(i + 1, n):
      if a[i] == a[j]:
        result.append(a[i])
                
  return result
```
리스트 내부에 있는 자료를 서로 빠짐없이 비교하되 중복을 피하기 위해서 반복문을 2개 중첩하여 사용

반복문이 중첩되어 있어 계산복잡도를 계산해보면 O(n^2)이 나온다.
