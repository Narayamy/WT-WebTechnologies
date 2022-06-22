var http = require('http');
var url = require('url');
var dt = require('./module');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  var q = url.parse(req.url, true);
  var pathWay = q.pathname;
  dt.module(pathWay);
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080