import { validateNumber } from './utils';

/**
 * @name minutesToMiliseconds
 * @param {number} [minutes = 5]
 * @private
 * @description convert minutes to miliseconds
 * @example minutesToMiliseconds(10) // 600000
 * @return number of miliseconds
 */
const minutesToMiliseconds = (minutes = 5) => {
	const parseMinutes = !validateNumber(minutes) || minutes < 1 ? 5 : minutes;
	return parseMinutes * 60000;
};

export default minutesToMiliseconds;
