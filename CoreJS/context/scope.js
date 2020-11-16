/*
  스코프 체인: 식별자의 유효범위를 안에서부터 바깥으로 차례로 검색해나가는 것
  LexicalEnviroment: VariableEnviroment와 같지만 변경 사항이 실시간으로 반영 됨.
    - outerEnviroment: 바깥 영역의 LexicalEnviroment를 참조한다. ( 스코프 체인), 연결리스트 형태를 띈다.
*/

// 스코프 체인 예제
// 한 단계만 탐색한다.?
var a = 1;
var outer = function () {
  var inner = function () {
    console.log(a);
    var a = 3;
  };
  inner();
  console.log(a);
}
outer();
console.log(a);