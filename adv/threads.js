const pbkdf2 = require('crypto').pbkdf2;

const start = Date.now();

const benchmark = (str = '') =>
  pbkdf2('a', 'b', 100000, 512, 'sha512', () =>
    console.log(`${str}:`, `${0.001 * (Date.now() - start)} seconds`)
  );

benchmark('1');
benchmark('2');
