# GreenLight - SendIT.gl

-------
[![Build Status](https://travis-ci.org/Noaa87/SendIT.svg?branch=master)](https://travis-ci.org/Noaa87/SendIT)

Fundamentals are:
- [TypeScript](https://www.typescriptlang.org/docs/tutorial.html) - as project language
- [ProtractorJS](http://www.protractortest.org) - as browser control framework
- [JasmineJS](https://jasmine.github.io/2.5/introduction) - as test runner (extended by [jasminewd](https://github.com/angular/jasminewd))
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm) - as package manager and runner

Basically this is standard set of technologies that is proposed by Protractor JS team.


#### Running
First, do: 

`npm install`

Instalation has `postinstall` hook, that triggers `webdriver-manager update` so you should have fresh chromedriver and selenium server downloaded and prepared. `postinstall` also trigers `npm run tsc`.

On some code changes - do not forget to compile your TypeScript code to JavaScript:

`npm run tsc`

Then, start tests:

`npm test`

By default - direct connect to local chrome driver is used. 

If you tired with running `npm run tsc` after each change, consider using compiler in `watch` mode:
`npm run tscw` with this compiler would automatically watch changed files, and compile them in real-time.

#### Debug
Debugging is already configured for Visual Studio Code - you should be able to put your breakpoints, and start debugging by running `Debug protractor.conf.js` in debug panel. Pre-debug compilation of TypeScript files is also configured.

This is done by `.vscode/launch.json` and `.vscode/tasks.json`. I suggest to keep this files in your repo.


#### PageObjects and PageFragments (Components)
- PageObjects are done using [ES6 classes](http://es6-features.org/#ClassDefinition)
- PageFragments (Components) done using ES6 classes and [protractor-element-extend](https://github.com/Xotabu4/protractor-element-extend) package

#### Additional matchers
This project has additional jasmine matchers for jasmine `expect()` function - `.toAppear()` and `.toDisappear()`. To read more about additional matchers see [jasmine-protractor-matchers](https://github.com/Xotabu4/jasmine-protractor-matchers) repo. Unfortunately, this lib does not support TypeScript yet. You should cast your `expect()` function to `:any` type to avoid compilation errors.

#### Reporting

Reporting is done using packages - 

- Console reporting - [jasmine-reporters](https://github.com/larrymyers/jasmine-reporters)
- jUnit xml reporting - [jasmine-reporters](https://github.com/larrymyers/jasmine-reporters)

Use generated XML with your continious integration system, so you won't need to generate any HTML reports from tests. By default output directory with xml results is `test_results/`
