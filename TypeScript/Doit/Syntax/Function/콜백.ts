// callback
const init = (callback: () => void): void => {
    console.log('default initialization finished');
    callback();
    console.log('all initialization finished');
}

init(() => console.log(('custom initilization finished')));

// nested
const calc = (value: number, cb: (number) => void): void => {
    let add = (a, b) => a + b;
    const multiply = (a, b) => a * b;
    let result = multiply(add(1, 2), value);
    cb(result);
}

calc(30, (result: number) => console.log(`result is ${result}`));

// high-order function
const add = (a: number): (number) => number => (b: number): number => a + b;
const result = add(5)(3);
console.log(`high order result: ${result}`);

function add2(a: number): (b: number) => number {
    return function (b: number): number {
        return a + b;
    }
}
console.log(add2(10)(20));

