const webpack = require('webpack'); // Allowed by babel-loader

// Config for compilation
let config = {
    entry: './src/es6/focus.js',
    output: {
        path: __dirname + '/dist/es6',
        filename: 'focus.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Test any js file
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}

module.exports = config;