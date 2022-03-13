import { value minutesToMilliseconds } from './utils';

/**
 * @name setItem
 * @private
 * @param {string} name name key for localstorage
 * @param {*} value - data to save in localstorage
 * @param {number} [expiry = 5] - time of expiration in minutes
 * @description function for save data in localstorage
 * @example setItem() // 		setItem('data', [{ country: 2 }], 5);
 */

const setItem = (name: string, value: any, expiry: number = 5) => {
	const validExpiry = minutesToMilliseconds(expiry);
	const item = {
		value,
		expiry: new Date().getTime() + validExpiry,
	};
	localStorage.setItem(name, JSON.stringify(item));
};

export default setItem;
