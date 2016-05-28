// Server Dependencies
// ==========================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongojs = require('mongojs');

// Here we use morgan to log the requests and responses
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static('public'));

// Here we connect to our running instance of MongoDB
// We are specifically working with the DB of "week18day3"
// And the collection of "books" 
// If these don't exist they will be created on teh fly.
var databaseUrl = "week18day3";
var collections = ["books"];
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});



// Routes
// ==========================================================

// Here we have the main route which redirects the user to an index.html page.
// This is the equivalent of our "html-routes.js" file that we typically have
app.get('/', function(req, res) {
  res.send(index.html);
});

//Save to DB
app.post('/submit', function(req, res) {
  //if we want the object to have a boolean value of false, we have to do it here, because the ajax post will convert it to a string instead of a boolean
  var book = req.body;
  book.read = false;

  db.books.save(book, function(err, saved) {
    if (err) {
      console.log(err);
    } else {
      res.send(saved);
    }
  });
});


// GET the read books 
app.get('/read', function(req, res) {
  db.books.find({'read':true}, function(err, found) {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});


// Get the unread books
app.get('/unread', function(req, res) {
  db.books.find({'read':false}, function(err, found) {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});


// Get a specific book to mark it as read. 
app.get('/markread/:id', function(req, res) {
	//Remember: when searching by an id, the id needs to be passed in as (mongojs.ObjectId(IDYOUWANTTOFIND))

  db.books.update({
    '_id': mongojs.ObjectId(req.params.id)
  }, {
    $set: {
			'read':true
    }
  }, function(err, edited) {
    if (err) {
      console.log(err);
			res.send(err);
    } else {
      console.log(edited);
			res.send(edited);
    }
  });
});

// Get a specific book to mark it as unread. 
app.get('/markunread/:id', function(req, res) {
	//Remember: when searching by an id, the id needs to be passed in as (mongojs.ObjectId(IDYOUWANTTOFIND))

  db.books.update({
    '_id': mongojs.ObjectId(req.params.id)
  }, {
    $set: {
      'read':false
    }
  }, function(err, edited) {
    if (err) {
      console.log(err);
			res.send(err);
    } else {
      console.log(edited);
			res.send(edited);
    }
  });
});


// RUN THE PORT
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('App running on port ' + port);
});
