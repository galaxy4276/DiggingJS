/*
  제어권을 넘겨받을 코드에서
  콜백 함수에 별도로 this가 될
  대상을 지정한 경우에는 그 대상을 참조하게 된다.
*/

Array.prototype.map = function (cb, thisArg) {
  var mappedArr = [];
  for (var i = 0; i < this.length; i++) {
    var mappedValue = cb.call(thisArg || window, this[i], i, this);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
};

console.log('==========================================');
// 콜백 함수 내부에서의 this
setTimeout(function () { console.log(this); }, 300);

[1, 2, 3, 4, 5].forEach(function (x) {
  console.log(this);
});