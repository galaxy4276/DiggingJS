const log = console.log;

/*
  연산자 우선 순위
*/
let a = 42;
let b = 'foo';
let c = false;

let d = a && b || c ? c || b ? a : c && b : a;
log(d);

// && 는 언제나 || 보다 먼저 평가된다.
log(true || false && false);
log((true || false) && false);
