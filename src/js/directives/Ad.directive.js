angular.module('AdBidder')
.directive('adSlot', [
    '$timeout', function($timeout) {
      return {
        restrict: 'A',
        scope: {
            data:'='
        },
        link: function(scope, element, attr) {
          return $timeout(function() {
            var adsbygoogle, html, rand;
            rand = Math.random();
            html = scope.data.advt_url;
            $(element).append(html);
            return (adsbygoogle = window.adsbygoogle || []).push({});
          });
        }
      };
    }
  ]);