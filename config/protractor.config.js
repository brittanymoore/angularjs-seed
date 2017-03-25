let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

    directConnect: true, // works for chrome and firefox
    baseUrl: 'http://localhost:3000',

    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [
        { 'browserName': 'chrome' },
        //{ 'browserName': 'firefox' }
    ],

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['./../src/**/*.e2e.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true
    },

    // spec reporting
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    }

};