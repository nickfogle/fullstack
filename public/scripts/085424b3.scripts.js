"use strict";angular.module("fullstackApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"partials/main",controller:"MainCtrl"}).when("/message",{templateUrl:"partials/message",controller:"MessageCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("fullstackApp").controller("MainCtrl",["$scope","$http",function(a,b){b.get("/api/awesomeThings").success(function(b){a.awesomeThings=b})}]),angular.module("fullstackApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.menu=[{title:"Home",link:"/"}],a.isActive=function(a){return a===b.path()}}]),angular.module("fullstackApp").controller("MessageCtrl",["$scope","$http",function(a,b){b.get("/api/message").success(function(b){a.message=b})}]);