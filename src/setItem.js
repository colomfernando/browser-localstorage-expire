import {
	validateString,
	validateNumber,
	isRequired,
	invalidType,
	minutesToMiliseconds,
} from './utils';

/**
 * @name setItem
 * @private
 * @param {string} name name key for localstorage
 * @param {number} value - data to save in localstorage
 * @param {number} [expiry = 5] - time of expiration in minutes
 * @description function for save data in localstorage
 * @example setItem() // 		setItem('data', [{ country: 2 }], 5);
 */

const setItem = (
	name = isRequired('name for localStorage'),
	value = isRequired('value for localStorage'),
	expiry = 5
) => {
	if (!validateString(name)) invalidType('name', 'string');
	const validExpiry = !validateNumber(expiry) ? 60000 : minutesToMiliseconds(expiry);
	const item = {
		value,
		expiry: new Date().getTime() + validExpiry,
	};
	localStorage.setItem(name, JSON.stringify(item));
};

export default setItem;
