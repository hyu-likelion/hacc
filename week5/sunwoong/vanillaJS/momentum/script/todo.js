const
    toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList")

const TODOS_LS = 'toDos'

let toDos = []

function deleteToDos(event) {
    const btn = event.target
    const li = btn.parentNode

    toDoList.removeChild(li)

    toDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id)
    })
    saveToDos()
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function paintToDo(text) {
    const li = document.createElement("li")
    const delBtn = document.createElement("button")
    const span = document.createElement("span")
    const newId = toDos.length + 1

    delBtn.innerHTML = "X" //"❌"
    span.innerText = text
    delBtn.addEventListener(                // Delete event listener
        "click",
        deleteToDos)

    li.appendChild(span)                    // Attach span element to li
    li.appendChild(delBtn)                  // Attach delete button to li
    toDoList.appendChild(li)                // Attach li to to-do-list
    li.id = String(newId)

    const toDoObj = {
        text : text,
        id : newId
    }
    toDos.push(toDoObj)
    saveToDos()
}

function handleToDoSubmit(event) {
    event.preventDefault()                  // Prevent default submit behavior when press the enter key
    const currentValue = toDoInput.value    // Get to-do form's value
    paintToDo(currentValue)
    toDoInput.value = ""                    // Reset input form
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS)
    if(loadedToDos === null) {
        toDoForm.classList.remove(SHOWING_CN)
        toDoList.classList.remove(SHOWING_CN)
    }
    else {
        toDoForm.classList.add(SHOWING_CN)
        toDoList.classList.add(SHOWING_CN)

        const parsedToDos = JSON.parse(loadedToDos)
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text)
        })
    }
}

function init() {
    loadToDos()
    toDoForm.addEventListener("submit", handleToDoSubmit)
}

init()
