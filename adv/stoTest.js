// setTimeout(() => {
//   console.log('timeout');
// }, 3000);
//
// console.log('before timeout');

const doWork = duration => {
  const start = Date.now();
  while (Date.now() - start < duration) {}
  console.log('timeout')
};

doWork(3000);
console.log('before timeout');
