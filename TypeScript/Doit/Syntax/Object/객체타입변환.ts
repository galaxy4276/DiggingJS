let person: object = { name: 'Jack', age: 32 };

console.log((<{name: string}>person).name);