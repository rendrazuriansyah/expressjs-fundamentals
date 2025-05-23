const express = require('express');
const app = express();

// app.use((req, res) => {
//   console.log({ message: 'ini request' }, req.headers);
//   res.send('ini response');
// });

app.get('/', (req, res) => {
  res.send('homepage');
});

app.get('/cats', (req, res) => {
  res.send('meow: get');
});

app.post('/cats', (req, res) => {
  res.send('meow: post');
});

app.get('/dogs', (req, res) => {
  res.send('woof');
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
