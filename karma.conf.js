var webpackConfig = require('./webpack.config');
// remove entry / output to prevent webpack errors
webpackConfig.entry = {};
webpackConfig.output = {};

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['spec'],
        files: ['src/tests.webpack.js'],
        preprocessors: {
            'src/tests.webpack.js': ['webpack', 'sourcemap']
        },
        browsers: ['Chrome'],
        singleRun: true,
        webpack: webpackConfig
    })
}