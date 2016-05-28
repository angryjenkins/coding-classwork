console.log(process.argv);

var bankOp = process.argv[2];
var amount = parseInt(process.argv[3]);
var bankLog = [];
var total = 0;
// var total = sum of all the values, separated by commas, in the bank.txt file.

function bankTotal(){
	for (var i=0;i<bankLog.length;i++){
		total += bankLog[i];
		return total;
	}
}

var textFile = "bank.txt";

var fs = require('fs');


fs.readFile(textFile, "utf8", function(err,data){
	var bankLog = data.split(",");

	

	if(bankOp == "total"){
		for (var i=0;i<bankLog.length;i++){
			total += parseFloat(bankLog[i]);
		}
		console.log("Your total is " + total.toFixed(2));
	} else if (bankOp == "deposit"){
		total += amount;
		fs.writeFile(textFile, amount + ", ", function(err){
			if (err) throw err;
			console.log(amount);
		});
		return total;
	} else if (bankOp === "withdraw"){
		total -= amount;
		fs.writeFile(textFile, "-" + amount + ", ", function(err){
			if (err) throw err;
			console.log(amount);
		});

	}

	// console.log(data)
	// console.log(bankLog);

	// console.log(total);


});