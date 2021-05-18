function sayHello(name, sayGoodbye) {
    setTimeout(() => {
        console.log(name + " 님 안녕하세요")
        sayGoodbye()
    }, 2000);
}

// setTimeout(() => { console.log("안녕하세요"), 2000);
// confirm.log("안녕히가세요");

sayHello("Mike", () => console.log("안녕히 가세요"));

function sayHello2(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name + "님 안녕하세요")
            resolve("서울") // return 값
        }, 3000);
    })
}

// sayHello2("Frank").then((seoul) => console.log(seoul + " 안녕히 가세요"))

// async - 함수 앞에 await - 비동기 함수 앞에

async function sayHelloBye(name) {
    location = await sayHello2(name)
    console.log(location + " (으)로 안녕히 가세요")
}

sayHelloBye("Hyunseon");
