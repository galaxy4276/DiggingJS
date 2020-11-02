const log = console.log;

// 구조 분해 할당
function getData() {
  return {
    a: 42,
    b: 'foo',
  };
}
  
const { a, b } = getData();
log(a, b);


function foo({ a, b, c }) {
  var a = obj.a, b = obj.b, c = obj.c;
  console.log(a, b, c);
}


foo({
  c: [1, 2, 3],
  a: 42,
  b: 'foo',
}); // 42 'foo', [1, 2, 3]