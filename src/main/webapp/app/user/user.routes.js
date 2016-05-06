'use strict';

(() => {
  angular
    .module('fastbook.user')
    .constant('userRoutes', {
      profile: {
        url: '/users/{id}',
        templateUrl: 'app/user/profile.template.html',
        controller: 'ProfileController',
        controllerAs: '$profileCtrl',
        resolve: {
          user: ['userService', '$stateParams', function(userService, $stateParams){
            return userService.getUserById($stateParams.id);
          }],
          userFriendList: ['userService', '$stateParams', function(userService, $stateParams){
            return userService.getUserFriends($stateParams.id);
          }],
          userPosts: ['userService', '$stateParams', function (userService, $stateParams) {
            return userService.getUsersPosts($stateParams.id);
          }],
          userGroupList: ['userService', '$stateParams', function(userService, $stateParams){
            return userService.getUserGroups($stateParams.id);
          }]
        },
      data: {
        loggedIn: true
      },
    },

      search: {
        url: '/user',
        templateUrl: 'app/nav_bar/nav.template.html',
        controller: 'NavController',
        controllerAs: '$nav',
        data: {
          loggedIn: true
        }
      }
    })
})();
