'use strict';

var apitPocControllers = angular.module('apitPocControllers', []);

apitPocControllers.controller('TelefonoListCtrl', ['$scope', 'Telefono',
  function($scope, Telefono) {
    $scope.telefonos = Telefono.query();
    $scope.orderProp = 'age';
    $scope.filterCriteria = '';
    $scope.filterResult = function() {
        $scope.telefonos = Telefono.query({'q': $scope.filterCriteria});
	console.log("llamando a filterResult() con filterCriteria: %s", $scope.filterCriteria);
    };
  }]);

