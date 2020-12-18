// for - in
let names: string[] = ['Jack', 'Jane', 'Steve'];

for (const index in names) {
  const name = names[index];
  console.log(`[${index}]: ${name}`);
}

// for - of
// 아이템 값 대상으로 순회한다.
for (const name of ['Jack', 'Jane', 'Steve']) {
  console.log(name);
}