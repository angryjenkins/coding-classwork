var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
console.log("here!");
var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nodeuser',
  password : 'nodeuser',
  database : 'day_planner_db'
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
    connection.query('SELECT * FROM day_planner;', function(err, col) {
      if (err) throw err;
        console.log('The solution is: ', col);
        console.log("....");


        console.log('The solution is: ', {col});

        //res.send(col[0]);
        res.render('index', {col});
        });
    });
    //res.render('index');
})

//delete route -> back to home
app.delete('/delete', function(req,res){
    //mySQL commands
    connection.query('DELETE FROM day_planner WHERE ID = 1', function(err, result) {
    if (err) throw err;
    });
    res.redirect('/');
});

//put route -> back to home
app.put('/update', function(req,res){
    console.log("PUT received: ->");
    console.log(req.body);
    //mySQL commands
    connection.query('UPDATE day_planner SET plan = ? WHERE ID = ?', [req.body.user_plan, 1], function(err, result) {
    if (err) throw err;
    });
    res.redirect('/');
});


var port = 3000;
app.listen(port);