var React 		= require('react');

// This creates a React Component for us.
// It takes in a few properties that we can pass in...
// One of which is render. Render specifies what the UI looks like for this component
var Main = React.createClass({
	render: function(){

		// Return and parenthesis needs to be on same line.
		/*this.props.children will get replaced by the active component which will be our home component*/
		/*This is because the "home.js" file is inside of the main component*/

		return (
			<div className="container">
				<div className="jumbotron">
					<h2 className="text-center" style="text-decoration: underline"><strong>New York Times Article Scrubber</strong></h2>
					<h3 className="text-center">Search for and save articles of interest.</h3>
				</div>

				<div className="row">
					<div className="col-lg-12">

						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong></h1>
							</div>
							<div className="panel-body">


								<form>
									<div className="form-group">
										<h4 className=""><strong>Topic</strong></h4>
										<input type="text" className="form-control " id="search_topic" />

										<h4 className=""><strong>Start Year</strong></h4>
										<input type="text" className="form-control " id="search_start" />

										<h4 className=""><strong>End Year</strong></h4>
										<input type="text" className="form-control " id="search_end" />

									</div>


									<div className="pull-right">
										<button type="submit" className="btn btn-danger"><h4>Submit</h4></button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

				<nav className="navbar navbar-default" role="navigation">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">NYT-React</a>
						</div>

						<div className="collapse navbar-collapse navbar-ex1-collapse">
							<ul className="nav navbar-nav navbar-right">
								<li><a href="#">Search</a></li>
								<li><a href="#">Saved Articles</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>

		)
	}
});

// Tell it which component to render and where we will render it to.
// Then we run webpack -w
// We dont want Main being the central render
// Whenever we require Main we'll get this component

module.exports = Main;
