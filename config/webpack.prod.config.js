var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

// common config
var common = require('./webpack.common');

// constants
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

var prodConfig = {
    output: {
        path: __dirname + './../dist',
        publicPath: '',
        filename: '[name].bundle.min.js',
        chunkFilename: '[name].bundle.min.js'
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true     
        })
    ],
    devServer: {
        contentBase: './dist',
    }
}

module.exports = webpackMerge(common.config, prodConfig);