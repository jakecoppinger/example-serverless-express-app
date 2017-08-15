const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log("Loaded /");
  res.send('hello world!');
});

app.get('/hello', (req, res) => {
  res.send('the path /hello');
});

module.exports = app;
