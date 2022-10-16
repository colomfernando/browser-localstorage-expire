/* eslint-disable no-underscore-dangle */
import getItem from '.';

describe('getItem localStorage function', () => {
	beforeEach(() => {
		localStorage.clear();

		// 03/31/2020 @ 9:10pm (UTC)
		const mockDate = new Date(1585689000);
		jest.spyOn(global, 'Date').mockImplementation(() => mockDate as unknown as string);
	});

	it('have been called', () => {
		getItem('test');
		expect(localStorage.getItem).toHaveBeenCalledTimes(1);
	});

	it('return with data', () => {
		localStorage.setItem(
			'test-installments',
			JSON.stringify({ expiry: 1585689000, value: [{ visa: 2 }] })
		);
		const item = getItem('test-installments');
		expect(item).toEqual([{ visa: 2 }]);
	});

	it('return null for no match name', () => {
		const item = getItem('test');
		expect(item).toBe(null);
	});

	it('return null of expire localStorage', () => {
		// 03/31/2020 @ 9:00pm (UTC) expiry
		const name = 'test';
		localStorage.setItem(name, JSON.stringify({ expiry: 1585688410, value: [{ visa: 2 }] }));
		const item = getItem('test');
		expect(item).toBe(null);
	});
});
