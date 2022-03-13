/**
 * @name minutesToMilliseconds
 * @param {number} [minutes = 5]
 * @private
 * @description convert minutes to milliseconds
 * @example minutesToMilliseconds(10) // 600000
 * @return number of milliseconds
 */
export const minutesToMilliseconds = (minutes = 5) => {
	const parseMinutes = minutes < 1 ? 5 : minutes;
	return parseMinutes * 60000;
};

/**
 * @name validateNumber
 * @private
 * @description return if arg is a valid number
 * @param {number} number
 * @example validateNumber('fizzmod') // false
 * @example validateNumber(12) // true
 */
export const validateNumber = (num: number): boolean =>
	typeof num === 'number' && !Number.isNaN(Number(num));
