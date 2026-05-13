exports.config = {
    runner: 'local',
    specs: ['./test/features/**/*.feature'],
    suites: { smoke: ['./test/features/**/*.feature'] },
    maxInstances: 1,
    capabilities: [{ browserName: 'chrome' }],
    logLevel: 'error',
    baseUrl: 'https://practicesoftwaretesting.com',
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./test/step-definitions/**/*.js'],
        tagExpression: '@smoke', // default tag for smoke suite
        timeout: 60000,
        strict: true
    },
    before: async () => {
        const chai = require('chai');
        global.expect = chai.expect;
    }
};