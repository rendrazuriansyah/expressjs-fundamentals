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

app.get('/cats/:id/photos/:photoId', (req, res) => {
  const { id, photoId } = req.params; // jika params cmn ada 1 maka gausa didestructuring
  res.send(`get meow photo id ${photoId} for cat id ${id}`);
});

app.post('/cats', (req, res) => {
  res.send('meow: post');
});

app.get('/dogs', (req, res) => {
  res.send('woof');
});

app.get('/dogs/:id/photos/:photoId', (req, res) => {
  const { id, photoId } = req.params;
  res.send(`get woof photo id ${photoId} for dog id ${id}`);
});

// misal: http://localhost:3000/search?keyword=dogs&sort=asc
app.get('/search', (req, res) => {
  const { keyword, sort } = req.query;
  // res.send(req.query); // req.query = { keyword: 'dogs', sort: 'asc' }
  if (!keyword || !sort) {
    return res.send('no query');
  }
  res.send(`searching for ${keyword} in ${sort} order`);
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
