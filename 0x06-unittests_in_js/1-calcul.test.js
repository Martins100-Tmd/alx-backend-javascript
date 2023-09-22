/**
 * @desc Test for Task 1
 */

const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('1-calcul', function () {
  describe('DIVIDE', function () {
    it('a: 1.5 - b: 3.5', function () {
      assert.equal(calculateNumber('DIVIDE', 1.5, 3.5), 0.5);
    });
    it('a: 1.45 - b: 3.9', function () {
      assert.equal(calculateNumber('DIVIDE', 1.45, 3.9), 0.25);
    });
    it('a: 1.99 - b: 3.49', function () {
      assert.equal(calculateNumber('DIVIDE', 1.99, 3.49), 0.6666666666666666);
    });
    it('a: 1.49 - b: 3.49', function () {
      assert.equal(calculateNumber('DIVIDE', 1.49, 3.49), 0.3333333333333333);
    });
    it('a: 2.7 - b: 3.9', function () {
      assert.equal(calculateNumber('DIVIDE', 2.7, 3.9), 0.75);
    });
    it('a: 5 - b: 0.4', function () {
      assert.equal(calculateNumber('DIVIDE', 5, 0.4), 'Error');
    });
  });

  describe('SUM', function () {
    it('a: 1.5 - b: 3.5', function () {
      assert.equal(calculateNumber('SUM', 1.5, 3.5), 6);
    });
    it('a: 1.45 - b: 3.9', function () {
      assert.equal(calculateNumber('SUM', 1.45, 3.9), 5);
    });
    it('a: 1.99 - b: 3.49', function () {
      assert.equal(calculateNumber('SUM', 1.99, 3.49), 5);
    });
    it('a: 2.7 - b: 3.9', function () {
      assert.equal(calculateNumber('SUM', 2.7, 3.9), 7);
    });
  });

  describe('SUBTRACT', function () {
    it('a: 1.5 - b: 3.5', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.5), -2);
    });
    it('a: 1.45 - b: 3.9', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.45, 3.9), -3);
    });
    it('a: 1.99 - b: 3.49', function () {
      assert.equal(calculateNumber('SUBTRACT', 5, 3.49), 2);
    });
    it('a: 2.7 - b: 3.9', function () {
      assert.equal(calculateNumber('SUBTRACT', 2.7, 1.9), 1);
    });
    it('a: 2.6 - b: 2.49', function () {
      assert.notEqual(calculateNumber('SUBTRACT', 2.6, 2.49), 0);
    });
  });
});
