'use strict';

/**
 * @ngdoc function
 * @name joveoReposApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the joveoReposApp
 */
angular.module('joveoReposApp')
  .controller('MainCtrl', function ($scope, $location,UserData) {
    $scope.categories = {};
    $scope.UserData = UserData;

    $scope.pushItems = function(category, items) {
      if (category && items) {
        $scope.categories[category] = items;
      } else {
        $scope.categories[category] = [];
      }
    };

    $scope.checkout = function() {
      if(UserData.Order.length > 0){
        $location.path('/order');
      }
      else {
        window.alert('Order empty');
      }
    };

    $scope.pushItems('South Indian',
      [{
        Name: 'Idli',
        Price: 40,
        stock: 100
      },
      {
        Name: 'Vada',
        Price: 50,
        stock: 100
      },
      {
        Name: 'Plain Dosa',
        Price: 50,
        stock: 100
      },
      {
        Name: 'Masala Dosa',
        Price: 80,
        stock: 100
      },
      {
        Name: 'paneer Dosa',
        Price: 90,
        stock: 100
      },
      {
        Name: 'Onion Uttapam',
        Price: 90,
        stock: 100
      }]
    );

    $scope.pushItems('North Indian',
      [{
        Name: 'Samosa',
        Price: 40,
        stock: 100
      },
      {
        Name: 'Puri Aloo Dum',
        Price: 50,
        stock: 100
      },
      {
        Name: 'Aloo Paratha',
        Price: 50,
        stock: 100
      },
      {
        Name: 'Masala Partha',
        Price: 80,
        stock: 100
      },
      {
        Name: 'Chana Kulcha',
        Price: 90,
        stock: 100
      },
      {
        Name: 'Chota Bhatura',
        Price: 90,
        stock: 100
      }]
    );


  });
