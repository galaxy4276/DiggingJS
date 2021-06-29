import fs from 'fs';
import { mockDisable, mockEnable } from './mock-read-file';

const buffer = Buffer.from('Hello World');
console.log({ buffer });

mockEnable(buffer);

fs.readFile('fake-path', (err, data) => {
  if (err) {
    console.dir(err);
    process.exit(1);
  }
  console.log(data.toString());
});

mockDisable();
