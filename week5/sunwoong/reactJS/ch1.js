// Arrow function -----------------------------
// Original
// plusTwo = (s) => {
//     return s + 2
// }

// Simple
// plusTwo = (s) => s + 2

// More simple
plusTwo = s => s + 2


// Map ----------------------------------------
arr = [1, 2, 3, 4, 5, 6, 199, 1394, 32412]

// Original
// arr_map = arr.map(function(v) {return v*2})

// Simple
// arr_map = arr.map(v => {return v*2})

// More simple
arr_map = arr.map(v => v*2)
console.log(arr_map)

// Filter -------------------------------------
arr_filter = arr.filter(v => v>10)
console.log(arr_filter)


// Class --------------------------------------
// Class
class Animal {
    constructor(leg) {
        this.leg = leg
    }
    printAnimal() {
        console.log(this.name + "은 " + String(this.leg) + "개의 다리를 가진다.")
    }
}

class Lion extends Animal {
    constructor(name, leg) {    // 생성자 : class의 변수를 설정할 수 있음.
        super(leg);             // 반드시 필요! 부모 클래스의 기능을 사용하기 위해서는 꼭 있어야 함.
        this.name = name
    }

    getName() {
        console.log("내 이름은 " + this.name)
    }
}

myLion = new Lion("King", 4)
myLion.getName()
myLion.printAnimal()


// Synchronous
function sayHello(name, sayGoodbye) {
    setTimeout(()=>{
        console.log("Hi", name)
        sayGoodbye()
    }, 1000);
}
/*
sayHello("Mike", function () {
    sayHello("Jun", function () {
        sayHello("Jake", function () {
            sayHello("Chris", function () {
                console.log("Goodbye everyone!")
            })
        })
    })
})
*/

// Promise
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

// Async
async function sayHelloBye(name) {
    let loc = await sayHello2(name)
    console.log("Go to", loc)
    console.log("Goodbye")
}

sayHelloBye("Mike")
