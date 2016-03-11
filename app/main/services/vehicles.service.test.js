describe("Vehicles Service", function () {
  'use strict';

  var vehicles;

  // Instantiate a new version of the module before each test.
  beforeEach(angular.mock.module('exampleApp'));

  beforeEach(function () {
    inject(function(_vehicles_) {
      vehicles = _vehicles_;
    });
  });

  describe("test provision", function () {
    it('should have a working vehicles service', function () {
      expect(typeof vehicles).toEqual('object');
    });
  });

  describe("test list model", function () {
    it('should provide a list with 3 items in', function () {
      expect(vehicles.list.length).toEqual(3);
    });
  });

  describe("test method:", function () {
    describe('add', function () {
      it('should add a vehicle with a name to the list', function () {
        var addition = {
          name : "name"
        };

        expect(vehicles.list.length).toEqual(3);
        vehicles.add(addition);
        expect(vehicles.list.length).toEqual(4);
      });

      it('should not add a vehicle without a name to the list', function () {
        var addition = {
          type : "TYPE",
          colour : "COLOUR"
        };

        expect(vehicles.list.length).toEqual(3);
        vehicles.add(addition);
        expect(vehicles.list.length).toEqual(3);
      });

      it('should ensure that vehicle names start with a capital letter', function () {
        var
          addition = {
            name : "name name"
          },
          expected = 'Name name',
          addedVehicle;

        vehicles.add(addition);

        // Get the vehicle that has just been added.
        addedVehicle = vehicles.list[vehicles.list.length - 1];

        expect(addedVehicle.name).toEqual(expected);
      });
    });
  });
});
