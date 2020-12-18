// 타입을 T와 같은 일종의 변수로 취급하는 것 => 제네릭 타입
const arrayLength = <T>(array: T[]): number => array.length;
const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0;

let numArray: number[] = [1, 2, 3];
let strArray: string[] = ['Hello', 'World'];

type IPerson = { name: string, age?: number };
let personArray: IPerson[] = [{name: 'Jack'}, {name: 'Jane', age: 32}];

console.log(
  arrayLength(numArray),
  arrayLength(strArray),
  arrayLength(personArray),
  isEmpty([]),
  isEmpty([1]),
);

// 제네릭의 타입 추론
const identity = <T>(n: T): T => n;

console.log(
  identity<boolean>(true),
  identity(true)
);
