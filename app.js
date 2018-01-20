// Express Server
// Sunday 1/14/2018
// rev. Saturday 1/20/2018

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// routes is a function() => MongoDB
const routes = require('./routes/routes');

/*
	app is an object that takes in requests, and
	depending on the request will run different code
*/
const app = express();

// Webpack Middleware Configuration
// see Grider, Webpack, Sec. 9, Lec. 51
// webpackMiddleware intercepts incoming requests and hands
// them off to webpack
// webpack exists to compile our application assets
// webpackConfig tells webpack how to operate correctly
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

// OPTION 2 -- express.static
// console.log('__dirname =', __dirname);
/*
const staticAssetsPath = path.resolve(__dirname, 'build/');
console.log('staticAssetsPath =', staticAssetsPath);
app.use(express.static(staticAssetsPath));
*/

// any incoming request, assume it is json, and parse into an object
// bodyParser must be placed above routes(app)
app.use(bodyParser.json());

/*
// allows CORS for communication between localhost servers
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	next();
});
*/

// Routes defined specifically for Express
routes(app);

/*
app.get('*', (req, res) => {
	const rootFile = path.resolve(__dirname, 'index.html');
	console.log('rootFile =', rootFile);
	res.sendFile(rootFile);
});
*/


// listen for incoming HTTP requests on specified port
const PORT = process.env.PORT || 3000;
// added if statement so mocha test would run without error
if(!module.parent) {
	app.listen(PORT, () => {
		console.log('Server is listening on port', PORT);
	});
}

module.exports = app;
