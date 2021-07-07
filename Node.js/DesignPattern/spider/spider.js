import fs from 'fs';
import { urlToFilename } from "./utils";
import superagent from 'superagent';
import mkdirp from 'mkdirp';

function saveFile(filename, contents, cb) {
  mkdirp(path.dirname(filename), (err) => {
    if (err) return cb(err);
    fs.writeFile(filename, contents, cb);
  });
}

function download(url, cb) {
  superagent.get(url).end((err, res) => {
    if (err) return cb(err);
    saveFile(__filename, res, (err) => {
      if (err) return cb(err);
      console.log(`Downloaded and saved: ${url}`);
      cb(null, res.text);
    });
  });
}

function spider(url, cb) {
  const filename = urlToFilename(url);
  fs.access(filename, (err) => {
    if (!err || err.code !== 'ENOENT') {
      return cb(null, filename, false);
    }
    download(url, filename, (err) => {
      if (err) return cb(err);
      cb(null, filename, true);
    });
  });
}

export default spider;
