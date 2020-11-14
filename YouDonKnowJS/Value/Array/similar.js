/*
  유사 배열 값을 진짜 배열로 바꾸고 싶을 때
  indexOf, concat, forEach 등을 사용하여 해결
*/

const log = console.log;

function foo() {
  var arr = Array.prototype.slice.call( arguments ); // arguments is Native
  arr.push("bam");
  console.log( arr );
}


foo("bar", "baz");

// ES6
function fooo() {
  const arr = Array.from( arguments );
  arr.push('Ham~');
  console.log( arr );
};

fooo('eum', 'bok', 'dong');

// 문자열은 배열과 비슷하지만 배열과 다른 유사배열이다.
// 둘다 length property, indexOf, concat 메서드를 가진다.
var a = 'foo';
var b = ['f', 'o', 'o'];

log(a.length);
log(b.length);

log(a.indexOf('o'));
log(b.indexOf('o'));

let c = a.concat('bar');
const d = b.concat('b', 'a', 'r');
log(c);
log(d);
// 문자열은 불변 값 (Immutable) 이지만 배열은 가변값(Mutable) 이다.
// 문자열은 불변값이므로 문자열 메서드는 내용을 바로 변경하지않고 새로운 문자열을 생성 후 반환한다.
c = a.toUpperCase();
log(a === c);
log(a);
log(c);

b.push('!');
log(b);

let q = Array.prototype.join.call(a, '-');
let p = Array.prototype.map.call(a, (v) => v.toUpperCase() + '.').join( "" );

log(`q: ${q}`);
log(`p: ${p}`);
// 문자열은 불변값이라 가변 메서드 ( reverse ...) 가 통하지 않는다.
// 빌려 쓰는것 또한 되지 않는다.
// Array.prototype.reverse.call( a ) // 객체 레퍼를 반환
const hack = a.split('').reverse().split();
console.log(`hack: ${hack}`);

// 문자열을 배열로 나타내야 할 때는 언제나 문자열 배열에 join("")메서드를 호출하면 된다.
