module.exports = {
	preset: 'ts-jest',
	roots: ['<rootDir>'],
	testEnvironment: 'node',
	resetMocks: false,
	setupFiles: ['jest-localstorage-mock'],
	collectCoverage: true,
	verbose: true,
	coverageDirectory: 'coverage',
	coveragePathIgnorePatterns: ['/node_modules/'],
	coverageReporters: ['text', 'html'],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	collectCoverageFrom: ['src/**/*.ts', '!**/node_modules/**'],
	testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
	testPathIgnorePatterns: ['\\\\node_modules\\\\'],
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
