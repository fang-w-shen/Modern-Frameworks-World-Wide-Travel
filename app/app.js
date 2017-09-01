'use strict';

angular.module('myApp', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
        .when('/_books', {
            templateUrl: 'partials/partial.html',
            controller: 'BookController'
        })
        .otherwise('/');
});