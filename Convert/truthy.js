const log = console.log;
// falsy 값 목록에 없으면 무조건 truthy 값이다.
let a = 'false';
let b = '0';
let c = "' '";

let d = Boolean(a && b && c);
log(d);