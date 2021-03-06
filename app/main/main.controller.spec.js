describe('Controller: MainController', function() {
  var ctrl;

  // Instantiate a new version of the module before each test.
  beforeEach(module('exampleApp'));

  // Before each unit test, instantiate a new instance of the controller.
  // This will run before each it() below.
  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching.
    var $controller = _$controller_;
    ctrl = $controller('MainController');
  }));

  it('should create "things" model with 3 items', function() {
    expect(ctrl.things.length).toBe(3);
  });

  describe('scope', function() {

    it("should be an object", function () {
      expect(typeof ctrl).toEqual('object');
    });

    it('should have Vehicles service available on load', function() {
      expect(typeof ctrl.vehicles).toEqual('object');
    });

    it('should have callToActionClick handler available on load', function() {
      expect(typeof ctrl.callToActionClick).toEqual('function');
    });
  });

  describe('methods', function () {
    it('callToActionClick should randomise car choice', function () {
      var 
        i,
        vehicleList,
        vehicleListLength,
        validCarName;
        
      expect(ctrl.choice).toBeUndefined();

      ctrl.callToActionClick();

      expect(ctrl.choice).toBeDefined();

      vehicleList = ctrl.vehicles.getList();
      validCarName = false;

      // Check that the choice is a valid car name.
      vehicleListLength = vehicleList.length;
      for (i = 0; i < vehicleListLength; i++) {
        if (vehicleList[i].name === ctrl.choice) {
          validCarName = true;
          break;
        }
      }

      expect(validCarName).toBeTruthy();
    })
  });
});
