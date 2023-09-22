/**
 * @desc Task 6 test
 */

const expect = require('chai').use(require('chai-as-promised')).expect;

const getPaymentTokenFromApi = require('./6-payment_token');

describe('6-payment_token', function () {
  it('async', function () {
    getPaymentTokenFromApi().then((data) => {
      expect(data).to.be.equal('Successful response from the API');
      expect(typeof data === 'object').to.be.true;
      done();
    });
  });
});
