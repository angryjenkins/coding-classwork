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
    database: 'day41_wizard_schools'
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

// GET route for the root directory
app.get('/', function(req, res) {
  connection.query('SELECT * FROM schools', function(err, result) {

  // use database data to populate an html file
	var html = '<h1> These are the schools~!!! </h1>';
  html += '<div style="background-color:blue; color:white; margin-left:30px;">';
  html += '<dl>';

	for (var s = 0; s < result.length; s++) {
			html += '<dt> ' + result[s].id + ' </dt>';
			html += '<dd> ' + result[s].name + ' </dd>';
	};

  html += '</dl>'
  html += '</div>';

  res.send(html);
  });
});

var port = 3000;
app.listen(port);