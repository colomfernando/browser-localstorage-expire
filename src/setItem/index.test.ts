/* eslint-disable no-underscore-dangle */
import setItem from '.';

describe('setItem function', () => {
	beforeEach(() => {
		localStorage.clear();
		// 03/31/2020 @ 9:10pm (UTC)
		const mockDate = new Date(1585689000);
		jest.spyOn(global, 'Date').mockImplementation(() => mockDate as unknown as string);
	});

	describe('localStorage', () => {
		it('have been called twice', () => {
			setItem('test', [1, 2]);
			setItem('ic', [1, 2, 3, 4]);
			expect(localStorage.setItem).toHaveBeenCalledTimes(2);
		});

		it('have correct object keys', () => {
			const name = 'test';
			setItem(name, [{ visa: 2 }]);
			const item = JSON.parse(localStorage.__STORE__[name]);
			expect(item).toHaveProperty('value');
			expect(item).toHaveProperty('expiry');
		});

		it('have correct object', () => {
			const name = 'test';
			setItem(name, [{ visa: 2 }]);
			const item = JSON.parse(localStorage.__STORE__[name]);
			const response = {
				value: [{ visa: 2 }],
				expiry: 1585989000,
			};
			expect(item).toEqual(response);
		});

		it('have correct object with wrong expiry', () => {
			const name = 'test';
			setItem(name, [{ visa: 2 }], NaN);
			const item = JSON.parse(localStorage.__STORE__[name]);
			const response = {
				value: [{ visa: 2 }],
				expiry: 1585689005,
			};
			expect(item).toEqual(response);
		});

		it('have correct object', () => {
			const name = 'test';
			setItem(name, [{ visa: 2 }], 5);
			const item = JSON.parse(localStorage.__STORE__[name]);
			const response = {
				value: [{ visa: 2 }],
				expiry: 1585989000,
			};
			expect(item).toEqual(response);
		});
	});
});
