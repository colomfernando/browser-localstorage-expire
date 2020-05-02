module.exports = {
	extends: ['prettier'],
	plugins: ['babel', 'prettier', 'jest'],
	parser: 'babel-eslint',
	rules: {
		'prettier/prettier': 'error',
		'import/no-named-as-default': 0,
	},
	env: {},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.json'],
				moduleDirectory: ['node_modules', 'src'],
			},
		},
	},
	globals: {
		localStorage: true,
	},
};
