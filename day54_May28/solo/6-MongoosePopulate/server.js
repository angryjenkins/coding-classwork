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
mongoose.connect('mongodb://localhost/week18day3mongoose');
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});




//Require Schemas
var Book = require('./models/Book.js');
var Library = require('./models/Library.js');






//adding a library to use in the example
//"unique" in schema will prevent duplicates from restarting server
var exampleLibrary = new Library({
  name: "Rutgers Campus Library"
});
exampleLibrary.save(function(err, doc) {
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



//New Book Creation
app.post('/submit', function(req, res) {

  var newBook = new Book(req.body);

//Save the new book
  newBook.save(function(err, doc) {
    if (err) {
      res.send(err);
    } else {

//Find our library and push the new book id into the Library's books array
//Need "{new: true}" or else it will return the object as it was before it was updated
      Library.findOneAndUpdate({}, {$push: {'books': doc._id}}, {new: true}, function(err, doc) {
        if (err) {
          res.send(err);
        } else {
          res.send(doc);
        }
      });

    }
  });

});


//Route to see books we have added
app.get('/books', function(req, res) {
  Book.find({}, function(err, doc) {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});


//Route to see what library looks like without populating
app.get('/library', function(req, res) {
  Library.find({}, function(err, doc) {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

//Route to see what library looks like WITH populating
app.get('/populatedlibrary', function(req, res) {
  Library.find({})
    .populate('books')
    .exec(function(err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.send(doc);
      }
    });
});






app.listen(3000, function() {
  console.log('App running on port 3000!');
});
