const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.get('/hello', (req, res) => {
  res.send('the path /hello');
});

module.exports = app;
