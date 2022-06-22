/* Connect to mysql and run a SELECT query
Log the results to the console */
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
			function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    }); 
});




