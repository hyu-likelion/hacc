class Animal {
    constructor(leg) {
        this.leg = leg;
    }
    printAnimal() {
        console.log(this.name + "은 " + String(this.leg) + "개의 다리를 가진다.");
    }
}


class Lion extends Animal {
    constructor(name, leg) {
        super(leg) // 부모 constructor의 input
        this.name = name;
    }
    getName() {
        console.log("내 이름은 " + this.name);
    }
}

myLion = new Lion("이현선", 2);
myLion.getName();
myLion.printAnimal();