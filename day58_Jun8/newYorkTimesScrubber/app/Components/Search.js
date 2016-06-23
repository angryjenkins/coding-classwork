var React = require('react');
var Query = require('./Search/Query.js');
var Results = require('./Search/Results.js');

var Search = React.createClass({
	getInitialState: function() {
        return {term: ''};
    },
    getSearchTerms: function(newTerm){
    	this.setState({term: newTerm})
    },
	render: function(){
		console.log(this);
		return(
			<div className="row">
				<div className="col-lg-12">
					<Query callbackParent={this.getSearchTerms}/>
				</div>
			
				<div className="col-lg-12">
					<Results/>
				</div>
			</div>
		)
	}
})

module.exports = Search;