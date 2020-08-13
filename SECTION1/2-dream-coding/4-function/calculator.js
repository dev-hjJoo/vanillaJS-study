"use strict";

function calculator(command, a, b) {
    switch(command){
        case 'add':
            return a+b;
        case 'substract':
            return a-b;
        case 'divide':
            return a/b;
        case 'multiply':
            return a*b;
        case 'remainder':
            return a%b;
        default:
            throw Error('unknown command')
    }
}

let a = 10
let b = 7

console.log(`${a} + ${b} = ${calculator('add', a, b)}`)
console.log(`${a} - ${b} = ${calculator('substract', a, b)}`)
console.log(`${a} / ${b} = ${calculator('divide', a, b)}`)
console.log(`${a} * ${b} = ${calculator('multiply', a, b)}`)
console.log(`${a} % ${b} = ${calculator('remainder', a, b)}`)
