// Express Server
// Sunday 1/14/2018

const express = require('express');

/*
	app is an object that takes in requests, and
	depending on the request will run different code
*/
const app = express();

/*
	Define Request Handlers
	listen for requests on specific requests

	req => Express => res

*/

// Watch for incoming requests of method GET
// to the route http://localhost:3050/api
app.get('/api', (req, res) => {
	res.send({ hi: 'there' });
});


// listen for incoming HTTP requests on port 3050
app.listen(3050, () => {
	console.log('Running on port 3050');
});




