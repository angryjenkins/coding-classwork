console.log(process.argv);

var operation = process.argv[2];
var x = parseInt(process.argv[3]);
var y = parseInt(process.argv[4]);

function addition(x,y){
	var sum = x+y;
	console.log(sum);
}

function subtraction(x,y){
	var diff = x-y;
	console.log(diff);
}

function multiplication(x,y){
	var product = x*y;
	console.log(product);
}

function division(x,y){
	var dividend = x/y;
	console.log(dividend);
}

function modulus(x,y){
	var mod = x%y;
	console.log(mod);
}

// BONUS!

function algebra(x){
	var equation = process.argv[3];
	console.log(equation);
}

if (operation == "add"){
	addition(x,y)
} else if (operation == "subtract"){
	subtraction(x,y)
} else if (operation == "multiply"){
	multiplication(x,y)
} else if (operation == "divide"){
	division(x,y);
} else if (operation == "remainder"){
	modulus(x,y);
} else if (operation == "algebra"){
	algebra(x);
}