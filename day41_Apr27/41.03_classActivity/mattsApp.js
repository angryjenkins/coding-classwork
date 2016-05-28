// make an express server available
var express = require('express');
var app = express();

// connect a mysql database
var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '04051997',
    database: 'day41_coolness_attitude'
});

// connect to the mysql database
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected to mySQL on port 3306')
    console.log('connected as id ' + connection.threadId);
});

app.get('/cast', function(req, res) {
  connection.query('SELECT * FROM coolness', function(err, result) {

  // use database data to populate an html file
	var html = '<h1> The Cast of Seinfeld!!! </h1>';

  html += '<div style="background-color:blue; color:white; margin-left:30px;">';
  html += '<ul>';

	for (var i=0; i<result.length; i++) {
			html += '<li> ' + result[i].name + ' </li>';
	};

  html += '</ul>'
  html += '</div>';

  res.send(html);
  });
});

app.get('/coolness-chart', function(req, res) {
  connection.query('SELECT * FROM coolness ORDER BY coolness_points DESC' , function(err, result) {

  // use database data to populate an html file
	var html = '<h1> Seinfeld Cast Coolness </h1>';

	  html += '<div style="background-color:blue; color:white; margin-left:30px;">';
	  html += '<table style="color:white;">';
	  html += '<thead>'
	  html += '<tr>';
	  html += '<th>Name</th>';
	  html += '<th>Coolness Points</th>';
	  html += '</tr>'
	  html += '</thead>';
	  html += '<tbody>';

	for (var i=0; i<result.length; i++) {
		html += '<tr>';
		html += '<td> ' + result[i].name + ' </td>';
		html += '<td> ' + result[i].coolness_points + ' </td>';
		html += '</tr>';
	};

	html += '</tbody>';
  	html += '</table>';
  	html += '</div>';

  res.send(html);
  });
});


app.get('/attitude-chart', function(req, res) {
  connection.query('SELECT * FROM coolness', function(err, result) {

  // use database data to populate an html file
	var html = '<h1> Seinfeld Cast Attitudes </h1>';

	  html += '<div style="background-color:blue; color:white; margin-left:30px;">';
	  html += '<table style="color:white;">';
	  html += '<thead>'
	  html += '<tr>';
	  html += '<th>Name</th>';
	  html += '<th>Attitude</th>';
	  html += '</tr>'
	  html += '</thead>';
	  html += '<tbody>';

	for (var i=0; i<result.length; i++) {
		html += '<tr>';
		html += '<td> ' + result[i].name + ' </td>';
		html += '<td> ' + result[i].attitude + ' </td>';
		html += '</tr>';
	};

	html += '</tbody>';
  	html += '</table>';
  	html += '</div>';

  res.send(html);
  });
});

app.get('/attitude-chart/:type', function(req, res) {
  connection.query('SELECT * FROM coolness WHERE attitude=' + req.params.type.trim(), function(err, result) {
  // use database data to populate an html file
	var html = '<h1> Seinfeld Cast Attitudes </h1>';

	  html += '<div style="background-color:blue; color:white; margin-left:30px;">';
	  html += '<table style="color:white;">';
	  html += '<thead>'
	  html += '<tr>';
	  html += '<th>Name</th>';
	  html += '<th>Attitude</th>';
	  html += '</tr>'
	  html += '</thead>';
	  html += '<tbody>';

	for (var i=0; i<result.length; i++) {
		html += '<tr>';
		html += '<td> ' + result[i].name + ' </td>';
		html += '<td> ' + result[i].attitude + ' </td>';
		html += '</tr>';
	};

	html += '</tbody>';
  	html += '</table>';
  	html += '</div>';

  res.send(html);
  });
});

var port = 3000;
app.listen(port);