const log = console.log;
// 선택 연산자 또는 피연산자 선택 연산자
// 항상 Boolean 타입이어야 하는것은 아니다.
let a = 42;
let b = 'abc';
let c = null;

log(a || b);
log(a && b);

log(c || b);
log(c && b);
// 다른 언어와 달리 true, false 값을 반환하는 것이 아닌
// ToBoolean 강제 변환 평가 후 값을 반환한다.
/*
  즉,
  a || b;
  -> a ? a : b;

  a && b;
  -> a ? b : a;
*/
log('---------------');
function foo(a, b) {
  a = a || 'hello';
  b = b || 'world';

  log( a + b );  
}

foo();
foo('오 마이', '갓');
// || 연산은 falsy 값을 무조건 건너 뛰어야 할 때만 사용해야 한다.
// && 는 가드 연산자, 첫 번재 표현식이 두번째 표현식의 가드 역할을 수행한다.
