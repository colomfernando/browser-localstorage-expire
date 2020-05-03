import minutesToMiliseconds from '../src/minutesToMiliseconds';

describe('minutesToMiliseconds', () => {
	test('returns default minutes', () => {
		expect(minutesToMiliseconds()).toBe(300000);
	});
	test('returns default minutes with wrong arg', () => {
		expect(minutesToMiliseconds('test')).toBe(300000);
	});
	test('returns default minutes with wrong arg', () => {
		expect(minutesToMiliseconds(10)).toBe(600000);
	});
	test('returns default minutes with 1 minutes', () => {
		expect(minutesToMiliseconds(1)).toBe(60000);
	});
	test('returns default minutes with 0 minutes', () => {
		expect(minutesToMiliseconds(0)).toBe(300000);
	});
});
