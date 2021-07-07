// non-using cps
function fact(n) {
  if(n == 0)
    return 1 ;
  else
    return n * fact(n-1) ;
}

// using cps
function factCPS(n, cb) {
  console.log({ n });
  if (n === 0)
    cb(1);
  else
    factCPS(n - 1, (result) => {
      console.log({ result });
      cb(n * result);
    });
}

factCPS(5, (n) => console.log(n));
