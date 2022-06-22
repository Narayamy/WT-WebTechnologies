// Create a javascript file which will increment a count in a file(count.txt) each time a webpage is requested
// from the server. Also write the new count out to the console.
// If the file doesn’t exist, create it.

var http = require('http');
var url = require('url');
var fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
	res.write('Working!'); //write a response to the client
	var q = url.parse(req.url, true);
	var count = 0;
	fs.appendFile('logFile.txt', q.pathname, function(err){
		if (err) throw err;
		console.log('Saved');
	});
	res.end(); //end the response
}).listen(8080); //the server object listens on port 8080