// Dependencies 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var url = require('url');
// Creates an instance of "express server"
var app = express();
var PORT = 3000;

// Incorporate body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var yodaCounter = 0;
var darthMaulCounter = 0;

var characters = [

	{
		name: 'Yoda',
		age: 900,
		role: 'Jedi Master',
		forcePoints: 20000
	},

	{
		name: 'DarthMaul',
		age: 200,
		role: 'Sith Lord',
		forcePoints: 10000
	},

	{
		name: 'ObiWanKenobi',
		age: 81,
		role: 'Jedi Knight',
		forcePoints: 8500
	},

	{
		name: 'LukeSkywalker',
		age: 55,
		role: 'The Last Jedi',
		forcePoints: 8800
	},

	{
		name:'ChancellorPalpatine',
		age: 59,
		role: 'Sith Lord in Disguise',
		forcePoints: 20000
	}
];

app.get('/',function(req,res){
	res.send('Hello, World!');
})

app.get('/:name',function(req, res){
	var url_parts = url.parse(req.url);

	for(i=0;i<characters.length;i++){
		if (url_parts.pathname.toLowerCase() == ("/" + characters[i].name.toLowerCase())){
			res.json(characters[i]);
		}
	}
});

// request a html file when a certain path is loaded
app.get('/search', function(req, res){
	res.sendFile(path.join(__dirname + '/starwars_search.html'));
});

app.get('/add', function(req,res){
	res.sendFile(path.join(__dirname + '/starwars_add.html'));
});

app.get('/addnew', function(req, res){
	res.send("Add New Character");
});

// name the paramter directly in the route itself
app.get('/search', function(req, res) {
	res.send(req.params.name);
});

app.post('/search/:name',function(req,res){
	console.log(req.body);
	res.end();
})

// Listener
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
})