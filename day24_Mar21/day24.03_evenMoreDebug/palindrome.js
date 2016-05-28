//Write a simple function that returns a boolean indicating whether or not a string is a palindrome.



function palindrome(string){
	var count = 0;

	for(i = 0; i < string.length; i++){
		if(string[string.length - i] == string[i]){ 
			count++;
		}
	}

	if(count == string.length){
		var palindromeCheck = true;
	} else {
		var palindromeCheck = false;
	}
}


function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}











