/*
  임시 데드 존 ( Temporal Dead Zone )
  초기화하지 않아 변수를 참조할 수 없는 코드 영역을 뜻한다.
 */

// ES6 let 블록 스코핑
//  {
//    a = 2;
//    let a;
//  }
 // typeof 는 TDZ에 대한 안전장치가 안된다. ( undefined 반환 )
 
 // 함수 인자의 디폴트 값은 마치 하나씩 좌측 -> 우측 순서로 let 선언을 한 것과 동일하게 처리된다.
 function foo(a = 42, b = a + 1) {
   console.log(
     arguments.length, a, b,
     arguments[0], arguments[1]
   );
 }

 foo();
 foo(10); // arguments[1] => undefined , 넘겨주지 않아서.
 foo(10, undefined);
 foo(10, null);