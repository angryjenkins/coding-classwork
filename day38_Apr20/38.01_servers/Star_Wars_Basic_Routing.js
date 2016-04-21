// Dependencies 
var express = require('express');
var bodyParser = require('body-parser');

// Creates an instance of "express server"
var app = express();
var PORT = 3000;

// Incorporate body-parser middleware
app.use(bodyParser.urlencoded({ extended: false}));

// Basic Routes
app.get('/yoda', function(req, res){
	res.send("YODA WAS HERE");
})

app.get('/darthmaul', function(req, res){
	res.send("DARTH MAUL WAS HERE");
})

// Listener
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
})