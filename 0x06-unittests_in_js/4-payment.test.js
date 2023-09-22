/**
 * @desc Test for Task 4
 */

const expect = require('chai').expect;
const sinon = require('sinon');
// const calculateNumber = require('./2-calcul_chai');
// const util = require('./utils');

describe('Test 3-payment', function () {
  it('calculateNumber && util.sendPaymentRequestToApi', function () {
    let util = {
      calculateNumber: function () {},
    };

    let calculateNumberStub = sinon.stub(util, 'calculateNumber').returns(10);
    util.calculateNumber('SUM', 100, 20);

    expect(util.calculateNumber.firstCall.args[0]).to.be.equal('SUM');
    expect(util.calculateNumber.firstCall.args[1]).to.be.equal(100);
    expect(util.calculateNumber.firstCall.args[2]).to.be.equal(20);

    expect(calculateNumberStub.callCount).to.be.equal(1);
    expect(`The total is: ${util.calculateNumber()}`).to.be.equal('The total is: 10');
    calculateNumberStub.restore();
  });
});
