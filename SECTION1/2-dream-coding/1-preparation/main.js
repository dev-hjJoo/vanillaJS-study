// vanilla-js 쓸 때에는 위에 써 주면 좋음! (typescript는 필요 없음)
// why? JavaScript is very flexible (단기간에 만들었기 때문)
// flexible === dangerous (많은 실수 야기)
// javascript는 선언되지 않은 변수에 값을 할당한다던지 기존에 존재하는 프로토타입을 변경한다던지 하는 등의 행위가 가능
// 위와 같은 비상식적인 것들을 사용할 수 없게 하는 것!
'use strict'; // added ECMAScript 5

// nodeJS에는 javascript engine이 있어서 브라우저 없이도 실행 가능!
// 실행 방법: node (실행시킬 javascript 파일 이름).js 
console.log('hello world!');