var prompt = require('prompt');
var fs = require('fs');

var List = function(name,address,item,quantity){
  this.name = name;
  this.address = address;
  this.item = item;
  this.quantity = quantity;
};

prompt.start();

prompt.get(['customer', 'address', 'item','quantity'], function (err, result) {
  // console.log('Command-line input received:');
  // console.log('  name: ' + result.name);
  // console.log('  price: ' + result.price);
  // console.log('  category: ' + result.category);

  var order = new List(result.customer,result.address,result.item,result.quantity);

  console.log('Customer Order:');
  console.log(order);

  fs.readFile('./menu.txt', "utf8", function(err,data){

  	JSON.parse(data);

    for(var key in data){
      //get the items and prices from the menu,

    }
  })

});
