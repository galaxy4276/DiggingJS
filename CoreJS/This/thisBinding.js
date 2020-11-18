/*
  call Method:
    Funciton.prototype.call(thisArg[, arg1[, arg2[, arg3, [, ...]]]])

    첫 번째 인자를 this로 바인딩하고, 이후 인자들을 호출할 함수의 매개변수로 함.
*/

var func = function (a, b, c) {
  console.log(this, a, b, c);
};

func(1, 2, 3);
func.call({ x: 1 }, 4, 5, 6); // 임의 객체를 this로 지정한 상황.

console.log('==========================================');

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  }
};

obj.method(2, 3);
obj.method.call({ a: 4 }, 5, 6);

console.log('==========================================');
/*
  apply Method:
    Function.prototype.apply(thisArg, [, argArray])
 */

 var func = function (a, b, c) {
   console.log(this, a, b, c);
 }
;

func.apply({x : 1}, [4, 5, 6]);

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  }
}

obj.method.apply({a : 4}, [5, 6]);