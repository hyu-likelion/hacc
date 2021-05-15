# Javascript 기초
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
이 때 `...` 안의 내용은 
```
func => (parm) ...
```

### Parameter가 없는 경우
함수의 parameter가 없는 경우 `()`을 생략할 수 있다.
```
    func => ...
```

## Class
