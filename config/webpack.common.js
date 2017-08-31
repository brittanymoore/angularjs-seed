// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// constants
const APP_NAME = 'My App';

exports.apiUrl = '';
exports.publicPath = '';

exports.config = {

    entry: {
        main: './src/app/app.module.js'
    },

    output: {
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/,
                options: { presets: [ 'es2015' ]}
            },
            { test: /\.html$/, loader: 'raw-loader' }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: APP_NAME,
            template: './config/index.template.ejs',
            chunksSortMode: 'dependency'
        })
    ],

    devServer: {
        stats: 'minimal',
        port: 3000
    }

};
