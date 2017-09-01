'use strict';
var BookController = function($scope, bookFactory) {
  $scope.books = [];
  let loadData = function() {
    bookFactory.getBooks().then((response)=>{
        $scope.books = response.data.guides;
        console.log("scope.books", $scope.books);
        	
      },
      function rejected(response) {
        response('ERROR: ', response.code, response.statusText);
      }
    );
  };
  loadData();
};
angular.module('myApp').controller('bookCtrl', BookController);
