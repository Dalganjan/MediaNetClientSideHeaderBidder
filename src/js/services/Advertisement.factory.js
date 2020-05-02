angular.module('AdBidder')
.factory('Advsertisements', function($http){
    return {
        getSelectedAdvertisementList: getSelectedAdvertisementList
    }

    // Get Advertisement List
    function getAdvertismentList(){
      return $http.get('/getAdvertisementList').then(function(success){
                  return success.data;
                }).catch(function(err){
                    console.log("err", err);
                });
            };

    function getSelectedAdvertisementList(){
        return getAdvertismentList().then(function(data){
            return _.take(_.sortBy(data, [function(o) { return o.cpi;}]), 2);
        });
    }        
});