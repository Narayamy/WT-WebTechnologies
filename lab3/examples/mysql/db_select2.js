/* Connect to mysql, run a SELECT query 
iterate through the results object*/
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "world"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM city limit 10", 
			function (err, rows, fields) {
	if (err) throw err;
	
	for (var i = 0; i < rows.length; i++) {
       console.log("City:" + rows[i].Name + 
				" - Population:" + rows[i].Population);
	};
  });
});






