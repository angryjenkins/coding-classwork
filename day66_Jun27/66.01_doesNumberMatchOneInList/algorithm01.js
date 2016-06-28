var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
var random_value = stuff[ Math.ceil( Math.random() * 14 ) ];
var stuffCheck = stuff.indexOf(random_value);

console.log(random_value);

console.log(stuffCheck);


if(stuffCheck == -1){
	console.log('Not in "stuff"!'); 
} else {
	console.log("It's in stuff!");
};

// the maximum order of events! ---- 14, ainx