const pbkdf2 = require('crypto').pbkdf2;
const fs = require('fs');

const text = {
  log: str =>
    fs.appendFile('log/threads_log.txt', str, err => err && str.append('error'))
};

const start = Date.now();

const benchmark = (thread = 0) => {
  pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const log = `${thread}: ${0.001 * (Date.now() - start)} seconds`;
    console.log(log);
    text.log(`${log}\n`);
  });
};

const log_benchmarks = (i = 1, max = 12) => {
  while (i <= max) {
    benchmark(i);
    ++i;
  }
  text.log('-----------------------\n');
};

log_benchmarks();
