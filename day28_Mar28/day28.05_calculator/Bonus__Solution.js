var inputString = process.argv;

// parse input
var operand = inputString[2];
var num1 	= inputString[3];
if (inputString[4]) {
	var num2 = inputString[4];
}

var outputNum;

switch(operand) {
	case 'add':
		outputNum = parseInt(num1) + parseInt(num2);
		console.log("add");
		break;
	case 'subtract':
		outputNum = parseInt(num1) - parseInt(num2);
		break;
	case 'multiply':
		outputNum = parseInt(num1) * parseInt(num2);
		break;
	case 'divide':
		outputNum = parseInt(num1) / parseInt(num2);
		break;
	case 'remainder':
		outputNum = parseInt(num1) % parseInt(num2);
		break;
	case 'exp':
		outputNum = Math.pow(num1, num2);
		break;
	case 'algebra':
		outputNum = parseAlgebra(num1);	
		break;
}

console.log(outputNum);

// takes in a string expression
// returns parsed result
// assume input is always of the form 'ax + b = c'
function parseAlgebra(expression) {

	var a = expression.split('x');
	console.log(a);	
	
	var bc = a[1].split('+');
	bc = bc[1].split('=')
	console.log(bc);
	
	var multiplier 	= a[0],
		adder		= bc[0],
		result		= bc[1];

	result -= adder;
	result /= multiplier;
	return result;
}