const log = console.log;
/* 
  ==는 강제변환을 허용
  ===는 강제 변환을 불허용
  
  강제 변환이 필요할 때 ==, 필요하지 않을 때는 ===를 사용하자.

  == 는 ToNumber 등의 메서드로 비교 결과를 반환한다.
*/

let a = '42';
let b = true;
log(a == b); // false. what?
/*
  위 구문 해석
  true 는 ToNumber 로 1 이 된다.
  '42' 는 ToNumber 로 42가 된다.
  즉, 1 == 42 는 false 이다.
 */

 log('\n');
/*
  객체 와 비객체의 비교
  ToPrimitive() 로 강제변환된다. ( 추상적 변환 )
 */

a = 42;
b = [ 42 ];
log(a == b); // true

log('\n');
a = 'abc';
b = Object(a); // equal to new String(a);
log(a === b); // false
log(a == b); // true

/*
 TODO: 중요
 하지 말아야할 사례
*/

// Case 1: 알 박힌 숫자 값
log('\n알 박힌 숫자 값');
Number.prototype.valueOf = function() {
  return 3;
};

log(new Number(2) == 3); //true

