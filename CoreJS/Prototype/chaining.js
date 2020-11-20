/*
  __proto__를 연쇄적으로 따라가는 것
  배열 의 __proto__ 내부에 __proto__; Object가 존재한다.
*/
var arr = [1, 2];
arr.__proto__.push(3);
arr.__proto__.__proto__.hasOwnProperty(); // true

// 메서드 오버라이드와 프로토타입 체이닝
var arr = [1, 2];
arr.toString();
Array.prototype.toString.call(arr);
Object.prototype.toString.call(arr);

console.log(arr.toString());

arr.toString = function () {
  return this.join('_');
};

console.log(arr.toString());