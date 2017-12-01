const fs = require('fs');
const { decToHex } = require('../decToHex');

const decArray = ['', 'abc', 1224, 13.5, 255, 256, 65535, -65535, 3, -3];

const samples = (s, o) => {
  s = '';
  for (let i in decArray) {
    o = decToHex(decArray[i])[1] === 'r' ? '' : '0x';
    if (decArray[i] === '') { decArray[i] = "''"}
    s += `${decArray[i]} = ${o}${decToHex(decArray[i])}\n`;
  }
  return s;
};

const message = '';

const testSample = () => {
  return `\n${Date()}\nmessage: ${message}\n\nBEGIN\n${samples()}END\n`;
};

console.log(testSample());

fs.appendFile('log/decToHex_log.txt', testSample(), err => {
  if (err) {
    console.log('error');
  }
});
