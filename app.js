// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var head, body, footer;
  head = '<html><head><link href="http://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" type="text/css"></head>';
  body = '<body style="background-image: url(http://cdn.bluer.com/images/shanghai-skyline.jpg); background-size: cover;"><h2 style="color: white; text-align: center; font-family: Raleway;"><strong>Entrepreneur\'s</strong> Chinese</h2></body>';
  footer = '</html>';
  res.end(head + body + footer);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');