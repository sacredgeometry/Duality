/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./app.config.ts" />
/// <reference path="./app.route.ts" />
/// <reference path="./app.run.ts" />

/// <reference path="./main/main.controller.ts" />

module app {
	'use strict';
	
	angular.module('app', [
		'ngAnimate', 
		'ngCookies', 
		'ngTouch', 
		'ngSanitize', 
		'ngResource', 
		'ui.router', 
		'ngMaterial'
	])
	.config(Config)
    .config(RouterConfig)
    .run(RunBlock)
	
	// add modules here
	.controller('MainController', MainController)
}