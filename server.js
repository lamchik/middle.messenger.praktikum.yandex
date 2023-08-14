const express = require('express');
const path = require('path');
// const {fileURLToPath} = require('url');

const app = express();
const PORT = 3000;

// const current = fileURLToPath(import.meta.url);
// const __dirname = path.dirname("/");

app.use(express.static(path.join(__dirname, "/dist")))

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

