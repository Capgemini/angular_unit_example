/**
* @ngdoc service
* @name exampleApp.service:utility
* @description
*   Provides a collection of generic utility functions for use throughout
*   the app.
*/
angular
  .module('exampleApp')
  .factory('utility', [function () {
    'use strict';

    var utility;

    utility = {
      /**
       * @ngdoc method
       * @name increasingOrderSort
       * @methodOf exampleApp.service:utility
       *
       * @param {number}  a Number to be sorted.
       * @param {number}  b Number to be sorted.
       * @returns {number}  Difference for sorting.
       */
      increasingOrderSort : function (a, b) {
        return a - b;
      },

      /**
       * @ngdoc method
       * @name decreasingOrderSort
       * @methodOf exampleApp.service:utility
       *
       * @param {number}  a Number to be sorted.
       * @param {number}  b Number to be sorted.
       * @returns {number}  Difference for sorting.
       */
      decreasingOrderSort : function (a, b) {
        return b - a;
      },

      /**
       * @ngdoc method
       * @name capitalize
       * @methodOf exampleApp.service:utility
       * @description
       *   Returns the string capitalised.
       *
       * @param   {string}  string  The string to be capitalised.
       * @returns {string}  The capitalised string.
       */
      capitalize : function (string) {
        return string.substring(0, 1).toUpperCase() + string.substring(1);
      }
    };

    return utility;
  }]);
