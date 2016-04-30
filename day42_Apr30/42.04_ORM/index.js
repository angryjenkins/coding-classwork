var orm = require('./config/orm.js');

/* The following commands will run every time once the Node server is started.*/

//Find all animals by name order by price
orm.selectByPrice();

//Find an animal by the name of the animal
orm.findByName('Red13');

//Find the buyer with the most animal
orm.findBuyerByMostAnimal();