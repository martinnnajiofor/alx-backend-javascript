//Install Express and in a file named 6-http_express.js, create a small HTTP server using Express module
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);
module.exports = app;
