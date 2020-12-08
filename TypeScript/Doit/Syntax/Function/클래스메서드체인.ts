/*
  메서드 체이닝이 가능케 끔 하기 위해서는,
  각 메서드가 this를 반환해야만 한다.
 */

class Calculator {
  constructor(public value: number = 0) {}

  add(value: number) {
    this.value += value;
    return this;
  }

  multiply(value: number) {
    this.value *= value;
    return this;
  }
}

const calc = new Calculator(1);

const result = calc.add(1).add(2).multiply(3).multiply(5).value;
console.log(`result is ${result}`);