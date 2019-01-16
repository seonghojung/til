# JavsScript String Methods

## 1. 문자열의 길이
length 속성은 공백을 포함한 문자열의 길이를 담고 있다.
```javascript
var str = "Hello world";
console.log(str.length);
```
```
11
```

## 2. 특정 Index의 문자 받아오기
str.charAt(index)를 하면 문자열 str의 index 인덱스에 있는 문자를 받을 수 있다. 마치 배열과 같이 동작하는 것이 특징
```javascript
var str = "Hello world";
console.log(str.charAt(1));
```
```
e
```

## 3. 문자열 안에서 다른 문자열 검색
str.indexOf(searchValue)를 하면 문자열 str 내에 문자열 searchValue가 포함되어 있는지 확인할 수 있다.
* 포함되어 있다면, 문자열이 시작되는 문자의 인덱스가 리턴
* 포함되어 있지 않다면, -1이 리턴
* 여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴
```javascript
var str = "Hello world";
console.log(str.indexOf('e'));
console.log(str.indexOf('ell'));
console.log(str.indexOf('wor'));
console.log(str.indexOf('o'));
```
```
1
1
6
4
```

## 4. 대소문자 변환
```javasciript
var str = "Hello world";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
```
```
HELLO WORLD
hello world
```

## 5. 문자열 자르기
* 시작 지점과 끝 지점으로 자르기  
str.substring(indexStart, indexEnd)를 하면 인덱스 indexStart부터 인덱스 indexEnd까지의 문자를 잘라서 새로운 문자열이 리턴된다. 만약 indexEnd를 쓰지 않으면 indexStart부터 끝까지 문자열이 잘린다.
```javascript
var str = "Hello world";

console.log(str.substring(2, 5));
console.log(str.substring(2));
```
```
llo
llo world
```

* 시작 지점과 길이로 자르기  
str.substr(start, length)를 하면 인덱스 start부터 길이 length의 문자열이 잘려서 리턴된다.
```javascript
var str = "Hello world";

console.log(str.substr(2, 5));
```
```
llo w
```

## 6. 공백 없애기
str.trim()을 하면 문자열 str의 앞뒤로 있는 공백을 모두 지운 새로운 문자열이 리턴 된다.
```javascript
var str = "  Hello world  ";
console.log(str.trim());
```
```
Hello world
```

### 참고 링크
JavaScript String Methods 관련 링크
* [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/prototype)
* [W3Schools](https://www.w3schools.com/js/js_string_methods.asp)
