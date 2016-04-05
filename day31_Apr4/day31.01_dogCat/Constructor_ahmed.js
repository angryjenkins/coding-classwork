// Generic Function (Master Object)
// Constructor Function.

// Constructor has a name: Animal
// Constructor has "parameters" that it expects.
function Animal(sleepy, noise, height){

	// It creates the sub-properties using those parameters
	this.sleepy = sleepy;
	this.noise = noise;
	this.height = height;
	this.growlRandomly = function(){
		console.log("RAAEWEWEEERRW");
	}
	this.makeNoise = function(){

		if(this.sleepy == false){
			console.log(this.noise);
		}
	}
}


// Creates a sub-animal (cat and dog)
var cat = new Animal(true, 'meow')
var dog = new Animal(false, "woof");
var giraffe = new Animal(false, "mmmmmmm");
giraffe.height = 8000;

console.log("GIRAFFE: " + giraffe.height);
console.log("DOG: " + dog.height);

console.log(JSON.stringify(giraffe));

// ===============================================

cat.growlRandomly();

// ================================================

// The above constructor creates this below.
// var cat = {
// 	sleepy: true,
// 	noise: "Meow",

// 	makeNoise: function(){
// 		if(this.sleepy == false){
// 			console.log(this.noise);
// 		}
// 	}
// }
