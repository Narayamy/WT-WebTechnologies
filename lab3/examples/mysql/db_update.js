/* Connect to mysql, run a update query
and display results to the console */
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "world"
});
con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE city SET population = 1700500 
				WHERE ID = 1";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
	console.log(result.changedRows + " record(s) changed");
    console.log("Message from MySQL Server : " 
				+ result.message); 
  });
});
