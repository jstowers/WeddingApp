// January 14, 2018

const GuestsController = require('../controllers/guests_controller');
const path = require('path');

/*
	Define Request Handlers
	listen for requests on specific requests
	req => Express => res
*/

module.exports = (app) => {


	// Watch for incoming requests of method GET
	// to the route http://localhost:3050/api
	app.get('/api/', GuestsController.greeting);

	app.get('/api/data', GuestsController.get);

	// Handles POST request to MongoDB to add a guest
	// passing a reference to GuestsController.create
	app.post('/api/guests', GuestsController.create);

}