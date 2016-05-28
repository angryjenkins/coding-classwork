// In a new folder
// make a new node file called constructorFun.js
// auto create a package.json file with npm init
// install the prompt package so that it's
// Inside constructorFun.js, make a constructor function called Student that creates a student object with properties of name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase, and a function called canStudentHaveFun that checks if they have less than 10 detentions and above a 2 GPA. If they do then console.log out to the terminal that the student can have fun.
// Prompt the user for a student's information, make a new Student Object with it, then invoke the canStudentHaveFun function.


function Student(name,gender,grade,gpa,detentions,sleepingInClass,catchPhrase){
  this.name = name,
  this.gender = gender,
  this.grade = grade,
  this.gpa = gpa,
  this.detentions = detentions,
  this.sleepingInClass = sleepingInClass,
  this.catchPhrase = catchPhrase,
  this.canStudentHaveFun = function(){
    if(this.detentions < 10 && this.gpa > 2){
      console.log(this.name + " can have fun!");
    } else {
      console.log(this.name + " needs to study before having fun.");
    }
  }
}

// var promptAdded = new Student(result.name,result.gender,result.grade,result.gpa,result.detentions,result.sleepingInClass,result.catchPhrase);

var prompt = require('prompt');

prompt.start();

prompt.get(['name', 'gender','grade','gpa','detentions','sleepingInClass','catchPhrase'], function (err, result) {
  // Log the results.

  for(var key in result){
    console.log('You entered:');
    console.log(key + ': ' + result[key]);
  };

  //create a new student object using the results from the

  var student = new Student(result.name,result.gender,result.grade,result.gpa,result.detentions,result.sleepingInClass,result.catchPhrase);

  student.canStudentHaveFun();
});
