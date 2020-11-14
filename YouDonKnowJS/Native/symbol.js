const log = console.log;
// 심벌은 충돌없이 객체 프로퍼티로 사용 가능한 특별한 유일 값이다.
// ES6의 특수한 내장 로직을 쓰기 위해 고안됨.
let mysym = Symbol('give me dollars');
log(mysym);
log(mysym.toString());

let b = {};
b[mysym] = 'foobar';

log(b);
log(Object.getOwnPropertySymbols(b));