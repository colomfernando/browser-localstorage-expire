import { minutesToMilliseconds } from '../src/utils';

describe('utils::minutesToMiliseconds', () => {
	test('returns default minutes', () => {
		expect(minutesToMilliseconds()).toBe(300000);
	});
	test('returns default minutes with wrong arg', () => {
		expect(minutesToMilliseconds(10)).toBe(600000);
	});
	test('returns default minutes with 1 minutes', () => {
		expect(minutesToMilliseconds(1)).toBe(60000);
	});
	test('returns default minutes with 0 minutes', () => {
		expect(minutesToMilliseconds(0)).toBe(300000);
	});
});
