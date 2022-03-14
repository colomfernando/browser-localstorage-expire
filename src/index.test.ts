/* eslint-disable no-underscore-dangle */
import browserLocalstorage from '.';

describe('cache function', () => {
	beforeEach(() => {
		localStorage.clear();
		// 03/31/2020 @ 9:10pm (UTC)
		const mockDate = new Date(1585689000);
		jest.spyOn(global, 'Date').mockImplementation(() => mockDate as unknown as string);
	});
	describe('browserLocalstorage', () => {
		it('function instance', () => {
			const localCache = browserLocalstorage();
			expect(localCache.setItem).toBeDefined();
			expect(localCache.getItem).toBeDefined();
			expect(localCache.setItem).toBeInstanceOf(Function);
			expect(localCache.getItem).toBeInstanceOf(Function);
		});
	});
	describe('browserLocalstorage setter and getter', () => {
		it('setter', () => {
			const name = 'vtex';
			const localCache = browserLocalstorage();
			localCache.setItem(name, { name: 1, lastName: 2 });
			expect(localStorage.__STORE__[name]).toEqual(
				'{"value":{"name":1,"lastName":2},"expiry":1585989000}'
			);
		});

		it('getter', () => {
			const name = 'vtex';
			const localCache = browserLocalstorage();
			localStorage.setItem(name, JSON.stringify({ expiry: 1585688410, value: [{ visa: 2 }] }));
			const response = localCache.getItem(name);
			expect(response).toBe(null);
		});
	});
});
