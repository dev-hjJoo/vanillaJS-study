// querySelector(): 원하는 selector 모두 가져옴, 단 첫 번째 것 가져옴! (클래스, 태그, 아이디, ... CSS방식으로.)
// querySelectorAll(): 모든 걸 가지고 와. 클래스명에 따른 element 가져옴.
// getElementByID(): 태그로 element 가져옴. (inpout, body, html, div, section, ...)
const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

// local storage: 작은 정보를 유저 컴퓨터에 저장하는 방법
// CN = Class Name
const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        // 로컬 스토리지에 유저가 "없"을 때
        // 이름 입력을 요청
        askForName();

    } else {
        // 로컬 스토리지에 유저가 "있"을 때
        paintGreeting(currentUser);
    }
}

function handleSubmit(event) {
    // event의 preventDefault 방식
    // event는 root, form에서 일어남. 마치 버블 같은 것!
    // 올라가면서 이벤트를 발생. 즉, form에서 이벤트가 발생하면 이벤트가 계속 올라가 document까지!
    // 이걸 막을거야. 아래 메서드는 enter를 눌러도 페이지가 변화하지 않아!
    event.preventDefault();
    // 도망가는 걸 막았으니 값을 가져오자
    const currentValue = input.value;
    // 이제 선언해둔 적절한 함수가 있지? 
    paintGreeting(currentValue);
    // 여기까지는 아직 기억을 못 해. 리프레쉬 하면 지워지지.
    // 그러면? 저장을 해줘야지!
    saveName(currentValue);
}

function saveName(text) {
    // localStorage는 html에 기반하여 저장되기 때문에 facebook에서 저장된 localStorage는 사용되지 않음.
    localStorage.setItem(USER_LS, text);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    // form은 엔터를 치면 마치 페이지가 새로고침 되는듯 해!
    // 이걸 리스너를 붙여 submit 해 줄거야!
    form.addEventListener("submit", handleSubmit)
}


function init() {
    loadName();
}

init();