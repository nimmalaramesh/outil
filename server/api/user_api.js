var express = require('express');
var app = express();

// Import User Module Containing Functions Related To User Data
var user = require('../models/user');

// API Routes
app.get('/', function(req, res) {

	user.findAll(function(err, rows, fields) {
		if(err) throw err;
		res.json(rows);
	})
});

module.exports = app;
