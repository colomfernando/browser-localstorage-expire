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
		 * @function getItem
		 * @param {string} name - name key for localstorage
		 * @description function for get data in localstorage
		 * @returns data from localstorage
		 * @example
		 * const localCache = browserLocalstorage();
		 * localCache.localGetItem('data')
		 */
		getItem,
		/**
		 * @function setItem
		 * @param {string} name name key for localstorage
		 * @param {T} value - data to save in localstorage
		 * @param {number} [expiry = 5] - time of expiration in minutes
		 * @description function for save data in localstorage
		 * @returns void
		 * @example
		 * const localCache = browserLocalstorage();
		 * localCache.setItem('data', [{ country: 2 }], 5);
		 */
		setItem,
	};
};

export default browserLocalstorage;
