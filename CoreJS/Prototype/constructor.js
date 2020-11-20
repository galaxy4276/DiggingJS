const log = console.log;
/*
  constructor 라는 프로퍼티가 생성자 함수 prototype 내부에 존재한다.
  이 것은 자기 자신을 참조한다.
*/
let arr = [1, 2];
log(Array.prototype.constructor === Array);
log(arr.constructor === Array);