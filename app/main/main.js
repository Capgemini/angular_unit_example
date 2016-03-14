/**
 * @ngdoc     controller
 * @name      exampleApp.controller:MainController
 * @requires  {object}  vehicles  The vehicles service
 * @description
 *   The Main Controller.
 **/
angular
  .module('exampleApp')
  .controller('MainController', ['vehicles', function (vehicles) {
    'use strict';

    var that = this;

    this.vehicles = vehicles;
    this.callToActionClick = function () {
      var
        rand,
        index;

      // Generate a number between 0 (inclusive) and 1 (exclusive).
      rand = Math.random();

      index = Math.floor(rand * vehicles.list.length);

      that.choice = vehicles.list[index].name;
    };
    this.callToActionLabel = 'Choose!';
    this.things = ['one', 'two', 'three'];
  }]);
