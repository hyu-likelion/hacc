function calculate() {
    let target = text.replace("x", "*")
    target = target.replace("÷", "/")

    const result = eval(target)
    text = String(result)
    updateResult()
}