
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'angularproj',
	database: 'outil'
});

connection.connect(function() {
	console.log("Database connected");
});


module.exports.findAll = function(callback) {
	connection.query("SELECT * FROM users ", callback);
}

module.exports.sendResponse = function(success, res) {
	if(success) {
		res.send({'success': 'true'});
	} else {
		res.send({'success': 'false'});
	}
}