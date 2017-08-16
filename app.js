const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log("Loaded /");
  res.send('hello world!');
});

module.exports = app;
