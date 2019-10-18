const server = require( '../env/env.js');
  
const defaultTimeoutInterval  = process.env.DEBUG ? (60 * 60 * 500) : 90000;

exports.config = {

    // ============
    // Runner Configuration
    // ============
    runner: 'local',
    services: ['selenium-standalone'],
    
    // ============
    // Specify Test Files
    // ============
    specs: [
       './test/specs/*.js'
    ],
    exclude: [
        // './test/specs/file-to-exclude.js'
    ],

    // ============
    // Capabilities
    // ============
    maxInstances: 15,

    capabilities: [
      {
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
          // args: ['--headless', '--disable-gpu'],
        }
      },

      // {
      //   maxInstances: 5,
      //   browserName: 'firefox',
      //   "moz:firefoxOptions": {
      //     //args: ['-headless']
      //   }
      // },

      // {
      //   maxInstances: 5,
      //   browserName: 'safari',
      // },

      // {
      //   maxInstances: 5,
      //   browserName: 'internet explorer',
      //   acceptUntrustedCertificates: true,
      //   ignoreProtectedModeSettings: true,    //only applicable to IE browser
      //   ignoreZoomSetting: true,              //only applicable to IE browser
      //   ensureCleanSession: true,
      // },
  ],
    // ===================
    // Test Configurations
    // ===================
    sync: true,
    logLevel: 'silent',               // Level of logging verbosity: silent | verbose | command | data | result | error
    deprecationWarnings: true,
    bail: 0,

    baseUrl: server.url.mt_url,

    waitforTimeout: 10000,            // Default timeout for all waitFor* commands.
    connectionRetryTimeout: 90000,    // Default timeout in milliseconds for request if Selenium Grid doesn't send response
    connectionRetryCount: 3,          // Default request retries count

    services: ['selenium-standalone'],
    // services: [browserstack'],
    // user: process.env.BROWSERSTACK_USERNAME,
    // key: process.env.BROWSERSTACK_ACCESS_KEY,
    // browserstackLocal: true,

    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 90000,
      compilers: ['js:@babel/register'],
    },

    // reporters: ['spec', 'junit','allure', 'json', 'mochawesome'],
    // reporterOptions: {
    //     junit:  {outputDir:   './test/reports/junit-results/'},
    //     json:   {outputDir:   './test/reports/json-results/'},
    //     allure: {
    //       outputDir:   './test/reports/allure-results/',
    //       disableWebdriverStepsReporting: false,
    //       //useCucumberStepReporter: false,
    //     },
    //     mochawesome:  {outputDir:   './test/reports/mocha-results/'},
    //     mochawesomeOpts: {
    //       includeScreenshots: true,
    //       screenshotUseRelativePath:true
    //     },
    // },
    reporters: [
        'spec',
        ['junit', {
            outputDir: './test/reports/junit-results/',
            outputFileFormat: function(opts) { // optional
                return `results-${opts.cid}.${opts.capabilities}.xml`
            }
          }
        ],

        ['allure', {
            outputDir: './test/reports/allure-results/',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
          }
        ],
    ],
    // =====
    // Hooks
    // =====
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function (config, capabilities) {
      console.log('**** let\'s go ****');
    },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    beforeSession: function (config, capabilities, specs) {
        require('@babel/register');
    },
    /**
    // Gets executed before test execution begins. At this point you can access all global
    // variables, such as `browser`. It is the perfect place to define custom commands.
    * @param {Array.<Object>} capabilities list of capabilities details
    * @param {Array.<String>} specs List of spec file paths that are to be run
    */
    before: function (capabilities, specs) {
      /**
       * Setup the Chai assertion framework
       */
      const chai    = require('chai');
      global.expect = chai.expect;
      global.assert = chai.assert;
      global.should = chai.should();
    },
    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    afterTest: function (test) {
      //console.log(test);
     },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. It is not
     * possible to defer the end of the process using a promise.
     * @param {Object} exitCode 0 - success, 1 - fail
     */
    onComplete: function(exitCode) {
      console.log('**** that\'s it ****');
    }
}
