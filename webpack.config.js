var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = {
    entry: { 
        app: './src/app/app.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
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
        new HtmlWebpackPlugin({
            title: 'Vertex - Angular1',
            template: './config/index.template.ejs'
        })
    ],
    devServer: {
        contentBase: './dist',
        stats: 'minimal',
        port: 3000
    }
}