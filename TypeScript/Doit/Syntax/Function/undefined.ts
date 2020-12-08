interface INameable {
    name: string
}

// function getName(o: INameable) { return o.name }
function getName(o: INameable) {
    return o != undefined ? o.name : undefined;
}

let n = getName(undefined);
console.log(n);

//    undefined 는 최하위 타입이기 때문에 에러가 난다.
//    undefined 를 판별하는 코드를 함수 연산문에 넣어주어야 한다.
