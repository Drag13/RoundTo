const chai = require('chai'),
    roundTo = require('../src/index'),
    expect = chai.expect;

describe('roundTo function', () => {
    it('should be function', () => {
        expect(roundTo).to.be.an('function');
    });
});
