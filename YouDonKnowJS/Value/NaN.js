const log = console.log;
// Not a Number 의 약자.
// 기가막히고 괴랄하다.
const a = 2 / 'foo';
log(typeof a === 'number'); // true 왜 투르 ?
log(NaN === NaN); // false

const b = 'foo';

log(isNaN(a)); // true
log(isNaN(b)); // true ??? what is it?

// 위와같은 버그때문에 ES6 에서 해결사가 등장한다.
log(Number.isNaN(b)); // false. 휴. 

// 자기자신과 동등하지 않는 유일한 값인 NaN...
