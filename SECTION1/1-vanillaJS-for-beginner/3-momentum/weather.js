const COORDS = 'coords'

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;    // 위도
    const longitude = position.coords.longitude;  // 경도
    const coordsObj = {
        /*
        latitude: latitude,
        longitude: longitude
        */
       // 위와 같이 내용이 같을 때에는 그냥 아래처럼 쓰면 됨
       latitude,
       longitude
    };
    saveCoords(coordsObj)
}

function handleGeoError() {
    console.log("Can't access geo location")
}

function askForCoords() {
    // getCurrentPosition(req1, req2)
    // * req1: 좌표를 가져오는 데에 성공했을 때 처리하는 함수
    // * req2: 
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        // getWeather
    }
}

function init() {
    loadCoords();
}

init();