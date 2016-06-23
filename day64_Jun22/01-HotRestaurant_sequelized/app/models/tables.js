var Sequelize = require('sequelize');
var sequelize = require('../config/config.js');


var Tables = sequelize.define('tables', {
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


Tables.sync()


module.exports = Tables;