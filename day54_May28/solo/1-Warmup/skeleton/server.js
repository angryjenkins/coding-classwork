var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static('public'));

//Database configuration
var mongojs = require('mongojs');
var databaseUrl = "week18day3";
var collections = ["books"];
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});



// Routes
app.get('/', function(req, res) {
  res.send(index.html);
});



//Save to DB
app.post('/submit', function(req, res) {
	//if we want the object to have a boolean value of false, we have to do it here, because the ajax post will convert it to a string instead of a boolean
	//this is done for you below. So save the "book" object we create to your DB
  var book = req.body;
  book.read = false;


});


//Get list of books with the field "read" marked true
app.get('/read', function(req, res) {


});

//Get list of books with the field "read" marked false
app.get('/unread', function(req, res) {


});


//Use the ID parameter to update the value of "read" to true
app.get('/markread/:id', function(req, res) {
	//Remember: when searching by an id, the id needs to be passed in as (mongojs.ObjectId(IDYOUWANTTOFIND))


});

//Use the ID parameter to update the value of "read" to false
app.get('/markunread/:id', function(req, res) {
	//Remember: when searching by an id, the id needs to be passed in as (mongojs.ObjectId(IDYOUWANTTOFIND))


});



app.listen(3000, function() {
  console.log('App running on port 3000!');
});
