var mysql = require('mysql2');

const config = require('../config.json');

const { host, port, user, password, database } = config.database;
console.log(host, port, user, password, database)

var connection = mysql.createConnection({
	host,
	user,
	password,
	database
});

connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database Connected Successfully..!!');
	}
});

module.exports = connection;