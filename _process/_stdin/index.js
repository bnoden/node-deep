const { exit, stdin } = require('process');

stdin.resume();
stdin.setEncoding('utf8');
const util = require('util');

console.log("Enter 'quit' to exit.");

stdin.on('data', text => {
  input = util.inspect(text).split('\\')[0].replace(/(['])/g, "");
  console.log('user input: ', input);
  if (input.toLowerCase() === 'quit') {
    done();
  }
});

const done = () => {
  console.log('exiting');
  exit();
};
