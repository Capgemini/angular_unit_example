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
    var vehicles = {
      list : [
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
      ]
    };

    vehicles.add = function (vehicle) {

      // Only add a vehicle if it has a Name.
      // Type and Colour are optional.
      if (vehicle.name) {

        // Ensure that the vehicle name is capitalized.
        vehicle.name = utility.capitalize(vehicle.name);

        // Add to the list of vehicles.
        vehicles.list.push(vehicle);
      }
    };

    return vehicles;
  }
})();