/*
Here is wher you setup the functions for how you want your app to interface with the database.
*/

var orm = require('../config/orm.js');

var things = {
	all: function(cb) {
		orm.selectAll('things', function(res){
			cb(res)
		});
	}
};
    
module.exports = things;