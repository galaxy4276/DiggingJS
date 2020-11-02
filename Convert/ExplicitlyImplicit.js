const log = console.log;
/// a는 toString이 없으므로 엔진이 객체 래퍼로 박싱한다.
let a = 42;
log(a.toString());

let c = '3.14';
log(+c); // 단항 연산자 + 는 '명시적' 강제 변환이다..


// 날짜 -> 숫자
let d = +new Date('Mon, 18 Aug 2014 08:53:06 CDT');
log(d);