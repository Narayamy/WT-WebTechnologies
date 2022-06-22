exports.module = function(par){
	var fs = require('fs');
	fs.appendFile('log.txt', '\r\n' + new Date() + par, function(err){
		if (err) throw err;
		console.log('Saved');
		});
}