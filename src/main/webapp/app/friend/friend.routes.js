// 'use strict';
//
// (() => {
//   angular
//     .module('fastbook.friend')
//     .constant('friendRoutes', {
//       friendRequests: {
//         url: '/friend/requests',
//         templateUrl: 'app/user/review-friend-requests.template.html',
//         controller: 'ReviewFriendRequestsController',
//         controllerAs: '$requestCtrl',
//         resolve: {
//           friendRequests: ['userService', '$stateParams', function(userService, $stateParams) {
//             // return userService.getFriendRequests($stateParams.id);
//             return userService.getFriendRequests(1);                            // testing
//           }],
//         },
//         data: {
//           anonymousAllowed: false
//         }
//       }
//
//
//     })
//
// })();

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
          friendRequests: ['friendService', '$stateParams', function(friendService, $stateParams) {
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
