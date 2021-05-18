function sayHello(name, age) {
    console.log('Hello', name, "you have", age, "years of age.")
    console.log('Hello' + name, "you have", age, "years of age.")
    console.log(`Hello ${name} you are ${age} years old`)
}

sayHello("Nicolas", 15)

const calculator = {
    plus: function(a, b) {
        return a + b
    }
}
const plus = calculator.plus(5, 5)
console.log(plus)