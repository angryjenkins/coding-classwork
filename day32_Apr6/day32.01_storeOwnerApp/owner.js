var prompt = require('prompt');


var fs = require('fs');

var Item = function(dish,price,category){
  this.dish = dish;
  this.price = price;
  this.category = category;
};


prompt.start();

prompt.get(['dish', 'price', 'category'], function (err, result) {

  var menuItem = new Item(result.dish,result.price,result.category);

  var menu = [];
  menu.push(menuItem);

  console.log('on the menu');

  var stringMenu = JSON.stringify(menu);

  fs.writeFile('menu.txt', stringMenu, 'utf8', function(menu){
    console.log(stringMenu);
  });
});
