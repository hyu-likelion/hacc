# JavaScript
## What is Javascript
웹(web)에서 사용하는 프로그래밍 언어로, 
프론트 엔드에서 사용되는 거의 유일한 단 하나의 언어이다.

단점과 한계가 존재한다.  
그러나 웹은 계속 빠르게 발전하기 때문에 자바스크립트 또한 빠르게 발전하고 있다.  
자바스크립트는 더 강력해지고 있고, 할 수 있는 일이 점점 늘어나고 있다.

모든 컴퓨터에서 사용할 수 있으며, 활용할 수 있는 폭이 넓다.  
자바스크립트를 이용하면 웹사이트, native application, video game 등을 만들 수 있다.

많은 사람들이 사용하는 언어이기 때문에 다양한 라이브러리가 존재한다.  
이를 통해 다양한 기능을 편하게 구현할 수 있다.  
예를 들어, socket.io는 실시간으로 정보를 주고 받을 수 있게 하는 라이브러리이다.

## ECMAScript
ECMAScript는 표준화 된 script programming language로, 자바스크립트를 표준화하기 위해 만들어졌다.

시간이 흐름에 따라 계속 업데이트 되었고, 다양한 버전이 존재한다.  
ES5는 ECMAScript 5을 의미하며, ES6는 ECMAScript 6을 의미한다.

=> 정리 : ECMAScript == JavaScript의 버전

## Valina Javascript
자바스트립트의 한 종류로, 어떠한 라이브러리나 프레임워크도 없다.  
그렇기에 다음과 같은 특성을 가진다.
- 바닐라 JS 자체의 용량은 0 byte 이다. 
- 압축을 하면, 오히려 압축 코드가 들어가기 때문에 용량이 늘어난다.
- 다른 라이브러리나 프레임워크를 사용한 것 보다 빠르고 호환성이 좋다.
- 숙련된 프로그래머일 수록 다양한 기능을 구현할 수 있다.




----
# Javascript 기초
## 변수 선언
변수명은 camelCase 방식을 사용한다.  

다음과 같은 방식으로 변수를 선언할 수 있다.
- `const`
    - 선언 시 초기화를 해줘야 한다.
    - 초기화 후 값을 변경할 수 없다.(재할당이 불가능하다.)
    - 중복 선언(선언 후 재선언)이 불가능하다.
- `let`
    - 변수에 재할당이 가능하다.
    - 중복 선언이 불가능하다.
- `var`

### let vs. var
ES 6 이후 `let`과 `const`가 추가되기 전에는 `var`만 사용하였다.

`var`와 `let`은 거의 동일하다. 그러나 `var`는 중복 선언이 가능하다.   
중복 선언 된 경우 마지막에 할당된 값이 변수에 저장된다.   
프로젝트가 커질 경우 기존에 선언해둔 변수의 존재를 까먹고 값을 재할당하게 되는 등의 문제가 발생할 수 있다.

따라서 요즘은 `var`는 거의 사용하지 않는다. 
    
## Data type
- 기본 자료형
    - String : 문자열, "괄호"로 내용을 감싼다.
    - Boolean : True or False
    - Number
        - Int : integer
        - Float : floating point number
    - Null
    - Undefined
    - Symbol : ES 6 에 추가되었다.
- Date
- Array : 모든 요소의 data type이 같지 않아도 된다.
- Object : `{}`로 감싸서 label과 data을 지정한다.

### Object
- `{}`로 감싸서 label과 data을 지정한다.
- label과 data는 :(콜론)로 구분되고, 각 쌍(pair)는 ,(쉼표)로 구분된다.
- object는 property도 가질 수 있고, method도 가질 수 있다.
    - 아래 예시에서 name, age, coding과 같은 것을 property라 한다.
    - 아래 예시에서 plus와 같은 것을 method라고 한다.
- 예 : 
    ```
    let temp = {
        name : "kim",
        age : 20,
        coding: ["Java", "C", "JavaScript"]
        plus: function(a, b) {
            return a + b
        }
    }
    ```
  
## 출력하기
`console.log()`을 이용해서 출력할 수 있다.  

괄호 안에는 ,(쉼표)로 구분되어 출력될 수 있다.  
쉼표로 구분된 요소들 사이에는 띄어쓰기가 출력된다.

