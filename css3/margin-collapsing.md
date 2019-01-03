# Margin Collapsing(마진겹침 현상)
Top, Bottom 방향(세로)의 경우 Margin이 겹치게 되면 가장 큰 Margin 값으로 상쇄된다.

## Case 1 - 인접 형제 요소(Siblings)
아래의 경우처럼 인접 형제끼리 Margin이 겹치게 되는 경우  
첫 번째 h1 태그의 margin-bottom과 두 번째 h1 태그의 margin-top이 서로 겹치게되어 상쇄가 일어난다.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1{
        border: 1px solid tomato;
        margin: 100px;
      }
    </style>
  </head>
  <body>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
  </body>
</html>
```
[예시 - Margin Collapsing Case-1 jsfiddle 링크][link]

[link]:https://jsfiddle.net/seonghojung/p8jck6gd/1/

## Case 2 - Parent 및 first-child/last-child 요소
아래의 경우처럼 부모-자식간의 관계에서 Margin이 겹치게 되는 경우  
first-child 블록의 Margin-top을 분리하는 border, padding, inline contents 또는 clear가 없거나  
마찬가지로 last-child 블록의 Margin-bottom에서도 없는 경우 해당 Margin은 상쇄되며, 부모의 바깥이 된다.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #parent{
        /*border: 1px solid tomato;*/
        margin-top: 100px;
      }
      #child{
        background-color: powderblue;
        margin-top: 50px;
      }
    </style>
  </head>
  <body>
    <div id="parent">
      <div id="child">
        Hello world
      </div>
    </div>
  </body>
</html>
```
[예시 - Margin Collapsing Case-2 jsfiddle 링크][link2]

[link2]:https://jsfiddle.net/seonghojung/abu9w725/4/

## Case 3 - 비어있는 Block
아래의 경우에서 empty 클래스를 가지고 있는 div 태그처럼  
비어있는 블록의 경우 border, padding, inline contents, height, min-height가 없는 경우  
top과 bottom의 Margin은 상쇄되며, 더 큰 값으로 대체된다.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #empty{
        margin-top: 50px;
        margin-bottom: 100px;
        /*border: 1px solid tomato;*/
      }
      #normal{
        background-color: powderblue;
        margin-top: 100px;
      }
    </style>
  </head>
  <body>
    <div id="empty"></div>
    <div id="normal">normal</div>
  </body>
</html>
```
[예시 - Margin Collapsing Case-3 jsfiddle 링크][link3]

[link3]:https://jsfiddle.net/seonghojung/6cqzm0s8/
