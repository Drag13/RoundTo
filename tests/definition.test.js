const chai = require('chai');
const roundTo = require('../src/index');
const expect = chai.expect;

describe('roundTo function', () => {
    it('should be function', () => {
        expect(roundTo).to.be.an('function');
    });
});
