const log = console.log;

// 내장 네이티브 생성자 각자 .prototype 객체를 가진다
// 프로토 타입 위임 덕분에 모든 문자열이 문자열 메서드를 쓸 수 있다.
let a = 'abc';
a.indexOf('c'); // 3
a.toUpperCase(); // ABC
a.trim(); // abc

// 각 생성자 프로토타입마다 자신의 타입에 적합한 기능이 구현되어있다.
// 프로토타입은 디폴트다.
