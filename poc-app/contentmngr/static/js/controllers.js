'use strict';

var apitPocControllers = angular.module('apitPocControllers', []);

apitPocControllers.controller('TelefonoSaveCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.jsonData = '{\n\
        "name": "Phone name", \n\
        "snippet": "some snippet",\n\
        "age": 0, \n\
        "id": "phone-id", \n\
        "imageUrl": "someImage.png"\n\
    }';
    $scope.counter = 0;
    $scope.message = '';
    $scope.createPhone = function() {
    	$http.post('/api/phone', $scope.jsonData, {}).success(function(data, status, headers) {
            $scope.counter++;
            $scope.message = 'Teléfono #' + $scope.counter + ' creado';
        });
    };
  }]);

