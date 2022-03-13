/* eslint-disable no-underscore-dangle */
import setItem from '../src/setItem';

describe('setItem function', () => {
	beforeEach(() => {
		localStorage.clear();
		global.Date = jest.fn(() => ({
			getTime: () => 19585629827,
		}));
	});

	describe('localStorage', () => {
		test('have been called twice', () => {
			setItem('vtex', [1, 2]);
			setItem('ic', [1, 2, 3, 4]);
			expect(localStorage.setItem).toHaveBeenCalledTimes(2);
		});

		test('have correct object keys', () => {
			const name = 'vtex';
			setItem(name, [{ visa: 2 }]);
			const item = JSON.parse(localStorage.__STORE__[name]);
			expect(item).toHaveProperty('value');
			expect(item).toHaveProperty('expiry');
		});

		test('have correct object', () => {
			const name = 'vtex';
			setItem(name, [{ visa: 2 }]);
			const item = JSON.parse(localStorage.__STORE__[name]);
			const response = {
				value: [{ visa: 2 }],
				expiry: 19585929827,
			};
			expect(item).toEqual(response);
		});

		test('have correct object with wrong expiry', () => {
			const name = 'vtex';
			setItem(name, [{ visa: 2 }], NaN);
			const item = JSON.parse(localStorage.__STORE__[name]);
			const response = {
				value: [{ visa: 2 }],
				expiry: 19585689827,
			};
			expect(item).toEqual(response);
		});

		test('have correct object', () => {
			const name = 'vtex';
			setItem(name, [{ visa: 2 }], 5);
			const item = JSON.parse(localStorage.__STORE__[name]);
			const response = {
				value: [{ visa: 2 }],
				expiry: 19585929827,
			};
			expect(item).toEqual(response);
		});
	});
});
