'use strict';

(() => {
  angular
    .module('fastbook.friend')
    .constant('friendRoutes', {
      friendRequests: {
        url: '/user/{id}/requests',
        templateUrl: 'app/friend/review-friend-requests.template.html',
        controller: 'ReviewFriendRequestsController',
        controllerAs: '$requestCtrl',
        resolve: {
          friendRequestsToResolve: ['friendService', 'accessService', function(friendService, accessService) {
            console.log(accessService.currentUser.id);
            return friendService.getFriendRequests(accessService.currentUser.id);
          }],
        },
        data: {
          anonymousAllowed: false
        }
      }


    })

})();
