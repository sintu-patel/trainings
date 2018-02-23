var config = {
	entry : './main.js',

	output : {
		path : __dirname + "/dist/js",
		filename : 'index.js',
	},
	devServer : {
		inline : true,
		port : 9091
	},
	module : {
		loaders : [
			{
				test: /\.jsx?$/,
				exclude : /node_modules/,
				loader : 'babel-loader',
				query : {
					presets : ["es2015", "stage-0", "react"]
				}
			}]
	},
	devtool: 'source-map'
}
module.exports = config;
