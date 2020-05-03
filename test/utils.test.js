import { validateNumber, validateString, isRequired } from '../src/utils';

describe('utils::validateNumber', () => {
	test('should return false with string', () => {
		const result = validateNumber('');
		expect(result).toBe(false);
	});
	test('should return false with string', () => {
		const result = validateNumber('test');
		expect(result).toBe(false);
	});
	test('should return false with object', () => {
		const result = validateNumber({});
		expect(result).toBe(false);
	});
	test('should return false with array', () => {
		const result = validateNumber([]);
		expect(result).toBe(false);
	});
	test('should return false with NaN', () => {
		const result = validateNumber(NaN);
		expect(result).toBe(false);
	});
	test('should return true', () => {
		expect(validateNumber(4)).toBe(true);
		expect(validateNumber(0)).toBe(true);
	});
});

describe('utils::validateString', () => {
	test('its should return false with empty arg', () => {
		const result = validateString('');
		expect(result).toBe(false);
	});
	test('should return true', () => {
		expect(validateString('test')).toBe(true);
	});
});

describe('utils::isRequired', () => {
	test('throw error', () => {
		const error = () => isRequired('number');
		expect(error).toThrowError('number is required');
	});
});
