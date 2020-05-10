import getItem from './getItem';
import setItem from './setItem';

/**
 * @module browserLocalstorage
 * @description function for manage cache from localstorage with expiration
 * @example const localCache = browserLocalstorage('data');
 * @returns function get and set
 */

const browserLocalstorage = () => {
	return {
		getItem,
		setItem,
	};
};

export default browserLocalstorage;
