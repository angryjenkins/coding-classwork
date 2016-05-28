var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var lunches = [
{lunch: 'Chicken Salad with soup.'},
{lunch: 'Pizza, hotdogs, two double cheese burger and fries with a big glup'},
];

app.get('/weekday', function(req,res) {
    res.render('index', lunches[0]);
});
app.get('/weekend', function(req,res) {
    res.render('index', lunches[1]);
});


var port = 3000;
app.listen(port);