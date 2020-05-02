angular.module('AdBidder', ['ngRoute'])
.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/advt', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                resolve: {
                  advertisementList : function(Advertisements){
                    return Advertisements.getSelectedAdvertisementList();
                  }
                }
            });
    }
]);
