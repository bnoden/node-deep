const express = require('express');
const app = express();
const fs = require('fs');
const { _userInfo, currentOS } = require('./_user');

app.get('/', (req, res) => {
  res.send(`<h3><a href="./api/user">User API</a></h3>`);
});

app.get('/api/user', (req, res) => {
  res.send({
    username: _userInfo.username,
    os: currentOS,
    dateTime: Date()
  });
});

const port = process.env.PORT || 8000;
app.listen(port);
