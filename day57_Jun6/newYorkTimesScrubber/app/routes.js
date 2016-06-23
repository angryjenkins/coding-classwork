var React = require('react');
var Router = require('react-router');
var Main = require('./Components/Main.js');
var Search = require('./Components/Search.js')
var Saved = require('./Components/Saved.js')

var Route = Router.Route;

//  IndexRoute is a special React route that acts as the "catch-all" 
var IndexRoute	= Router.IndexRoute

module.exports = (
	// When a user goes to root they will be served the Main component
	// The instructions will then go to our app.js
	// If no other route matches... Then run the IndexRoute.	

	// When we go to the main path it will put in the menu

	/*  It will then also drop in either Profile or Home depending on the route.
		Notice how we are passing in "component" as an argument. 
		This allows us to point the router to a component. 
	*/
	<Route path="/" component={Main}>
		{/* If user selects the profile path... we get the Profile component*/}
		{/*<Route path='profile/:username' component={Profile} />*/}

		{/*If user selects any other path... we get the Home Route*/}
		{/*<IndexRoute component={Home} />*/}
		<IndexRoute component={Search} />
		<Route path='/saved' component={Saved} />
	</Route>

);