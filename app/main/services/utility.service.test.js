describe('Utility Service', function () {
  'use strict';

  // Instantiate a new version of the module before each test.
  beforeEach(angular.mock.module('exampleApp'));

  describe("test Utility Service provision", function () {
    it('should have a working utility service', inject(['utility', function (utility) {
      expect(typeof utility).toEqual('object');
    }]));
  });

  describe("test Utility Service's method:", function () {
    describe('increasingOrderSort', function () {
      var utility;

      beforeEach(
        inject(function(_utility_){
          utility = _utility_;
        })
      );

      it('should sort an array into increasing order', function () {
        expect([9, 8, 7].sort(utility.increasingOrderSort)).toEqual([7, 8, 9]);
        expect([9, 7, 8].sort(utility.increasingOrderSort)).toEqual([7, 8, 9]);
        expect([7, 8, 9].sort(utility.increasingOrderSort)).toEqual([7, 8, 9]);
      });
    });

    describe('decreasingOrderSort', function () {
      var utility;

      beforeEach(
        inject(function(_utility_){
          utility = _utility_;
        })
      );

      it('should sort an array into decreasing order', function () {
        expect([9, 8, 7].sort(utility.decreasingOrderSort)).toEqual([9, 8, 7]);
        expect([9, 7, 8].sort(utility.decreasingOrderSort)).toEqual([9, 8, 7]);
        expect([7, 8, 9].sort(utility.decreasingOrderSort)).toEqual([9, 8, 7]);
      });
    });

    describe('capitalize', function () {
      var utility;

      beforeEach(
        inject(function(_utility_){
          utility = _utility_;
        })
      );

      it('should return a capitalised string', function () {
        expect(utility.capitalize('word')).toEqual('Word');
        expect(utility.capitalize('x')).toEqual('X');
      });

      it('should not break a string that cannot be capitalised', function () {
        expect(utility.capitalize('1234')).toEqual('1234');
        expect(utility.capitalize('0')).toEqual('0');
      });
    });
  });
});
