const log = console.log;
/*
  JS는 포인터 개념 자체가 없으므로 참조하는 방법이 다르다.
  변수가 다른 변수를 절대로 참조할 수 없다.
  JS에서 레퍼런스는 값을 가리키므로 서로 다른 10개의 레퍼런스가 있다면 이들은 저마다 항상 공유된 단일 값을 개별적으로 참조한다.
  ( 서로에 대한 레퍼런스/포인터 따위는 없다. )
*/
// JS는 값의 타입만으로 값-복사, 레퍼런스-복사 둘 중 한쪽이 결정된다.
let a = 2;
let b = a;
b++;
log(a);
log(b);
log('------');

let c = [1, 2, 3];
let d = c; // d는 공유된 [1, 2, 3] 값의 레퍼런스이다.
d.push(4);
log(c);
log(d);

// null, undefined, string, number, boolean, symbol 은 언제나 값-복사 방식으로 할당된다.
// arr, object, function 등 합성 값은 할당/전달시 반드시 레퍼런스 사본을 생성한다.

// A 레퍼런스로 B 레퍼런스를 가리키는 대상은 변경할 수 없다.
log('----------');
d = [4, 5, 6];
log(c);
log(d);

// 함수 레퍼런스
log('----------');
function foo(x) {
  x.push(4);
  log(x);

  // after
  x = [4, 5, 6];
  x.push(7);
  log(x);
}

let arr = [1, 2, 3];
foo(arr);

log(arr); // 4,5,6 7 이아닌 1,2,3,4 
// 새로운 값을 할당하는 식으로 내용을 바꿀 수 없다.
// TODO: 중요! 원시값은 불변이다! (Mutable)
