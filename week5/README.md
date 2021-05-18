## 비동기 처리

특정 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행

```
console.log('Hello'); // 가장 먼저 실행

setTimeout(function() {
	console.log('Bye'); // 3초 후 마지막으로 실행
}, 3000);

console.log('Hello Again'); // 두 번째 실행
```



## 콜백함수

특정 로직이 끝났을 때 원하는 동작 실행 가능

콜백 지옥 해결 = promise, async



## promise

new Promise() 호출 : 대기

resolve(): 완료 -> then()으로 처리 결과

reject(): 실패 -> catch()로 실패 처리 결과



## async await

콜백, promise 단점 보완

함수 앞 async, 비동기 코드 앞 await(비동기 처리 메소드가 promise 객체를 반환해야 함)

콜백이나 .then() 사용 필요x. 코드가 더 짧아짐.