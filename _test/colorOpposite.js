const fs = require('fs');
const { colorOpposite } = require('../colorOpposite');

const colorArray = ['#FFFFFF', '#000000', '#543210', '#020202', '#D0D0D0', '#B01010', '#8182DE', '#0DBA2D', '#261C05'];
const solution = ['#000000', '#ffffff', '#abcdef', '#fdfdfd', '#2f2f2f', '#4fefef', '#7e7d21', '#f245d2', '#d9e3fa']

const samples = (s, numberPassed, pass) => {
  s = '';
  numberPassed = 0;
  for (let i in colorArray) {
    if (solution[i] === colorOpposite(colorArray[i])) {
      numberPassed++;
      pass = 'PASS';
    } else {
      pass = 'FAIL';
    }
    s += `The opposite of ${colorArray[i]} is ${colorOpposite(
      colorArray[i]
    )} ${pass}\n`;
  }
  s += `\n${numberPassed} of ${colorArray.length} tests passed\n`;
  return s;
};

const message = 'Show if pass or fail';

const testSample = () => {
  return `\n${Date()}\nmessage: ${message}\n\nBEGIN\n${samples()}END\n`;
};

console.log(testSample());

fs.appendFile('log/colorOpposite_log.txt', testSample(), err => {
  if (err) {
    console.log('error');
  }
});
