// JS Syntax
let arr = new Array(10)

// 배열 단축 구문
let numbers = [1, 2, 3]
console.log(numbers)

// 배열의 타입
let numArray: number[] = [1, 2, 3]
let strArray: string[] = ['Hello', 'World']

type IPerson = { name: string, age?: number }
let personArray: IPerson[] = [{ name: '은기'}, { name: '금기', age: 22 }]

console.log(personArray);