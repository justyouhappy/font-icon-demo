const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");//css
module.exports = {
    entry: './src/js/entry',
    output: {
        path:  path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8080/static/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
				test: /\.css$/, use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader']
				})
            },
            {
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: [
						'es2015',
						'stage-0',
					]
				}
			},
			{ 
                test: /\.(woff)$/i, 
                use: [
                    'url-loader'
                ] 
            }
            
        ]
    },
    plugins: [
		new ExtractTextPlugin('bundle.css')
	]

}