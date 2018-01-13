// handled by nodeJS runtime
const path = require('path');

// webpack links up JS modules together
const config = {
  
  	// Entry point - where to start
  	// 1. first file executed in browser
  	// 2. start of module-building process, as it
  	// processess the files and import statements
  	entry: './src/index.js',

  	// Output - where the output goes
  	// must specify an absolute file reference
  	// __dirname => const in nodeJS for current pwd
  	// usually save output to folder 'build'
  	output: {
  		  path: path.resolve(__dirname, 'build'),
  		  publicPath: 'build/',
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
    				// assign a regex expression to apply babel to only .js files
    				test: /\.(js|jsx)$/,
    				// don't apply bable to files in node_modules directory
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
    				test: /\.(jpe?g|png|gif|svg)$/,

    			}
    		]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}

module.exports = config;