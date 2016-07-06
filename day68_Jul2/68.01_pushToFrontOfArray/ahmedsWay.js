// Adding to beginning
myArray.unshift(1);// Adding to beginning
for (var i=myArray.length; i>=0; i--){
 myArray[i] = myArray[i-1];
}
myArray[0] = -1;