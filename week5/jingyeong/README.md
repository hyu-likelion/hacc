# 1. Arrow Function
## arrow function?
arrow function은 function 표현에 비해 간단하다.
function 키워드 대신 화살표(=>)를 사용하여 함수를 선언할 수 있기 때문이다.

## (example)
```
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// 다음과 동일함:  => { return expression; }

// 매개변수가 하나뿐인 경우 괄호는 선택사항:
(singleParam) => { statements }
singleParam => { statements }

// 매개변수가 없는 함수는 괄호가 필요:
() => { statements }
```

# 2. Class & Super
## class
class는 객체를 생성하기 위한 템플릿이다.
### (example)
```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

## constructor
constructor 메서드는 class 내에서 객체를 생성하고 초기화하기 위한 메서드이다.

### (exmaple)
```
constructor([arguments]) { ... }
```

## super 
super 키워드는 부모 오브젝트의 함수를 호출할 때 사용한다.

### (example)
```
super([arguments]); // 부모 생성자 호출
super.functionOnParent([arguments]);
```

# 3. Asynchronous
## 동기(Synchronous) 동작 원리
1. 코드가 실행되면 순서대로 Call Stack에 실행할 함수가 쌓인다.
2. 쌓인 반대 순서로 함수가 실행된다.
3. 실행이 된 함수는 Call Stack에서 제거된다.

## 비동기(asynchronous) 동작 원리
1. Call Stack에서 비동기 함수가 호출되면 Call Stack에 먼저 쌓였다가 Web API로 이동한 후 해당 함수가 등록되고 Call Stack에서 사라진다.
2. Web API에서 비동기 함수의 이벤트가 발생하면, 해당 콜백 함수는 Callback Queue에 push 된다.
3. 이제 Call Stack이 비어있는지 이벤트 루프(Event Loop)가 확인을 하는데 만약 비어있으면, Call Stack에 Callback Queue에 있는 콜백 함수를 넘겨 준다.
4. Call Stack에 들어온 함수는 실행이 되고 실행이 끝나면 Call Stack에서 사라진다.

--> 즉, 간단히 말해서 동기는 동시에 일어나는 것이 가능하지만 비동기는 동시에 일어나지 않는다는 것을 의미한다.

# 4. Promise & Async Function
## promise
promise는 비동기 동작을 다루는 하나의 패턴으로 어떤 일의 진행 상태를 나타내는 객체를 의미한다. "상태"와 "값"의 속성을 가지고 있다.
```
new Promise(executor)
```

## async function
async function 선언은 AsyncFunction 객체를 반환하는 하나의 비동기 함수이다.
```
async function [name]([param1[, param2[, ..., paramN]]]) { statements }
```

## async / await
promise는 본래 then/catch를 활용하여 사용할 수 있지만, async/await을 활용하여 더욱 편리한 사용이 가능하다.