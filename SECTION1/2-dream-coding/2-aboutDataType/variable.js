// 1. Use strict
// added in ES 5
// use this for Vanilla JavaScript
"use strict";

// 2. Variable
// 변수 만드는 keyword "let" (added in ES6)

let name = 'hyoz';
console.log(name);

// 3. block scope
// block 내부 에서 생성된 변수는 블럭 밖에서 사용 불가능
// 위의 name 변수처럼 범위 밖에 정의하면 어디서든 사용 가능 (global 변수라고 함)
{
 name = 'hello';
 console.log(name);
}

// 이전에는 변수 선언에 var 사용. 이제는 쓰지마!
// var hoisting (어디에 선언했냐에 상관없이 항상 제일 위로 끌어올려준다! 즉, 아래에서 선언해도 사용 가능..)
// var은 block scope이 통하지 않음..

// 4. Constants
// 할당하면 값이 바뀌지 않는 것, 상수! immutable data type~!
const daysInWeek = 7;
const maxNumber = 5;


// 5. Variable types
// 1-primitive type, single item: number, string, boolean, null, undefined, symbol
// 자세한 설명은 notion! 참고!
// 2-object, box container
// 3-function
  // first-class function 이 지원된다: 함수도 하나의 데이터 타입처럼 선언/ 인자 전달/ 할당/ 반환 등이 가능
// 4-그 외: NaN(Not a number), infinity, negative-infinity