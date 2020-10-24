const log = console.log;
// JS에서는 암시적 강제변환과 명시적 강제변환 두가지로 구별한다.
// JS에서 강제변환은 원시 값 중 하나가 되므로 객체, 함수 같은 합성 값 타입으로 변환될 일이 없다.

let a = 42;
let b = a + ""; // 암시적 강제 변환
let c = String(a); // 명시적 강제 변환
log(typeof b);

