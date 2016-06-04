# components:

- search
- sidebar
-repo-list
- The APP ITSELF]


1. Home folder
2. Package.json file.
	- you will need a series of dependencies:
		-react
		-react-dom
		- babel-core
		- babel-loader
		- babel-preset-react
		- webpack

Babel will be our compiler, Webpack tells Babel what to do.


3 . Now need webpack.config.js
	- JSX converted into JavaScript file.
	- what to convert, how to do it, where to put files.

4. App folder.


5 Index.html file ONLY holds the div for the app and the link to the bundle.js scripts. 



===


RUN IT .... run webpack -w

TEST IT --- index.html, open in broswer, see if it will work.