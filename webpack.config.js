// handled by nodeJS runtime
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// webpack links up JS modules together
const config = {

  	entry: {
        bundle: './src/index.js'
    },

  	// Output - where the output goes
  	// must specify an absolute file reference
  	// __dirname => const in nodeJS for current pwd
  	// usually save output to folder 'build'
  	output: {
  		  path: path.resolve(__dirname, 'build'),
  		  //publicPath: '/',
      	filename: 'bundle.js'
    },

  	// Loaders pre-process files before placing them into the bundle.js file
  	// Examples:
  	// 1. babel - implement transpiling for ES2015 code
  	// 2. CSS
  	// 3. images

  	// in Webpack 2+, each individual loader is referred to as a rule
    module: {
    		rules: [
    			{
    				use: 'babel-loader',
    				// assign a regex expression to only apply babel to .js or .jsx files
    				test: /\.(js|jsx)$/,
    				// don't apply babel to files in node_modules directory
    				exclude: /node_modules/
    			},
    			{
    				use: ['style-loader', 'css-loader'],
    				test: /\.css$/
    			},
    			{
    				use: [
    					{
    						loader: 'url-loader',
    						options: { limit: 40000 }

    					},
    					'image-webpack-loader'
    				],
    				test: /\.(jpe?g|png|gif|svg)$/
    			}
    		]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}

module.exports = config;