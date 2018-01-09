const webpack = require('webpack'); // Allowed by babel-loader
const CompressionPlugin = require('compression-webpack-plugin')

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
    },
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false,
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true
            },
            output: {
                comments: false
            }
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0
        })
    ]
}

module.exports = config;