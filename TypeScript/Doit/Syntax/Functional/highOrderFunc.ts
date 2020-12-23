type FirstOrderFunc<T, R> = (T) => R;
type SecondOrderFunc<T, R> = (T) => FirstOrderFunc<T, R>;
type ThirdOrderFunc<T, R> = (T) => SecondOrderFunc<T, R>;

const inc: FirstOrderFunc<number, number> = (x: number) => x + 1;
const add: SecondOrderFunc<number, number> =
  (x: number): FirstOrderFunc<number, number> =>
    (y: number): number => x + y;
const add3: ThirdOrderFunc<number, number> =
  (x: number): SecondOrderFunc<number, number> =>
    (y: number): FirstOrderFunc<number, number> =>
      (z: number): number => x + y + z;

console.log(
  inc(1),
  add(1)(2),
  add3(1)(2)(3),
);

const partAdd: FirstOrderFunc<number, number> = add(1);

console.log(partAdd(3));