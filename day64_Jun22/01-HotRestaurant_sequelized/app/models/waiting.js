var Sequelize = require('sequelize');
var sequelize = require('../config/config.js');



var Waiting = sequelize.define('waitings', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	customerName: {
		type: Sequelize.STRING
	},
	customerEmail:{
		type: Sequelize.STRING
	},
	customerID: {
		type: Sequelize.STRING
	},
	phoneNumber: {
		type: Sequelize.STRING
	}
},
	{timestamps: false}
);


Waiting.sync()

module.exports = Waiting