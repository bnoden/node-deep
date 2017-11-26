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
