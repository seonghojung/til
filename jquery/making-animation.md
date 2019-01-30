# Making Animation with jQuery

## CSS 적용하기
* 아래와 같이 작성하면 div 태그가 left:250px만큼 이동한다.
```css3
$("div").animate({left:'250px'});
```

## 여러 CSS 동시에 적용하기
* 아래와 같이 작성하면 div 태그가 left:250px만큼 이동하면서 opacity: 0.5가 적용된다.
```css3
$("div").animate({left:'250px', opacity:'0.5'});
```
* 순서대로 진행되길 원한다면 아래와같이 작성하면 순차적으로 애니메이션이 적용된다.
```css3
$("div").animate({left:'250px'});
$("div").animate({opacity:'0.5'});
```

## CSS 반복 적용하기
* 아래와 같이 작성하면 실행할 때 마다 계속 left:250px만큼 이동한다.
```css3
$("div").animate({left:'+=250px'});
```

## CSS 적용 속도 조절하기
* 아래와 같이 작성하면 div 태그가 left:250px만큼 1000ms(1초)동안 이동한다.
```css3
$("div").animate({left:'250px'}, 1000);
```

## 이펙트 적용하기
* 아래와 같이 작성하면 div 태그가 left:250px만큼 1초도안 이동하면서 easeOutElastic 효과가 적용된다.
```css3
$("div").animate({left:'250px'}, 1000, 'easeOutElastic');
```
이런 애니메이션 이펙트를 "Easing"이라고 부르는데, 다양한 종류는 아래 링크에서 확인할 수 있다.  
  
[다양한 종류의 Easing 확인하기](https://easings.net/ko#)  
  
"Easing"을 사용하기 위해서는 jQueryUI 코드도 추가해주어야한다.
```javascript
<script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"
  integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30="
  crossorigin="anonymous"
></script>
```
