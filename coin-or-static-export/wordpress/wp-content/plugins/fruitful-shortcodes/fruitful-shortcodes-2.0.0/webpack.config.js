const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const glob = require('glob');
const path = require('path');
let dir = path.resolve();

const pathTo = dir.replace(/\\/g, '/') + '/core/gutenberg_blocks/';
//read all styles.scss from shortcodes
const stylesArray = glob.sync(pathTo + '**/block/block.scss');

let assetsObject = stylesArray.reduce((acc, item) => {
	let name = item.replace(pathTo, '');
	name = name.replace('/block/block.scss', '');
	acc[name] = new Array(item);
	return acc;
}, {});

//read all scripts.js from shortcodes
const scriptsArray = glob.sync(pathTo + '**/block/block.js');
scriptsArray.reduce((acc, item) => {

	let name = item.replace(pathTo, '');
	name = name.replace('/block/block.js', '');
	if (Array.isArray(assetsObject[name]) === true) {
		assetsObject[name].push(item);
	} else {
		assetsObject[name] = new Array(item);
	}
}, {});


module.exports = {
	entry: assetsObject,
	externals: {
		jquery: 'jQuery'
	},
	optimization: {
		minimizer: [
			// enable the js minification plugin
			new UglifyJSPlugin({
				test: /\.js(\?.*)?$/i,
				sourceMap: false,
				extractComments: true,
				parallel: true,
				uglifyOptions: {
					warnings: false,
					compress: {
						unsafe: true,
						inline: true,
						passes: 2,
						keep_fargs: false,
					},
					mangle: true, // Note `mangle.properties` is `false` by default.
					output: {
						beautify: false,
					},
					toplevel: false,
					ie8: false,
				}
			}),
			//enable the css minification plugin
			new OptimizeCSSAssetsPlugin({
				cssProcessor: require('cssnano'),
				cssProcessorPluginOptions: {
					preset: ['default', {discardComments: {removeAll: true}}],
					canPrint: true
				}
			})
		]
	},
	output: {
		path: dir,
		filename: "core/gutenberg_blocks/[name]/block/block.build.js"
	},
	module: {
		rules: [
			// compile all .scss files to plain old css
			{
				test: /\.(sass|scss)$/,
				use: [
					// MiniCssExtractPlugin.loader,
					// {loader: 'css-loader', options: {sourceMap: false, minimize: true}},
					{loader: 'postcss-loader'},
					{loader: 'sass-loader', options: {sourceMap: false, minimize: true}},
				]
			},
			// fonts loader
			{
				test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: './assets/fonts/',
						publicPath: '../../../../assets/fonts/'       // override the default path
					}
				}]
			},
			{
				test: /\.(png|jpg|svg|gif)$/i,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: './assets/img/',    // where the fonts will go
						publicPath: '../../../../assets/img/'       // override the default path
					}
				}]
			},
			//babel
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader: 'babel-loader',
					options: { babelrc: true }
				}]
			}
		]
	},
	devtool: 'source-map',
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'core/gutenberg_blocks/[name]/block/block.css'
		})
	]
};
