const log = console.log;
// falut
// 42.toFixed( 3 );
// 42. 소수 처리가 되어버림.

// good
(42).toFixed(3);
0.42.toFixed(3);
42..toFixed(3);

log((0.1 + 0.2 === 0.3)); // false
// 미세한 오차를 머신 입실론 이라고 한다.
// 자바스크립트의 숫자는 머신 입실론

// 정수인지 확인 feat.ES6
log('\nisInteger');
log(Number.isInteger(42));
log(Number.isInteger(42.000));
log(Number.isInteger(42.3));
// Before ES6 Polyfill
if (!Number.isInteger) {
  Number.isInteger = function(num) {
    return typeof num == 'number' && num % 1 == 0;
  };
}

// 안전한 정수 여부는 ES6 부터 Number.isSafeInteger로 체크한다.
log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
log(Number.isSafeInteger(Math.pow(2, 53)));
log(Number.isSafeInteger(Math.pow(2, 53) - 1));