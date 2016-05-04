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
      },

      profile: {
        url: '/users/{id}',
        templateUrl: 'app/user/profile.template.html',
        controller: 'ProfileController',
        controllerAs: '$profileCtrl',
        resolve: {
          user: ['userService', '$stateParams', function(userService, $stateParams) {
            return userService.getUserById($stateParams.id);
          }],
          userRelation:
          ['userService', '$stateParams', 'accessService',
            function(userService, $stateParams, accessService) {
              return userService.getFriendRequestOnProfile($stateParams.id, accessService.currentUser.id);
          }]
        },
      data: {
        loggedIn: false
      }
    },

      search: {
        url: '/user',
        templateUrl: 'app/nav_bar/nav.template.html',
        controller: 'NavController',
        controllerAs: '$nav'
      }


    })

})();
