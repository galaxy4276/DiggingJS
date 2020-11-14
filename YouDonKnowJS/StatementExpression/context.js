const log = console.log;
/*
  중괄호는
  1. 객체 리터럴
  2. 레이블
  두 군데에서 사용된다.
 */
const bar = () => {};

let a = {
  foo: bar()
}


// 레이블
// let 블록 스코프 선언과 함께 쓰면 유용하다.
{
  foo: bar()
}

// Label Jump
foo: for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    // 두 루프의 반복자가 같을 때마다 바깥쪽 루프를 continue 한다.
    if (j == i) {
      continue foo; // foo 붙은 루프로 점프한다.
    }

    if ((j * i) % 2 == 1) {
      continue;
    }
    console.log(i, j);
  }
}