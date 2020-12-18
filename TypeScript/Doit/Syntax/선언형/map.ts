import { range, fold } from './';

// 입력 타입 T가 출력 타입 Q로 바뀔 수 있다는 전제로 구현 됨
const map = <T, Q>(array: T[], cb: (value: T, index?: number) => Q):
  Q[] => {
  let result: Q[] = [];

  for (let idx = 0; idx < array.length; ++idx) {
    const value = array[idx];
    result = [ ...result, cb(value, idx) ];
  }
  return result;
}

let numbers: number[] = range(1, 100 + 1);
const result = fold(
  map(numbers, value => value * value),
  (result, value) => result + value,
  0,
);

console.log(result);