const express = require('express');
const app = express();
const port = 3000; // Choose any available port number

app.use(express.static('public')); // Serve files from the 'public' directory

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
