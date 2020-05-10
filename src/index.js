import getItem from './getItem';
import setItem from './setItem';

/**
 * @module browserLocalstorage
 * @description function for manage cache from localstorage with expiration
 * @example const localCache = browserLocalstorage();
 * @returns function get and set
 */

const browserLocalstorage = () => {
	return {
		/**
		 * @name getItem
		 * @param {string} name name key for localstorage
		 * @description function for get data in localstorage
		 * @example setItem() // 		getItem('data') // [{ country: 2 }]
		 * @returns data from localstorage
		 */
		getItem,
		/**
		 * @name setItem
		 * @param {string} name name key for localstorage
		 * @param {number} value - data to save in localstorage
		 * @param {number} [expiry = 300000] - time of expiration
		 * @description function for save data in localstorage
		 * @example setItem() // 		setItem('data', [{ country: 2 }], 50000);
		 */
		setItem,
	};
};

export default browserLocalstorage;
