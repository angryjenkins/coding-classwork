var orm = require('../config/orm.js');

var super_club = {
	all: function(cb) {
		orm.all('super_clubs', function(res){
			cb(res)
		});
	},
	create: function(nameInput,cb) {
		orm.create('super_clubs', nameInput, 1, cb);
	},
	update: function(inputId, cb){
		orm.update('super_clubs', 1, inputId, cb);
	},
	destroy: function(inputId, cb) {
		orm.destroy('super_clubs', 1, inputId, cb);
	}
};
    
module.exports = super_club;