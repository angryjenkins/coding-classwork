var React = require('react');
var ReactDOM = require('react-dom');
// var axios = require('axios')

var Main = require('./Components/Main.js')

function runSearch(term){
	return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f00d8dbd623a99f7d310810bf38cff90:9:74629258&q=" + term)
		.then(function(results){
			console.log(results)
			for (var i = 0; i < results.data.response.docs.length; i++) {
				console.log(results.data.response.docs[i].headline.main)
			}
	})
};

var Main = React.createClass({
	render: function(){
		return (

			<div className="container">
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
				
				<div className="jumbotron">
					<h2 className="text-center"><strong>New York Times Article Scrubber</strong></h2>
					<h3 className="text-center">Search for and save articles of interest.</h3>
				</div>

				<Search/>

			</div>

		)
	}
});

var Query = React.createClass({
	getInitialState: function() {
		return {term: ''};
	},
	handleTermChange: function(e) {
		this.setState({term: e.target.value});
	},
	handleSubmit: function(e){
		e.preventDefault();
		var term = this.state.term.trim()
		if (!term) {
	    	return;
	    }
		runSearch(term);
		this.setState({term: ''})
	},
	render: function(){
		return(

			<div className="col-sm-12">
		        <form onSubmit={this.handleSubmit}>
		          	<div className="form-group col-sm-7">
		            	<input type="text" value={this.state.term} onChange={this.handleTermChange} placeholder="Enter search terms.." className="form-control" />
		          	</div>
		          	<div className="form-group col-sm-5">
		            	<button type="submit" className="btn btn-block btn-primary">Search NYT</button>
		          	</div>
		        </form>
		    </div>

		)
	}
});

var Results = React.createClass({
	render: function(){

		return(

			<div className="row">
				<div className="col-lg-12">

					<div className="panel panel-primary">
						<div className="panel-heading">
							<h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
						</div>
						<div className="panel-body">
							<ul className="list-group">
							  <li className="list-group-item">
							
								<h3>
								  	<span><em>Aliens Invade Paris</em></span>
									<span className="btn-group pull-right" >
										<button className="btn btn-default ">View Article</button>
										<button className="btn btn-primary">Save</button>
									</span> 
								</h3>
								<p>Date Published: 03/15/16</p>
								
							  </li>

							  <li className="list-group-item">
							
								<h3>
								  	<span><em>Obama Gives Commencement Speech</em></span>
									<span className="btn-group pull-right" >
										<button className="btn btn-default ">View Article</button>
										<button className="btn btn-primary">Save</button>
									</span> 
								</h3>
								<p>Date Published: 03/15/16</p>

							  </li>

							</ul>					
						</div>
					</div>

				</div>
			</div>

		)
	}
})

var Search = React.createClass({
	render: function(){
		return(
			<div className="row">
				<div className="col-lg-12">
					<Query/>
				</div>
			
				<div className="col-lg-12">
					<Results/>
				</div>
			</div>
		)
	}
})

var Router = require('react-router').Router;

var routes = require('./routes');

// ReactDOM.render(<Main />, document.getElementById('app'))
ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'))
