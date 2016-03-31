var textFile = process.argv[2];

var fs = require('fs');

fs.readFile(textFile, "utf8", function(err,data){

	console.log(data);
});
