const express = require('express');

const app = express();


app.get('/api/ejemplo', (req, res) => {
  res.status(200).json({
    status: true,
    data: {
      algo: "Aquí va a algo",
      otro: "Otra cosa"
    }
  });
});


module.exports = app;