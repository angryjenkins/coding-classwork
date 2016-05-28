var orm = require('./config/orm.js');

/* The following commands will run every time once the Node server is started.*/

orm.selectByPrice('parties');

orm.findByName('parties','Jonnys New Years Party');

orm.findBuyerByMostAnimal('clients','parties');