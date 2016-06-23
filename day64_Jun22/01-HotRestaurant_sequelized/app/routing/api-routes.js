// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var tableData 		= require('../data/table-data.js');
var waitListData 	= require('../data/waitinglist-data.js');
var path 			= require('path');
var Waiting         = require('../models/waiting.js');
var Tables          = require('../models/tables.js');



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases when a user visits a link 
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
	// ---------------------------------------------------------------------------

	app.get('/api/tables', function(req, res){
		Tables.findAll().then(function(result){
					res.json(result);

				})
	});

	app.get('/api/waitlist', function(req, res){
		Waiting.findAll().then(function(result){
					res.json(result);

				})
	});

	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------

	app.post('/api/tables', function(req, res){

		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table 
		// if(tableData.length < 5 ){
		// 	tableData.push(req.body);
		// 	res.json(true); // KEY LINE
		// }

		// // Or false if they don't have a table
		// else{
		// 	waitListData.push(req.body);
		// 	res.json(false); // KEY LINE
		// }


			Tables.findAll().then(function(result) {
				console.log(result);
				if(result.length<5){
					Tables.create({
						id: 1,
						customerName: req.body.customerName,
						customerEmail: req.body.customerEmail,
						customerID: req.body.customerID,
						phoneNumber: req.body.phoneNumber
					});

					res.json(true)
				} else{
					Waiting.create({
						id: 1,
						customerName: req.body.customerName,
						customerEmail: req.body.customerEmail,
						customerID: req.body.customerID,
						phoneNumber: req.body.phoneNumber
					});
					res.json(false);
				}
			});
		
	});

	// ---------------------------------------------------------------------------
	// I added this below code so you could clear out the table while working with the functionality.
	// Don't worry about it!

	app.post('/api/clear', function(req, res){
		// Empty out the arrays of data
		tableData = [];
		waitListData = [];

		console.log(tableData);
	})
}