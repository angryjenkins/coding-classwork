var connection = require('../config/connection.js');

var orm = {
    selectByPrice: function(tableInput) {
        var s = 'SELECT party_name FROM ' + tableInput + ' ORDER BY party_cost desc;';
        connection.query(s, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    findByName: function(tableInput, partyName) {	
        var s = 'SELECT * FROM ' + tableInput + ' WHERE party_name = ?';
        connection.query(s, [partyName], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    findBuyerByMostAnimal: function(tableOne, tableTwo) {
        var s = 'SELECT client_name, COUNT(client_name) AS count FROM '+tableOne+' LEFT JOIN '+tableTwo+' ON '+tableTwo+'.client_id = '+tableOne+'.id GROUP BY client_name ORDER BY count desc LIMIT 1';
        connection.query(s, function(err, result) {
          if (err) throw err;
            console.log(result);
        });
    }
};
    
module.exports = orm;