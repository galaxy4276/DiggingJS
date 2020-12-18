/*
  타입스크립트는 순수함수 구현을 쉽게 하도록
  readonly 키워드를 제공한다. ( const 같은 효과를 제공한다. )
  const 나 readonly를 명시하고 있다면 변수값은 항상 초깃값을 유지한다.
  => immutable 이라고 한다.
 */

// 전개 연산자를 사용하면 깊은 복사가 가능해진다.

// sort는 원본 배열을 변경하므로 pureSort를 구현해본다.
export const pureSort = <T>(arr: readonly T[]): T[] => {
  let deepCopied = [...arr];
  return deepCopied.sort();
}

let beforeSort = [6, 2, 5, 9, 0];
const afterSort = pureSort(beforeSort);
console.log(beforeSort, afterSort);

// 순수 삭제 filter
export const pureDelete = <T>(arr: readonly T[], cb: (val: T, idx?: number) =>
  boolean): T[] => arr.filter((val, idx) => cb(val, idx) === false);

const mixedArray: object[] = [
  [], {name: 'Jack'}, {name: 'Jane', age: 33}, ['descriptions']
];

const objOnly: object[] = pureDelete(mixedArray, val => Array.isArray(val));
console.log(mixedArray, objOnly);