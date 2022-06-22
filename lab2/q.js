var http = require('http');
var url = require('url');
var fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  var q = url.parse(req.url, true);
  fs.appendFile('logFile.txt', '\r\n' + new Date() + q.pathname, function(err){
	if (err) throw err;
	console.log('Saved');
	});
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080