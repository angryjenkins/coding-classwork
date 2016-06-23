1. What are the benefits of using react?

According to Facebook:
- everything processed in one place instead of separate calls.
- built specifically for apps with lots of data that changes over time.

According to Developers:
- easy to read syntax
- rendered client-side
- easy to test

!! Disadvantages:
- huge library
- only a view layer
- steep learning curve.

--- 
when data changes it hits the "refresh"

2. What is the significance of the React.createClass() method?

- This is one of the two most popular methods for defining a React component -- the other is ES6 classes.


>	var Component = React.createClass({
	  render: function () {
	    return <div>Hello {this.props.name}</div>;
	  }
	});



- The above var 'Component' includes a 'render' function that determines the way data is displayed.
- Facebook has said they will deprecate this syntax in the distant future and fully adopt ES6 once certain conditions are met.

> Our eventual goal is for ES6 classes to replace React.createClass completely, but until we have a replacement for current mixin use cases and support for class property initializers in the language, we don't plan to deprecate React.createClass

- The third least popular method: 

> 	function HelloMessage(props) {
	  return <div>Hello {props.name}</div>;
	}

- Defining the component as a function means it is effectively created anew each time and so has no ongoing internal state.

---------

- create a custom component.
- bundle of self-contained skeleton code.


3. What is the significance of the ReactDOM.render() function?

- renders content to HTML?
- makes an instance of a component. This actually drops the HTML ono the page.


4. What is JSX? Why does React recommend it? (Hint: See documentation on Displaying Data)

-	recommended. XML-like syntax that is transformed into JavScript via React.
- 	"concise and familiar syntax"
- 	doesn't alter the semantics of JS.

---------

-	provides code that mixes HTML and JS in the same block which is compiled *via Babel* ino JavaScript.
- JSX will save you time.


5. How do I incorporate a JSX script into my HTML? (Hint: See documentation on Displaying Data)

- 	links go in script tags like jQuery/bootstrap.
- 	"top of body?"

--------

- including a JSX script vs regular.
<script type='text/babel'></script>

6. What is Babel? And what role does it play in converting JSX into vanilla Javascript? 

- JavaScript Compiler.
- Compliles down JS with latest standards into a version that will work everywhere.

--------

- 	compiles JSX into JavaScript.

7. What is the significance of { } curly braces in React?

- used a lot when JS is inside of an element. Partitioning JS? this is framing variables?
- {{ }} expression-binding operator (?)

--------

- "make react reactive"

8. What is the difference between a prop and a state? (Hint: See articles on "Thinking in React", "Interactivity and Dynamic UIs")

- 	both affect the way components are rendered.

-	prop: property.

-	state: only on the inside of component definitions, needed when an element changes for specific reasons, either time or user input or whatever.

--------

-	state: any variable, value or component that is changing.
-	property: doesn'tchange at all. "Chat","Messages","Post Date", etc.

9. Create a Simple Hello World Appliation with React.








 

 QUESTIONS:

-- HOW DO YOU SET PROPS AND STATES?
-- Why so many different syntax options? Seems to add confusion.
-- Where else is Babel used?
-- What non-Facebook companies use React?
-- HOW DO WE BRING DATA INTO REACT??