### Template Literal
\`(backtick, ~ 키) 안에 `${변수명}` 을 이용해서 출력할 수 있다.  
내부에서 변수 사용, 띄어쓰기, 줄바꿈을 모두 처리할 수 있기 때문에 편리하다.

```console.log(`Hello ${name} you are ${age} years old`)```와 같이 사용하면 된다.


## DOM
Document Object Module
DOM은 웹 페이지에 대한 인터페이스이다.  
기본적으로 여러 프로그램들이 페이지의 콘텐츠 및 구조, 그리고 스타일을 읽고 조작할 수 있도록 API를 제공한다.

## == vs ===
- == : equal operator
    - 양쪽의 값이 같은지를 비교
    - 단순히 값만 비교
    - 마찬가지로 다름을 비교하기 위해서는 != 을 사용한다.
- === : strict equal operator
    - 값과 data type이 같은지를 비교
    - 단순히 값만 비교할 뿐 아니라 data type까지 같아야지 true를 나타낸다.
    - 마찬가지로 다름을 비교하기 위해서는 !== 을 사용한다.
- 참고
    - `null == undefined` : true  
    - `null === undefined` : false


-----
# Function
## Arrow Function
`=>`, `()`, `{}`을 이용해서 function을 정의할 수 있다.  
`()`와 `{}`는 필요에 의해 생략될 수 있다.  

아래는 기본적으로 사용되던 함수의 모습이다.
```
function func (parm) {
    ...
}
```

### Arrow Function
이는 다음과와 같이 arrow function을 이용하여 간단하게 나타낼 수 있다.
```
fucn => (parm) {
    ...
}
```

### 더 간단한 모습
만약 function의 body가 한줄짜리 코드라면 다음과 같이 줄일 수 있다.  
이 때 `...` 안의 내용은 아래와 같이 될 수 있다.
```
func => (parm) ...
```

### Parameter가 없는 경우
함수의 parameter가 없는 경우 `()`을 생략할 수 있다.
```
    func => ...
```

---
## Asynchronous
### 비동기 처리
- 모든게 절차적으로 실행되지 않는다.
  - 즉, sleep, I/O 등이 발생할 경우 나머지 코드가 먼저 실행된다.
- 인터넷 속도가 느려도 interaction(with user)은 되는 것을 위함이다.
- 비동기 처리를 위해 callback 함수를 이용한다.
    - 예
    ```
    function sayHello(name, sayGoodbye) {
        setTimeout(()=>{
            console.log("Hi", name)
            sayGoodbye()
        }, 2000);
    }
    sayHello("Mike", function() {
        console.log("Goodbye")
    })
    ```

### 비동기 처리 시 문제 : Callback Hell
비동기 처리를 위해 콜백 함수를 연속해서 사용할 때 발생하는 문제이다.  

위의 callback 예제에서 아래처럼 계속 사용하는 경우와 같다.
```
sayHello("Mike", function () {
    sayHello("Jun", function () {
        sayHello("Jake", function () {
            sayHello("Chris", function () {
                console.log("Goodbye everyone!")
})})})})
```

이는 가독성도 떨어지고 코드나 구조를 변경하기 어렵다는 문제점이 있다.  
이를 해결하기 위해 Promise, Async 를 이용한다.

### Promise
1. Callback 함수 안에 `new Promise((resolve, reject) => {})`을 return 한다.  
2. 이후 함수 호출 시
    - `.then(()=>{})`을 통해 해결/성공 되었을 때를 수행한다.
    - `.catch(()=>{})`을 통해 거절/실패 되었을 때를 수행한다.

- 예시
    ```
    function sayHello2(name) {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                console.log("Hi", name)
                resolve("Seoul")
            }, 2000)
        }))
    }
    sayHello2("Mike").then((loc)=>{
        console.log("Go to", loc)
        console.log("Bye bye")
    })
    ```
  
### Async
1. 함수 선언 시 함수 앞에 `async`을 붙인다.
2. 함수 안의 작업 앞에 `await`을 붙인다.

- 예시
  ```
  async function sayHelloBye(name) {
      let loc = await sayHello2(name)
      console.log("Go to", loc)
      console.log("Goodbye")
  }
  
  sayHelloBye("Mike")
  ```
