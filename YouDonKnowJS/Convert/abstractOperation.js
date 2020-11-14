const log = console.log;
/* 
  ToString
  문자열 아닌 값 -> 문자열 
*/
let a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;
log(a.toString());

a = [1, 2, 3];
log(a.toString());

/*
  JSON 문자열화
  JSON.stringify는 인자가 undefined, 심벌, 함수 등 표준 규격을 벗어나면
  null로 바꾼다.
*/

log(JSON.stringify(undefined)); // undefined
log(JSON.stringify(function() { /* ... */ })); // undefined

// toJSON은 문자열화하기 적당한 JSON 안전 값으로 바꾸는 것이다. ( JSON 문자열로 바꾸는 것이 아니다. )

a = {
  b: 42,
  c: "42",
  d: [1, 2, 3],
};

log(JSON.stringify(a, ["b, c"]));
log(JSON.stringify(a, (k, v) => {
  if (k !== 'c') return v;
}));
