var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var url = require('url');
var http = require('http');
// Creates an instance of "express server"
var app = express();
var PORT = 3000;

var reservationData = [];

// Incorporate body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',function(req,res){
	// res.send('Welcome to Table!');
	res.sendFile(path.join(__dirname + '/welcome.html'));
});

app.get('/reserve',function(req,res){
	// res.send('Welcome to Reservation!!');
	res.sendFile(path.join(__dirname + '/reservation.html'));
});

app.get('/admin',function(req,res){
	// res.send('Welcome to the Admin!!');
	res.sendFile(path.join(__dirname + '/admin.html'));
});

app.post('/reserve',function(req,res){

	// res.send('Welcome to the Admin!!');
	// res.sendFile(path.join(__dirname + '/admin.html'));
	var name = $('#name').val.trim();
	var phone = $('#phone').val.trim();
	var email = $('#email').val.trim();

	$('#submitter').on('click', function(){
		saveReservation();

		$('#name').val = '';
		$('#phone').val = '';
		$('#email').val = '';
		return false;
	});

	function saveReservation(name,phone,email){
		var reservationID = 0;

		var reservation = {
			name: name,
			phone: phone,
			email: email,
			id: reservationID++
		}
		console.log(reservation);

		reservationData.push(reservation);

		console.log(reservationData);

	}
});

app.post('/welcome',function(req,res){

	// res.send('Welcome to the Admin!!');
	// res.sendFile(path.join(__dirname + '/admin.html'));
});


function getFromApi(ID){
	var url = 'http://localhost:3000/tables.html';
	$.ajax({url: url, method: 'GET'})
	.done(function(response) {
		console.log(response);
		// $('#results').html('Name: '+response.name+'<br>');
		// $('#results').append('Roll: '+response.roll+'<br>');
		// $('#results').append('Age: '+response.age+'<br>');
		// $('#results').append('Force Level: '+response.forcePoints+'<br>');
		//console.log(response);
	});
};

function postReservation(name,phone,email,id){
	var url = 'http://localhost:3000/reservation.html';
	$.ajax({url: url, method: 'POST'})
	.done(function(response) {
		res.send(response);
		// $('#results').html('Name: '+response.name+'<br>');
		// $('#results').append('Roll: '+response.roll+'<br>');
		// $('#results').append('Age: '+response.age+'<br>');
		// $('#results').append('Force Level: '+response.forcePoints+'<br>');
		//console.log(response);
	});
};

app.listen(PORT, function() {
	console.log('App RESERVATIONS.js listening on PORT ' + PORT);
});