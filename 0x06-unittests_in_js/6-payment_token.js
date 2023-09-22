/**
 * @desc Task 6's module
 */

const getPaymentTokenFromApi = function (success) {
  return new Promise((res) => {
    if (success) res({ data: 'Successful response from the API' });
  });
};

module.exports = getPaymentTokenFromApi;
