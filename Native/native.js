const log = console.log;
// 브라우저나 환경에 종속되지 않는 ECMAScript 명세의 내장객체를 Native라고 합니다.
let a = new String('Hello world!');
log(`a type: ${typeof a}`); // object
log(a instanceof String); // true 