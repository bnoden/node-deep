const cluster = require('cluster');

// If file executed in master mode:
if (cluster.isMaster) {
  // Re-execute index.js again in child mode
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  console.log('cluster.worker.id:', cluster.worker.id);
  // Else this is a child, run as  server only
  const express = require('express');
  const app = express();

  const doWork = duration => {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  };

  app.get('/', (req, res) => {
    doWork(3500);
    res.send('worker: ' + cluster.worker.id);
  });

  app.get('/fast', (req, res) => {
    res.send('FAST worker: ' + cluster.worker.id);
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
}
