// Sunday, January 14, 2018

/*

	PURPOSE: the request-handling logic for the Guests data is contained here.
	Usually have one controller for each resource used within the applicaiton.

*/

// each key-value pair represents a request handler
module.exports = {

	// greeting 
	// ES6 syntax for key-value pair
	greeting(req, res) {
		res.send({ hi: 'there' });

	},

	create(req, res) {
		console.log(req.body);
		res.send({ hi: 'there' });

		/*

		let item = {
			name: req.body.name,
			email: req.body.email
		}
		*/


	}
}