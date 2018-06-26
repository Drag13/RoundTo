const chai = require('chai');
const isNUmber = require('../src/isNumber');
const expect = chai.expect;


const testData = [
    { value: 0, expected: true },
    { value: 1, expected: true },
    { value: 1.1, expected: true },
    { value: -1.1, expected: true },
    { value: Math.PI, expected: true },
    { value: Number.MAX_VALUE, expected: true },
    { value: Number.MIN_VALUE, expected: true },
    { value: Number(50), expected: true },
    { value: new Number(100), expected: true },
    { value: new Number(Number.NEGATIVE_INFINITY), expected: false },
    { value: new Number(Number.POSITIVE_INFINITY), expected: false },
    { value: Number.NEGATIVE_INFINITY, expected: false },
    { value: Number.POSITIVE_INFINITY, expected: false },
    { value: Number.NaN, expected: false },
    { value: null, expected: false },
    { value: undefined, expected: false },
    { value: {}, expected: false },
    { value: new Object(), expected: false },
    { value: [], expected: false },
    { value: '', expected: false },
    { value: '1', expected: false },
    { value: 'a', expected: false },
    { value: true, expected: false },
    { value: false, expected: false },
];

describe('isNumber function', () => {
    testData.forEach(input => {
        it(`for ${input.value} should return ${input.expected}`, () => {
            expect(isNUmber(input.value)).to.be.equal(input.expected);
        });
    });
});
