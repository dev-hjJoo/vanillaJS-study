/*
    weather.js
    위도와 경도를 받아 날씨 정보를 출력하자!
*/

// MARK: 선언부

const API_KEY = "c495ff31d3d0250fb1de595e41f794e7";

const COORDS = 'coords';


// MARK: 구현부

/*
   # "saveCoords"-DEFINITION: 매개변수로 받은 위도경도 값(오브젝트) localStorage에 저장
*/
function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

/*
   # "handleGeoSuccess"-DEFINITION: 좌표 가져오는 데에 성공했을 때 수행하는 함수
                           * 매개변수로 받은 위치값을 위도와 경도로 분리하여 저장
*/
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

/*
   # "handleGeoError"-DEFINITION: 좌표 가져오는 데에 실패했을 때 수행하는 함수
*/
function handleGeoError() {
    console.log("Can't access geo location")
}

/*
   # "askForCoords"-DEFINITION: 저장된 좌표가 없을 경우 네비게이터를 통해 값을 불러옴
*/
function askForCoords() {
    // getCurrentPosition(req1, req2)
    // * req1: 좌표를 가져오는 데에 성공했을 때 처리하는 함수
    // * req2: 좌표를 가져오는 데에 실패했을 때 처리하는 함수
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

/*
   # "loadCoords"-DEFINITION: 좌표가 없으면 좌표를 불러온 후 날씨 불러오고, 있으면 날씨를 불러옴.
*/
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