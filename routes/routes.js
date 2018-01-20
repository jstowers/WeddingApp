// January 14, 2018

const GuestsController = require('../controllers/guests_controller');
const path = require('path');

// Define a function and immediately export

module.exports = (app) => {

	/*
		Define Request Handlers
		listen for requests on specific requests
		req => Express => res
	*/

	app.get('/', (req, res) => {
		// request ad reponse are objects;
		// res.sendFile('index.html');
		// res.render('index');
		res.send('Hi There');
		// res.sendFile(path.join(__dirname, '../build/bundle.js'));

	});

	// Watch for incoming requests of method GET
	// to the route http://localhost:3050/api
	app.get('/api/', GuestsController.greeting);

	// app.get('/api/guests', GuestsController.getData);

	// passing a reference to GuestsController.create
	app.post('/api/guests', GuestsController.create);

}