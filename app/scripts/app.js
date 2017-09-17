'use strict';

/**
 * @ngdoc overview
 * @name angularUiApp
 * @description
 * # angularUiApp
 *
 * Main module of the application.
 */
angular
  .module('angularUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
