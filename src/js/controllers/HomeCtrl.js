angular.module('AdBidder')
.controller('HomeCtrl',function($scope, advertisementList) {
       $scope.advertisementList = advertisementList;
       $scope.recorded = [];
       $scope.getAdvtEvent = function(advt){
        $scope.recorded.push(advt);
       }
});
