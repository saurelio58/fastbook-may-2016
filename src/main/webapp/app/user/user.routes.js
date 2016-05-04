'use strict';

(() => {
  angular
    .module('fastbook.user')
    .constant('userRoutes', {

      friendRequests: {
        url: '/user/{id}/requests',
        templateUrl: 'app/user/review-friend-requests.template.html',
        controller: 'ReviewFriendRequestsController',
        controllerAs: '$requestCtrl',
        resolve: {
          friendRequests: ['userService', '$stateParams', function(userService, $stateParams) {
            return userService.getFriendRequests($stateParams.id);
          }],
        },
        data: {
          anonymousAllowed: false
        }
      }



    })

})();
