exports.config = {
    runner: 'local',

    // Feature files
    specs: ['./test/features/**/*.feature'],

    // Suites (optional, can be used for smoke or grouping)
    suites: {
        smoke: ['./test/features/**/*.feature']
    },

    maxInstances: 1,

    // Browser configuration
    capabilities: [
        { browserName: 'chrome' }
    ],

    // Logging
    logLevel: 'error',

    // Base URL for tests
    baseUrl: 'https://practicesoftwaretesting.com',

    // Test framework
    framework: 'cucumber',

    // Reporters: spec + JUnit XML for CI artifact uploads
    reporters: [
        'spec',
        ['junit', {
            outputDir: './reports',
            outputFileFormat: (options) => `results-${options.cid}.xml`
        }]
    ],

    // Cucumber options
    cucumberOpts: {
        require: ['./test/step-definitions/**/*.js'],
        // Use environment variable TAG set by npm scripts or default to @smoke
        tagExpression: process.env.TAG || '@smoke',
        timeout: 120000, // increased timeout for CI
        strict: true
    },

    // Global before hook
    before: async () => {
        const chai = require('chai');
        global.expect = chai.expect;
    }
};