var webpackConfig = require('./webpack.dev.config');
// remove output to prevent webpack errors
webpackConfig.output = {};

module.exports = (config) => {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['spec'],
        files: ['./karma.test.bundle.js'],
        preprocessors: {
            './karma.test.bundle.js': ['webpack', 'sourcemap']
        },
        browsers: ['Chrome'],
        singleRun: true,
        webpack: webpackConfig
    })
}