var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');

// plugins
const WebpackChunkHash = require('webpack-chunk-hash');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

// common config
var common = require('./webpack.common');

// constants
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const API_URL = common.apiUrl;
const OUTPUT_PATH = path.resolve(__dirname, './../dist');

module.exports = webpackMerge(common.config, {

    output: {
        publicPath: common.publicPath,
        path: OUTPUT_PATH
    },

    devtool: 'source-map',

    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'API_URL': JSON.stringify(API_URL)
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['main'],
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }            
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            sourceMap: true,
            compress: {
                screw_ie8: true,
                warnings: false
            },            
            comments: false
        })

    ],

    devServer: {
        contentBase: OUTPUT_PATH,
    }

});
