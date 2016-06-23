module.exports = {
	
	// This code will be compiled 
	entry: "./app/App.js",

	// Then output into this file
	output: {
		filename: "public/bundle.js"
	},


	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					// These are the specific transformations we'll be using. 
					presets: ['react', 'es2015']
				}
			}
		]
	}

}