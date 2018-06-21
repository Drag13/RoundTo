/**
 * @module RoundTo
 */

'use strict';

/**
 * Rounds the number with selected precision
 * @param {number} num - number to round.
 * @param {number} precision - precision to use
 * @returns {number} - rounded number.
 */
function roundTo(num, precision) {
    const lvl = Math.pow(10, precision);
    return Math.round((num + Number.EPSILON) * lvl) / lvl
}

module.exports = roundTo;