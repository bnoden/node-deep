const fs = require('fs');

const ff = Object.assign({}, fs);
const ffkey = Object.keys(ff)
  .sort()
  .join('\n');

console.log(ffkey);
