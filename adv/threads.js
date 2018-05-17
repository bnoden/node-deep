const pbkdf2 = require('crypto').pbkdf2;
const fs = require('fs');

const text = {
  log: str => {
    console.log(str);
    fs.appendFile(
      'log/threads_log.txt',
      `${str}\n`,
      err => err && str.append('error')
    );
  }
};

const start = Date.now();

const benchmark = (thread = 0) =>
  pbkdf2('a', 'b', 0x186A0, 0b1000000000, 'sha512', () =>
    text.log(`${thread}: ${0.001 * (Date.now() - start)} seconds`)
  );

const LogBenchmarks = (i = 1, max = 8) => {
  text.log(
    `${'-'.repeat(16)}\nprocess.env.UV_THREADPOOL_SIZE = ${
      process.env.UV_THREADPOOL_SIZE
    }`
  );

  while (i <= max) {
    benchmark(i);
    ++i;
  }
};

LogBenchmarks();
