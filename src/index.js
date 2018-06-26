const isNumber = require('./isNumber');

/**
 * @module RoundTo
 */

'use strict';

/**
 * Rounds the number with selected precision
 * @param {number} num - number to round.
 * @param {number} precision - precision to use
 * @return {number} - rounded number.
 */
function roundTo(num, precision) {
    return (isNumber(num) && isNumber(precision)) ? round(num, precision) : NaN;
}

/**
 * Rounds the number with selected precision
 * @param {number} num - number to round.
 * @param {number} precision - precision to use
 * @return {number} - rounded number.
 */
function round(num, precision) {
    const lvl = Math.pow(10, precision);
    return Math.round((num + Number.EPSILON) * lvl) / lvl;
}

module.exports = roundTo;
