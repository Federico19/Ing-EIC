const express = require('express');
const app = express();
const sum = require('./operation');

// Routes
app.get("/", (req, res) => {
  const result = sum(2,2);
  res.send(`2 y 2 son ${result}`);
});

module.exports = app;
