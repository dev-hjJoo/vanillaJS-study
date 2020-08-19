const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"

// CSS를 수정하지 않고 클릭 이벤트를 받아 글자 색을 바꾸는 방법!

function handleClick() {
    /* 실제 html 코드에 영향을 줄 수 있음: js에서 로직 처리한 부분(클래스 이름) 설정이 가능함 */
    // 4. 그런 후 값과 조건문을 바꿔줘야지!
    // const currentClass = title.className;
    const hasClass = title.classList.contains(CLICKED_CLASS);

    if(!hasClass) {
        // 1. 이 코드처럼 클래스 이름을 변경하는 코드는 "이전 클래스를 무시" 그래서 위험한 시도일 수 있음
        // title.className = CLICKED_CLASS;
        
        // 2. 그럼 어떻게 해야겠어? 추가를 해야지
        title.classList.add(CLICKED_CLASS)
    } else {
        // 3. 이것도 변경 코드잖아? 변경 코드 말고 어떤 방법? 추가한 거 지워주기!
        // title.className = ""
        title.classList.remove(CLICKED_CLASS)
    }
}

function handleClick2() {
    // 위의 함수를 그대로 요약해서 사용하는 방법이 있다? "toggle"
    // 매개변수로 받은 클래스가 있는지 체크해서 있으면 add 아니면 remove 해주는 것!
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init()