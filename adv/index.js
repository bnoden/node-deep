const cluster = require('cluster');
const pbkdf2 = require('crypto').pbkdf2;

// If file executed in master mode:
if (cluster.isMaster) {
  // Re-execute index.js in child mode
  cluster.fork();
} else {
  console.log('cluster.worker.id:', cluster.worker.id);
  // Else this is a child, run as  server only
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
    pbkdf2('a', 'b', 0x186a0, 0b1000000000, 'sha512', () =>
      res.send('You got Response')
    );
  });

  app.get('/fast', (req, res) => {
    res.send('FAST worker: ' + cluster.worker.id);
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
}
