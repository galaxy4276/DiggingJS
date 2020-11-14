const log = console.log;
// JS에는 보통의 0 (+0) 과 음의 영(-0) 이 존재한다.
log(0 / -3);
log(0 * -3);

// 문자열화하면 0이다.
const a = 0 / -3;
log(a.toString()); // 0
// 반대로하면 -0이다.

// NaN 이랑 -0과 0처럼 값이 절대적으로 동등한지 확인하는 유틸리티
log(Object.is((2 / 'foo'), NaN)); // true
log(Object.is((-3 * 0), -0)); // true
log(Object.is((-3 * 0), 0)); // false
