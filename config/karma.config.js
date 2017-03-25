var webpackConfig = require('./webpack.dev.config');
// remove output to prevent webpack errors

module.exports = (config) => {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: ['./karma.test.bundle.js'],
        preprocessors: {
            './karma.test.bundle.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        reporters: ['spec'],
        browsers: ['Chrome'],
        singleRun: true
    });
}