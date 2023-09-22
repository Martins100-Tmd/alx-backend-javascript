/**
 * @desc api test
 */
const { expect } = require('chai');
const request = require('request');

describe('API', function () {
  const API = 'http://localhost:7865';

  it('status code', function (done) {
    request(`${API}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body === 'Welcome to the payment system').to.be.true;
      done();
    });
  });

  it('body', function (done) {
    request(`${API}/`, (err, _, body) => {
      expect(body === 'Welcome to the payment system').to.be.true;
      done();
    });
  });
});
