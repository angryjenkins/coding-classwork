// Dependencies 
var express = require('express');
var bodyParser = require('body-parser');

// Creates an instance of "express server"
var app = express();
var PORT = 3000;

// Incorporate body-parser middleware
app.use(bodyParser.urlencoded({ extended: false}));

var yodaCounter = 0;
var darthMaulCounter = 0;
var jediApprentice = "";

var yoda = {
	name: "Yoda",
	role: "Jedi Master",
	age: "150000",
	forcePoints: "20000"
}

// Basic Routes
app.get('/yoda', function(req, res){
	yodaCounter++;
	// res.send("YODA WAS HERE " + yodaCounter + " times.");
	res.json(yoda);
})

app.get('/darthmaul', function(req, res){
	darthMaulCounter++;
	res.send("DARTH MAUL WAS HERE " + darthMaulCounter + " times.");
})

// Create a post request 
app.post("/yoda", function(req, res){
	console.log(req.body);
})

// Listener
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
})