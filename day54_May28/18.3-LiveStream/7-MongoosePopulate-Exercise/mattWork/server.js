var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('public'));



//Database configuration
mongoose.connect('mongodb://localhost/week18day3populate');
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});




//Require Schemas
var Note = require('./models/Note.js');
var User = require('./models/User.js');






//adding a user to use in the example
//"unique:true" in schema will prevent duplicates from restarting server
var exampleUser = new User({
  name: "Ernest Hemingway"
});
exampleUser.save(function(err, doc) {
  if (err) {
    console.log(err);
  } else {
    console.log(doc);
  }
});




// Routes
app.get('/', function(req, res) {
  res.send(index.html);
});



//New Note Creation
app.post('/submit', function(req, res) {

  var newNote = new Note(req.body);

//Save the new note
  newNote.save(function(err, doc) {
    if (err) {
      res.send(err);
    } else {

//Find our user and push the new note id into the User's notes array
      User.findOneAndUpdate({}, {$push: {'notes': doc._id}}, {new: true}, function(err, doc) {
        if (err) {
          res.send(err);
        } else {
          res.send(doc);
        }
      });

    }
  });

});


//Route to see notes we have added
app.get('/notes', function(req, res) {
  Note.find({}, function(err, doc) {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});


//Route to see what user looks like without populating
app.get('/user', function(req, res) {
  User.find({}, function(err, doc) {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

//Route to see what user looks like WITH populating
app.get('/populateduser', function(req, res) {

////////////////////////////////////////////////
//WRITE YOUR CODE IN HERE
//RESPOND WITH THE POPULATED USER OBJECT
///////////////////////////////////////////////

});






app.listen(3000, function() {
  console.log('App running on port 3000!');
});
