var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// development
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = {  
    entry: {
        app: './src/bootstrap.js'
    },
    output: {
        publicPath: '',
        path: path.resolve(__dirname, './../dev'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "raw-loader" },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'ENV': JSON.stringify(ENV),
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        }),
        new HtmlWebpackPlugin({
            title: "Vertex - Angular1",
            template: "./config/index.template.ejs"
        })
    ]
};