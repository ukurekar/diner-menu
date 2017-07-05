'use strict';

/**
 * @ngdoc function
 * @name joveoReposApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the joveoReposApp
 */
angular.module('joveoReposApp')
  .controller('OrderCtrl', function ($scope, $location, UserData) {
    $scope.UserData = UserData;

    $scope.proceed = function(){
      $location.path('/final');
    };
  });
