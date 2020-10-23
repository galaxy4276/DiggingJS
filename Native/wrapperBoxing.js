const log = console.log;
// .length 나 .toString() 을 사용하기 위해서는 네이티브 값을 객체 래퍼로 감싸줘야한다.
// JS는 원시값을 알아서 박싱함으로 다음과 같은 코드가 가능하다.
let a = 'abc';

log(a.length);
log(a.toUpperCase());

// 객체 래퍼의 함정
let str = new Boolean(false);

if (!str) {
  log('Oops'); // 실행안됨
}
// 객체는 truthy 이기 때문

// 객체 래퍼의 원시 값은 valueOf() 로 추출한다.
a = new String('abc');
b = new Number(42);
log('\n------');
log(a.valueOf());
log(b.valueOf());

// new Array === Array. 안붙여도 붙인거처럼 된다.
// Array 생성자는 숫자를 하나받으면 배열의 크기를 미리 정해버리는 괴랄한 특성이 존재한다.
a = new Array(3);
b = [ undefined, undefined, undefined ];
let c = [];
c.length = 3;
log('\n------');
log(a + "\n" + b + "\n" + c);
// a, c는 [undefined * 3] 출력
// 직렬화 결과는 [ undefined * 3 ]

// apply 는 모든 함수에서 사용가능한 유틸리티이다.
log('\n------');
a = Array.apply(null, { length: 3 }); // Array 함수를 호출하는 동시에 { length: 3 } 객체 값을 펼쳐 인자로 넣는다.
log(a); // [ undefined, undefined, undefined ]
// 하고싶은 말은 Array(3) 보다는 ( ex: [ undefined * 3]) 나을 것이라는 거다.
