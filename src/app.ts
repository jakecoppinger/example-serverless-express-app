import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  req;
  console.log("Loaded /");
  res.send('hello world!');
});

export default app;
