'use strict';

angular.module('joveoReposApp')
  .service('UserData', function() {
   var UserData = this;
   UserData.Order = [];
   UserData.User = {};
   UserData.totalAmount = 0;
   UserData.totalCount = 0;

    UserData.addOrder = function(item) {

      if(!item.orderCount){
          item.orderCount = 1;
          UserData.Order.push(item);
      } else {
        item.orderCount += 1;
      }

      UserData.totalAmount += (item.Price);
      UserData.totalCount++;
      item.stock -= 1;
    };

    UserData.deleteOrder = function(item) {
      if(item.orderCount === 1){
        var toDelete = window.confirm('Delete item from order?');
        if(toDelete) {
          item.orderCount = undefined;
          UserData.Order.splice(UserData.Order.indexOf(item), 1);
        } else {
          return;
        }
      } else if(item.orderCount !== undefined) {
        item.orderCount -= 1;
      } else {
        return;
      }

      UserData.totalAmount -= (item.Price);
      UserData.totalCount--;
      item.stock += 1;
      return;
    };

    UserData.reset = function(){
        UserData.Order = [];
        UserData.User = {};
        UserData.totalAmount = 0;
        UserData.totalCount = 0;
    };
});
