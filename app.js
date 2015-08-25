// include and setup express
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

// respond with "hello universe" when a GET request is made to the homepage
app.get('/hello', function(req, res) {
  res.send('hello universe');
});

// setup our public directory (which will serve any file stored in the 'public' directory)
app.use(express.static('public'));

// create the server based on express
var server = require('http').createServer(app);

// start the server
server.listen(1337, '127.0.0.1', function () {
  console.log('Express server listening on %d', 1337);
});