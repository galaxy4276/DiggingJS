/*
  prototype 객체 내부에는 인스턴스가 사용할 메서드를 저장합니다.
*/
const Person = function (name) {
  this._name = name;
};

Person.prototype.getName = function () {
  return this._name;
};

const suzi = new Person('Suzi');
suzi.__proto__.name = 'SUZI__proto__';
console.log(suzi.__proto__.getName());
// __proto__는 생략 가능한 프로퍼티
console.log(suzi.getName());

console.log(Person.prototype === suzi.__proto__);