const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3002;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

// register event listener
io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', (socket) => {
    console.log('Client disconnected');
  })
})

server.listen(port, () => {
  console.log('Server running on port 3002')
});