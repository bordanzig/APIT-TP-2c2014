'use strict';

var phonecatApp = angular.module('apitPocApp', [
  'ngRoute',
  'apitPocControllers'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/telefonos', {
        templateUrl: 'partials/telefono-save.html',
        controller: 'TelefonoSaveCtrl'
      }).
      otherwise({
        redirectTo: '/telefonos'
      });
  }]);
