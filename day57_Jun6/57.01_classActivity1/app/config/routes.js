var React = require('react');

// This will draw from each of the components
var Main = require('../components/Main');
var Query = require('../components/Query');
var Results = require('../components/Results');

// We will then pull the router
var Router = require('react-router');
var Route = Router.Route;

//  This is the catchall route
var IndexRoute	= Router.IndexRoute;

module.exports = (
	// When a user goes to root they will be served the Main component
	// The instructions will then go to our app.js
	// If no other route matches... Then run the IndexRoute.

	// When we go to the main path it will put in the menu

	/*But it will also drop in the home contents for any other path*
	/*In effect home is a child of the main. */
	<Route path="/" component={Main}>
		<Route path="#/Query" component={Query} />
		<Route path="#/Results" component={Results} />
	</Route>

);
