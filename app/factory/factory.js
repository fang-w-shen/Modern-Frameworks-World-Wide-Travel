(function() {
  'use strict';
  var bookFactory = function($http) {
    return {
      getBooks: function() {
        return $http.get('./data/areas.json');
      }
    };
  };
  angular.module('myApp').factory('bookFactory', bookFactory);
})();