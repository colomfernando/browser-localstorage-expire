import {
	validateNumber,
	validateString,
	isRequired,
	invalidType,
	minutesToMiliseconds,
} from '../src/utils';

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
	test('its should return false with undefined arg', () => {
		const result = validateString();
		expect(result).toBe(false);
	});
	test('should return true', () => {
		expect(validateString('test')).toBe(true);
	});
});

describe('utils::isRequired', () => {
	test('throw error with argument', () => {
		const error = () => isRequired('number');
		expect(error).toThrowError('number is required');
	});
	test('throw error with default argument', () => {
		const error = () => isRequired();
		expect(error).toThrowError('param is required');
	});
});

describe('utils::validType', () => {
	test('throw error with arguments', () => {
		const error = () => invalidType('name', 'string');
		expect(error).toThrowError('name must be a valid string');
	});
	test('throw error with default arguments', () => {
		const error = () => invalidType(undefined, 'string');
		expect(error).toThrowError('param must be a valid string');
	});
	test('throw error with default arguments', () => {
		const error = () => invalidType('param');
		expect(error).toThrowError('param must be a valid type');
	});
});

describe('utils::minutesToMiliseconds', () => {
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
