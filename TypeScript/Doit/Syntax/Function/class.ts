class A {
  value: number = 1;
  method: () => void = function(): void {
    console.log(`value: ${this.value}`);
  }
}

class B {
  constructor(public value: number = 1) {}
  method(): void {
    console.log(`value: ${this.value}`);
  }
}

class C {
  static whoAreYou(): string {
    return `I'm class C`;
  }
}

class D {
  static whoAreYou(): string {
    return `I'm class D`;
  }
}

const a: A = new A;
a.method();

const b: B = new B;
b.value = 30;
b.method();
console.log(C.whoAreYou());
console.log(D.whoAreYou());