var bands = require('./bands.js');
var bandList = bands['bands'];

var genre = process.argv[2];

console.log(process.argv);

for(var key in bandList){
	console.log("A " + key + " band is " + bandList[key] +".");
}