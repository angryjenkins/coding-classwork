var mysql 		= require('mysql');
var connection 	= mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: "04051997",
    database: "starwars"
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
