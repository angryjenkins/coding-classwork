var connection = require('./connection.js');

var orm = {
    selectByPrice: function() {
        var s = 'SELECT animal_name FROM pets ORDER BY price desc;';
        connection.query(s, function(err, result) {
 
            console.log(result);
        });
    },
    findByName: function(animal_name) {	
        var queryString = 'SELECT * FROM pets WHERE animal_name = ?';
        connection.query(queryString, [animal_name], function(err, result) {
  
            console.log(result);
        });
    },
    findBuyerByMostAnimal: function() {
        var s = 'SELECT buyer_name, COUNT(buyer_name) AS count FROM pet_buyers LEFT JOIN pets ON pets.buyer_id = pet_buyers.id GROUP BY buyer_name ORDER BY count desc LIMIT 1';

        connection.query(s, function(err, result) {
            console.log(result);
        });
    }
};
    
module.exports = orm;

