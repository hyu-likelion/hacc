const
    clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector(".js-title")

function getTime() {
    const
        date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds()

    clockTitle.innerHTML = `${hours<10 ? `0${hours}`:hours}
     : ${minutes<10 ? `0${minutes}`:minutes} 
     : ${seconds<10 ? `0${seconds}`:seconds}`
}
function init() {
    getTime()
    setInterval(getTime, 1000)  // 1초마다 getTime()을 수행
}

init()