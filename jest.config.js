module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	resetMocks: false,
	setupFiles: ['jest-localstorage-mock'],
	collectCoverage: true,
	verbose: false,
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['src/**/*.{ts, json}'],
	coveragePathIgnorePatterns: ['/node_modules/'],
	coverageReporters: ['text', 'html', 'lcov'],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
	testPathIgnorePatterns: ['\\\\node_modules\\\\'],
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	moduleDirectories: ['node_modules', 'src'],
};
