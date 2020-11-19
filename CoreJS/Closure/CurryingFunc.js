/*
  여러 개 인자를 받는 함수를 하나의 인자만 받는
  함수로 나눠서 순차적으로 호출될 수 있게 체인 형태로
  구성한 것

  한 번에 하나의 인자만 전달하는 것이 원칙

  Functional Programming
    -> 지연 평가
      당장 필요한 정보만 받아서 전달하고 또 필요한 정보가 들어오면
      전달하는 식으로 결국 마지막 인자가 넘어갈 때까지 함수 실행을 미루는
      셈이 된다.
*/

const curry3 = function (func) {
  return function (a) {
    return function (b) {
      return func(a, b);
    };
  };
};

const getMaxWith10 = curry3(Math.max)(10);

console.log(getMaxWith10(8));
console.log(getMaxWith10(25));

// arrow function
const curry5 = func => a => b => c => d => e => func(a, b, c, d, e);

