var React = require('react');
var axios = require('axios');

var Results = React.createClass({
	getInitialState: function(){
		return {
			articles: []
		}
	},
	componentDidMount: function(){
		console.log("MOUNTED");

		var term = "syria";
		axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=89ee936f34114daaa9a50758983cbc2c&q=" + term)
			.then(function(results){
				console.log(results);
				// for (var i = 0; i < results.data.response.docs.length; i++) {
				// 	console.log(results.data.response.docs[i].headline.main)
				// }
				this.setState({
					articles: results.data.response.docs
				})
				console.log(this)
				console.log(this.state)
		}.bind(this))

		/*Here we run our getGithubInfo function (from our helpers)*/
		// helpers.getGithubInfo(this.props.params.username)
		// 	.then(function(data){

		// 		/*Once we get a response from GitHub, 
		// 		we dump the contents into the components bio and repos "state" variables*/
		// 		this.setState({
		// 			bio: data.bio,
		// 			repos: data.repos
		// 		})
		// 	// This bind function allows us to reference the higher level this 
		// 	// and not the "this" in the smaller context function.
		// 	}.bind(this))
	},
	render: function(){

		// Map the repos and loop through
		// When we map an array we effectively say... loop through each repo
		// and perform the code in the function.
		// So in this case we are creating an array called "repos" 
		// which holds a series of HTML divs displaying lists. 
		// repos = [<div>...</div>, <div>...</div>, <div>...</div>, <div>...</div>]
		var articledata = this.state.articles.map(function(article, index){
			return(

				<div>
					{/*It's important that we include the key. Otherwise React will throw an error*/} 
			        <li className="list-group-item" key={index}>

			        	<h3>
			        		{article.headline.main && <span><em>{article.headline.main}</em></span>}
							<span className="btn-group pull-right" >
								{article.web_url && <a href={article.web_url} className="btn btn-default">View Article</a>}
								<button className="btn btn-primary">Save</button>
							</span>
			        	</h3>
			        	{article.pub_date && <p>Date Published: {article.pub_date}</p>}
			        	
			        </li>
		        </div>

			)
		});

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
							
								{/*This is where the items will be placed*/}
								{articledata}
								
							  </li>

							</ul>					
						</div>
					</div>

				</div>
			</div>

		)
	}

		/*Note the above code isn't what was getting rendered by the component*/
		/*The above "return" was simply to build the repos array.
		What ultimately gets rendered by the component is the "repos" array */
		// return (
		// 	<div>
		// 		<h3> User Repos </h3>
		// 		<ul className="list-group">
		// 			{repos}
		// 		</ul>
		// 	</div>
		// )

})

module.exports = Results;