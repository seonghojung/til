# 명시도(Specificity)
같은 요소를 가리키지만 선택자가 다르다면, 명시도에 따라 우선 순위가 결정된다.

## 명시도 계산 방법
1. 인라인 스타일이 가장 우선순위가 높다.  
2. 선택자에 id가 많을수록 우선순위가 높다.  
3. 선택자에 class, attribute, pseudo-class가 많을수록 우선순위가 높다.  
4. 그 다음은 그냥 element(또는 가상요소)가 많은 순서다.  

## 예시
다음의 경우 pseudo-class가 1개, element가 ul, li, a로 3개이며 명시도 계산 방법에 따라 0 0 1 3 으로 명시도 점수는 13점이다.
```css
ul li:first-child a{}
```
하지만 아래의 경우 id가 1개, pseudo-class가 1개, element가 2개로 명시도 계산 방법에따라 0 1 1 2 로 명시도 점수는 112점이다.
```css
ul li:first-child #link{}
```
따라서 2개의 선택자가 겹친다면 두 번째 선택자의 스타일이 우선순위로 적용된다.
