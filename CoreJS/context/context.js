// ------------- (1)
var a = 1;
function outer() {
  function inner() {
    console.log(a); // undefined
    var a = 3;
  }

  inner(); // -------------- (2)
  console.log(a);
}

outer(); // --------------- (3)
console.log(a); // 1
console.log('==========================================');
/*
  outer 실행 컨텍스트를 생성해 콜 스택에 담는다.
  outer 와 관련된, 즉 outer 함수 내부의 코드 들을 순차적으로 실행한다.

  실행 컨텍스트와 콜 스택을 이해하기
  실행 컨텍스트 객체 정보
  VariableEnviroment: 현재 컨텍스트 내의 식별자들에 대한 정보 + 외부 환경 정보. 변경사항 반영 안됨, 즉 최초 스냅샷을 유지한다.
  LexicalEnviroment: VariableEnviroment와 같지만 변경 사항이 실시간으로 반영 됨.
    - enviromentRecord: 현재 컨텍스트와 관련된 식별자 정보들이 순서대로 수집된다. ( 함수, 변수 등 ..) 호이스팅과 관련성이 깊다. ( 변수명을 알게 된다. )
    - outerEnviroment: 바깥 영역의 LexicalEnviroment를 참조한다. ( 스코프 체인), 연결리스트 형태를 띈다.
  ThisBinding: 식별자가 바라봐야 할 대상 객체
 */


 // hoisting 
 function foo() { // 수집 대상 1 매개변수
   var x = 1;
   console.log(x); // (1)
   var x; // 수집 대상 2 변수 선언
   console.log(x); // (2)
   var x =  2; // 수집 대상 3 변수 선언
   console.log(x); // (3)
 }

 foo();

 /* 위 코드는 다음과 같이 해석된다.
  function foo() {
    var x;
    var x;
    var x;

    x = 1;
    console.log(x);
    console.log(x);
    x = 2;
    console.log(x);
  }
 */

 // 호이스팅 개념을 이해하지 못하면 예측하기 어려운 결과이다.
console.log('==========================================');
// 함수 선언의 호이스팅
function bar () {
  console.log(b);
  var b = 'bbb';
  console.log(b);
  function b() {}
  console.log(b);
}

bar();
/*
  함수는 별도의 메모리에 담기기 때문에 이러한 구현이 가능하다.

  function bar () {
    var b;
    var b = function b() {} // 함수 선언 전체를 끌어올린다.
    
    console.log(b); // undefined
    b = 'bbb';
    console.log(b); // 'bbb'
    console.log(b); // 'bbb'
  }
*/