const fs = require('fs');
const { colorOpposite } = require('../colorOpposite');

const colorArray = ['#FFFFFF', '#000000', '#543210', '#020202', '#D0D0D0', '#B01010', '#8182DE', '#0DBA2D', '#261C05'];

const samples = s => {
  s = '';
  for (let i in colorArray) {
    s += `The opposite of ${colorArray[i]} is ${colorOpposite(
      colorArray[i]
    )}\n`;
  }
  return s;
};

const message = '';

const testSample = () => {
  return `\n${Date()}\nmessage: ${message}\n\nBEGIN\n${samples()}END\n`;
};

console.log(testSample());

fs.appendFile('log/colorOpposite_log.txt', testSample(), err => {
  if (err) {
    console.log('error');
  }
});
