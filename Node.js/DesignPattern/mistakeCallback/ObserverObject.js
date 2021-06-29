import { EventEmitter } from 'events';
import { readFile } from "fs";

class FindRegex extends EventEmitter {
  constructor(regex) {
    super();
    this.regex = regex;
    this.files = [];
  }

  addFile(file) {
    this.files.push(file);
    return this;
  }

  find() {
    for (const file of this.files) {
      readFile(file, 'utf8', (err, content) => {
        if (err) {
          return this.emit('error', err);
        }

        this.emit('fileread', content);

        const match = content.match(this.regex);
        if (match) {
          match.forEach(elem => this.emit('found', file, elem));
        }
      });
    }
    return this;
  }
}
const findRegexInstance = new FindRegex(/hello\w/g);

findRegexInstance
  .addFile('Node.js/DesignPattern/mistakeCallback/fileA.txt')
  .addFile('Node.js/DesignPattern/mistakeCallback/fileB.json')
  .find()
  .on('fileread', file => console.log(`${file} was read`))
  .on('found', (file, match) => console.log(`Matched ${match} in ${file}`))
  .on('error', err => console.error(`Error emitted ${err.message}`));
