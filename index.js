const express = require('express');

const App = express();

App.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;

App.listen(PORT, () => {
  console.log('running on ', PORT);
});
