const log = console.log;
/*
  ES7 do 제안식
*/ 
let a, b;

a = do {
  if (true) {
    b = 4 + 38;
  }
};

log(a);

// do 표현식 전체의 완료값으로 반환한다.