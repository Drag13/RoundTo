const chai = require('chai');
const expect = chai.expect;
const roundTo = require('../src/index');

const testData = [
    { value: new Number(Number.NEGATIVE_INFINITY), expected: NaN, precision: 0 },
    { value: new Number(Number.POSITIVE_INFINITY), expected: NaN, precision: 0 },
    { value: Number.NEGATIVE_INFINITY, expected: NaN, precision: 0 },
    { value: Number.POSITIVE_INFINITY, expected: NaN, precision: 0 },
    { value: Number.NaN, precision: 0, expected: NaN, precision: 0 },
    { value: null, expected: NaN, precision: 0 },
    { value: {}, expected: NaN, precision: 0 },
    { value: new Object(), expected: NaN, precision: 0 },
    { value: [], expected: NaN, precision: 0 },
    { value: '', expected: NaN, precision: 0 },
    { value: '1', expected: NaN, precision: 0 },
    { value: 'a', expected: NaN, precision: 0 },
    { value: true, expected: NaN, precision: 0 },
    { value: false, expected: NaN, precision: 0 },
    { value: 1, expected: NaN, precision: new Number(Number.NEGATIVE_INFINITY) },
    { value: 1, expected: NaN, precision: new Number(Number.POSITIVE_INFINITY) },
    { value: 1, expected: NaN, precision: Number.NEGATIVE_INFINITY },
    { value: 1, expected: NaN, precision: Number.POSITIVE_INFINITY },
    { value: 1, precision: Number.NaN, expected: NaN },
    { value: 1, expected: NaN, precision: null },
    { value: 1, expected: NaN, precision: {} },
    { value: 1, expected: NaN, precision: new Object() },
    { value: 1, expected: NaN, precision: [] },
    { value: 1, expected: NaN, precision: '' },
    { value: 1, expected: NaN, precision: '1' },
    { value: 1, expected: NaN, precision: 'a' },
    { value: 1, expected: NaN, precision: true },
    { value: 1, expected: NaN, precision: false },
];

describe('roundTo function', () => {
    testData.forEach(input => {
        it(`for ${input.value} should return ${input.expected}`, () => {
            const rounded = roundTo(input.value, input.precision);
            expect(rounded).to.be.eql(NaN);
        });
    });
});
