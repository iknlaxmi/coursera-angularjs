(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
   $scope.name ="";
    var comma = ',';
    $scope.messgae = "";
  //Split string function
    $scope.splitString = function(){
   var stringToSplit =   $scope.name;
    var arrayOfStrings = stringToSplit.split(',');
    var spaceString = stringToSplit.split(',,');
      var spaceStringcoma = stringToSplit.split(', ,');
      console.log("coma",spaceString.length);
    console.log("space coma",spaceStringcoma.length);
      console.log("actual",arrayOfStrings.length);
      console.log(arrayOfStrings);
      var length = (arrayOfStrings.length-1)-(spaceString.length-1)-(spaceStringcoma.length-1);

      //Checking no.of items
      if(length == 0){
          if(arrayOfStrings == ''){
            console.log("empty");
              $scope.messgae = "Please enter data first";
          }
          else{
              $scope.messgae = "Enjoy";
          }

      }
      else if (length < 3) {
        $scope.messgae = "Enjoy";
      }
      else{
            $scope.messgae = "Too much!";
      }

    }

  }
})();
