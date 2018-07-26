const isNumber = require('./isNumber');

/**
 * @module RoundTo
 */

('use strict');

/**
 * Rounds the number with selected precision
 * @param {number} num - number to round.
 * @param {number} precision - precision to use
 * @return {number} - rounded number.
 */
function roundTo(num, precision) {
    return isNumber(num) && isNumber(precision) ? round(num, precision) : NaN;
}

/**
 * Rounds the number with selected precision
 * @param {number} num - number to round.
 * @param {number} precision - precision to use
 * @return {number} - rounded number.
 */
function round(num, precision) {
    const lvl = Math.pow(10, precision);
    const epsiolon = Number.EPSILON || 0; // Fix for IE 11 wich doesn't have epsilon
    return Math.round((num + epsiolon) * lvl) / lvl;
}

module.exports = roundTo;
