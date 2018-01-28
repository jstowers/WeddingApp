// Sunday, January 14, 2018

/*
	PURPOSE: the request-handling logic for the MongoDB wedding database is contained here.
	Usually have one controller for each resource used within the applicaiton.
*/

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// localhost for mongod process
// const url = 'mongodb://localhost:27017/';

// MongoDB Atlas ij2 Cluster - M10 Instance Size
const url = 'mongodb://jstowers:D2pl8wlTg3Cy78VC@ij2-shard-00-00-'+
	'zha7t.mongodb.net:27017,ij2-shard-00-01-'+
	'zha7t.mongodb.net:27017,ij2-shard-00-02-'+
	'zha7t.mongodb.net:27017/test?ssl=true&replicaSet=IJ2-shard-'+
	'0&authSource=admin';

// each key-value pair in the module represents a request handler
module.exports = {

	// Greeting - sample API request
	greeting(req, res) {
		res.send({ hi: 'there' });
	},

	// Works on MongoDB Atlas with M10 Cluster Size
	// Does not work on free tier
	get(req, res) {

		let resultArr = [];

		MongoClient.connect(url, (err, client) => {
			assert.equal(null, err);
			console.log('successfully connected to MongoDB.');

			if (process.env.NODE_ENV === 'production') {
				let db = client.db('weddingDB');
				let guests = db.collection('guests');
			} else {
				db = client.db('weddingDB-dev');
				guests = db.collection('guests');
			}
			
			let cursor = guests.find();
			cursor.forEach((doc, err) => {
				assert.equal(null, err);
				resultArr.push(doc);
			}, () => {
				console.log('resultArr = ', resultArr);
				res.status(200).send(resultArr);
				client.close();
			});
		});
	},

	create(req, res) {

		console.log('create req.body =', req.body);

		let item = {
			name: req.body.name,
			email: req.body.email,
			numAdults: req.body.numAdults,
			numChildren: req.body.numChildren,
			songRequest: req.body.songRequest
		}

		MongoClient.connect(url, (err, client) => {
			assert.equal(null, err);
			console.log("successfully connected to MongoDB.");

			const db, guests;

			if (process.env.NODE_ENV === 'production') {
				console.log('in IF statement for process.env.NODE_ENV = production');
				db = client.db('weddingDB');
				guests = db.collection('guests');
			} else {
				db = client.db('weddingDB-dev');
				guests = db.collection('guests');
			}

			guests.insertOne(item, (err, response) => {
				assert.equal(null, err);
				console.log('a guest was added to the guests collection.');
				res.status(200).send('success');
				client.close();
			});
		});
	},

	delete(req, res) {
		MongoClient.connect(url, (err, client) => {
			assert.equal(null, err);
			console.log("successfully connected to MongoDB.");

			const db = client.db('weddingDB');
			const guests = db.collection('guests');

			guests.drop((err, response) => {
				assert.equal(null, err);
				console.log('the guests collection was deleted.');
				res.status(200).send('success');
				client.close();
			});
		});
	}
}


/*	MongoDB Sandbox Code
			
	.toArray() returns a promsie => gets stuck in pending
	// let allGuestsArr = guests.find().toArray();
	// console.log('allGuestsArr =', allGuestsArr);
	// res.status(200).send(allGuestsArr);
	

	// let atlasSize = db.adminCommand({atlasSize:1});
	// res.status(200).send(atlasSize);
*/