// Imports
var mysql = require('mysql2');

const config = require('../config.json');

// Load the config file
const { host, port, user, password, database } = config.database;
console.log(host, port, user, password, database)

// Function createConnection
var connection = mysql.createConnection({
	host,
	user,
	password,
	database
});

// Fuction connect
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database Connected Successfully..!!');
	}
});

// Exports 
module.exports = connection;