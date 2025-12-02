const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views3', 'home.html'));
});

app.get('/second', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views3', 'second.html'));
});

app.listen(3000);
