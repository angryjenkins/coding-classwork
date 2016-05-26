var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Database configuration
var mongojs = require('mongojs');

var databaseUrl = "zoo";
var collections = ["animals"];


var database = mongojs(databaseUrl, collections);

var db = mongojs('zoo');
var mycollection = db.collection('animals');


database.on('error', function(err) {
  console.log('Database Error:', err);
});



// Write your routes here

app.get('/', function(req, res){
	db.animals.find({},function (err, docs) {
		res.json(docs); 
	})
})

app.get('/:name', function(req, res){
	db.animals.find({"name": name},function (err, docs) {
		res.json(docs); 
	})
})

app.get('weight/:weight', function(req, res){

})


app.listen(3000, function() {
  console.log('App running on port 3000!');
});
