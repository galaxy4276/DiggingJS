const log = console.log;
/*
  함수 스코프는 모든 변수가 함수에 속하고 함수 전체에 걸쳐 사용된다.
*/

function foo(a) {
  var b = 2;
  // some code
  function bar() {
    // ...
  }
  // more code 
  var c = 3;
}