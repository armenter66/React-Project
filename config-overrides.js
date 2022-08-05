const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
	alias({
		'@components': 'src/components',
		'@constans': 'src/constans',
		'@hoc-helper': 'src/hoc-helper',
		'@services': 'src/services',
		'@containers': 'src/containers',
		'@utils': 'src/utils',
		'@styles': 'src/styles',
		'@routes': 'src/routes',
		'@hooks': 'src/hooks',
		'@ui': 'src/components/UI',
		'@store': 'src/store',
	})(config);
	return config;
};
