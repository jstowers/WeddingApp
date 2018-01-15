const assert = require('assert');
const request = require('supertest');
const app = require('../../app');


describe('Guests controller', function() {

	it('should take less than 2000ms', function(done){
		this.timeout(2000);
  		setTimeout(done, 1000);
	});

	it('POST to /api/guests creates a new guest', function (done) {
		request(app)
			.post('/api/guests')
			.send({
				name: 'Joseph Stowers',
				email: 'test3@msn.com'
			})
			//.expect({success:true}, done)
			.end(function (err, res) {
				console.log('INSIDE POST .end');
				done();
			});
	});

	it('GET to /api/guests returns all the guests', function (done) {
		request(app)
			.get('/api/guests')
			.expect({success:true})
			.then(function() {
				done()
			})
			.catch(function(err) {
				done.faile(err);
			})


			/*
			.end((err, res) => {
				console.log('INSIDE GET .end');
				done()
			});
			*/
	});
});