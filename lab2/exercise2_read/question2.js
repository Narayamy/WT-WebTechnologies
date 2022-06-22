var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	var pathWay = "./"+q.pathname+".html";
	if (q.pathname == '/home' || q.pathname == '/contactus' || q.pathname == '/aboutus'){
		fs.readFile(pathWay, function(err, data) {
			if (err) throw err;
			console.log('Saved');
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
		});
	}
	else{
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('404 error');
	}
}).listen(8080);