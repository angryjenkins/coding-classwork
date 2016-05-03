//intro to a callback function
	/* 

		1. explain the on click code below
			answer: 
				you click the button and then this anonymous function gets executed

				function(){
					alert('boom');
				}
		
		2. when the page loads does the anonymous function get executed?
			answer:
				no, when the page loads, the anonymous function doesn't get executed. 

		3. when does the anonymous function get executed? 
			answer: 
				The anonymous function does not get called until the user clicks the button
	*/
	$('#boomButton').on('click', function(){
		alert('boom');
	});

//a deeper look at callbacks 
	var sum = function(numOne, numTwo){
		return numOne + numTwo;
	}

	var subtract = function(numOne, numTwo){
		return numOne - numTwo;
	}

	var multiply = function(numOne, numTwo){
		return numOne * numTwo;
	}

	var addCallBacks = function(functionOne, functionTwo){
		return functionOne(6,2) + functionTwo(6,3);
	}

	//4. what does this return?
	addCallBacks(multiply, sum); //answer: 12 + 9 = 21

	//5. what does this return?
	addCallBacks(subtract, multiply); //answer: 4 + 18 = 22

	//6. what does this return?
	addCallBacks(subtract, sum); //answer: 4 + 9 = 13

	//7. what does this return?
	addCallBacks(sum, subtract); //answer: 8 + 3 = 11

	var anythingGoes = function(functionOne, functionTwo, functionThree){
		functionThree(functionOne(3,4), functionTwo(7,2));
	}

	//8. challenge part one: what does this return?
		anythingGoes(multiply, subtract, sum); //answer: undefined

	var anythingGoes = function(functionOne, functionTwo, functionThree){
		return functionThree(functionOne(3,4), functionTwo(7,2));
	}
	//9. challenge part two: what does this return?
		anythingGoes(multiply, subtract, sum); //answer: 12 + 5 = 17

		 
