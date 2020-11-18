/*
  전역 공간에서 this는
  브라우저에서 window
  Node.js global
*/

// 자바스크립트의 모든 변수는 특정 객체의 프로퍼티로서 동작한다.

var a = 1;

console.log(a); // 1
console.log(window.a); // 1
console.log(this.a); // 1

