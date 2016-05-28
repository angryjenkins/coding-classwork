var path = require('path');

module.exports = function(app){

	app.get('/api/:character?', function(req,res){
		// res.json(characters);

		console.log(req.params);
	});

}