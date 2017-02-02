var webpackConfig = require('./webpack.dev.config');
// remove output to prevent webpack errors
webpackConfig.output = {};

module.exports = (config) => {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['spec'],
        files: ['./../src/tests.webpack.js'],
        preprocessors: {
            './../src/tests.webpack.js': ['webpack', 'sourcemap']
        },
        browsers: ['Chrome'],
        singleRun: true,
        webpack: webpackConfig
    })
}