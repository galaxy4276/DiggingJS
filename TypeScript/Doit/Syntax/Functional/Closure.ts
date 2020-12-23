const makeNames = (): () => string => {
  const names = ['Jack', 'Jane', 'Smith'];
  let idx = 0;

  return (): string => {
    if (idx === names.length)
      idx = 0;

    return names[idx++];
  }
}

const makeName: () => string = makeNames();

console.log(
  [1, 2, 3, 4, 5, 6, 7].map(n => makeName())
);
