describe('Controller: MainController', function() {

  // Instantiate a new version of the module before each test.
  beforeEach(module('exampleApp'));

  it('should create "things" model with 3 items', inject(function($controller) {
    var ctrl = $controller('MainController');

    expect(ctrl.things.length).toBe(3);
  }));

  describe('scope', function() {
    var
      $controller,
      ctrl;

    beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching.
      $controller = _$controller_;
    }));

    // Before each unit test, instantiate a new instance of the controller.
    // This will run before each it() below.
    beforeEach(function() {
      ctrl = $controller('MainController');
    });

    it("should be an object", function () {
      expect(typeof ctrl).toEqual('object');
    });

    it('should have Vehicles model available on load', function() {
      expect(typeof ctrl.vehicles).toEqual('object');
    });

    it('should have callToActionClick handler available on load', function() {
      expect(typeof ctrl.callToActionClick).toEqual('function');
    });
  });
});
