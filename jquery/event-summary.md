# jQuery Event Summary(자주 사용하는 이벤트 정리)

## Mouse Event
* mouseover : 마우스 포인터가 영역 위로 올라올 경우 발생
* mouseout : 마우스 포인터가 영역에서 벗어날 경우 발생
* mousedown : 마우스 버튼을 누를 경우 발생
* mouseup : 마우스 버튼을 눌렀다 뗄 경우 발생
* mousemove : 마우스를 움직일 경우 발생
* dbclick : 더블클릭 시 발생
* dragdrop : 마우스를 드래그할 때 발생

## Keyboard Event
* keydown : 키보드의 버튼이 눌리는 순간 발생
* keypress : keydown과 비슷하나 출력이 가능한 키에서만 동작(Enter, ESC 등은 동작하지 않음)
* keyup : 눌렀던 키보드의 버튼을 떼는 순간 발생

## Focus Event
* focus : 포커스가 위치할 경우 발생(예시 : input창을 focus 한다던지 등)  
[Focus Event 예시(W3Schools)](https://www.w3schools.com/jquery/event_focus.asp)
* blur : 포커스를 다른 곳으로 옮길 경우 발생

## Input Event
* change : 선택 값을 바꿀 경우 발생
* input : 사용자가 입력을 하는 경우 발생
* select : 입력 양식의 하나가 선택될 때 발생
* submit : 폼을 전송하는 경우 발생

## Window Event
* move : 윈도우나 프레임을 움직일 때 발생
* resize : 윈도우나 프레임 사이즈를 조절할 때 발생
