'use strict';

/**
 * @ngdoc function
 * @name joveoReposApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the joveoReposApp
 */
angular.module('joveoReposApp')
  .controller('FinalCtrl', function ($scope, $location, UserData) {
    $scope.UserData = UserData;

    $scope.back = function(){
        UserData.reset();
        $location.path('/');
    };
  });
