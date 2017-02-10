var webpack = require('webpack');

// plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');

exports.config = {
    entry: { 
        app: './src/app/app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/,
                options: { presets: ['es2015' ]}
            },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vertex - AngularJS',
            template: './config/index.template.ejs'
        })
    ],
    devServer: {
        stats: 'minimal',
        port: 3000
    }
}