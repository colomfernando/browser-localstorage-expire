/**
 * @name minutesToMilliseconds
 * @param {number} [minutes = 5]
 * @private
 * @description convert minutes to milliseconds
 * @example minutesToMilliseconds(10) // 600000
 * @return number of milliseconds
 */
export const minutesToMilliseconds = (minutes = 5): number => {
	const parseMinutes = minutes < 1 ? 5 : minutes;
	return parseMinutes * 60000;
};
