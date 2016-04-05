//the Aminals funciton is a constructor fuction - a "factory" for new animals.

function Animal(sleepy, noise){
  this.sleepy = sleepy;
  this.noise = noise;
  this.makeNoise = function(){
    if(this.sleepy == false){
      console.log(this.noise);
    }
  }
}

var dog = new Animal(false, 'woof');
var cat = new Animal(true, 'meow');

// NEVER invoke the COSTRUCTOR!. There is never a reason to call the template. Why call the factory when you need a car?

dog.makeNoise();
cat.makeNoise();
