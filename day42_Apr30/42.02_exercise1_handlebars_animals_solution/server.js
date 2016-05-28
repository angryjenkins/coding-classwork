var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//unless given a specific template to use, the pages will use main.handlebars.
//refers to views/layouts/main.handlebars (a covnention).


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
  var data = {
    allPets : [animals[0], animals[1]]
  }
  res.render('index', data);
  //index will be in the folder called VIEWS, there will be an index.handlebars file, another convention.

});

app.get('/dog', function(req,res) {
  //handlebars requires an object to be sent to the index template file
  //lucky for us, animals[0] is an object!
  res.render('dog', animals[0]);
});

app.get('/all-non-pets', function(req,res) {
  //handlebars requires an object to be sent to the index template file. This is why we do this.
  var data = {
    allNonPets : [animals[2], animals[3], animals[4]]
  }
  res.render('non-pets', data);
});

var port = 3000;
app.listen(port);
