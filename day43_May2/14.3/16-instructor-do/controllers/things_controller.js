/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var thing = require('../models/thing.js');

router.get('/', function(req,res) {
	thing.all(function(data){
		res.render('index', {data : data});
	});
});

module.exports = router;