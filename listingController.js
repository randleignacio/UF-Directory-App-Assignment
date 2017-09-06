angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.obj = {};
    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */



    $scope.addListing = function() {
      $scope.listings.push($scope.obj);
       $scope.obj={};

    };
    $scope.deleteListing = function(code) {
      for(var i=0; i< $scope.listings.length; i++){
        if($scope.listings[i].code === code){
          $scope.listings.splice(i,1);
          return;
        }
      }
    };
    $scope.showDetails = function(x) {
      $scope.detailedInfo = x;
    };

  }
]);
