// Express Server
// Sunday 1/14/2018

const express = require('express');

const bodyParser = require('body-parser');

// routes is a function()
const routes = require('./routes/routes');

/*
	app is an object that takes in requests, and
	depending on the request will run different code
*/
const app = express();
const PORT = process.env.PORT || 3000;

// any incoming request, assume it is json, and parse into an object
// bodyParser must be placed above routes(app)
app.use(bodyParser.json());

// allows CORS for communication between localhost servers
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	next();
});

routes(app);


// listen for incoming HTTP requests on specified port
// added if statement so mocha test would run without error
if(!module.parent) {
	app.listen(PORT, () => {
		console.log('Server is listening on port', PORT);
	});
}

module.exports = app;


