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

	/*
	app.get('/', (req, res) => {
		// request ad reponse are objects;
		// res.sendFile('index.html');
		// res.render('index');
		// res.send('Hi There');
		// loads index.html page
		// console.log('__dirname =', __dirname);
		const rootPath = path.join(__dirname, '../index.html');
		console.log('rootPath =', rootPath);
		res.sendFile(rootPath);

	});
	*/
	

	// Watch for incoming requests of method GET
	// to the route http://localhost:3050/api
	app.get('/api/', GuestsController.greeting);

	// Handles POST request to MongoDB to add a guest
	// passing a reference to GuestsController.create
	app.post('/api/guests', GuestsController.create);

}