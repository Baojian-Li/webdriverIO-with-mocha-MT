# MT Web Testing By WDIO and Mocha Framework

## Environment Setup

### Global Dependencies

* Install [Node.js](https://nodejs.org/en/)
* Or Install Brew: $ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* Install Node.js with [Homebrew](http://brew.sh/)
  ```
  $ brew install node
  ```
### Project Dependencies

* Install Node modules
  ```
  $ npm install
  ```

### Running Tests 
    1. From Mac

    Run from DEV
        $ ENV=dev npm test 

    Run from STAGING
        $ ENV=stg npm test 

    Run from PREPROD
        $ ENV=preprd npm test 

    Run from PRODUCTION
        $ ENV=prd npm test 

    2. From Windows

    You need to download and install GitBash app on desktop, and open GitBash, then land to the installed app folder, run all scripts exact same as Mac.


### Test report and Result
    Run JUnit Report
      $ npm run junit-report

    Run Allure Report
      $npm run allure-report

REPO: https://github.com/Baojian-Li/webdriverIO-with-mocha-MT/blob/master/test/specs/mt-article.spec.js
