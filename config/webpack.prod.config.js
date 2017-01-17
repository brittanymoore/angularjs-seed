var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = {
    entry: { 
        app: './src/app/app.js'
    },
    output: {
        path: __dirname + './../dist',
        publicPath: '',
        filename: '[name].bundle.min.js',
        chunkFilename: '[name].bundle.min.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    plugins: [
        // FUTURE WORK: consider adding ngAnnotatePlugin to automatically adding
        // di injection annotations.
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new HtmlWebpackPlugin({
            title: 'Vertex - AngularJS',
            template: './config/index.template.ejs'
        })
    ],
    devServer: {
        contentBase: './dist',
        stats: 'minimal',
        port: 3000
    }
}