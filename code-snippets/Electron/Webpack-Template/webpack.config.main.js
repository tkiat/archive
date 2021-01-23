const path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.config.common')

module.exports = merge(common, {
	entry: './src/main.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	target: 'electron-main'
});
