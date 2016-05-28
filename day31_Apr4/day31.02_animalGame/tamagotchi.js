var Tamagotchi = function(){
  this.hungry = hungry,
  this.sick = sick,
  this.age = age,
  this.feed = function(){
    if(this.hungry == true){
      console.log('That was yummy');
      this.hungry = false;
    } else {
      console.log("No thanks, I'm not hungry.");
      this.hungry = true;
    }
  },
  this.sleep = function(){
    console.log('ZZzzz...');
  },
  this.medicate = function(){
    if(this.sick == true){
      console.log('Thanks, I feel better!');
      this.sick = false;
    } else {
      console.log('No thanks, I feel fine.');
      this.sick = true;
    }
  },
  this.increaseAge = function(){
    this.age++;
    console.log('Happy Birthday to me! I am ' + this.age + ' years old!');
  }
};

var dog = new Tamagotchi();

dog.bark = function(){
  console.log('Ruff Ruff');
}

dog.goOutside = function(){
  console.log('I own that tree now...');
}

var cat = new Tamagotchi();

cat.meow = function(){
  console.log('meow');
}

cat.scratchThatChair = function(){
  console.log('Stop scratching that chair!');
}
