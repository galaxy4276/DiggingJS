const log = console.log;
/*
  클로저는 함수가 속한 렉시컬 스코프를 기억하여
  함수가 스코프 밖에서 실행될 때에도
  접근할 수 있게 하는 기능
*/

// 정적 스코프에 의한 클로저의 일부인 코드
/*
function foo() {
  var a = 2;
  function bar() {
    console.log(a); // 2
  }
  bar();
}

foo();
*/

// closure
function foo() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  return bar;
}

var baz = foo();
baz(); // 2
// bar을 실행중이며 bar 외부 스코프인 foo가 가비지 컬렉터에의해 해제되지 않는다.