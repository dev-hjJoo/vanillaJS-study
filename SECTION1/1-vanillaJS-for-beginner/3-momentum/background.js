/*
    background.js : 랜덤으로 이미지 불러와 화면에 추가
*/

// MARK: 선언부
const body = document.querySelector("body");

const IMG_NUMBER = 6 // 이미지 개수


// MARK: 구현부

/*
 # "genRandom"-DEFINITION: 랜덤값 생성하여 반환 (랜덤값 범위: 1~IMG_NUMBER)
*/
function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
    return number;
}

/*
 # "paintImage"-DEFINITION: 이미지 객체 생성, 경로 지정하여 이미지 불러오기. 클래스 추가 및 body에 이미지 반영.
*/
function paintImage(imgNumber) {
    const image = new Image();
    image.src = `./images/${imgNumber}.jpg`
    image.classList.add('bgImage');
    body.appendChild(image);
}

function init() {
    // setInterval(loadBackground, 300000)
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();