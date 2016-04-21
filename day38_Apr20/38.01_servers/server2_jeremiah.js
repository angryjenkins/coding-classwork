var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

// create some basic routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var yodaCounter = 0;
var darthCounter = 0;
var homeCounter = 0;
var jediApprentice = '';

var characters = [
{
	name: 'Yoda',
	roll: 'Jedi Master',
	age: '1500',
	forcePoints: '20000'
},{
	name: 'Darth Maul',
	roll: 'Dark Side Leader',
	age: '1500',
	forcePoints: '1000'
},{
	name: 'Han Solo',
	roll: 'First Shooter',
	age: '38',
	forcePoints: '10'
},{
	name: 'Rey',
	roll: 'Jedi Apprentice',
	age: '25',
	forcePoints: '200'
},
];

app.get('/characters', function(req,res){
	res.sendFile(path.join(__dirname + '/characters.html'));
});

app.get('/create', function(req,res){
	res.sendFile(path.join(__dirname + '/create.html'));
});

app.get('/characters/:name', function(req,res){
	var charactersName = req.params.name;
	for (var i = 0; i < characters.length; i++) {
		if(characters[i].name == charactersName){
			res.json(characters[i]);
		} else {

		};
	};
});

app.get('/create/:name', function(req,res){
	console.log(req);
});

// app.post('/yoda', function(res,req){
// 	console.log(req.body);
// });

app.listen(PORT,function() {
	console.log('App listenting on PORT: '+ PORT);
});

