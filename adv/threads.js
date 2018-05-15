const crypto = require('crypto');

const start = Date.now();

const benchmark = (str = '') =>
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () =>
    console.log(`${str}:`, `${0.001 * (Date.now() - start)} seconds`)
  );

benchmark('1');
benchmark('2');
