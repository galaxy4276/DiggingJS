/*
  fs 패키지는 같은 기능을 동기와 비동기로 나누어서 제공한다.
  Buffer: node.js 제공 클래스로서 바이너리 데이터를 저장하는 기능을 수행

 */

import fs from 'fs';
import ErrnoException = NodeJS.ErrnoException;
console.log('read package.json using synchronous api...');
const buffer: Buffer = fs.readFileSync('./package.json');
console.log(buffer.toString());

fs.readFile('./package.json', (err: Error | null, buffer: Buffer): void => {
  if (err) {
    console.error(err);
    throw Error('readFile Error');
  }
  console.log('read package.json using asynchronous api...');
  console.log(buffer.toString());
});


// Promise 와 async/await 구문을 사용한 예
export const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>((resolve: any, reject: any) => {
    fs.readFile(filename, (err: Error | null, buffer: Buffer) => {
      if (err)
        reject(err);
      else
        resolve(buffer.toString());
    });
  });

(async () => {
  const content = await readFilePromise('./package.json');
  console.log('read package.json using Promise and async/await...');
  console.log(content);
})();

