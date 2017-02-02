var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

// common config
var common = require('./webpack.common');

// constants
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

var devConfig = {
    output: {
        path: __dirname + './../dev',
        publicPath: '',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dev',
    }
}

module.exports = webpackMerge(common.config, devConfig);