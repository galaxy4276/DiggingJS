import {readFilePromise} from "./fs";

const readFilesAll = async (filenames: string[]) => {
  return await Promise.all(
    filenames.map(filename => readFilePromise(filename))
  );
} // await 은 Promise의 then 이 수행된 값을 반환한다.
// Promise.all 은 각 Promise 객체의 resolve 값을 반환한다.


readFilesAll(['./package.json', './tsconfig.json'])
// await 구문이 적용되었으니 당연히 해소된(resolved) 결과 값을 받게 된다.
  .then(([packageJson, tsconfigJson]: string[]) => {
    console.log(`<package.json>: ${packageJson}`);
    console.log(`<tsconfig.json>: ${tsconfigJson}`);
  })
  .catch((err: Error) => console.log(`error: ${err.message}`));

