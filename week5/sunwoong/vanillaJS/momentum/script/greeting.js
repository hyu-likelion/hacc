const
    form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings")

const
    USER_LS = "currentUser",
    SHOWING_CN = "showing"

function saveName(text) {
    localStorage.setItem(USER_LS, text)
}

function handleSubmit(event) {
    event.preventDefault()              // Prevent default submit behavior when press the enter key
    const currentValue = input.value    // Get input value
    paintGreeting(currentValue)         // Show user's name
    saveName(currentValue)              // Save input value into local storage
}

function askForName() {
    form.classList.add(SHOWING_CN)      // Show text input form
    form.addEventListener(              // Add submit event listener
        "submit",
        handleSubmit)
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN)   // Remove form
    greeting.classList.add(SHOWING_CN)  // Show below text
    greeting.innerHTML = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS)
    if (currentUser === null) {
        askForName()
    }
    else {  // If user is already enrolled.
        paintGreeting(currentUser)
    }
}

function init() {
    loadName()
}


init()