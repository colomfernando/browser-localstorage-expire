import { validateString, isRequired, invalidType } from './utils';
import getItem from './getItem';
import setItem from './setItem';

/**
 * @module cache
 * @private
 * @param {string} key - key for set name for localstorage
 * @description function for manage cache from localstorage with expiration
 * @example const localCache = cache('vtex');
 * @returns function get and set
 */

const cache = (key = isRequired('name localStorage')) => {
	if (!validateString(key)) invalidType('key', 'string');
	return {
		get: () => getItem(key),
		set: (value, expiry) => setItem(key, value, expiry),
	};
};

export default cache;
