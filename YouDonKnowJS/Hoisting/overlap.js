const log = console.log;
/*
  함수가 중복 선언문일 경우,
  즉 중복 함수 선언문일 경우 앞선 것들을 겹쳐 쓴다.
*/
foo();

function foo() {
  console.log(1);
}

var foo = function() {
  console.log(2);
}

function foo() {
  console.log(3);
}