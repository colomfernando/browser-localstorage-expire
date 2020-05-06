/* eslint-disable no-underscore-dangle */
import cache from '../src';

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
			const error = () => cache();
			expect(error).toThrowError('name localStorage is required');
		});
		test('return error with wrong arg', () => {
			const error = () => cache([1]);
			expect(error).toThrowError('key must be a valid string');
		});
	});

	describe('cache', () => {
		test('function instance', () => {
			const localCache = cache('vtex');
			expect(localCache.set).toBeDefined();
			expect(localCache.get).toBeDefined();
			expect(localCache.set).toBeInstanceOf(Function);
			expect(localCache.get).toBeInstanceOf(Function);
		});
	});
	describe('cache setter and getter', () => {
		test('setter', () => {
			const name = 'vtex';
			const keyStorage = 'vtex-installments';
			const localCache = cache(name);
			localCache.set({ name: 1, lastName: 2 });
			expect(localStorage.__STORE__[keyStorage]).toEqual(
				'{"value":{"name":1,"lastName":2},"expiry":1585989827}'
			);
		});

		test('getter', () => {
			const name = 'vtex';
			const localCache = cache(name);
			localStorage.setItem(name, JSON.stringify({ expiry: 1585688410, value: [{ visa: 2 }] }));
			const response = localCache.get();
			expect(response).toBe(null);
		});
	});
});
