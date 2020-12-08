type NumberToNumberFunc = (number) => number;

// const add = (a: number): (number) => number => (b: number): number => a + b;

const add = (a: number): NumberToNumberFunc => {
    const _add: NumberToNumberFunc = (b: number): number => {
        return a + b;
    }
    return _add;
}

let fn: NumberToNumberFunc = add(1)

let result = fn(2) // 부분 적용 함수
console.log(result);
console.log(add(1)(2));
