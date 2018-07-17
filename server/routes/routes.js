const express = require('express');
const path = require('path');

const app = express();


// Routes definition
app.use(require('./api/ejemplo.api'));

// Rutas que maneja Angular
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../../dist/index.html'));
});


module.exports = app;