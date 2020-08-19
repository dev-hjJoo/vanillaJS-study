// query selector는 element(js-clock)의 자식을 탐색
const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function numberFormating(number) {
    return number > 9 ? number : `0${number}`
}


function getTime() {
    const date = new Date();
    // date.getDay(): 요일을 받아옴 (1: Monday)
    // date.getDate(): 일(년/월/일 할 때 일)을 받아옴
    // 시간은 date.getHours(), 분은 getMinutes(), 초는? getSeconds()
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${numberFormating(hours)}:${numberFormating(minutes)}:${numberFormating(seconds)}`
}

function init() {
    // 시간이 실시간으로 업데이트 하게 하기 위해서 setInterver을 쓸거야!
    /*
        - setInterval(fn, ms)
        첫 번째 인자는 수행할 함수, 뒤에는 업데이트 할 시간 간격(단위: ms)
    */
    getTime();
    setInterval(getTime, 1000);
}

init()