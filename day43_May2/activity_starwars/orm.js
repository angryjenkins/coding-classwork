var connection = require('./connection.js');

var orm = {
    selectByCharacter: function(name) {
        var s = 'SELECT * FROM starwars.characters WHERE name=' + name + ';';
        connection.query(s, function(err, result) {
 
            console.log(result);
        });
    },
    selectAll: function() {	
        var s = 'SELECT * FROM starwars.characters';
        connection.query(s, function(err, result) {
  
            console.log(result);
        });
    },
    addCharacter: function(name, role, age, forcePoints) {
        var s = "INSERT INTO starwars.characters (name, role, age, forcePoints) VALUES (" + name + ", " + role + ", " + age + ", " + forcePoints + ");";


        connection.query(s, function(err, result) {
            console.log(result);
        });
    },
     deleteCharacter: function(name) {
        var s = "DELETE from starwars.characters WHERE name=" + name +";";


        connection.query(s, function(err, result) {
            console.log(result);
        });
    }
};
    
module.exports = orm;
