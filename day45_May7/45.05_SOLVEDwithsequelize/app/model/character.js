// *********************************************************************************
// CHARACTER.JS - THIS FILE CREATES A MODELED OF INDIVIDUAL CHARACTERS IN DB
// *********************************************************************************

// Dependency

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 

// Creates a "Character" model that matches up with DB
var Character = sequelize.define("character", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	routeName: {
		type: Sequelize.STRING,
	},
	name: {
		type: Sequelize.STRING,
	},
	role: {
		type: Sequelize.STRING,
	},
	age: {
		type: Sequelize.INTEGER,
	},
	forcePoints: {
		type: Sequelize.INTEGER,
	},
});

// Syncs with DB
Character.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;
