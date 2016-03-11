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

    this.vehicles = vehicles;

    this.thinkClick = function () {
      // console.log('THINK!');
    };

    this.things = ['one', 'two', 'three'];
  }]);
