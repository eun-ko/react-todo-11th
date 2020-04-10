# react-todo-11th

입력받는 폼 todo-input 컴포넌트 구현
입력받은 todolist 출력하는 컴포넌트 구현

TodoList/
할 일에 대한 정보가 들어있는 todos 배열을 map 을 사용하여 여러개의 TodoItem 컴포넌트에 렌더링해주는 컴포넌트

TodoItem/
각 할 일에 대한 정보를 todolist에 렌더링해주는 컴포넌트 
handleRemove를 통해 완료 항목을 제거 가능하게 해줌.


시간과 내용을 받는 폼 두가지를 input태그 두개로 생성하는과정에서 해맸었는데
input의 name속성을 부여해서 구분하게하면 된다는 점이 흥미로웠습니다.
state에 대해 아직 완벽하게 잘 이해하지 못한 것 같습니다. 함수형으로도 다시 만들어봐야할것같습니다.
maxLengthCheck이 왜 작동이 안되는건지도 잘 모르겠습니다ㅜㅜ
그리고 왜 todo-item.js에 onClick={onRemove}하면 적용안되고 함수따로 만들어서해줘야 작동되는지도 잘 모르겠어요


