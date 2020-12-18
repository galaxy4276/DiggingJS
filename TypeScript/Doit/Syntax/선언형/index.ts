export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from +1, to)] : [];

/*
  선언형 프로그래밍은 시스템 자원의 효율적 운용보다는 일관된 문제 해결 구조에 더 집중한다.
  명령형 처럼 for문을 사용하지 않고 모든 데이터를 배열에 담는다.
  문제가 해결될 때까지 끊임없이 또 다른 형태의 배열로 가공하는 방식으로 구현한다.
 */

// 1 ~ 100 더하기 ( 명령형 프로그래밍 )
let sum = 0;
for (let val = 1; val <= 100;) {
  sum += val++;
}

console.log(sum);

// 1 ~ 100 더하기 ( 선언형 프로그래밍 )
let numbers: number[] = range(1, 100 + 1);

/*
  fold는 배열 데이터를 가공해 하나의 값을 생성하려고 할 때 사용.
  T[] 타입의 배열을 T타입 결과처럼 만들어준다.
 */
export const fold = <T>(array: T[], callback: (result: T, val: T) => T, initValue: T) => {
  let result: T = initValue;
  console.log('callback called');
  for (let i = 0; i < array.length; ++i) {
    const value = array[i];
    result = callback(result, value);
  }
  return result;
}

let result = fold(numbers, (result, value) => result + value, 0);
// callback 은 사용자가 따로 지정해주는 함수가 된다.
console.log(result);

// 선언형은 명령형에 비해, 범용적이고 재사용이 가능함을 알 수 있다.

/*
  함수형 프로그래밍의 filter 구현하기
*/
const filter = <T>(array: T[], cb: (value: T, index?: number) => boolean): T[] => {
  let result: T[] = [];

  for (let index: number = 0; index < array.length; ++index) {
    const value = array[index];
    if (cb(value, index))
      result = [...result, value];
  }
  return result;
}

const isOdd = (n: number): boolean => n % 2 != 0;
let resultValue = fold(
  filter(numbers, isOdd), // 첫 번째 배열의 값으로 filter 의 결과를 넣는다.
  (result, value) => result + value,
  0
);

console.log(`1 ~ 100 홀수의 합: ${resultValue}`);

// 짝수의 합은?
const isEven = (n: number): boolean => n % 2 === 0;
const evenRes = fold(
  filter(numbers, isEven),
  (result, value) => result + value,
  0
);
console.log(`1 ~ 100 짝수의 합: ${evenRes}`);