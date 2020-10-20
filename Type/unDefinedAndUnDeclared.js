/* 
  undefined: 값이 없는
  undeclared: 선언되지 않는
  둘은 완전히 다른 개념이다.
  undefined는 접근 가능한 스코프에 변수가 선언되었으나 아무런 값도 할당되지 않는 상태
  undeclared는 접근 가능한 스코프에 변수 자체가 선언조차 되지 않은 상태 ( 선언 무효 )
*/

var a;
console.log(a); // undefined;
console.log(b); // ReferenceError: b가 정의되지 않았습니다.

console.log(typeof b) // 선언되지 않은 변수조차 typeof 시 undefined가 나온다.
// 이유는 이것이 typeof만의 독특한 safe guard 이기 때문이다.
// undeclared라고 했으면 헷갈리지 않았을텐데.. 라는 책 원문이 인상적이다.


// namespace란 이름 공간 하나에서는 하나의 이름이 하나의 개체만을 가르킨다를 의미한다.