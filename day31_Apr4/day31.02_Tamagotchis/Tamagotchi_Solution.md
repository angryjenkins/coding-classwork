var Tamagotchi = function() {
  this.hungry = false;
  this.sick = false;
  this.age = 0;

  this.feed = function() {
    if(this.hungry === true) {
      console.log("That was yummy!");
      this.hungry = false;
    }
    else {
      console.log("No thanks, I'm full.");
      this.hungry = true;
    }
  };

  this.sleep = function() {
    console.log("zzzzzzzzzzzz");
  };

  this.medicate = function() {
    if(this.sick === true) {
      console.log("I feel much better");
      this.sick = false;
    }
    else {
      console.log("No thanks, I feel fine.");
      this.sick = true;
    }
  };

  this.increaseAge = function() {
    this.age ++;
    console.log("Happy Birthday to me! I am " + this.age +
    " years old!");
  };
};

var dog = new Tamagotchi();
dog.bark = function() {
  console.log("ruff ruff!");
}

dog.goOutside = function() {
  console.log("I own that tree now!");
}

var cat = new Tamagotchi();
cat.meow = function() {
  console.log("Meow!");
}
cat.scratchThatChair = function() {
  console.log("Stop scratching that chair!!!");
}
