const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist'));

const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log('App now running on port:', port);
});

const handleError = (res, reason, message, code) => {
  console.error("ERROR:" + reason);
  res.status(code || 500).json({"error": message});
};


// Routes
app.get('/api/ejemplo', (req, res) => {
  res.status(200).json({
    status: true,
    data: {
      algo: "Aquí va a algo",
      otro: "Otra cosa"
    }
  });
});

// Rutas que maneja Angular
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});