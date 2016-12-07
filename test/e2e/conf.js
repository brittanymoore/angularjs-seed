exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:41507/index.html',
    rootElement: '.bam-app',
    specs: ['*.spec.js']
};