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