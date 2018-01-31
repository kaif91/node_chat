var sock=io();
sock.on('connect',function() {
  console.log('connected to server');

  sock.emit('createMessage',{
    from:'me@example.com',
    text:'Sampel email'
  })
});
sock.on('disconnect',function(){
  console.log('disconnected from the server');
});

sock.on('newMessage', function(m) {
  console.log('message',m);
});
