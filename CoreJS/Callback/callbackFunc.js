/*
  콜백함수로 어떤 객체의 메서드로 전달하더라도
  그 메서드는 메서드가 아닌 함수로서 호출된다. 
*/

var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    console.log(this, v, i);
  }
};

obj.logValues(1, 2); // this -> obj
[4, 5, 6].forEach(obj.logValues); // this -> Window
// 콜백으로 인해 전달되었으니 this는 전역 객체를 참조한다.

/*
  콜백 함수 내부의 this에 다른 값을 바인딩하는 방법 - 전통적 방식
*/
var obj1 = {
  name: 'obj1',
  func: function () {
    var self = this;
    return function () {
      console.log(self.name);
    };
  }
};

var cb = obj1.func();
setTimeout(cb, 1000);

console.log('==========================================');
/*
  함수를 다른 객체에 재활용하는 상황
*/

// var obj2 = {
//   name: 'obj2',
//   func: obj1.func,
// };

// var cb2 = obj2.func();
// setTimeout(cb2, 1500);

// var obj3 = { name: 'obj3' };
// var cb3 = obj1.func.call(obj3);
// setTimeout(cb3, 2000);

/*
  bind 를 사용해 콜백에 this 를 지정하는 방법
*/
var bindObj = {
  name: 'obj1',
  func: function () {
    console.log(this.name);
  }
};

setTimeout(bindObj.func.bind(bindObj), 1000);

var bindObj2 = { name: 'obj2' };
setTimeout(bindObj.func.bind(bindObj2), 1500);