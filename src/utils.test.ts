import { minutesToMilliseconds } from './utils';

describe('utils::minutesToMilliseconds', () => {
	it('returns default minutes', () => {
		expect(minutesToMilliseconds()).toBe(300000);
	});
	it('returns default minutes with wrong arg', () => {
		expect(minutesToMilliseconds(10)).toBe(600000);
	});
	it('returns default minutes with 1 minutes', () => {
		expect(minutesToMilliseconds(1)).toBe(60000);
	});
	it('returns default minutes with 0 minutes', () => {
		expect(minutesToMilliseconds(0)).toBe(300000);
	});
});
