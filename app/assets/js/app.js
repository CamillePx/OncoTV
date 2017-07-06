'use strict';

var app = angular.module("myApp", ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html"
    })
    .when("/movie/:id", {
        templateUrl : "views/movie.html"
    })
    .otherwise({redirectTo: '/'});;
});