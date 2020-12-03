interface IPerson {
  name: string
  age: number
}

interface ICompany {
  name: string
  age: number
}

let jack: IPerson = { name: 'Jack', age: 32 },
    jane: IPerson = { name: 'Jane', age: 29 };

let apple: ICompany = { name: 'Apple Center', age: 43 };


console.log(jack, apple);