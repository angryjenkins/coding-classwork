var express           = require('express');
var mysql             = require('mysql');
var expressHandlebars = require('express-handlebars');
var bodyParser        = require('body-parser');


var connection = require('./connection.js')

var PORT = process.env.NODE_ENV || 3000;

var app = express();

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
    extended: false
}));

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});


// "msg" is a variable being used in Handlebars,
app.get('/', function(req, res) {
  res.render('home', {
    msg: req.query.msg
  });
});

app.post('/register', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  connection.query("SELECT * FROM users WHERE email=?", [email], function(err, results) {
    if(err) {
      throw err;
    }

    if(results.length === 0) {
      // Create an account
      connection.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, password], function(err) {
        if(err) {
          throw err;
        }

        res.redirect('/success');
      });
    } else {
      res.redirect('/?msg=Email Already Exists');
    }
  });
});

app.post('/login', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  connection.query("SELECT * FROM users WHERE email=? AND password=?", [email, password], function(err, results) {
    if(err) {
      throw err;
    }

    if(results.length > 0) {
      res.redirect('/success');
    } else {
      res.redirect('/?msg=Invalid login');
    }
  });
});

// display a success page.
app.get('/success', function(req, res) {
  res.send('SUCCESS PAGE!');
});


app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});
