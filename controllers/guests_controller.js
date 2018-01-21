// Sunday, January 14, 2018

/*

	PURPOSE: the request-handling logic for the Guests data is contained here.
	Usually have one controller for each resource used within the applicaiton.

*/

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// localhost
// const url = 'mongodb://localhost:27017/';

// connects to MongoDB but the POST requests fails:
const url = 'mongodb+srv://jstowers:<D2pl8wlTg3Cy78VC>@ij1-zha7t.mongodb.net/';

/* 
// can't connect to MongoDB - authentication errors
const url = 'mongodb://jstowers:<D2pl8wlTg3Cy78VC>@ij1-shard-00-00-'+ 
'zha7t.mongodb.net:27017,ij1-shard-00-01-'+
'zha7t.mongodb.net:27017,ij1-shard-00-02-'+
'zha7t.mongodb.net:27017/weddingDB?ssl=true&replicaSet=IJ1-shard-'+
'0&authSource=admin/';
*/

/*
// url to connect to guests database
if (process.env.NODE_ENV !== 'test') {
	const url = 'mongodb://localhost:27017/';
}
*/

// connect to a test database inside the Mocha suite


// each key-value pair represents a request handler
module.exports = {

	// greeting 
	// ES6 syntax for key-value pair
	greeting(req, res) {
		res.send({ hi: 'there' });
	},

	getData(req, res) {

		let resultArr = [];

		MongoClient.connect(url, (err, db) => {
			assert.equal(null, err);
			console.log('successfully connected to MongoDB.');

			const weddingDB = db.db('weddingDB');
			
			let cursor = weddingDB.collection('guests').find();
			cursor.forEach((doc, err) => {
				assert.equal(null, err);
				resultArr.push(doc);
			}, () => {
				res.status(200).send(resultArr);
				db.close();
				// res.render sends data back to the index page 
				// to render to an object called items
				// res.render('index', items: resultArr);
			});
		});
	},

	create(req, res) {

		console.log(req.body);

		let item = {
			name: req.body.name,
			email: req.body.email
		}
		console.log('item = ', item);

		MongoClient.connect(url, (err, client) => {
			assert.equal(null, err);
			console.log("successfully connected to MongoDB.");

			const db = client.db('weddingDB');
			const guests = db.collection('guests');

			guests.insertOne(item);

			console.log("added a new guest to the database.");

			client.close();

			/*
			guests.insert(item, (err, response) => {
				assert.equal(null, err);
				console.log('a new guest was added to the guests collection.');
				res.status(200).send('success');
				client.close();
			});
			*/
		});
	}

	/*
	create(req, res) {
		
		console.log(req.body);

		let item = {
			name: req.body.name,
			email: req.body.email
		}

		console.log('item = ', item);
		
		MongoClient.connect(url, (err, db) => {
			assert.equal(null, err);
			console.log("successfully connected to MongoDB.");

			const weddingDB = db.db('weddingDB');

			weddingDB.collection('guests').insertOne(item, (err, response) => {
				assert.equal(null, err);
				console.log('a new guest was added to the guests collection.');
				res.status(200).send('success');
				db.close();
			});
		});
	}
	*/
}