//dependencies code

var express		= require('express');
var bodyParser 	= require('body-parser');

var app 	= express();
var PORT 	= 3000;

// incorporate body-parser middleware

app.use(bodyParser.urlencoded({ extended: false}));

var yodaCounter = 0;
var darthmaulCounter = 0;
var obiwanCounter = 0;

// Basic Route
app.get('/yoda',function(req,res){
	res.send("YODA WAS HERE " + yodaCounter + " TIMES");
	yodaCounter++;
});

app.get('/darthmaul',function(req,res){
	res.send("DARTH MAUL WAS HERE " + darthmaulCounter +  " TIMES");
	darthmaulCounter++;
});

app.post('/yoda',function(req,res){
	console.log(req.body);
})

app.get('/obiwan',function(req,res){
	res.send("OBI WAN WAS HERE " + obiwanCounter + " TIMES");
	obiwanCounter++;
});

app.listen(PORT, function(){
	console.log("Now listening on PORT %s",PORT);
});


