var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var icecreams = [
		{name: 'vanilla', price: 10, awesomeness: 3},
		{name: 'chocolate', price: 4, awesomeness: 8},
		{name: 'banana', price: 1, awesomeness: 1},
		{name: 'greentea', price: 5, awesomeness: 7},
		{name: 'jawbreakers', price: 6, awesomeness: 2}
];

app.get('/:name', function(req,res) {
	var name = req.params.name;

	switch(name){
		case 'vanilla':
		res.render('index',icecreams[0]);
		break;

		case 'chocolate':
		res.render('index',icecreams[1]);
		break;

		case 'banana':
		res.render('index',icecreams[2]);
		break;

		case 'greentea':
		res.render('index',icecreams[3]);
		break;

		case 'jawbreakers':
		res.render('index',icecreams[4]);
		break;
	}
});

var port = 3000;
app.listen(port);