/*
    weather.js
    위도와 경도를 받아 날씨 정보를 출력하자!
*/

// MARK: 선언부

const API_KEY = "c495ff31d3d0250fb1de595e41f794e7";
const COORDS = 'coords';
const weather = document.querySelector(".js-weather");


// MARK: 구현부

/* JavaScript가 강력한 이유!
 : 웹사이트로 Request를 보내고 응답을 통해서 데이터를 얻을 수 있음
 : 가져온 데이터를 Refresh 없이도 웹 사이트에 적용할 수 있음
 : 이메일을 가져올 때 새로고침 하지 않아도 되는 이유! JavaScript기 보이지 않는 곳에서 계속 데이터를 가져옴!
*/
/*
    # "getWeather"-DEFINITON: 매개변수로 받은 위도와 경도를 이용하여 API를 통해 날씨 값을 불러옴
*/
function getWeather(lat, lng) {
    // 가져온 API CALL에 https:// 붙여주기
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        // json 데이터 불러오기,, 대기 상태(가져온 데이터를 처리 중)를 기다리게 하자
        return response.json()
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`
    });
}

/*
   # "saveCoords"-DEFINITION: 매개변수로 받은 위도경도 값(오브젝트) localStorage에 저장
*/
function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

/*
   # "handleGeoSuccess"-DEFINITION: 좌표 가져오는 데에 성공했을 때 수행하는 함수
                           * 매개변수로 받은 위치값을 위도와 경도로 분리하여 저장, 위도와 경도 값을 API를 이용하여 날씨 정보 호출
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
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
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
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();