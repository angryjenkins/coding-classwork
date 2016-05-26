var express 	= require('express');
var bodyParser 	= require('body-parser');
var app 		= express();
var path 		= require('path')

//Database configuration
var mongojs = require('mongojs');
var databaseUrl = "zoo";
var collections = ["animals"];
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//==================================================================

// Routes

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.post('/data', function(req, res) {

	var selectedName = req.params.name;
	var selectedWeight = parseInt(req.params.weight);

	if (!selectedName && !selectedWeight){

		console.log("Case 1");

		db.animals.find({}, function(err, found) {
		    if (err) {
		      console.log(err);
		    } else {
		      res.json(found);
		    }
	  	});		
	}

	else if (selectedName && !selectedWeight){

		console.log("Case 2");

		db.animals.find({"name": selectedName}, function(err, found){

			if(err){
				console.log(err);
			} else {
				res.json(found);
			}
		})
	}
http://localhost:3000/
	else if (!selectedName && selectedWeight){

		console.log("Case 3");

		db.animals.find({"weight": {$gt: selectedWeight}}, function(err, found){

			if(err){
				console.log(err);
			} else {
				res.json(found);
			}
		})
	}

	else if (selectedName && selectedWeight){

		console.log("Case 4");

		db.animals.find({"name": selectedName, "weight": {$gt: selectedWeight}}, function(err, found){

			if(err){
				console.log(err);
			} else {
				res.json(found);
			}
		})
	}

});




app.listen(3000, function() {
  console.log('App running on port 3000!');
});
