/* 
  자바스크립트 '정수'는 부동소수 점 값이 없는 값이다.
  자바스크립트는 Double Precision 포맷을 사용한다.
*/
const log = console.log;

var b = .42; // 생략 가능 
log(b);

var a = 5E10;
log(a); // 아주 크거나 작은 숫자는 지수형으로 표시한다.
log(a.toExponential());

// 숫자 값은 Number.prototype 메서드로 접근 할 수 있다.
var a = 42.59;
log(a.toFixed(0));
log(a.toFixed(1));
log(a.toFixed(2));
log(a.toFixed(3));