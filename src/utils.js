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
 * @example validateString('test') // true
 */
export const validateString = (str = '') => !!(typeof str === 'string' && str);

/**
 * @name isRequired
 * @private
 * @description return message error on arg required
 * @param {string} name arg
 * @example (param = isRequired('param')) => {}
 * @returns 'param is required'
 */
export const isRequired = (param = 'param') => {
	throw new Error(`${param} is required`);
};

/**
 * @name invalidType
 * @private
 * @description return message error on arg required
 * @param {string} param arg
 * @param {string} type type of arguments
 * @example validType('test', 'string')
 * @returns 'param must by a valid string'
 */
export const invalidType = (param = 'param', type = isRequired('type')) => {
	throw new Error(`${param} must be a valid ${type}`);
};
