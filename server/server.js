const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname,'../public');
const express = require('express');
const port= process.env.port || 3000;
var app =express();
var server =http.createServer(app);

const socketIO =require('socket.io');
var io =socketIO(server);
io.on('connection',(socket) => {
  console.log('New user connected');

  socket.emit('newMessage',{
    from:'me@example.com',
    text:'How\'z going on',
    createdAt:212121
  });

  socket.on('createMessage', (message) => {
    console.log(`received message is ${message.text}`);
    io.emit('newMessage',{
      from:'server@node.com',
      text:'Responding back',
      createdAt:99999
    });
  });

  socket.on('disconnect', () => {
    console.log('disconnected from the client');
  });
});





app.use(express.static(publicPath));
server.listen(port, () => {
  console.log('server is running on port 3000');
});

console.log(publicPath);
