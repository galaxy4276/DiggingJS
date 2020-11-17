/*
  call, apply 메서드의 활용
*/

// 유사배열객체에 배열 메서드를 적용
var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

Array.prototype.push.call(obj, 'd');
console.log(obj);

var arr = Array.prototype.slice.call(obj);
// slice는 매개 변수를 아무것도 넘기지 않을 경우, 원본 배열의 얕은 복사본을 반환
console.log(arr);

console.log('==========================================');

var str = 'abc def';

// Array.prototype.push.call(str, ', pushed string'); // length 는 읽기전용 프로퍼티라 에러
console.log(Array.prototype.concat.call(str, 'string'));

const newArr = Array.prototype.map.call(str, function (char) { return char + '!'; });
console.log(newArr);

/*
  ES6 는 유사배열 객체 또는 순회가능한 모든 종류 데이터 타입을 배열로 
  전환하는 Array.from 메서드를 도입
*/
console.log('==========================================');

var callmeBaby = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

var callmeHot = Array.from(callmeBaby);
console.log(callmeHot);

/*
  생성자 내부에서 다른 생성자 호출
 */
console.log('==========================================');

 function Person(name, gender) {
   this.name = name;
   this.gender = gender;
 }

 function Student(name, gender, school) {
   Person.call(this, name, gender);
   this.school = school;
 }

 function Employee(name, gender, company) {
   Person.apply(this, [name, gender]);
   this.company = company;
 }

 var by = new Student('보영', 'female', '단국대');
 var jn = new Employee('재난', 'male', '구골');

 console.log(by);
 console.log(jn);

 /*
  여러 인수를 묶어 하나의 배열로 전달하고 싶을 때 - apply 활용
 */
// var numbers = [10, 20, 3, 16, 45];
// var max = min = numbers[0];
// numbers.forEach(function(number) {
//   if (number > max) {
//     max = number;
//   }
//   if (number < min) {
//     min = number;
//   }
// });

// console.log(max, min);

console.log('==========================================');
// 위 코드를 이렇게 할 수 있다.
var numbers = [10, 20, 3, 16, 45];
var max = Math.max(...numbers);
var min = Math.min.apply(null, numbers);
console.log(max, min);

console.log('==========================================');
/*
  bind Method:
    Function.prototype.bind(thisArg[, arg1[, arg2[, ...]]])

  call과 비슷하지만 즉시 호출하지 않고
  넘겨 받은 this 및 인수들을 바탕으로 새로운 함수를 반환하기만 하는 메서드

*/
var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};

func(1, 2, 3, 4);

var bindFunc1 = func.bind({ x: 1 });
bindFunc1(5, 6, 7, 8);

var bindFunc2 = func.bind({ x: 1 }, 4, 5);
bindFunc2(6, 7);
bindFunc2(8, 9);

console.log('==========================================');
/*
  bind 메서드의 name property.
  name 프로퍼티의 bound가 붙는다.
*/
var ffun = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};

var bindFfun = ffun.bind({ x: 1 }, 4, 5);
console.log(func.name);
console.log(bindFfun.name);

console.log('==========================================');
/*
  상위 컨텍스트의 this를 내부함수나 콜백 함수에 전달하기
*/
var obj = {
  outer: function () {
    console.log(this);
    var innerFunc = function () {
      console.log(this);
    }.bind(this);
    innerFunc();
  }
};

obj.outer();