var mysql = require('mysql');

var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: '04051997',
  database: 'starwars'
});



module.exports = connection;