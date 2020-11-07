const log = console.log;
/*
  클로저가 작용하는 예
*/

function foo() {
  var a = 2;
  function baz() {
    console.log(a);
  }
  bar(baz);
}

function bar(fn) {
  fn();
}

bar(foo);

function wait(message) {
  setTimeout(function timer() {
    console.log(message);
  }, 1000);
}

wait('Hello, Closure');