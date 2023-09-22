/**
 * @desc Task 5's module
 */
const Util = require('./utils');

const sendPaymentRequestToApi = function (totalAmount, totalShipping) {
  console.log(`The total is: ${Util.calculateNumber('SUM', totalAmount, totalShipping)}`);
};

module.exports = sendPaymentRequestToApi;
