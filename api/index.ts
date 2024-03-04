require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Welcome to the Product API!');
});

app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;
