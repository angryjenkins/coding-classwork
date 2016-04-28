* Calculator App exercise:
  - Create an node.js application.
  - Install the Express npm package.
  - Using Express create a server, with one GET route.
  - The route will consist of three parameters, an operation, a number, a second number.
  - Create these four math operations `addition`, `subtraction`, `multiplication`, `division`.
  - When the route is hit, it should display on the page result of the math operation.
  
Example: If my port is 3000, entering the following URL into my browser.

```
http://localhost:3000/addition/10/1
```

The page will display `11`.

BONUS:

* Create a math operation called `fibonacci`.
  * Create the code that will generate the fibonacci numbers.
  * The fibonacci will start with two numbers `[0,1]`
  * The first parameter will check if it's `fibonacci` 
  * The second parameters in the URL will determine how many of the fibonacci numbers you will generate.
  * So if the second parameters is 5 you will generate 5 additional number after the first 2 numbers, displaying 7 numbers total.
  * The third parameters will now change the value of the second number when you generate the fibonacci number.

Example:

```
http://localhost:3000/fibonacci/2/1
```
The page will display: 0,1,1,2

```
http://localhost:3000/fibonacci/10/5
```
The page will display: `0,5,5,10,15,25,40,65,105,170,275,445`