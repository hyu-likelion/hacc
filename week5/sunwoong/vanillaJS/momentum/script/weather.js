const weather = document.querySelector(".js-weather")

const COORDS = 'coords'


function getWeather(x, y) {
    const APP_KEY = "e8AFfWnF9M5a355DPc9CSmzWHBW5JhXMfqg7vsEVIcqr9ZaS70Ahr%2FETSdFC1o5TUybHaANphNqbJR0aeZj6dA%3D%3D"

    const date = new Date()
    if(date.getMinutes() < 45) {    // Match with api's update time.
        date.setHours(date.getHours()-1)
    }
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const baseDate = `${year}${month<10?`0${month}`:month}${day<10?`0${day}`:day}`
    const baseTime = `${hour<10?`0${hour}`:hour}30`

    const URL = `http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtFcst?serviceKey=${APP_KEY}&numOfRows=60&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${x}&ny=${y}`
    fetch(URL, {
        credentials: 'include', // Credentials 옵션 변경!
    }).then(function(response) {
        return response.json()
    }).then(function(json) {
        const temperature = json.main.temp
        const place = json.name
        weather.innerText = `${temperature} @ ${place}`
    })

}
function saveCoords(coordsObj) {
    // Save location to local storage
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const grid = loc2Grid(latitude, longitude)
    const coordsObj = {
        grid
    }
    saveCoords(coordsObj)
    getWeather(grid)
}

function handleGeoError() {
    console.log("Can not access geo location!")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(   // Get current location
        handleGeoSuccess,
        handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS)
    if (loadedCoords === null) {
        askForCoords()
    }
    else {  // Get weather information
        const parseCoords = JSON.parse(loadedCoords).grid
        getWeather(parseCoords[0], parseCoords[1])
    }
}

function init() {
    loadCoords()
}

init()

function loc2Grid(lat, lon) {
    const RE = 6371.00877
    const GRID = 5.0
    const SLAT1 = 30.0
    const SLAT2 = 60.0
    const OLON = 126.0
    const OLAT = 38.0
    const XO = 43
    const YO = 136

    const DEGRAD = Math.PI / 180.0
    const re = RE / GRID
    const slat1 = SLAT1 * DEGRAD
    const slat2 = SLAT2 * DEGRAD
    const olon = OLON * DEGRAD
    const olat = OLAT * DEGRAD

    let sn = Math.tan(Math.PI*0.25 + slat2*0.5)
        / Math.tan(Math.PI*0.25 + slat1*0.5)
    sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn)
    let sf = Math.tan(Math.PI*0.25 + slat1*0.5)
    sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn
    let ro = Math.tan(Math.PI*0.25 + olat*0.5)
    ro = (re*sf) / Math.pow(ro, sn)

    const rs = []
    let ra = Math.tan(Math.PI*0.25 + lat*DEGRAD*0.5)
    ra = (re*sf) / Math.pow(ra, sn)
    let theta = lon*DEGRAD - olon
    if(theta > Math.PI) theta -= 2.0 * Math.PI
    if(theta < -Math.PI) theta += 2.0 * Math.PI
    theta *= sn
    rs[0] = Math.floor(ra*Math.sin(theta) + XO + 0.5)
    rs[1] = Math.floor(ro - ra*Math.cos(theta) + YO + 0.5)

    return rs
}

// Function : Return region's information.
// type : (0 : name), (1 : x), (2 : y)
function getRegionInfo(i, j) {
    const regionsArr = [
        ['서울', '60', '127'], ['부산', '98', '76' ],
        ['인천', '55', '124'], ['대구', '89', '90' ],
        ['광주', '58', '74' ], ['대전', '67', '100'],
        ['울산', '102', '84'], ['세종', '66', '103'],
        ['경기', '60', '120'], ['강원', '73', '134'],
        ['충북', '69', '107'], ['충남', '68', '100'],
        ['경북', '89', '91' ], ['경남', '91', '77' ],
        ['전북', '63', '89' ], ['전남', '51', '67' ],
        ['제주', '52', '38' ]]

    if(i === 0) {
        return localeJSON.regions[j]
    }
    return regionsArr[j][i]
}

function getWeatherStatus(rain, sky) {
    const skyArr = ['맑음', '구름조금', '구름많음', '흐림']
    const rainArr = ['없음', '비', '비/눈', '눈', '소나기',
        '빗방울', '비/눈', '눈날림']
    if(rain === 0) return skyArr[sky]
    else return rainArr[rain]
}
