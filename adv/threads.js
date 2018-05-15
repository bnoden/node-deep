const pbkdf2 = require('crypto').pbkdf2;

const start = Date.now();

const benchmark = (thread = 0) =>
  pbkdf2('a', 'b', 100000, 512, 'sha512', () =>
    console.log(`${thread}:`, `${0.001 * (Date.now() - start)} seconds`)
  );

benchmark(1);
benchmark(2);
benchmark(3);
benchmark(4);
