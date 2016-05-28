var mysql = require('mysql');

function getByZipAndDistance(zipcode,miles,callback){
  var myLat, myLong, myAddress;

  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '04051997',
    database : 'day36_doctors'
  });

  var zip = process.argv[2];

  connection.connect(function(err){
    if (err) {throw err};

    console.log('connected!');
  });

  connection.query("SELECT * FROM day36_doctors.zip where zip='" + zipcode + "'", function (err, rows) {
      if (err) {
          return callback(err);
      }

      if (rows.length == 0) {
          var err = new Error();
          err.message = "No zip code data found for '" + zip + "'";
          return callback(err);
      }
      console.log(rows[0]);

   });

}

var myZip = process.argv[2];
var miles = process.argv[3];

getByZipAndDistance(myZip, miles, function (err, result) {
  if (err) {
      console.log(err);
  }
  else {
      console.log(result);
      console.log('replace this with geo result stuff -- see slack!s');
  }
});
