(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name exampleApp.service:vehicles
   * @description
   *   Service providing the vehicles model.
   */
  angular
    .module('exampleApp')
    .factory('vehicles', vehicles);

  vehicles.$inject = ['utility'];

  function vehicles (utility) {
    var
      list,
      vehicles;

    list = [
      {
        name : 'McLaren F1',
        type : 'car',
        colour : 'yellow'
      },
      {
        name : 'Royal Enfield',
        type : 'motorcycle',
        colour : 'red'
      },
      {
        name : 'Tata Nano',
        type : 'car',
        colour : 'blue'
      }
    ];

    vehicles = {
      add: add,
      getList: getList
    };

    return vehicles;

    /*****/

    /**
     * @ngdoc method
     * @name add
     * @methodOf exampleApp.service:vehicles
     * @description
     *   Adds the passed vehicle to the list of vehicles.
     *
     * @param {object} vehicle The vehicle to be added.
     */
    function add (vehicle) {
      // Only add a vehicle if it has a Name.
      // Type and Colour are optional.
      if (vehicle.name) {

        // Ensure that the vehicle name is capitalized.
        vehicle.name = utility.capitalize(vehicle.name);

        // Add to the list of vehicles.
        list.push(vehicle);
      }
    }

    /**
     * @ngdoc method
     * @name getList
     * @methodOf exampleApp.service:vehicles
     * @returns {array} The list of vehicles.
     */
    function getList() {
      return list;
    }
  }
})();
