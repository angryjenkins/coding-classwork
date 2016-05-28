Create you own Ben and Jerry App:
  * Create 5 different kinds of icecream, each with a different price and scale of awesomeness. Put the following variable in your 'index.js'
  ```
  var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
  ];
  ```
  * Do not use MySQL keep all the data in the `index.js` file
  * Using handlebars and Express create a route for each of the ice cream you created
  * When the icecreams route is hit, it will render the name, price, and awesomeness of that ice cream.