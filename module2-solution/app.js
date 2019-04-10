(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController )
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

//To buy List
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;
  var toBuyItems = [];
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  toBuyItems =   toBuy.items;

  if(toBuyItems.lenth == 0){
    console.log("length ",toBuyItems.lenth);
  }
toBuy.updateItem = function(itemIndex){
  try{
      ShoppingListCheckOffService.updateItem(itemIndex);
  }catch(error){
      toBuy.errorMessage = error.message;
  }

};

}

//Already bought List
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought = this;
  var boughtItems = [];
  var initMes = 1;
  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

//Service for data share
function ShoppingListCheckOffService(){
  var service = this;

  var items =[
    {
    name:"Biscuits",
    quantity:10
  },
  {
  name:"Milk",
  quantity:2
  },
  {
  name:"Cake",
  quantity:8
  },
  {
  name:"Chips",
  quantity:5
  },
  {
  name:"Cookies",
  quantity:6
  },
  {
  name:"Soda",
  quantity:3
  }
];
var toBuyItems = items;
var boughtItems = [];

service.getToBuyItems = function () {
    return toBuyItems;
  };
  service.getBoughtItems = function () {
        return boughtItems;
    };

service.updateItem  = function (itemIndex) {

      boughtItems.push(items[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
      console.log("item",toBuyItems.length);
      if((toBuyItems.length) != 0){
    }
    else {
      throw new Error("Error");
    }

  };



}
})();
