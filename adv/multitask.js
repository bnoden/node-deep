const https = require('https');
const pbkdf2 = require('crypto').pbkdf2;
const fs = require('fs');

const start = Date.now();
const url = 'https://www.google.com';

const doRequest = () =>
  https
    .request(url, res => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(`${0.001 * (Date.now() - start)} seconds`);
      });
    })
    .end();

const doHash = (hash = 0) =>
  pbkdf2('a', 'b', 0x186a0, 0b1000000000, 'sha512', () =>
    console.log(`#${hash}: ${0.001 * (Date.now() - start)} seconds`)
  );

doRequest();

fs.readFile('multitask.js', 'utf8', () => {
  console.log(`FileSystem: ${0.001 * (Date.now() - start)} seconds`);
});

for (let i = 1; i <= 4; i++) {
  doHash(i);
}
