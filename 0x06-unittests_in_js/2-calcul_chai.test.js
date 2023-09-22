/**
 * @desc Test file for Task 2
 */

const expect = require('chai').expect;
const calculateNumber = require('./2-calcul');

describe('1-calcul', function () {
  describe('DIVIDE', function () {
    it('a: 1.5 - b: 3.5', function () {
      expect(calculateNumber('DIVIDE', 1.5, 3.5)).to.be.equal(0.5);
    });
    it('a: 1.45 - b: 3.9', function () {
      expect(calculateNumber('DIVIDE', 1.45, 3.9) === 0.25).to.be.true;
    });
    it('a: 1.99 - b: 3.49', function () {
      expect(calculateNumber('DIVIDE', 1.99, 3.49)).to.be.equal(0.6666666666666666);
    });
    it('a: 1.49 - b: 3.49', function () {
      expect(calculateNumber('DIVIDE', 1.49, 3.49) === 0.3333333333333333).to.be.true;
    });
    it('a: 2.7 - b: 3.9', function () {
      expect(calculateNumber('DIVIDE', 2.7, 3.9)).to.be.equal(0.75);
    });
    it('a: 5 - b: 0.4', function () {
      expect(calculateNumber('DIVIDE', 5, 0.4)).to.equal('Error');
    });
  });

  describe('SUM', function () {
    it('a: 1.5 - b: 3.5', function () {
      expect(calculateNumber('SUM', 1.5, 3.5) === 6).to.be.true;
    });
    it('a: 1.45 - b: 3.9', function () {
      expect(calculateNumber('SUM', 1.45, 3.9) === 5).to.be.true;
    });
    it('a: 1.99 - b: 3.49', function () {
      expect(calculateNumber('SUM', 1.99, 3.49) === 5).to.be.true;
    });
    it('a: 2.7 - b: 3.9', function () {
      expect(calculateNumber('SUM', 2.7, 3.9) === 7).to.be.true;
    });
  });

  describe('SUBTRACT', function () {
    it('a: 1.5 - b: 3.5', function () {
      expect(calculateNumber('SUBTRACT', 1.5, 3.5) === -2).to.be.true;
    });
    it('a: 1.45 - b: 3.9', function () {
      expect(calculateNumber('SUBTRACT', 1.45, 3.9) === -3).to.be.true;
    });
    it('a: 1.99 - b: 3.49', function () {
      expect(calculateNumber('SUBTRACT', 5, 3.49) === 2).to.be.true;
    });
    it('a: 2.7 - b: 3.9', function () {
      expect(calculateNumber('SUBTRACT', 2.7, 1.9) === 1).to.be.true;
    });
    it('a: 2.6 - b: 2.49', function () {
      expect(calculateNumber('SUBTRACT', 2.6, 2.49) === 0).to.be.false;
    });
  });
});
