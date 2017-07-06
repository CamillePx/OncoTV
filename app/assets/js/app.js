'use strict';

var app = angular.module("myApp", ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html"
    })
    .otherwise({redirectTo: '/'});;
});