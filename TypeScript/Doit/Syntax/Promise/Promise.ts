import {readFile} from "fs";

export const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>((
    resolve: (value: string) => void,
    reject: (err: Error | null) => void) => {
    readFile(filename, (err: Error | null, buf: Buffer) => {
      if (err) reject(err);
      else resolve(buf.toString());
    });
  });

readFilePromise('./package.json')
  .then((content: string) => {
    console.log(content);
    return readFilePromise('./tsconfig.json');
  })
  .then((content: string) => {
    console.log(content);
    return readFilePromise('.');
  })
  .catch((err: Error) => console.log(`error: ${err.message}`))
  .finally(() => console.log('프로그램 종료'));

