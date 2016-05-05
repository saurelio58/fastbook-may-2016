'use strict';

(() => {
  angular
    .module('fastbook.friend')
    .constant('friendRoutes', {
      friendRequests: {
        url: '/friend/requests',
        templateUrl: 'app/friend/review-friend-requests.template.html',
        controller: 'ReviewFriendRequestsController',
        controllerAs: '$requestCtrl',
        resolve: {
          friendRequestsToResolve: ['friendService', '$stateParams', function(friendService, $stateParams) {
            // return friendService.getFriendRequests($stateParams.id);
            return friendService.getFriendRequests(1);                            // testing
          }],
        },
        data: {
          anonymousAllowed: false
        }
      }


    })

})();
