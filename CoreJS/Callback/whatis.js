/*
  콜백 함수는 다른 코드의 인자로 넘겨주는 함수
  제어권을 넘겨받은 함수: setInterval
  콜백 함수: cbFunc
 */

var count = 0;
var cbFunc = function () {
  console.log(count);
  if (++count > 4) clearInterval(timer);
}

var timer = setInterval(cbFunc, 300);

var newArr = [10, 20, 30].map(function (currentValue, index) {
  console.log(currentValue, index);
  return currentValue + 5;
});

console.log(newArr);
console.log('==========================================');