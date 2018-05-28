const fs = require('fs');
const { decToHex } = require('../decToHex');

const decs = [
  '',
  'abc',
  1224,
  13.5,
  255,
  256,
  65535,
  -65535,
  3,
  -3,
  16383,
  -8192
];
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
  'fffffffd',
  '3fff',
  'ffffe000'
];

const samples = (s, o, numberPassed, pass) => {
  s = '';
  numberPassed = 0;
  for (let i in decs) {
    if (solution[i] === decToHex(decs[i])) {
      numberPassed++;
      pass = 'PASS';
    } else {
      pass = 'FAIL';
    }
    o = decToHex(decs[i]).split(' ').length > 1 ? '' : '0x';
    s += `${decs[i]} = ${o}${decToHex(decs[i])} ${pass}\n`;
  }
  s += `\n${numberPassed} of ${decs.length} tests passed\n`;
  return s;
};

const message = 'Show if pass or fail';

const testSample = () =>
  `\n${Date()}\nmessage: ${message}\n\nBEGIN\n${samples()}END\n`;

console.log(testSample());

fs.appendFile(
  'log/decToHex_log.txt',
  testSample(),
  err => err && console.log('error')
);
