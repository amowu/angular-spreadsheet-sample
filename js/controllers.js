var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function ($scope, Phone) {
    Phone.query(function(data) {
      $scope.phones = data;
    });
  }]);
