var express = require('express');
var app = express();

//Database configuration
var mongojs = require('mongojs');
var databaseUrl = "zoo";
var collections = ["animals"];
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});

app.use(express.static('public'));


// Routes
app.get('/', function(req, res) {
  res.send(index.html);
});

//Get from DB
app.get('/all', function(req, res) {
  db.animals.find({}, function(err, found) {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});

app.get('/name', function(req, res) {
  db.animals.find().sort({name:1}, function(err, found) {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});

app.get('/weight', function(req, res) {
  db.animals.find().sort({weight:-1}, function(err, found) {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});



app.listen(3003, function() {
  console.log('App running on port 3003!');
});
