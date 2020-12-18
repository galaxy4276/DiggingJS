type ResultType = [boolean, string];

const doSomething = (): ResultType => {
  try {
    throw new Error('Some error occurs...');
  } catch (e) {
    return [false, e.message];
  }
}

const [result, errorMessage] = doSomething();
console.log(result, errorMessage);


// 함수형 프로그래밍에서 배열은 가장 핵심적인 기능이다.
