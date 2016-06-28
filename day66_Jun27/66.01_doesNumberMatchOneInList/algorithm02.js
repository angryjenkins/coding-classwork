var stuff = [];


var max_size = 1000000000;

var size = Math.ceil( Math.random() * max_size );/

for( var j=0; j<size; j++ ){

  stuff.push( j+1 );
}

var random_value = Math.ceil( Math.random() * size );

// var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
var random_value = stuff[ Math.ceil( Math.random() * 14 ) ];
var stuffCheck = stuff.indexOf(random_value);

console.log(random_value);

console.log(stuffCheck);


if(stuffCheck == -1){
	console.log('Not in "stuff"!'); 
} else {
	console.log("It's in stuff!");
};
// Have students explain the code back to you.


//this will take 5 or 6 minutes, OR run out of memory!

