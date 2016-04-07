var prompt = require('prompt');


var fs = require('fs');

var Item = function(name,price,category){
  this.name = name;
  this.price = price;
  this.category = category;
};


prompt.start();

prompt.get(['name', 'price', 'category'], function (err, result) {

  var menuItem = new Item(result.name,result.price,result.category);

  var menu = [];
  menu.push(menuItem);

  console.log('on the menu');
  console.log(menu);

  fs.writeFile('menu.txt', menuItem, 'utf8', function(menu){
    console.log(JSON.stringify(menu));
  });


});
