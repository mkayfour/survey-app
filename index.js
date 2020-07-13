const express = require('express');

const App = express();

App.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;

App.listen(5000, () => {
  console.log('running on 3000');
});
