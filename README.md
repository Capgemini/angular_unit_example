An example Angular application with Unit Testing
================================================
This application is intended to help you learn how to get started with unit testing an Angular app, and a task runner.  

It does not try to show you all you need to know, instead it has been kept small to try to make getting started easier.  The task runner provides a few tasks to help you while developing, including a coverage report, generating documentation, and running tests.

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


Development
-----------
To view the app use a server to serve `angular_example/app/app.html` and view it in a browser.

### Testing
Each JavaScript file to be unit tested has a sibling of the same name with .test.js suffix containing the unit tests for it.
By default `grunt` will run these unit̨ tests.
To get a better picture that includes a test of the coverage use:
```
grunt report
```

Read more about unit testing with Karma & Jasmine at
https://docs.angularjs.org/guide/unit-testing

Read about Jasmine at
http://jasmine.github.io/2.0/introduction.html

Read more about e2e (end to end) testing with Protractor at
https://docs.angularjs.org/guide/e2e-testing

### Documentation
To generate documentation from the ngDocs comments in the code run:
```
grunt docs
```
This will generate `angular_example/docs/index.html`.  Serve this as a web page, and view in a browser.

To write comments that will be processed by ngDocs start a jsdoc / docblock style comment with `@ngdoc`. There are some notes on how to write at
https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation

### Linting
Linting settings have been defined in `.eslintrc.yaml`

To run eslint use:
```
grunt eslint
```
or
```
grunt report
```

Read more at: http://eslint.org/
and https://www.smashingmagazine.com/2015/09/eslint-the-next-generation-javascript-linter/
