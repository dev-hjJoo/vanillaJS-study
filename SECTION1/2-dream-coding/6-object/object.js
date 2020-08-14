'use strict';

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instaces of Object
// object = {key: value} 키(프로퍼티)와 값의 집합체

// 이름과 나이를 출력하려면 ...
const name = 'hyoz';
const age = 4;
print(name, age);
/*
function print(name, age) {
    console.log(name);
    console.log(age);
}
*/
// 다소 복잡, 인자가 많아지면 더더욱 정리하기가 어려워짐!


// 이를 개선하고자 Object 사용
// 다음과 같이 수정 가능
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const hyoz = { name: 'hyoz', age: 23 };
print(hyoz)

// object를 만드는 방법은 이렇게 (1) 중괄호로 만드는 방법이 있고,
// = object literal
const obj1 = {};
// (2) 클래스를 이용해서 만드는 방법이 있습니다.
// = object constructor
const obj2 = new Object();


// JavaScript는 동적으로 타입이 런타임 때 결정되는 언어
// 아래 코드와 같이 뒤늦게 속성을 추가할 수 있음
// 이런 코드는 동적으로 코드를 작성하기 쉽지만 유지보수가 어렵고 생각지 못한 에러 발생 가능!
hyoz.hasJob = true
console.log(hyoz.hasJob)

// 뒤늦은 속성 삭제 마저 가능..!!!!
delete hyoz.hasJob;
console.log(hyoz.hasJob)  // = undefined