var fs = require('fs');

fs.readFile("bestThingsEver.txt", "utf8", function(err,data){
	data = data.replace(/,/g, '\n');

	//pull commas and make line breaks (alternate);

	var output = data.split(',');
	// console.log(output);

	// console.log(data);


	for (i=0; i<output.length;i++){
		console.log(output[i]);
	}

	// console.log(dataString);
});

//read information is stored into the "data" variable.

//the anonymous function is a CALLBACK, which happens in the readFile function.

//takes out commans and replaces them with line breaks.