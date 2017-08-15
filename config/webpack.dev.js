var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');

// common config
var common = require('./webpack.common');

// constants
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
const API_URL = common.apiUrl;
const OUTPUT_FOLDER = path.resolve(__dirname, './../dev');

module.exports = webpackMerge(common.config, {

    output: {
        publicPath: '',
        path: OUTPUT_FOLDER,
        pathinfo: true // devtool: eval
    },

    devtool: 'eval',

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'API_URL': JSON.stringify(API_URL)
            }
        }),
    ],

    devServer: {
        contentBase: OUTPUT_FOLDER
    }

});
