const https = require('https');
const start = Date.now();

const doRequest = () =>
  https
    .request('https://www.google.com', res => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(`${0.001 * (Date.now() - start)} seconds`);
      });
    })
    .end();

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
