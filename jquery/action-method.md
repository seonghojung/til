# 자주 쓰이는 jQuery의 동작 Method 정리

## Class 관련
```javascript
// item이라는 id를 가진 요소에 header 클래스 추가
$('#item').addClass('header');
// item이라는 id를 가진 요소에 header 클래스 제거
$('#item).removeClass('header');
// item이라는 id를 가진 요소에 header라는 클래스가 있으면 제거, 없으면 추가
$('#item').toggleClass('header');
// item이라는 id를 가진 요소에 header라는 클래스가 있으면 true, 없으면 false 리턴
$('#item').hasClass('header');
```

## Attribution 관련
```javascript
// 이미지 태그의 src 속성 받아오기
$('img').attr('src');
// 이미지 태그의 src 속성 지정하기
$('img').attr('src', 'images/logo.png');
// h1 태그의 텍스트 받아오기
$('h1').text();
// h1 태그에 텍스트 지정하기
$('h1').text('Hello World!");
// h1 태그에 HTML 텍스트 지정하기
$('h1').text('<p>Hello World!</p>');
```

## Style 관련
```javascript
// item이라는 id를 가진 요소의 font-weight를 bold로 지정하기
$('#item').css('font-weight', 'bold');
// item이라는 id를 가진 요소의 background-color 가져오기
$('#item').css('backgournd-color');
```
