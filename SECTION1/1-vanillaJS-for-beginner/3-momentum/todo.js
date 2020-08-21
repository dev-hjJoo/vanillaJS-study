/*
    todos.js
    해야 할 일 작성 및 저장, 처리.
    해야 할 일 로컬 스토리지 저장
*/



// MARK: 선언부

// form 이라는 이름이 greeting에서 만든 변수 이름과 동일 -> 충돌 가능성
// 이런 경우 작은 모듈 생성 유리
// 작은 모듈을 만드는 것을 배우고 싶으면 노마도 아카데미 zero to hero js과정(유튜브 클론) 참고
// const form = document.querySelector(".js-toDoForm")

// 충돌하지 않게 하기 위해 form -> toDoForm으로 변경
const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

// 할 일 저장해두는 배열
let toDos = [];


// MARK: 구현부

/*
    # "deleteToDo"-DEFINITION: x 버튼을 누르면 메모 삭제 (화면에서도, 로컬스토리지에서도!)
*/
function deleteToDo(event){
    // 버튼이 속해있는 부모 노드 찾아가기
    // 모를 땐 console.dir(속성 알아볼 값)
    //console.log(event.target.parentNode) 

    const btn = event.target;
    const li = btn.parentNode;
    
    toDoList.removeChild(li);

    // filter는 모든 아이템을 필터를 통해 통과시키고, 값이 true인 아이템만 별도 저장!
    const cleanToDos = toDos.filter(function(toDo) {
        console.log(toDo.id, parseInt(li.id))
        return toDo.id !== parseInt(li.id);             // parseInt(): int로 변경
    })

    // toDos: 우리가 가지고 있는 배열, cleanToDos는 위에서 만든 값 지운 배열!
    // 해당 사항을 toDos에 저장한 후 saveToDos 실행
    toDos = cleanToDos
    // saveToDos는 toDos를 localStorage에 갱신(저장)하는 거였지!
    saveToDos();
}

/*
    # "saveToDos"-DEFINITION: 위에 선언된 toDos 값을 가져와 로컬에 저장
*/
function saveToDos() {
    // 아래 형태로 저장하면 값이 "Object"로 들어가게 돼. 왜냐하면 localStorage가 자바스크립트의 data를 저장할 수 없기 때문
    // localStorage.setItem(TODOS_LS, toDos);

    // 그래서 텍스트 형태로 저장하자!
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));

}

/*
    # "paintToDO"-DEFINITION: 매개변수로 받은 text값과 delete 버튼을 생성하고 html 코드에 추가 및 로컬에 저장
*/
function paintToDo(text) {
    // MARK: paintToDo 선언부
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newID = toDos.length + 1

    // MARK: paintToDo 구현부
    delBtn.innerText = "❌"
    delBtn.addEventListener("click", deleteToDo);

    span.innerText = text;
    // btn과 span 모두 li에 추가
    li.appendChild(delBtn);
    li.appendChild(span);
    // li에 id 할당: 어떤 li를 지워야 할 지 찾을 때 용이
    li.id = newID;

    // 요소들을 추가한 li를 toDolist에 추가
    toDoList.appendChild(li);

    // localStorage에 저장하기 위해 해당 형태로 저장하는 것!!
    const toDoObj = {
        text: text,
        id: newID
    };

    // push 한 후에 호출해야 해! 아니면 빈 값을 넣게 될거야...
    toDos.push(toDoObj);
    saveToDos();
}

/*
    # "handleSubmit"-DEFINITION: toDo 텍스트 박스에 값이 들어오면 그 값을 텍스트 박스 아래로 쌓아나가는 기능 수행.
*/
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

/*
    # "loadToDos"-DEFINITION: 로컬스토리지에 저장되어있는 경우 불러오기
*/
function loadToDos() {
    // loadedToDos는 로컬스토리지에 저장된 리스트를 가져오기
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        // 가져온 것을 자바스크립트 object로 변환
        const parsedTodos = JSON.parse(loadedToDos);
        // array의 forEach:기본적인 기능은 함수 실행, aray에 담겨있는 것들 각각에 함수를 실행!
        parsedTodos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();