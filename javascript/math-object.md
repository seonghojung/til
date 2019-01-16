# JavaScript Math Object

### 1. 절대값(Absolute Number)

```javascript
console.log(Math.abs(-10));
console.log(Math.abs(10));
```
결과
```
10
10
```

### 2. 최대값/최솟값

```javascript
console.log(Math.max(2, -1, 4, 5, 0));
console.log(Math.min(2, -1, 4, 5, 0));
```
결과
```
5
-1
```

### 3. 거듭제곱(Exponentiation)
```javascript
console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));
```
결과
```
8
25
```

### 4. 제곱근(Square Root)
```javascript
console.log(Math.sqrt(25));
console.log(Math.sqrt(49));
```
결과
```
5
7 
```

### 5. 반올림(Round)
```javascript
console.log(Math.round(2.3));
console.log(Math.round(2.4));
console.log(Math.round(2.49));
console.log(Math.round(2.5));
console.log(Math.round(2.6));
```
결과
```
2
2
2
3
3
```

### 6. 버림과 올림(Floor and Ceil)
```javascript
console.log(Math.floor(2.4));
console.log(Math.floor(2.49));
console.log(Math.floor(2.8));
console.log('-');
console.log(Math.ceil(2.4));
console.log(Math.ceil(2.49));
console.log(Math.ceil(2.8));
```
결과
```
2
2
2
-
3
3
3
```

### 7. 난수(Random)
Math.random()을 하면 0 이상 1 이하의 값이 랜덤으로 return 된다.

```javascript
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
```
결과
```
0.21458369059793236
0.6622040803059857
0.785172717569619
0.9056556038884926
```

### 참고 링크
JavaScript Math Object 관련 링크
* [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math)
* [W3Schools](https://www.w3schools.com/js/js_math.asp)
