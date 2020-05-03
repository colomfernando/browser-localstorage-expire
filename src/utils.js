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

/**
 * @name validateString
 * @private
 * @description return if arg is a valid string
 * @param {string} string
 * @example validateString('') // false
 * @example validateString('fizzmod') // true
 */
export const validateString = (str = '') => !!(typeof str === 'string' && str);
