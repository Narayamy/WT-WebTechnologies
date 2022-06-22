/* Connect to mysql, run a SELECT query 
iterate through the results object*/
var mysql = require('mysql');
var fs = require('fs');

var con = mysql.createConnection({
  host: "localhost",
  user: "root1",
  password: "SQLroot",
  database: "world"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");

	var heading = "Country, Population \r\n";
	con.query("SELECT * FROM country", function (err, rows, fields) {
		if (err) throw err;
	
		con.query("SELECT count (*) AS counter From country"), function(err, rows, fields){
			if (err) throw err;
			var date = new Date()
			var filePath = 'countries' + date + '.csv';
			for (var i = 0; i < rows.length; i++) {
				fs.appendFile(filePath, heading, function(err){
					if (err) throw err;
					var countries = heading + rows[i].Name + "," + rows[i].Population + "\r\n" + counter + "\r\n";
				});
			};
		}
	});
});
