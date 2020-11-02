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