// const express = require('express');
const logger = require('./logger');

const app = express();
const port = 3000;

app.use(express.static('public')); // Serve files from the 'public' directory

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');

  // Log the request
  logger.info(`Request received: ${req.method} ${req.url}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
