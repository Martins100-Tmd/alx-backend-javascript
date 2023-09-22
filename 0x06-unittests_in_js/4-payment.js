/**
 * @desc Task 4's module
 */
const Util = require('./utils');

const sendPaymentRequestToApi = function (totalAmount, totalShipping) {
  return `The total is: ${Util.calculateNumber('SUM', totalAmount, totalShipping)}`;
};

module.exports = sendPaymentRequestToApi;
