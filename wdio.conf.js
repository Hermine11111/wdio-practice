exports.config = {
    runner: 'local',
    specs: ['./test/features/**/*.feature'],
    suites: { smoke: ['./test/features/**/*.feature'] },
    maxInstances: 1,
    capabilities: [{ browserName: 'chrome' }],
    logLevel: 'error',
    baseUrl: 'https://practicesoftwaretesting.com',
    framework: 'cucumber',
    reporters: [
        'spec',
        ['junit', {
            outputDir: './reports',
            outputFileFormat: (options) => `results-${options.cid}.xml`
        }]
    ],

    // ✅ Global waitFor* timeout for all waitForDisplayed, waitForClickable, waitUntil
    waitforTimeout: 15000, 

    cucumberOpts: {
        require: ['./test/step-definitions/**/*.js'],
        tagExpression: process.env.TAG || '@smoke',
        timeout: 120000,
        strict: true
    },

    before: async () => {
        const chai = await import('chai');
        global.expect = chai.expect;
    }
};