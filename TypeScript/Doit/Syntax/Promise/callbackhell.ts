import {readFile} from "fs";

readFile('./package.json', (err: Error | null, buffer: Buffer): void => {
  if (err) throw err;
  else {
    console.log('package.json');
    const content: string = buffer.toString();
    console.log(content);

    readFile('./tsconfig.json', (err: Error | null, buffer: Buffer): void => {
      if (err) throw err;
      else {
        console.log('tsconfig.json');
        const content: string = buffer.toString();
        console.log(content);

        readFile('./fs.ts', (err: Error | null, buffer: Buffer): void => {
          if (err) throw err;
          else {
            console.log('fs.ts');
            const content: string = buffer.toString();
            console.log(content);

            readFile('./yarn.lock', (err: Error | null, buffer: Buffer): void => {
              if (err) throw err;
              else {
                  console.log('yarn.lock');
                  const content: string = buffer.toString();
                  console.log(content);
                }
              });
            }
          });
        }
      });
    }
  });