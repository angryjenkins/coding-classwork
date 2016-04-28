var express = require('express');
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'studentsDB'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

app.get('/cast', function(req, res) {
  connection.query('SELECT name FROM students ORDER BY id', function(err, result) {
      var html = "<div>"
      html += "<h2>Students</h2>"
      for (var i = 0; i < result.length; i++) {
        html += "<p>" + (i+1) + ". " + result[i].name + "</p>";
      }
      html += "</div>";
      res.send(html);
  });
});

app.get('/coolness-chart', function(req, res) {
  connection.query('SELECT name, coolness_points FROM students ORDER BY coolness_points DESC', function(err, result) {
      var html = "<div>"
      html += "<h2>Coolness Chart</h2>"
      for (var i = 0; i < result.length; i++) {
        html += "<p>" + (i+1) + ". " + result[i].name + "'s got " + result[i].coolness_points + " coolness points!</p>";
      }
      html += "</div>";
      res.send(html);
  });
});

app.get('/attitude-chart/:type', function(req, res) {
  connection.query('SELECT name, attitude FROM students WHERE attitude ="' + req.params.type.charAt(0).toUpperCase() + req.params.type.slice(1) + '"; ', function(err, result) {
      if (err) {
        var html = "<div>";
        html += "<h2>Sorry, " + req.params.type.charAt(0).toUpperCase() +  req.params.type.slice(1) + " is not an attitude in the table";
        res.send(html)
      }
      else {
        var html = "<div>"
        html += "<h2>Cast members with " + req.params.type + " attitude</h2>"
        for (var i = 0; i < result.length; i++) {
          html += "<p>" + (i+1) + ". " + result[i].name + "</p>";
        }
        html += "</div>";
        res.send(html);
      } 
  });
});

var port = 3000;
app.listen(port);