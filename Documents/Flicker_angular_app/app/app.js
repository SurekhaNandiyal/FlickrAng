'use strict';

// Declare app level module which depends on views, and components
var myFlickrApp = angular.module('myFlickrApp', ['ngRoute','ngResource','flickrControllers']);

myFlickrApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/publicPhotos',{
          templateUrl:'publicPhotos.html',
          controller:'flickrPublicPhotosController'
        }).otherwise({
          redirectTo:'/publicPhotos'
        });
}]);