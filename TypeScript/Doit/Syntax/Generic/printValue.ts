interface IValuable<T> {
  value: T
}

const printValueT = <Q, T extends IValuable<Q>>(o: T) => console.log(o.value);

printValueT({ value: 'hello' });

export { IValuable, printValueT };

