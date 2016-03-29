var bands = require('./bands.js');
var bandList = bands['bands'];

for(var key in bandList){
	console.log("A " + key + " band is " + bandList[key]);
}