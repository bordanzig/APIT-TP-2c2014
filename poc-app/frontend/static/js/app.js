'use strict';

var phonecatApp = angular.module('apitPocApp', [
  'ngRoute',
  'apitPocControllers',
  'apitPocFilters',
  'apitPocServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/telefonos', {
        templateUrl: 'partials/telefono-list.html',
        controller: 'TelefonoListCtrl'
      }).
      otherwise({
        redirectTo: '/telefonos'
      });
  }]);
