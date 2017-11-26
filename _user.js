const fs = require('fs');
const _os = require('os');

const _userInfo = _os.userInfo();
const currentOS = _os.platform();

console.log('User info: ');
console.log(_userInfo);
console.log();
console.log('Username: ' + _userInfo.username);
console.log();
console.log('Current OS: ' + currentOS);
console.log();

const userTest = () => {
  return `\n${Date()}\nUsername: ${_userInfo.username}\nCurrent OS: ${currentOS}\n`;
};

fs.appendFile('user_test.txt', userTest(), err => {
  if (err) {
    console.log('error');
  }
});
