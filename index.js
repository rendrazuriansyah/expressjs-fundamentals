const express = require('express');
const app = express();

app.use(() => {
  console.log('Middleware running');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
