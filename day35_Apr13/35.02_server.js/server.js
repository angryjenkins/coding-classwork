// import the mysql library from npm
var mysql = require('mysql');

//this line runs the code that will connect our myql.js file to the database.
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "04051997",
  database: "mattsdb"
});

//tihis actually initiates the connection.
connection.connect(function(err){
  if (err){
    console.error("error connecting: ", err.stack);
    return;
  }

  //if connected, tell us wich thread.
  console.log('connected as id ', connection.threadID);
});
//perform a simple query, res = response.
// connection.query('SELECT * FROM programmers2', function(err,res){
//   if (err){
//     throw err;
//   }
//   // print out the contents of the response
//
//   console.log(res);
//
//   console.log(res[0].name, res[0].role);
// });

// var selectAllQuery = 'SELECT * FROM programmers2';
//
// connection.query(selectAllQuery, function(err,res){
//   if (err) throw err;
//   console.log(res);
// });

//
// connection.query('UPDATE programmers2 SET name= ? WHERE name = ?', ["Neena","Nina"], function(err,res){
//   if (err) throw err;
//
//   console.log(res);
//
//   connection.query('SELECT * FROM programmers2', function(err,res){
//     if (err) throw err;
//     console.log(res);
//     console.log('The name is ' + res[1].name + ' now.');
//   });
// });

var joinQuery = 'SELECT programmers2.empID, programmers2.name, programmers2.role, contactInfo.phone,contactInfo.email, contactInfo.address FROM programmers2 INNER JOIN contactInfo ON programmers2.empID = contactInfo.empID ORDER BY programmers2.empID';

connection.query(joinQuery, function(err,res){
  if (err) throw err;
  console.log(res);
});
