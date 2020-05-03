/**
 * @name validateNumber
 * @private
 * @description return if arg is a valid number
 * @param {number} number
 * @example validateNumber('test') // false
 * @example validateNumber(12) // true
 */

export const validateNumber = (num) =>
	!!(num || num === 0) && typeof num === 'number' && !Number.isNaN(Number(num));
