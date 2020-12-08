type Person = { name: string, age: number }

// const makePerson = (name: string, age: number = 10): Person => {
//     const person = { name, age }
//     return person
// }

const makePerson = (name: string, age: number = 10): Person => ({ name, age });

console.log(makePerson('Jack'))
console.log(makePerson('Jane', 21))

// 비구조화 할당 문
const printPerson = ({ name, age }: Person): void =>
    console.log(`name: ${ name }, age: ${ age }`);

printPerson({ name: '최은기', age: 21.9 });

