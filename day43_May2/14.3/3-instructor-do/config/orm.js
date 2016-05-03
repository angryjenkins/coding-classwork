var connection = require('./connection.js');

var orm = {
    selectByPrice: function(tableInput) {
        var s = 'SELECT animal_name FROM ' + tableInput + ' ORDER BY price desc;';
        connection.query(s, function(err, result) {
 
            console.log(result);
        });
    },
    findByName: function(tableInput, buyer_name) {	
        var s = 'SELECT * FROM ' + tableInput + ' WHERE animal_name = ?';
        connection.query(s, [buyer_name], function(err, result) {
  
            console.log(result);
        });
    },
    findBuyerByMostAnimal: function(tableOne, tableTwo) {
        var s = 'SELECT buyer_name, COUNT(buyer_name) AS count FROM ' + tableOne + ' LEFT JOIN ' +tableTwo + ' ON ' + tableTwo + '.buyer_id = ' + tableOne + '.id GROUP BY buyer_name ORDER BY count desc LIMIT 1';

        connection.query(s, function(err, result) {
            console.log(result);
        });
    }
};
    
module.exports = orm;

