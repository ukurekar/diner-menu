'use strict';

/**
 * @ngdoc overview
 * @name joveoReposApp
 * @description
 * # joveoReposApp
 *
 * Main module of the application.
 */
angular
  .module('joveoReposApp', [
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
      .when('/order', {
        templateUrl: 'views/order.html',
        controller: 'OrderCtrl',
        controllerAs: 'order'
      })
      .when('/final', {
        templateUrl: 'views/final.html',
        controller: 'FinalCtrl',
        controllerAs: 'final'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
