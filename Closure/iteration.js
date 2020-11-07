const log = console.log;
/*
  클로저를 설명하는 대표적 사례
*/

/*
for (var i = 0; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
*/

for (var i = 1; i <= 5; i++) {
  (function() {
    var j = i;
    setTimeout(function timer() {
      console.log(i);
    }, j * 1000 );
  })
}