module.exports = {
	rootDir: './',
	moduleDirectories: ['node_modules', 'src'],
	moduleFileExtensions: ['js', 'json'],
	testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
	testPathIgnorePatterns: ['\\\\node_modules\\\\'],
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	verbose: false,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['src/**/*.{js, json}'],
	coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
	coverageReporters: ['text', 'html'],
	coverageThreshold: {
		global: {
			branches: 0,
			functions: 2,
			lines: 2,
			statements: 2,
		},
	},
	setupFiles: ['jest-localstorage-mock'],
};
