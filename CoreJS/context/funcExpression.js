/*
  함수 선언문, 익명 함수 표현식, 기명 함수 표현식

  선언문과 표현식이 나뉘어져 있음을 유의하기
*/

function a () { /* ... */ } // 함수 선언문

var b = function () { /* ... */ } // 익명 함수 표현식

var c = function d() { /* ... */ } // 기명 함수 표현식, 변수명은 c, 함수명은 d

console.log(sum(1, 2));
console.log(multiply(3, 4));

console.log('==========================================');

function sum (a, b) { // 함수 선언문 
  return a + b;
}

const multiply = function (a, b) { // 함수 표현식
  return a * b;
}

/*
  호이스팅의 결과
  function sum (a, b) { return a + b };
  const multiply;

  console.log(sum(1, 2));
  console.log(multiply(3, 4));
*/

// 중복 함수의 경우 나중에 할당이 값을 덮어씌우게 된다.
// 그래서 상대적으로 함수 표현식이 안전하다.

console.log('==========================================');

console.log(sum(3, 4)); // Type Error

var sum = function (x, y) {
  return  x + y;
};

var a = sum(1, 2);

var sum = function(x, y) {
  return `${x}+${y}=${x+y}`;
};

var c = sum(1, 2);
console.log(c);