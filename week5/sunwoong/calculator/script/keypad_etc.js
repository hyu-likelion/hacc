const
    keyDiv = keypad.querySelector("#js-division"),
    keyMult = keypad.querySelector("#js-mult"),
    keyMinus = keypad.querySelector("#js-minus"),
    keyPlus = keypad.querySelector("#js-plus"),
    keyEnter = keypad.querySelector("#js-enter"),
    keyFP = keypad.querySelector("#js-fp"),
    keyAC = keypad.querySelector("#js-AC")

function handleClickAC() {
    text = ""
    updateResult()
}

function handleClickDiv() {
    if(isNaN(text.charAt(text.length-1))) {
        alert("기호 뒤에 바로 기호가 올 수 없습니다.")
        return
    }
    text += "÷"
    updateResult()
}
function handleClickMult() {
    if(isNaN(text.charAt(text.length-1))) {
        alert("기호 뒤에 바로 기호가 올 수 없습니다.")
        return
    }
    text += "x"
    updateResult()
}
function handleClickMinus() {
    if(isNaN(text.charAt(text.length-1))) {
        alert("기호 뒤에 바로 기호가 올 수 없습니다.")
        return
    }
    text += "-"
    updateResult()
}
function handleClickPlus() {
    if(isNaN(text.charAt(text.length-1))) {
        alert("기호 뒤에 바로 기호가 올 수 없습니다.")
        return
    }
    text += "+"
    updateResult()
}

function handleClickFP() {
    text += "."
    updateResult()
}

function handleClickEnter() {
    if(isNaN(text.charAt(text.length-1))) {
        alert("기호가 마지막인 것을 계산할 수 없습니다.")
        return
    }
    calculate()
}

function init() {
    keyDiv.addEventListener("click", handleClickDiv)
    keyMult.addEventListener("click", handleClickMult)
    keyMinus.addEventListener("click", handleClickMinus)
    keyPlus.addEventListener("click", handleClickPlus)
    keyEnter.addEventListener("click", handleClickEnter)
    keyFP.addEventListener("click", handleClickFP)
    keyAC.addEventListener("click", handleClickAC)
}

init()