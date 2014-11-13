'use strict';

var apitPocServices = angular.module('apitPocServices', ['ngResource']);

apitPocServices.factory('Telefono', ['$resource',
  function($resource){
    return $resource('/api/phone/', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);
