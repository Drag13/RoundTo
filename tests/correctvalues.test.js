const chai = require('chai');
const roundTo = require('../src/index');
const expect = chai.expect;

const testData = [
    { number: 0, precision: 0, expected: 0 },
    { number: 0.1, precision: 0, expected: 0 },
    { number: 0.1, precision: 1, expected: 0.1 },
    { number: 0.11, precision: 1, expected: 0.1 },
    { number: 0.11, precision: 2, expected: 0.11 },
    { number: 0.111, precision: 2, expected: 0.11 },

    { number: 0.5, precision: 0, expected: 1 },
    { number: 0.5, precision: 1, expected: 0.5 },
    { number: 0.55, precision: 1, expected: 0.6 },
    { number: 0.55, precision: 2, expected: 0.55 },
    { number: 0.555, precision: 2, expected: 0.56 },
    { number: 0.5, precision: 4, expected: 0.5 },
    { number: 0.5555, precision: 4, expected: 0.5555 },

    { number: 1.3555, precision: 2, expected: 1.36 },
    { number: 1.3555, precision: 3, expected: 1.356 },
    { number: 1.005, precision: 2, expected: 1.01 },
    { number: 1.0049999999999999, precision: 2, expected: 1.01 },
    { number: 0.43499999999999994, precision: 2, expected: 0.44 },
    { number: 0.43499999999999994, precision: 3, expected: 0.435 },
    { number: 0.43499999999999994, precision: 4, expected: 0.435 },

    { number: 1, precision: 0, expected: 1 },
];

describe('roundTo function', () => {
    testData.forEach(input => {
        it(`should round ${input.number} with precision ${input.precision} to ${
            input.expected
        }`, () => {
            const rounded = roundTo(input.number, input.precision);
            expect(rounded).to.be.equal(input.expected);
        });
    });
});
