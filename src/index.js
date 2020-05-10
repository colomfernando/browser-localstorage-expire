import { validateString, isRequired, invalidType } from './utils';
import getItem from './getItem';
import setItem from './setItem';

/**
 * @module browserLocalstorage
 * @param {string} key - key for set name for localstorage
 * @description function for manage cache from localstorage with expiration
 * @example const localCache = browserLocalstorage('data');
 * @returns function get and set
 */

const browserLocalstorage = (key = isRequired('name localStorage')) => {
	if (!validateString(key)) invalidType('key', 'string');
	return {
		get: () => getItem(key),
		set: (value, expiry) => setItem(key, value, expiry),
	};
};

export default browserLocalstorage;
