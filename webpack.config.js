var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/index'
	],
	mode: 'development',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js$/,
				use: "eslint-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, "src")],
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: ["react-hot-loader/babel", "transform-runtime"]
					}
				}
			}
		]
	}
}