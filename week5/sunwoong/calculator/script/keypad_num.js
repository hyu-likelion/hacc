const
    keypad = document.querySelector(".js-keypad"),
    key0 = keypad.querySelector("#js-0"),
    key1 = keypad.querySelector("#js-1"),
    key2 = keypad.querySelector("#js-2"),
    key3 = keypad.querySelector("#js-3"),
    key4 = keypad.querySelector("#js-4"),
    key5 = keypad.querySelector("#js-5"),
    key6 = keypad.querySelector("#js-6"),
    key7 = keypad.querySelector("#js-7"),
    key8 = keypad.querySelector("#js-8"),
    key9 = keypad.querySelector("#js-9")

let text = ""

function updateResult() {
    const result = keypad.querySelector("#js-result")
    result.innerHTML = text==="" ? "0" : text
}
function handleClick0() {
    if(text === "0") {
        text = ""
    }
    else {
        text += "0"
    }
    updateResult()
}
function handleClick1() {
    text += "1"
    updateResult()
}
function handleClick2() {
    text += "2"
    updateResult()
}
function handleClick3() {
    text += "3"
    updateResult()
}
function handleClick4() {
    text += "4"
    updateResult()
}function handleClick5() {
    text += "5"
    updateResult()
}
function handleClick6() {
    text += "6"
    updateResult()
}
function handleClick7() {
    text += "7"
    updateResult()
}
function handleClick8() {
    text += "8"
    updateResult()
}
function handleClick9() {
    text += "9"
    updateResult()
}

function init() {
    key0.addEventListener("click", handleClick0)
    key1.addEventListener("click", handleClick1)
    key2.addEventListener("click", handleClick2)
    key3.addEventListener("click", handleClick3)
    key4.addEventListener("click", handleClick4)
    key5.addEventListener("click", handleClick5)
    key6.addEventListener("click", handleClick6)
    key7.addEventListener("click", handleClick7)
    key8.addEventListener("click", handleClick8)
    key9.addEventListener("click", handleClick9)
}

init()