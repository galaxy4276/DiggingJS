/*
  외부 함수에서 변수를 선언하고
  내부함수에서 해당 변수를 참조하는 함수

  outer함수에 대한 실행 컨텍스트가 종료되면
  LexicalEnvironment 에 저장된 식별자들(a, inner)
  에 대한 참조를 지운다.

  이 후, 각 주소에 저장되 있던 값들을 자신을 참조하는
  변수가 하나도 없게 되므로 gc의 수집대상이 되어버린다.
*/
var outer = function () {
  var a = 1;
  var inner = function () {
    console.log(++a);
  };

  inner();
}

outer();

console.log('==========================================');

// 조금 바뀐 내용
var outerSec = function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  
  return inner();
};
var outer2 = outerSec();
console.log(outer2);

console.log('==========================================');

/*
  실행 컨텍스트가 종료된 후에도
  inner 함수를 호출할 수 있게 만들기
  (Closure)
  
  gc는 어떤 값을 참조하는 변수가 하나라도 있다면
  그 값은 수집 대상에 포함시키지 않는다.
*/
var outerClosure = function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };

  return inner;
}

var outerClo = outerClosure();
console.log(outerClo());
console.log(outerClo());