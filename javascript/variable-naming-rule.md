# Variable Naming Rule

### 꼭 지켜야 하는 룰(지키지 않으면 오류)

(1) JavaScript 식별자는 '문자(a-z, A-Z)', '밑줄(_)' 혹은 '달러 기호($)'로 시작해야한다. 두 번째 글자부터는 '숫자(0-9)'도 가능하다.  
(2) '대문자'와 '소문자'는 구별한다.  
(3) '예약어(JavaScript가 찜해놓은 단어)'는 사용하면 안된다. 예를 들면 사전에 정의된 if, for, var 같은 단어들은 불가능하다.

### 지키면 좋은 룰 (더 '좋은' 스타일을 위해서)

(1) 의미 없는 이름은 피하자.
```javascript
var a, b, c, d;
```
(2) 추상적인 이름도 피하자.
```javascript
var name;//너무 추상적인 이름
```
(3) 모든 변수이름은 'camelCase'로 쓰는 것이 좋다.
```javascript
var bad_variable_name; // 비추천 방식
var goodVariableName; // 추천 방식
```

### 참고 링크
JavaScript 코드를 쓸 때 추천하는 방식들을 정리해놓은 링크
* https://www.w3schools.com/js/js_conventions.asp
* https://github.com/tipjs/javascript-style-guide
