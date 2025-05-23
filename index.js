const express = require('express');
const app = express();

app.use((req, res) => {
  console.log({ message: 'ini request' }, req.headers);
  res.send('ini response');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
