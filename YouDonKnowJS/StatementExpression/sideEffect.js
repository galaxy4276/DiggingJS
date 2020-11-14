const log = console.log;

// 일반적인 대부분 표현식에는 부수 효과가 없다.
let a = 2;
let b = a + 3;

function foo() {
  return a += 1;
}

log(foo()); // 결과 값: undefined, 부수 효과; a 가 변경 됨

// ++ 연산에는 부수 효과가 있다.
a = 42;
b = a++;

log(a);
log(b);
log('\n');

a = 42, b;
b = ( a++, a );

log(a);
log(b);


// delete 는 부수효과를 일으키는 연산자이다.
// 유효한/허용된 연산의 경우 true, false값을 반환, 부수 효과로 프로퍼티를 제거한다.
log('\n Object');
const obj = {
  a: 42
};

log(obj.a);
log(delete obj.a);
log(obj.a);

/*
  = 연산자 또한 부수효과이다.
  값을 할당하는 것 자체가 본질적으로 부수 효과이기 때문이다.
*/

// 연쇄 할당 문
let c;
a = b = c = 42;
log(a, b, c);

// 부수 효과를 이용한 함수
function vowels(str) {
  let maches;
  if (str && (maches = str.match(/[aeiou]/g))) {
    return maches;
  }
}


log(vowels('Hello World!'));