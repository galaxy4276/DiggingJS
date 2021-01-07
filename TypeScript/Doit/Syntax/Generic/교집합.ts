const mergeObjects = <T, U>(a: T, b: U): T & U => ({ ...a, ...b });

type INameable = { name: string };
type IAgeable = { age: number };

const nameAndAge: INameable & IAgeable = mergeObjects({name: 'Jack'}, {age: 32});
console.log(nameAndAge);

// 합집합은?
interface ISqaure { size: 10, tag: 'Square' }
interface IRectangle { width: number, height: number, tag: 'Rectangle' }
interface ICircle { radius: number, tag: 'Circle' }


type IShape = ISqaure | IRectangle | ICircle;

const calcArea = (shape: IShape): number => {
  // return 0; // shape 객체가 구체적으로 ISqaure 인지, IRectangle인지, ICircle 인 지 알 수 없음.
  switch (shape.tag) {
    case 'Square': return shape.size * shape.size;
    case 'Rectangle': return shape.width * shape.height;
    case 'Circle': return Math.PI * shape.radius * shape.radius;
  }
  return 0;
};

console.log(
  calcArea({ tag: 'Square', size: 10 }),
  calcArea({ tag: 'Rectangle', width: 4, height: 5 })
);