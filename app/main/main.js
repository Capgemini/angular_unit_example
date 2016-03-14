(function() {
  'use strict';

  /**
   * @ngdoc     controller
   * @name      exampleApp.controller:MainController
   * @requires  {object}  vehicles  The vehicles service
   * @description
   *   The Main Controller.
   **/
  angular
    .module('exampleApp')
    .controller('MainController', MainController);

  MainController.$inject = ['vehicles'];

  function MainController (vehicles) {
    var that = this;

    this.vehicles = vehicles;
    this.callToActionLabel = 'Choose!';
    this.callToActionClick = callToAction;
    this.things = ['one', 'two', 'three'];

    function callToAction () {
      var
        rand,
        index;

      // Generate a number between 0 (inclusive) and 1 (exclusive).
      rand = Math.random();

      index = Math.floor(rand * vehicles.list.length);

      that.choice = vehicles.list[index].name;
    }
  }
})();
