const
    toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList")

const TODOS_LS = 'toDos'

function paintToDo(text) {
    const li = document.createElement("li")
    const delBtn = document.createElement("button")
    const span = document.createElement("span")

    delBtn.innerHTML = "❌"
    span.innerText = text

    li.appendChild(span)                    // Attach span element to li
    li.appendChild(delBtn)                  // Attach delete button to li
    toDoList.appendChild(li)                // Attach li to to-do-list
}

function handleToDoSubmit(event) {
    event.preventDefault()                  // Prevent default submit behavior when press the enter key
    const currentValue = toDoInput.value    // Get to-do form's value
    paintToDo(currentValue)
    toDoInput.value = ""                    // Reset input form
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS)
    if(toDos === null) {
        toDoForm.classList.remove(SHOWING_CN)
        toDoList.classList.remove(SHOWING_CN)
    }
    else {
        toDoForm.classList.add(SHOWING_CN)
        toDoList.classList.add(SHOWING_CN)
    }
}

function init() {
    loadToDos()
    toDoForm.addEventListener("submit", handleToDoSubmit)
}

init()
