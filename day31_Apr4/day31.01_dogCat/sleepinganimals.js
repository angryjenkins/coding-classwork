var dog = {
  sleepy: false,
  noise:'woof',
  makeNoise: function(){
      if(this.sleepy == false){
      console.log(this.noise)
    }
  }
}

var cat = {
  sleepy: true,
  noise:'meow',
  makeNoise: function(){
    if (this.sleepy == false){
      console.log(this.noise)
    }
  }
}

//invoke the object's method.
cat.makeNoise();
dog.makeNoise();
