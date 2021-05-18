// ***************************************************
// Print

console.log('I am Working. Im JS. Im Beautiful.')
// alert('I am Working. Im JS. Im Beautiful.')


// ***************************************************
// DOM

const BASE_COLOR = "rgb(52, 73, 94)"
const OTHER_COLOR = "#ff3a3a"

// const title = document.getElementsByTagName("h1")
// const title = document.getElementById("title")
const title = document.querySelector("#title")
title.innerHTML = "HI!"
title.style.color = BASE_COLOR

document.querySelector("#title")
document.title = 'Change Title'


// ***************************************************
// Event listener

// function handleResize() {
//     console.log("I have been resized")
// }

function handleResize(event) {
    console.log(event)
}
window.addEventListener("resize", handleResize) // Not handleResize()

/*
function handleClick() {
    const currentColor = title.style.color
    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR
    }
    else {
        title.style.color = BASE_COLOR
    }
}
title.addEventListener("click", handleClick)
*/

const CLICKED_CLASS = "clicked"
function handleClick() {
    /*
    const currentClass = title.className
    if(currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS
    }
    else {
        title.className = ""
    }
    */

    /*
    const hasClass = title.classList.contains(CLICKED_CLASS)
    if(!hasClass) {
        title.classList.add(CLICKED_CLASS)
    }
    else {
        title.classList.remove(CLICKED_CLASS)
    }
     */

    title.classList.toggle(CLICKED_CLASS)
}

title.addEventListener("click", handleClick)

// ***************************************************
// == and ===

console.log("10" == 10)     // True
console.log("10" === 10)    // False