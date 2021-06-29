import fs from 'fs';

const originalReadFile = fs.readFile;
let mockedResponse = null;

function mockReadFile(path, cb) {
  setImmediate(() => cb(null, mockedResponse));
}

export function mockEnable(respondWith) {
  mockedResponse = respondWith;
  fs.readFile = mockReadFile;
}

export function mockDisable() {
  fs.readFile = originalReadFile;
}

