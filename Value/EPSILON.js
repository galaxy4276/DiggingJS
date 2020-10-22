function numbersCloseEnoughToEqual(n1, n2) {
  return Math.abs(n1 - n2) < Number.EPSILON;
}

const a = 0.1 + 0.2;
const b = 0.3;



console.log(numbersCloseEnoughToEqual(a, b));
console.log(numbersCloseEnoughToEqual(0.000001, 0.000002));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);