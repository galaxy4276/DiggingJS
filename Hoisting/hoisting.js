const log = console.log;
/*
  호이스팅: 선언문을 끌어올리는 동작을 의미한다.
  호이스팅은 함수가 우선순위이다.
  
*/

a = 2;
var a;
console.log(a); // 2

foo();
var foo = function() {
  var a;
  console.log(a); // undefined
  a= 2;
}


