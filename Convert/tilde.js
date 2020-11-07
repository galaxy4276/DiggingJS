const log = console.log;
// tilde를 적절하게 활용하면 어떠한 값을 Boolean으로 적절하게 만들 수 있다.
let a = 'Hello World';
log(~a.indexOf('lo')); // -4 <-- truthy!

if (~a.indexOf('lo')) {
  log('I Found "lo".');
}

log(~a.indexOf('ol'));

log(!~a.indexOf('ol'));

if (!~a.indexOf('ol')) {
  log('ol 못찾았다~');
}

// ~~는 Math.floor 값과 유사하나 생각할 지 모르나, 음수에서 결과값이 다르다는 점을 유의하자
