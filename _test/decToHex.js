const fs = require('fs');
const { decToHex } = require('../decToHex');

const decArray = ['', 'abc', 1224, 13.5, 255, 256, 65535, -65535, 3, -3];
const solution = [
  'Input must be a number',
  'Input must be a number',
  '4c8',
  'd',
  'ff',
  '100',
  'ffff',
  'ffff0001',
  '3',
  'fffffffd'
];

const samples = (s, o, numberPassed, pass) => {
  s = '';
  numberPassed = 0;
  for (let i in decArray) {
    if (solution[i] === decToHex(decArray[i])) {
      numberPassed++;
      pass = 'PASS';
    } else {
      pass = 'FAIL';
    }
    o = decToHex(decArray[i]).split(' ').length > 1 ? '' : '0x';
    s += `${decArray[i]} = ${o}${decToHex(decArray[i])} ${pass}\n`;
  }
  s += `\n${numberPassed} of ${decArray.length} tests passed\n`;
  return s;
};

const message = 'Show if pass or fail';

const testSample = () => {
  return `\n${Date()}\nmessage: ${message}\n\nBEGIN\n${samples()}END\n`;
};

console.log(testSample());

fs.appendFile('log/decToHex_log.txt', testSample(), err => {
  if (err) {
    console.log('error');
  }
});
