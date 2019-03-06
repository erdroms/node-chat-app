const path = require("path");
const express = require("express");

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3002;

var app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log('Server running on port 3002')
});