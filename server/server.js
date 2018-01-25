const path = require('path');
const publicPath = path.join(__dirname,'../public');
const express = require('express');
const port= process.env.port || 3000;
var app =express();

app.use(express.static(publicPath));
app.listen(port, () => {
  console.log('server is running on port 3000');
});

console.log(publicPath);
