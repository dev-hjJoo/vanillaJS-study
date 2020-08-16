// console은 객체! log는 console의 함수이자 객체!
console.log(console);

// 이 문법 기억나니? 객체 만드는 문법이었쥐
// 오브젝트 안에 배열이나 오브젝트 넣을 수 있던 거 기억나지? 오브젝트 안에는 오브젝트가 들어갈 수 있어!
// 객체(오브젝트) 안에는 함수도 만들 수 있어! 함수도 객체니까!
const calculation = {
    plus: function(a, b) { return a+b; },
    minus: function(a, b) { return a-b; },
    division: function(a, b) { return a/b },
    multiply: function(a, b) { return a*b },
    power: function(a, b) {return a**b }
};

result = calculation.plus(3, 4);
console.log(`3 + 4  = ${result}`);

result2 = calculation.power(3, 3);
console.log(`3 ** 3 = ${result2}`);

// MARK: html과 소통하기
// html에 입력된 내용 바꿔보자
// 그러려면 html에서 태그에 id를 부여하기! html (*1) 부분 참고!
// JavaScript에서 id를 불러오려면 document 객체 참고! (= html 문서 불러옴!)
console.log(document)

// JavaScript에서 html id 가지고 오기!
// DOM 객체 만들기 (title)
const title = document.getElementById("title");
console.log(title);

// 수정도 해 볼까? const가 아니라 let이라고 해도 이런 방법은 안 통해~
// title = "hello World!"

// 그렇다면 변경하려면? Dom function 활용!
// Dom 언급이 됐는데 뭔지 이해가 잘 안 되네 2장 끝나고 별도로 공부!!
// (1) Html 문서 자체를 변경
title.innerHTML = "Hi! from JS.";

// JS에서 Html의 각 항목들의 값을 바꿀 수 있어
contents = document.getElementById("contents");
contents.style.color = "lavender";
// innerHTML과 innerText 차이에 대한 내용을 참고한 페이지는 README.md 파일에 기록 (notion에도 정리!)
contents.innerText = "It's color is changed by lavender!"

// id를 쓰지 않고도 html 문서를 가지고 올 방법은 무궁무진!
// 그 중에서도 nicolas가 많이 쓰는 방법! querySelector
const title2 = document.querySelector("#title");
console.log('It is using querySelector:', title2)