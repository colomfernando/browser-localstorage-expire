import { validateNumber } from '../src/utils';

describe('utils::validateNumber', () => {
	test('its should return false with string', () => {
		const result = validateNumber('');
		expect(result).toBe(false);
	});
	test('its should return false with string', () => {
		const result = validateNumber('test');
		expect(result).toBe(false);
	});
	test('its should return false with object', () => {
		const result = validateNumber({});
		expect(result).toBe(false);
	});
	test('its should return false with array', () => {
		const result = validateNumber([]);
		expect(result).toBe(false);
	});
	test('its should return false with NaN', () => {
		const result = validateNumber(NaN);
		expect(result).toBe(false);
	});
	test('its should return true', () => {
		expect(validateNumber(4)).toBe(true);
		expect(validateNumber(0)).toBe(true);
	});
});
