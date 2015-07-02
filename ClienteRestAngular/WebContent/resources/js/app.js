'use strict';
var services = angular.module('app.services', [ 'ngResource' ]);
var controllers = angular.module('app.controllers', []);

var appEjemplo = angular.module('app', [ 'ngRoute', 'app.services',
		'app.controllers','toggle-switch']);

appEjemplo.config([ '$routeProvider', '$httpProvider',
		function($routeProvider, $httpProvider) {

		} ]);
