require('./server/config/config');

const express = require('express');

const app = express();

// Angular index
app.use(express.static(__dirname + '/dist'));

// Routes
app.use(require('./server/routes/routes'));

// Server connection
const server = app.listen(process.env.PORT, () => {
  console.log('Server now running on port: ', process.env.PORT);
});