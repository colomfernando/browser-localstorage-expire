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
	describe('error', () => {
		test('return error', () => {
			const error = () => browserLocalstorage();
			expect(error).toThrowError('name localStorage is required');
		});
		test('return error with wrong arg', () => {
			const error = () => browserLocalstorage([1]);
			expect(error).toThrowError('key must be a valid string');
		});
	});

	describe('cache', () => {
		test('function instance', () => {
			const localCache = browserLocalstorage('vtex');
			expect(localCache.set).toBeDefined();
			expect(localCache.get).toBeDefined();
			expect(localCache.set).toBeInstanceOf(Function);
			expect(localCache.get).toBeInstanceOf(Function);
		});
	});
	describe('cache setter and getter', () => {
		test('setter', () => {
			const name = 'vtex';
			const localCache = browserLocalstorage(name);
			localCache.set({ name: 1, lastName: 2 });
			expect(localStorage.__STORE__[name]).toEqual(
				'{"value":{"name":1,"lastName":2},"expiry":1585989827}'
			);
		});

		test('getter', () => {
			const name = 'vtex';
			const localCache = browserLocalstorage(name);
			localStorage.setItem(name, JSON.stringify({ expiry: 1585688410, value: [{ visa: 2 }] }));
			const response = localCache.get();
			expect(response).toBe(null);
		});
	});
});
