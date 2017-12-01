const fs = require('fs');
const dh = require('../decToHex');

const decArray = ['', 'abc', 1224, 13.5, 255, 256, 65535, -65535, 3, -3];

const samples = (s, o) => {
  s = '';
  for (let i in decArray) {
    o = dh.decToHex(decArray[i]).split(' ').length === 1 ? '0x' : '';
    s += `${decArray[i]} = ${o}${dh.decToHex(decArray[i])}\n`;
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
