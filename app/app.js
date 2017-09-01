'use strict';

angular.module('myApp', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
        .when('/bookCtrl', {
            templateUrl: 'partials/guide-list.html',
            controller: 'bookCtrl'
        })
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'bookCtrl'
        })
        .otherwise('/home');
});