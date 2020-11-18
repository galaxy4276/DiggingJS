/*
  생성자 함수는 __proto__ 프로퍼티가 존재하는 객체(인스턴스)를 만들고,
  미리 준비된 공통 속성 및 개성을 해당 객체(this)에 부여합니다.
*/
var Cat = function (name, age) {
  this.bark = '야옹';
  this.name = name;
  this.age = age;
};

var choco = new Cat('초코', 7); // this -> choco 인스턴스
var nabi = new Cat('나비', 7); // this -> nabi 인스턴스
console.log(choco, nabi);

