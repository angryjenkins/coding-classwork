var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var animals = [
  {animalType: 'dog', pet: true, fierceness: 4},
  {animalType: 'cat', pet: true, fierceness: 10},
  {animalType: 'giraffe', pet: false, fierceness: 4},
  {animalType: 'zebra', pet: false, fierceness: 8},
  {animalType: 'lion', pet: false, fierceness: 10}
];

app.get('/all-pets', function(req,res) {
  //handlebars requires an object to be sent to the index template file. This is why we do this

  //1. send all the animals that are pets to the index handlebars file. There is an animals array full of animal objects up above. The animal objects have a key called pet that is either true or false.

});

app.get('/dog', function(req,res) {
  //handlebars requires an object to be sent to the index template file
  //lucky for us, animals[0] is an object!

  //2. send the animal object inside of the animals array to the dog handlebars file.
});

app.get('/all-non-pets', function(req,res) {
  //handlebars requires an object to be sent to the index template file. This is why we do this.

  //3. send all the animals that are not pets to the non-pets handlebars file. There is an animals array full of animal objects up above. The animal objects have a key called pet that is either true or false.

});

var port = 3000;
app.listen(port);
