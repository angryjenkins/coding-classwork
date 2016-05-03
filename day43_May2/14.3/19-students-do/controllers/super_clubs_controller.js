var express = require('express');
var router = express.Router();
var super_club = require('../models/super_club.js');


//get route -> index
router.get('/', function(req,res) {
	console.log('yup')
	super_club.all(function(super_clubs_data){
		console.log('got here')
		res.render('index', {super_clubs_data: super_clubs_data});
	});
});

//post route -> back to index
router.post('/create', function(req, res) {
	super_club.create(req.body.member_name, function(result){
		res.redirect('/');
	});
});

//put route -> back to index
router.put('/update', function(req,res){
	super_club.update(req.body.member_id, function(result){
		res.redirect('/');
	});
});

//delete route -> back to index
router.delete('/destroy', function(req,res){
	super_club.destroy(req.body.member_id, function(result){
		res.redirect('/');
	});
});

module.exports = router;