(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name exampleApp.service:utility
   * @description
   *   Provides a collection of generic utility functions for use throughout
   *   the app.
   */
  angular
    .module('exampleApp')
    .factory('utility', utility);

  function utility () {
    var utility = {
      increasingOrderSort: increasingOrderSort,
      decreasingOrderSort: decreasingOrderSort,
      capitalize: capitalize
    };

    return utility;

    /*****/

    /**
     * @ngdoc method
     * @name increasingOrderSort
     * @methodOf exampleApp.service:utility
     * @description
     *   Provides an array sort function that organises numbers into increasing order.
     *
     * @param {number}  a Number to be sorted.
     * @param {number}  b Number to be sorted.
     * @returns {number}  Difference for sorting.
     */
    function increasingOrderSort (a, b) {
      return a - b;
    }

    /**
     * @ngdoc method
     * @name decreasingOrderSort
     * @methodOf exampleApp.service:utility
     * @description
     *   Provides an array sort function that organises numbers into decreasing order.
     *
     * @param {number}  a Number to be sorted.
     * @param {number}  b Number to be sorted.
     * @returns {number}  Difference for sorting.
     */
    function decreasingOrderSort (a, b) {
      return b - a;
    }

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
    function capitalize (string) {
      return string.substring(0, 1).toUpperCase() + string.substring(1);
    }
  }
})();
