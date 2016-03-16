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
    var vm = this;

    vm.vehicles = vehicles;
    vm.callToActionLabel = 'Choose!';
    vm.callToActionClick = callToAction;
    vm.things = ['One', 'Two', 'Three'];

    function callToAction () {
      var
        rand,
        index;

      // Generate a number between 0 (inclusive) and 1 (exclusive).
      rand = Math.random();

      index = Math.floor(rand * vehicles.getList().length);

      vm.choice = vehicles.getList()[index].name;
    }
  }
})();
