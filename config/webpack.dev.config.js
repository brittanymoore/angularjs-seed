var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = {
    entry: { 
        app: './src/app/app.js'
    },
    output: {
        path: __dirname + './../dev',
        publicPath: '',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vertex - AngularJS',
            template: './config/index.template.ejs'
        })
    ],
    devServer: {
        contentBase: './dev',
        stats: 'minimal',
        port: 3000
    }
}