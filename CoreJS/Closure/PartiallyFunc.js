/*
  부분 적용 함수
  n 개의 인자를 받는 함수에 미리 m 개의 인자만 넘겨
  기억시키고 후, (n-m)개의 인자를 넘기면
  비로소 원래 함수의 실행 결과를 얻을 수 있게 끔 하는
  함수
*/
// const add = function () {
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// };

// const addPartial = add.bind(null, 1, 2, 3, 4, 5);
// console.log(addPartial(6, 7, 8, 9, 10));


// this에 관여하지 않는 별도의 부분 함수
const partial = function () {
  const originalPartialArgs = arguments;
  const func = originalPartialArgs[0];

  if (typeof func !== 'function') {
    throw new Error('첫 번째 인자가 함수가 아닙니다.');
  }

  return function () {
    const partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
    console.log(partialArgs);
    const restArgs = Array.prototype.slice.call(arguments);
    console.log(restArgs);
    return func.apply(this, partialArgs.concat(restArgs));
  };
};

const add = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

const addPartial = partial(add, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10));

// 차후 다시 학습..