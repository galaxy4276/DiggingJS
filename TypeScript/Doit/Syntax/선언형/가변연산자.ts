// ...은 전개나 잔여연산자가 아닌 가변 인수를 표현하는 구문이다.
const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
  let result: T[] = [];

  for (let idx = 0; idx < arrays.length; idx++) {
    const arr: T[] = arrays[idx];

    result = [...result, ...arr];
  }
  return result;
}

