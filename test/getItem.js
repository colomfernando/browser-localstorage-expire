/* eslint-disable no-underscore-dangle */
import getItem from '../src/getItem';

describe('getItem localStorage function', () => {
	beforeEach(() => {
		localStorage.clear();

		// 03/31/2020 @ 9:10pm (UTC)
		const mockDate = new Date(1585689000);
		jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
		global.Date = jest.fn(() => ({
			getTime: () => 1585689000,
		}));
	});

	test('have been called', () => {
		getItem('vtex');
		expect(localStorage.getItem).toHaveBeenCalledTimes(1);
	});

	test('return with error name required', () => {
		const error = () => getItem();
		expect(error).toThrowError('name localstorage is required');
	});
	test('return with error name required', () => {
		const error = () => getItem(2);
		expect(error).toThrowError('name must be a valid string');
	});

	test('return with data', () => {
		localStorage.setItem(
			'vtex-installments',
			JSON.stringify({ expiry: 1585689000, value: [{ visa: 2 }] })
		);
		const item = getItem('vtex-installments');
		expect(item).toEqual([{ visa: 2 }]);
	});

	test('return null for no match name', () => {
		const item = getItem('vtex');
		expect(item).toBe(null);
	});

	test('return null of expire localStorage', () => {
		// 03/31/2020 @ 9:00pm (UTC) expiry
		const name = 'vtex';
		localStorage.setItem(name, JSON.stringify({ expiry: 1585688410, value: [{ visa: 2 }] }));
		const item = getItem('vtex');
		expect(item).toBe(null);
	});
});
