'use strict';

// JavaScript Classes
// - 도입된 지 얼마 되지 않음!
// introduced in ES6
// syntatical sugar over prototype-based inheritance (기존에 있던 것을 문법적으로 정의한! 달달한!)
// 클래스가 도입되기 전 기존의 JavaScript는 클래스를 만들지 않고 오브젝트를 만들 수 있었다 ! ! (다음 시간에 알아보자)

// MARK: 클래스 선언
class Person {
    // constructor (생성자)
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }
    
    // methods
    speak() {
        console.log(`${this.name} hello~!`)
    }
}

// MARK: object 생성
const hyoz = new Person('hyoz', 23);
console.log(hyoz.name)
console.log(hyoz.age)
hyoz.speak();

// MARK: Getter and Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // 값을 리턴
    get age() {
        // this.age를 호출하면 getter가 호출
        // 생성자에서 this.age를 호출해도 getter가 호출
        // 무한 루프 돌 확률이 존재하므로 변수 앞에 '_' 붙여주기
        return this._age
    }
    // 값을 설정 (설정하기 때문에 값을 받아와야 함)
    set age(value) {
        // this._age = value;
        // 사용자가 값을 잘 못 설정할 수 있음. 그 경우 바로 잡아주는 것이 setter의 역할!
        // 일반 조건식이든 삼항 조건식이든 상관 없음!
        this._age = value < 0 ? 0 : value;

    }

    // .age의 형태로 호출할 수 있는 것 = getter가 있기 때문!
    // .age 형태에 값을 할당할 수 있는 것 = setter가 있기 때문!
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age)


// Fields (public, private)
// 아주 최근에 추가된 항목! 그래서 아직 많은 개발자들이 쓰고 있지는 않음!
// 최신 버전 브라우저에서도 적용이 안 됨!
class Experiment {
    // 생성자를 쓰지 않고 field 정의 가능
    // 그냥 정의하면 public!
    publicField = 2;
    // #을 붙이면 private field!
    // 클래스 외부에서는 접근, 수정 모두 불가능!
    #privateField = 0;
}

// MARK: Static properties and methods
// 이것도 아주 최근!
// 새로 생성되는 객체들은 각각의 값들을 가짐!
// 하지만 객체에 상관없이 클래스라면 클래스 자체에서 가지는 값들이 존재! 그런 값들은 static으로 설정!!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);

// console.log(article.publisher) // = undefined
console.log(Article.publisher)
Article.printPublisher();


// MARK: inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {
        return width * this.height;
    }
}

// shape에서 지정한 속성과 메소드가 자동으로 Rectangle에 불러와짐!
class Rectangle extends Shape {}
class Triangle extends Shape {
    // MARK: 다양성!
    // 필요한 함수들만 overriding!
    // overridng을 하면 부모 클래스에 정의된 함수는 더 이상 실행되지 않음
    draw() {
        // 공통적으로 정의한, 부모에서 선언한 draw함수도 실행하고 싶다면?
        super.draw()
        console.log('▲')
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

// 증명
const rectangle = new Rectangle(20, 20, 'blue')
rectangle.draw() // = drawing blue color of

const triangle = new Triangle(20, 20, 'red');
triangle.draw() // = drawing red color of
                // = ▲ 


// MARK: Class checking: instaceof 
// a instanceof b: a가 b의 인스턴스인지 아닌지 확인!
console.log(rectangle instanceof Rectangle); // = true
console.log(triangle instanceof Rectangle);  // = false
console.log(triangle instanceof Triangle);   // = true
console.log(triangle instanceof Shape);      // = true
console.log(triangle instanceof Object);     // = true