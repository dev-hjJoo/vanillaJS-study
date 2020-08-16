alert('I am working. I am JS.'); // 경고창 띄우기
console.log('I am worth it! I am beautiful.'); // 로그 쓰기

// MARK: Array
// make arrays!
const daysOfWeek =['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.log(daysOfWeek);

// 여러 개의 타입을 혼합할 수도 있음
const arrayOfValues = [true, 1, 3.5, 'Hello World!', null];
console.log(arrayOfValues);

// 심지어 변수도 넣을 수 있지 (wow!)
something = 'Something new';
const somethings = [something, 3, 4, undefined];
console.log(somethings);

// MARK: Object
// 각각의 값에 접근하는 방법을 달리해보자! 오브젝트!
const arrayOfHyozInfo = ['hyoz', 23, 'female', 'Korea']; // = 배열
// 이름 값 불러오기
console.log(`name is ${arrayOfHyozInfo[0]}`) // 너무 비효율적인데?

// 배열이 [] 였다면 오브젝트는  {}
const ObjectOfHyozInfo = {
    name: "hyoz",
    age: 23,
    gender: "female",
    country: "Korea"
}
console.log(ObjectOfHyozInfo)
console.log(`name is ${ObjectOfHyozInfo.name}`)

// array와 object를 혼합새서도 사용 가능
const hyozInfo = {
    name: "hyoz",
    age: 23,
    gender: "female",
    country: "Korea",
    favFood: [
        {name: 'Watermelon', isFruit: true},
        {name: 'Sushi', isFruit: false},
        {name: 'Shrimp Pasta', isFruit: false},
        {name: 'Dragon Fruit', isFruit: true}
    ]
}

console.log(hyozInfo)