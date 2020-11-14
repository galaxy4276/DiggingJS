// typeof 값 타입은 typeof 연산자로부터 알 수 있다.
console.log(typeof undefined === "undefined"); // true
console.log(typeof true === "boolean"); // true
console.log(typeof 42 === "number"); // true
console.log(typeof "42" === "string"); // true
console.log(typeof { life: 42 } === "object"); // true

// es6 타입 Symbol
console.log(typeof Symbol() === "symbol"); // true

// 조금 특별한 타입
console.log(typeof null === "object"); // true: falut code
// null은 반환하는것이 정답이니 type으로 null 값을 정확히 확인하려면 조건이 더 필요하다.
var a = null;
console.log(!a && typeof a === "object"); // true
// null 은 falsy한 유일한 원시 값이지만 타입은 'object'인 특별한 존재이다.
console.log(typeof function a() { /*----*/ } === "function"); // true
// function은 실제로 object의 하위 타입이다.
// 구체적으로 설명하면 함수는 호출 가능한 객체 Callable Object라고 명시되어 있다.
console.log(typeof [1, 2, 3] === "object"); // true
// 배열 또한 객체다. 
//숫자 인덱스를 가지며 length 프로퍼티가 자동으로 관리되는 등의 추가 특성을 지닌 객체의 하위 타입이다.
console.log(typeof typeof 42); // string
// typeof 42 는 number이며 typeof "number" 의 결과값은 string 이다.
