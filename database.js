var mysql = require('mysql');

// create database connection
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'steveD66',
	database : 'nodelogin'
});
connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
  });
//export connection
module.exports = connection;