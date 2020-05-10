/* eslint-disable no-underscore-dangle */
import browserLocalstorage from '../src';

describe('cache function', () => {
	beforeEach(() => {
		localStorage.clear();
		global.Date.now = jest.fn(() => 1585689827);
		global.Date = jest.fn(() => ({
			getTime: () => 1585689827,
		}));
	});
	describe('browserLocalstorage', () => {
		test('function instance', () => {
			const localCache = browserLocalstorage();
			expect(localCache.setItem).toBeDefined();
			expect(localCache.getItem).toBeDefined();
			expect(localCache.setItem).toBeInstanceOf(Function);
			expect(localCache.getItem).toBeInstanceOf(Function);
		});
	});
	describe('browserLocalstorage setter and getter', () => {
		test('setter', () => {
			const name = 'vtex';
			const localCache = browserLocalstorage();
			localCache.setItem(name, { name: 1, lastName: 2 });
			expect(localStorage.__STORE__[name]).toEqual(
				'{"value":{"name":1,"lastName":2},"expiry":1585989827}'
			);
		});

		test('getter', () => {
			const name = 'vtex';
			const localCache = browserLocalstorage();
			localStorage.setItem(name, JSON.stringify({ expiry: 1585688410, value: [{ visa: 2 }] }));
			const response = localCache.getItem(name);
			expect(response).toBe(null);
		});
	});
});
