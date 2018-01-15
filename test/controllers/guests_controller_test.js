const assert = require('assert');
const request = require('supertest');
const app = require('../../app');


describe('Guests controller', () => {

	it('Post to /api/guests creates a new guest', (done) => {
		request(app)
			.post('/api/guests')
			.send({
				name: 'Senor Calderon',
				email: 'test@test.com'
			})
			.end(() => {
				done();
			})
	});
});