const express = require('express');
const path = require('path');

const app = express();


// Routes definition
app.use(require('./api/champions.api'));
app.use(require('./api/champion.api'))

// Angular routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../../dist/index.html'));
});


module.exports = app;