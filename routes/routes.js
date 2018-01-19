// January 14, 2018

const GuestsController = require('../controllers/guests_controller');

// Define a function and immediately export

module.exports = (app) => {

	/*
		Define Request Handlers
		listen for requests on specific requests
		req => Express => res
	*/

	// Watch for incoming requests of method GET
	// to the route http://localhost:3050/api
	app.get('/api/', GuestsController.greeting);

	// app.get('/api/guests', GuestsController.getData);

	// passing a reference to GuestsController.create
	app.post('/api/guests', GuestsController.create);

}