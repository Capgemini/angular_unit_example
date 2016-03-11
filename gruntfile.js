module.exports = function (grunt) {
  'use strict';

  // Load all of the grunt tasks (matching the `grunt-*` pattern) in package.json::devDependencies
  require('load-grunt-tasks')(grunt);

  // Configure Tasks.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Define paths.
    project: {
      app: 'app',
      docs: 'docs',
      test: 'test',
      report: 'test/report'
    },

    // Unit testing.
    karma: {
      unit: {
        configFile: '<%= project.test %>/karma.phantomjs.conf.js',

        // Shut down the Karma server when testing is complete.
        singleRun: true
      }
    },

    // Test coverage (using Istanbul).
    coverage: {
      default: {
        options: {
          thresholds: {
            'statements': 80,
            'branches': 80,
            'lines': 80,
            'functions': 80
          },
          dir: 'coverage',
          root: '<%= project.report %>',
          report: true
        }
      }
    },

    // Documentation.
    ngdocs: {
      all: ['<%= project.app %>/**/*.js'],
      options: {
        title: "Angular Example Application"
      }
    },

    clean: {
      // Report task, for code coverage.
      coverage: '<%= project.report %>/coverage/*',
      docs: '<%= project.docs %>',
    },

    eslint: {
      target: ['<%= project.app %>/**/!(*spec|*test).js'],
      options: {
        configFile: 'conf/.eslintrc.js'
      }
    }
  });

  // Default.
  grunt.registerTask('default', ['karma', 'eslint']);

  // Generate documentation.
  grunt.registerTask('docs', [
    'clean:docs',
    'ngdocs'
  ]);

  // Report generator.
  grunt.registerTask('report', [
    'clean:coverage',
    'eslint',
    'karma',
    'coverage'
  ]);
};
