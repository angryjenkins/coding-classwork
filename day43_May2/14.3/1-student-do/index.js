var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  port     : 3306,
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'feel_state_db'
});

connection.connect(function(err) {

  if (err) {
    console.error('error connecting: ' + err.stack);
   
    return;
    
  };

  console.log('connected as id ' + connection.threadId);

  //home get route
  app.get('/', function(req,res) {
      //mySQL commands
      connection.query('SELECT * FROM feel_states;', function(err, data) {
        if (err) throw err;
          console.log('The solution is: ', data);
          //res.send(col[0]);
          res.render('index', {viewData: data});
          });
  });
})

//post route -> back to home
app.post('/createHot', function(req, res) {
    connection.query('INSERT INTO feel_states (state) VALUES (?)', ['Too Hot!'], function(err, result) {
    if (err) throw err;
    });
    res.redirect('/');
});

//post route -> back to home
app.post('/createCold', function(req, res) {
    connection.query('INSERT INTO feel_states (state) VALUES (?)', ['Too Cold!'], function(err, result) {
    if (err) throw err;
    });
    res.redirect('/');
});

//post route -> back to home
app.post('/createRight', function(req, res) {
    connection.query('INSERT INTO feel_states (state) VALUES (?)', ['Just Right!'], function(err, result) {
    if (err) throw err;
    });
    res.redirect('/');
});

var port = 3000;
app.listen(port, function() {
  console.log("Listening on PORT " + port);
});


