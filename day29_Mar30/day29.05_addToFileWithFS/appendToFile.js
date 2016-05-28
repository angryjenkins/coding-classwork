var textFile = process.argv[2];
var data = process.argv[3];

var fs = require('fs');

fs.appendFile(textFile, data + " - ", function(err){
	if (err) throw err;
	console.log(data);
});