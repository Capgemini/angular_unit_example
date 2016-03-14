An example Angular application with Unit Testing
================================================
The aim of this project is to help you get started with unit testing an Angular app, and using a task runner.  It tries to provide just enough for you to start playing and learning, and has been kept deliberately small with the hope of making this easier.  The task runner provides a few tasks to help you while developing, including a coverage report, generating documentation, linting and running unit tests.

The task runner being used is Grunt, and Karma & Jasmine 2.0 are used for the unit testing.  The version of Angular is 1.x.

This Read Me is written using Markdown.
Command Line instructions in this Read Me assume a linux shell.

Getting started
---------------
Make sure you have NPM installed on your development environment. https://nodejs.org/en/download/

Move into the directory that contains the package.json file (and this README.md), and use npm to install the dependencies.
```
$ cd angular_example/
$ npm install
```
This will install grunt, and allow you to start using grunt tasks.

Look in `package.json` to see how the npm installation has been configured.

Development
-----------
To view the app use a server to serve `angular_example/app/app.html` and view it in a browser.

### Testing
Each JavaScript file to be unit tested has a sibling of the same name with .test.js suffix containing the unit tests for it.
By default `grunt` will run these unit̨ tests.
To get a better picture that also includes a report of the coverage use:
```
$ grunt report
```
Look in `gruntfile.js` to see how the report task has been configured.

Read more about unit testing with Karma & Jasmine at
https://docs.angularjs.org/guide/unit-testing

Read about Jasmine at
http://jasmine.github.io/2.0/introduction.html

Read more about e2e (end to end) testing with Protractor at
https://docs.angularjs.org/guide/e2e-testing

### Documentation
To generate documentation from the ngDocs comments in the code run:
```
$ grunt docs
```
This will generate `angular_example/docs/index.html`.  Serve this as a web page, and view in a browser.

To write comments that will be processed by ngDocs start a jsdoc / docblock style comment with `@ngdoc`. There are some notes on how to write at
https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation

### Linting
Linting settings have been defined in `.eslintrc.yaml`

To run eslint use:
```
$ grunt eslint
```
or
```
$ grunt report
```

Read more at: http://eslint.org/
and https://www.smashingmagazine.com/2015/09/eslint-the-next-generation-javascript-linter/

Next steps after getting this example working
---------------------------------------------
* Only a few unit tests have been illustrated, so explore adding tests for features of angular that have not yet been included, such as: Filters, Directives, Promises et cetera.
* Look into using Protractor to add e2e tests.
* Take a look at: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
