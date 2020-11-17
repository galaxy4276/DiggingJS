/*
  내부 함수에서의 this
*/
var obj1 = {
  outer: function () {
    console.log(this); // (1) obj1
    var innerFunc = function () {
      console.log(this); // (2) window (3) obj2
    }
    innerFunc();

    var obj2 = {
      innerMethod: innerFunc
    };
    obj2.innerMethod(); 
  }
};

obj1.outer();

/*
  (2) 함수로서 호출했으므로 전역객체(window) 를 바인딩
  (3) 메서드로서 호출이므로 obj2가 바인딩 된다.

  this 바인딩에서는 함수를 실행하는 당시의 주변 환경은 중요하지 않고
  오직 해당 함수를 호출하는 구문 앞에 점 또는 대괄호 표기가 있는지 없는지가 관건이다.
*/

/*
  내부 함수에서 this를 우회하는 방법
 */
console.log('==========================================');

var obj = {
  outer: function () {
    console.log(this);
    var innerFunc1 = function () {
      console.log(this);
    };
    innerFunc1();

    var self = this;
    var innerFunc2 = function () {
      console.log(self);
    };
    innerFunc2();
  }
};

obj.outer();