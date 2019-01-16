# JavsScript Array Methods

## 1. 배열 길이
length 속성은 배열의 길이를 담고 있다.
```javascript
var brands = ["Apple", "Coca-Cola", "Starbucks"];
console.log(brands.length);
```
```
3
```

## 2. 배열에서 특정 값 찾기
array.indexOf(item)을 하면 array 배열에 item이 포함되어 있는지 확인할 수 있다.
* 포함되어 있다면, item이 있는 인덱스가 리턴
* 포함되어 있지 않다면, -1이 리턴
* 여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴
```javascript
var brands = ["Apple", "Coca-Cola", "Starbucks"];
console.log(brands.indexOf("Starbucks"));
console.log(brands.indexOf("Kakao"));
```
```
2
-1
```

## 3. 배열에 값 추가
array.push(item1)을 하면 item1이 배열의 끝에 추가된다.  
array.push(item1, item2, item3)를 하면 item1, item2, item3가 array 배열의 끝에 순서대로 추가된다.
```javascript
var brands = ["Apple", "Coca-Cola", "Starbucks"];
brands.push("Kakao");
console.log(brands);
brands.push("Samsung", "LG", "Facebook");
console.log(brands);
```
```
["Apple", "Coca-Cola", "Starbucks", "Kakao"]
["Apple", "Coca-Cola", "Starbucks", "Kakao", "Samsung", "LG", "Facebook"]
```

## 4. 배열에서 값 빼기
array.pop()을 하면 array의 마지막 요소가 배열에서 빠지고, 그 마지막 요소가 리턴 된다.
```javascript
var brands = ["Apple", "Coca-Cola", "Starbucks"];
var lastBrand = brands.pop();
console.log(lastBrand);
console.log(brands);
```
```
Starbucks
["Apple", "Coca-Cola"]
```

## 5. 배열을 문자열로 바꾸기
```javascript
var brands = ["Apple", "Coca-Cola", "Starbucks"];
console.log(brands.join());
```
```
Apple,Coca-Cola,Starbucks
```
* 값들 사이에 들어가는 쉼표를 바꾸고 싶다면, 파라미터로 대체할 문자열을 넣어주면 된다.
```javascript
var brands = ["Apple", "Coca-Cola", "Starbucks"];
console.log(brands.join(" and "));
```
```
Apple and Coca-Cola and Starbucks
```

### 참고 링크
JavaScript Array Methods 관련 링크
* [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [W3Schools](https://www.w3schools.com/js/js_array_methods.asp)
